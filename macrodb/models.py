from django.db import models

# Create your models here.

class macrocycle(models.Model):
  name = models.CharField(max_length=255) ##Keep it first
  smiles = models.CharField(max_length=255) ##Keep it first
  Original_ID	= models.CharField(max_length=255)
  Common_name = models.CharField(max_length=255)
  #CAS_no = models.CharField(max_length=255)
  #Commom_name = models.CharField(max_length=255)
  InchiKey = models.CharField(max_length=255)
  Standardise_SMILES	= models.CharField(max_length=255)
  Value	= models.CharField(max_length=255)
  #No_symbol_Value	= models.DecimalField(max_digits=10, decimal_places=2)
  Unit	= models.CharField(max_length=255)
  Endpoint	= models.CharField(max_length=255)
  Standardized_Value	= models.DecimalField(max_digits=10, decimal_places=2) #2 decimal
  Standardized_Endpoint	= models.CharField(max_length=255)
  Assay	= models.CharField(max_length=255)
  Link = models.CharField(max_length=255)
  Description	= models.CharField(max_length=255)
  Source	= models.CharField(max_length=255)
  Citation = models.CharField(max_length=255)
  Publish_Year	= models.CharField(max_length=255)
  Macrocycle_Ring_Size	= models.IntegerField()
  Macrocycle_Free_Amide_Count	=  models.IntegerField()
  Macrocycle_Substituted_Amide_Count	=  models.IntegerField()
  Macrocycle_Overall_Amide_Count	=  models.IntegerField()
  Macrocycle_Ring_smiles	= models.CharField(max_length=255)
  Macrocycle_Peripheral_smiles	= models.CharField(max_length=255)
  Free_Amide_Ratio	= models.DecimalField(max_digits=10, decimal_places=2)
  Peptidic_Type = models.CharField(max_length=255)
  Amide_Ratio	= models.DecimalField(max_digits=10, decimal_places=2)
  Num_Rings	= models.IntegerField()
  Num_Aromatic_Rings	= models.IntegerField()
  cLogP	= models.DecimalField(max_digits=10, decimal_places=2)# 2 decimal
  Molecular_Weight	= models.DecimalField(max_digits=10, decimal_places=2) #2 decimal 
  Num_H_Acceptors	= models.IntegerField()
  Num_H_Donors	= models.IntegerField()
  Num_Heavy_Atoms	= models.IntegerField()
  Num_Carbon_Atoms	= models.IntegerField()
  Fraction_SP3_Carbons	= models.DecimalField(max_digits=10, decimal_places=2)
  TPSA	= models.DecimalField(max_digits=10, decimal_places=2) # Yes! 2 Decimal
  Num_Rotatable_Bonds	= models.IntegerField()
  #Num_Charged_Atoms	= models.IntegerField()
  #Net_Charge	= models.IntegerField()
  Kier_index= models.DecimalField(max_digits=10, decimal_places=2)
  
  

