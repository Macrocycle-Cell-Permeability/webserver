from macrodb.models import macrocycle
import pandas as pd
df = pd.read_csv('/Users/qiushifeng/Desktop/webserver/download/data0404.csv')

for row in df.itertuples():
    entry = macrocycle(
        name=row.ID,
        Original_ID=row.Original_ID,
        Common_name = row.Common_name,
        InchiKey =row.InchiKey,
        smiles=row.SMILES,
        Standardise_SMILES=row.Standardise_SMILES,
        Value=row.Value,
        #No_symbol_Value = row.No_symbol_Value,
        Unit=row.Unit,
        Endpoint=row.Endpoint,
        Standardized_Value=row.Standardized_Value,
        Standardized_Endpoint=row.Standardized_Endpoint,
        Assay=row.Assay,
        Description=row.Description,
        Link = row.Link,
        Source=row.Source,
        Citation = row.Citation,
        Publish_Year=row.Publish_Year,
        Macrocycle_Ring_Size=row.Macrocycle_Ring_Size,
        Macrocycle_Free_Amide_Count=row.Macrocycle_Free_Amide_Count,
        Macrocycle_Substituted_Amide_Count=row.Macrocycle_Substituted_Amide_Count,
        Macrocycle_Overall_Amide_Count=row.Macrocycle_Overall_Amide_Count,
        Macrocycle_Core_smiles=row.Macrocycle_Core_smiles,
        Macrocycle_Peripheral_smiles=row.Macrocycle_Peripheral_smiles,
        Free_Amide_Ratio=row.Free_Amide_Ratio,
       # Peptidic_Type=row.Peptidic_Type,
        Amide_Ratio=row.Amide_Ratio,
        Num_Rings=row.Num_Rings,
        Num_Aromatic_Rings=row.Num_Aromatic_Rings,
        cLogP=row.cLogP,
        Molecular_Weight=row.Molecular_Weight,
        Num_H_Acceptors=row.Num_H_Acceptors,
        Num_H_Donors=row.Num_H_Donors,
        Num_Heavy_Atoms=row.Num_Heavy_Atoms,
        Num_Carbon_Atoms=row.Num_Carbon_Atoms,
        Fraction_SP3_Carbons=row.Fraction_SP3_Carbons,
        TPSA=row.TPSA,
        Num_Rotatable_Bonds=row.Num_Rotatable_Bonds,
        Num_Charged_Atoms=row.Num_Charged_Atoms,
        Net_Charge=row.Net_Charge,
        Kier_index=row.Kier_index)
    
    entry.save()



