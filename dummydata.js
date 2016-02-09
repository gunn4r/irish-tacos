//Dummy User JSON

//56b6deb55480fee4107a22f9
{
  "name" : {
    "first" : "Gunnar",
    "last" : "Gabrielson"
  },
  "email" : "gunnar@localhost",
  "password" : "123",
  "phone" : "5555555555",
  "type" : "admin",
  "meta" : {
  }
}

//56b6debc5480fee4107a22fa
{
  "name" : {
    "first" : "Jenna",
    "middle" : "Rose"
    "last" : "Gabrielson"
  },
  "email" : "jenna@localhost",
  "password" : "123",
  "phone" : "5555555555",
  "type" : "admin",
  "meta" : {
  }
}

//Dummy Vendor JSON
{
  "name"            : "Costco",
  "phone"           : "5559238472",
  "addressStreet"   : "123 S 987 W",
  "addressCity"     : "Orem",
  "addressState"    : "UT",
  "addressZip"      : "84604",
  "meta"            : {
                      "createdBy"       : "56b6deb55480fee4107a22f9",
                      "updatedBy"       : "56b6debc5480fee4107a22fa"
                      }
}

{
  "name"            : "Walmart",
  "phone"           : "8019874561",
  "addressStreet"   : "2250 W Sandhill Drive",
  "addressCity"     : "Orem",
  "addressState"    : "UT",
  "addressZip"      : "84060",
  "meta"            : {
                      "createdBy"       : "56b6debc5480fee4107a22fa",
                      "updatedBy"       : "56b6deb55480fee4107a22f9"
                      }
}

//Dummy Brands

//56b8e0b26230e7dc067ade2e
{
  "name"  : "Kraft",
  "meta"  : {
            "createdBy" : "56b6debc5480fee4107a22fa",
            "updatedBy" : "56b6deb55480fee4107a22f9"
            }
}
{
  "name"  : "Best Value",
  "meta"  : {
            "createdBy" : "56b6debc5480fee4107a22fa",
            "updatedBy" : "56b6deb55480fee4107a22f9"
            }
}

{
  "name"  : "Nestle",
  "meta"  : {
            "createdBy" : "56b6debc5480fee4107a22fa",
            "updatedBy" : "56b6deb55480fee4107a22f9"
            }
}

{
  "name"  : "Old Paso",
  "meta"  : {
            "createdBy" : "56b6debc5480fee4107a22fa",
            "updatedBy" : "56b6deb55480fee4107a22f9"
            }
}

//INVENTORY DUMMY DATA

//56b8e5961e13aae4154fae36
{
  "name" : "Chedder Cheese",
  "brand" : "56b8e0b26230e7dc067ade2e", //Kraft
  "quantity" : 1,
  "units" : "Pound",
  "type" : "Consumable",
  "category" : "Dairy:Cheese",
  "parLevel" : 5,
  "stock" : 4,
  "meta" : {
            "createdBy" : "56b6debc5480fee4107a22fa",
            "updatedBy" : "56b6deb55480fee4107a22f9"
            }
}

{
  "name" : "Iceburg Lettuce",
  "brand" : "56b8e0c26230e7dc067ade30", //Nestle
  "quantity" : 1,
  "units" : "Unit",
  "type" : "Consumable",
  "category" : "Produce:Lettuce",
  "parLevel" : 10,
  "stock" : 6,
  "meta" : {
            "createdBy" : "56b6deb55480fee4107a22f9",
            "updatedBy" : "56b6debc5480fee4107a22fa"
            }
}

{
  "name" : "Paper Plates",
  "brand" : "56b8e0bc6230e7dc067ade2f", //Best Value
  "quantity" : 120,
  "units" : "Unit",
  "type" : "Non-Consumable",
  "category" : "Plates:Paper",
  "parLevel" : 12,
  "stock" : 7,
  "meta" : {
            "createdBy" : "56b6deb55480fee4107a22f9",
            "updatedBy" : "56b6debc5480fee4107a22fa"
            }
}


//RECEIPT DUMMY DATA
//vendor = costco
{
  "vendor" : "56b798b47ae66ca415aff123",
  "totalCost" : 184.82,
  "items" : [
    {
      "item" : "56b8e5c51e13aae4154fae37",
      "quantity" : 3,
      "itemCost" : 9.99
    },
    {
      "item" : "56b8e64f1e13aae4154fae38",
      "quantity" : 15,
      "itemCost" : 3.99
    },
    {
      "item" : "56b8e65e1e13aae4154fae39",
      "quantity" : 2,
      "itemCost" : 7.89
    }
  ],
  "meta" : {
            "createdBy" : "56b6deb55480fee4107a22f9",
            "updatedBy" : "56b6debc5480fee4107a22fa"
            }
}

//vendor = Walmart
{
  "vendor" : "56b798bc7ae66ca415aff124",
  "totalCost" : 68.82,
  "items" : [
    {
      "item" : "56b8e5c51e13aae4154fae37",
      "quantity" : 1,
      "itemCost" : 5.99
    },
    {
      "item" : "56b8e64f1e13aae4154fae38",
      "quantity" : 4,
      "itemCost" : 6.99
    },
    {
      "item" : "56b8e65e1e13aae4154fae39",
      "quantity" : 11,
      "itemCost" : 12.45
    }
  ],
  "meta" : {
            "createdBy" : "56b6debc5480fee4107a22fa",
            "updatedBy" : "56b6deb55480fee4107a22f9"
            }
}


//DUMMY DATA FOR RECIPES

{
  "name" : "Beef Taco",
  "menuPrice" : 2.49,
  "ingredients" : [
      {
        "item" : "56b8e5c51e13aae4154fae37",
        "quantity" : 3,
        "unit" : "Pounds"
      },
      {
        "item" : "56b8e64f1e13aae4154fae38",
        "quantity" : 1,
        "unit" : "Ounce"
      }
  ],
  "nonConsumables" : [
    {
      "item" : "56b8e65e1e13aae4154fae39",
      "quantity" : 5,
      "unit" : "Plate"
    }
  ],
  "meta" : {
            "createdBy" : "56b6debc5480fee4107a22fa",
            "updatedBy" : "56b6deb55480fee4107a22f9"
            }
}



{
  "name" : "Chicken Taco",
  "menuPrice" : 2.49,
  "ingredients" : [
      {
        "item" : "56b8e5c51e13aae4154fae37",
        "quantity" : 3,
        "unit" : "Pounds"
      },
      {
        "item" : "56b8e64f1e13aae4154fae38",
        "quantity" : 1,
        "unit" : "Ounce"
      }
  ],
  "nonConsumables" : [
    {
      "item" : "56b8e65e1e13aae4154fae39",
      "quantity" : 5,
      "unit" : "Plate"
    }
  ],
  "meta" : {
            "createdBy" : "56b6debc5480fee4107a22fa",
            "updatedBy" : "56b6deb55480fee4107a22f9"
            }
}
