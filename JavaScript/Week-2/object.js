var sholay = {
  name: "Sholay",
  cast: ["Amitabh", "Hema", "Dharmendra", "Jaya"],
  "box office stats": {
    countries: 10,
    collection: 1230000,
  },

  addToCollection: function (amount) {
    this["box office stats"].collection += amount;
  },
};

console.log(sholay.name);
console.log(sholay.cast[1]);
console.log(sholay["box office stats"]["collection"]);

console.log(sholay);

sholay.addToCollection(350000);
