export const kegs = [
  {
    id: "0",
    brand: "Cloudburst Brewing",
    name: "The Splash Zone Wet Hop Pale Ale",
    price: 5,
    alcoholContent: 5.6,
    level: 124
  },
  {
    id: "1",
    brand: "Stoup Brewing",
    name: "Berliner Weisse",
    price: 7,
    alcoholContent: 3.8,
    level: 124
  },
  {
    id: "2",
    brand: "Stillwater Artisanal",
    name: "Extra Dry Sake Style Saison",
    price: 8,
    alcoholContent: 3.8,
    level: 124
  },
  {
    id: "3",
    brand: "Holy Mountain Brewing Co.",
    name: "Extra Dry Saison",
    price: 8,
    alcoholContent: 3.8,
    level: 124
  },
  {
    id: "4",
    brand: "Chuckanut Brewery",
    name: "Pilsner",
    price: 5,
    alcoholContent: 5,
    level: 124
  },
  {
    id: "5",
    brand: "Modern Times Beer",
    name: "Space Ways IPA",
    price: 6,
    alcoholContent: 6.7,
    level: 124
  },
  {
    id: "6",
    brand: "Cloudburst Brewing",
    name: "Waterworld Wet Hop IPA",
    price: 7,
    alcoholContent: 7.3,
    level: 124
  },
  {
    id: "7",
    brand: "Holy Mountain Brewing Co.",
    name: "Vesper Brett Conditioned Table Beer",
    price: 8,
    alcoholContent: 3.8,
    level: 124
  },
  {
    id: "8",
    brand: "Jolly Pumpkin Artisan Ales",
    name: "Smashed, Grabbed and Hop Dusted Sour IPA",
    price: 8,
    alcoholContent: 8.1,
    level: 124
  },
  {
    id: "9",
    brand: "Holy Mountain Brewing Co.",
    name: "Fire of the World London-Style Porter",
    price: 7,
    alcoholContent: 4,
    level: 124
  }
];

export function getKegs() {
  return kegs;
}

export function getKeg(kegId) {
  return kegs.find(k => k.id === kegId);
}

export function saveKeg(keg) {
  let kegInDb = kegs.find(k => k.id === keg.id) || {};
  kegInDb.brand = keg.brand;
  kegInDb.name = keg.name;
  kegInDb.price = keg.price;
  kegInDb.alcoholContent = keg.alcoholContent;
  kegInDb.level = keg.level;

  if (!kegInDb.id) {
    kegInDb.id = Date.now().toString();
    kegs.push(kegInDb);
  }

  return kegInDb;
}

export function deleteKeg(id) {
  let kegInDb = kegs.find(k => k.id === id);
  kegs.splice(kegs.indexOf(kegInDb), 1);
  return kegInDb;
}
