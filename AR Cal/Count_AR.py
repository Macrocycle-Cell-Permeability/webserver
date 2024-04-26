from rdkit import Chem
from rdkit.Chem import Draw, PandasTools
from rdkit.Chem.Draw import IPythonConsole
from rdkit.Chem import rdmolops
from rdkit.Chem import AllChem
import pandas as pd
sample_data = pd.read_csv('/Users/qiushifeng/Desktop/3.22_added_nonpep.csv',encoding='utf_8_sig')

def get_macrocycle_ring_mol(smi, strip=False):
    mol = Chem.MolFromSmiles(smi)
    Chem.RemoveStereochemistry(mol)
    Chem.Kekulize(mol, clearAromaticFlags=True)
    ri = mol.GetRingInfo()
    atoms_ring = max(ri.AtomRings(), key=len)
    if strip:
        macrocycle_smiles = AllChem.MolFragmentToSmiles(mol, atomsToUse=list(atoms_ring))
    else:
        query = Chem.MolFromSmarts('[!#1;!#7]~[R]*')
        matches = mol.GetSubstructMatches(query)
        atoms_to_use = list(atoms_ring) + [m[0] for m in matches]
        macrocycle_smiles = AllChem.MolFragmentToSmiles(mol, atomsToUse=atoms_to_use)
    macrocycle_mol = Chem.MolFromSmiles(macrocycle_smiles)
    mol_frags = rdmolops.GetMolFrags(macrocycle_mol, asMols=True)
    largest_mol = max(mol_frags, default=macrocycle_mol, key=lambda m: m.GetNumAtoms())
    return largest_mol


def get_macrocycle_ring_size(smi):
    macrocycle_mol = get_macrocycle_ring_mol(smi, strip = True)
    ring_size = macrocycle_mol.GetNumBonds()
    return ring_size

def get_free_amide_count(smi):
    macrocycle_mol = get_macrocycle_ring_mol(smi, strip=False)
    free_amide_smart = Chem.MolFromSmarts('[Nh][CX3]=[O]') 
    free_amide_count = len(macrocycle_mol.GetSubstructMatches(free_amide_smart))
    return free_amide_count

def get_sub_amide_count(smi):
    macrocycle_mol = get_macrocycle_ring_mol(smi, strip=False)
    free_amide_count = get_free_amide_count(smi)
    all_amide_smart = Chem.MolFromSmarts('[#6](=[#8])-[#7]-[#6]') 
    sub_amide_count = (len(macrocycle_mol.GetSubstructMatches(all_amide_smart))- free_amide_count)/2
    return sub_amide_count

def get_macrocycle_core_smiles(smi):
    macrocycle_mol = get_macrocycle_ring_mol(smi, strip = True)
    macrocycle_core_smiles = Chem.MolToSmiles(macrocycle_mol)
    return macrocycle_core_smiles

def get_macrocycle_peripheral_smiles(smi):
    macrocycle_mol = get_macrocycle_ring_mol(smi, strip = False)
    macrocycle_peripheral_smiles = Chem.MolToSmiles(macrocycle_mol)
    return macrocycle_peripheral_smiles


smiles = sample_data["SMILES"].to_list() 

ring_size_list = []
free_amide_count_list = []
sub_amide_count_list = []
macrocycle_core_smiles_list = []
macrocycle_peripheral_smiles_list = []

for smile in smiles:
    ring_size = get_macrocycle_ring_size(smile)
    free_amide_count = get_free_amide_count(smile)
    sub_amide_count = int(get_sub_amide_count(smile))
    macrocycle_core_smiles = get_macrocycle_core_smiles(smile)
    macrocycle_peripheral_smiles = get_macrocycle_peripheral_smiles(smile)
    
    ring_size_list.append(ring_size)
    free_amide_count_list.append(free_amide_count)
    sub_amide_count_list.append(sub_amide_count)
    macrocycle_core_smiles_list.append(macrocycle_core_smiles)
    macrocycle_peripheral_smiles_list.append(macrocycle_peripheral_smiles)
    
sample_data['Macrocycle_Ring_Size'] = ring_size_list
sample_data['Macrocycle_Free_Amide_Count'] = free_amide_count_list
sample_data['Macrocycle_Substituted_Amide_Count'] = sub_amide_count_list
sample_data['Macrocycle_Overall_Amide_Count'] = sample_data['Macrocycle_Free_Amide_Count'] + sample_data['Macrocycle_Substituted_Amide_Count']
sample_data["Macrocycle_Core_smiles"] = macrocycle_core_smiles_list
sample_data["Macrocycle_Peripheral_smiles"] = macrocycle_peripheral_smiles_list
sample_data["Macrocycle_Free_Amide_Ratio"] = sample_data['Macrocycle_Free_Amide_Count']*3/sample_data['Macrocycle_Ring_Size']
sample_data['Macrocycle_Overall_Amide_Ratio'] = sample_data['Macrocycle_Overall_Amide_Count']*3/sample_data['Macrocycle_Ring_Size']

sample_data.to_csv('/Users/qiushifeng/Desktop/Result.csv')