# Ref： Journal of Cheminformatics volume 14, Article number: 87 (2022）

# RDKit stuff
from rdkit import Chem
from rdkit import rdBase
from rdkit.Chem import Draw
from rdkit.Chem.Draw import rdMolDraw2D
from rdkit.Chem import rdDepictor
rdDepictor.SetPreferCoordGen(True)
from rdkit.Chem import rdMolDescriptors
from rdkit.Chem import rdFMCS
from rdkit import DataStructs
import io
from PIL import Image

def show_png(data):
    bio = io.BytesIO(data)
    img = Image.open(bio)
    return img
smi = "CCCCCC"
drawer = rdMolDraw2D.MolDraw2DCairo(300,300)
drawer.drawOptions().clearBackground = False
drawer.drawOptions().addStereoAnnotation = False
drawer.DrawMolecule(Chem.MolFromSmiles(smi))
drawer.FinishDrawing()
mol = drawer.GetDrawingText()
show_png(mol)