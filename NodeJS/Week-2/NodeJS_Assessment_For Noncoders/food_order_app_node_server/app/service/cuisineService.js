const fs = require("fs");

class Cuisines {
  constructor() {
    this.cuisines = JSON.parse(
      fs.readFileSync("./app/data/cuisines.json", "utf-8")
    );
  }

  //COMPLETE TASK 1(b) HERE
  getAllCuisines() {
    return this.cuisines;
  }

  getCuisineById(id) {
    return this.cuisines.find((cuisine) => cuisine.id == id);
  }

  getCuisineByName(name) {
    return this.cuisines.find(
      (cuisine) => cuisine.name.toLowerCase() === name.toLowerCase()
    );
  }
}

module.exports = Cuisines;
