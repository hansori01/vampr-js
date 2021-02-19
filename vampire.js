class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let nodeCount = 0; // counter
    let currentVamp = this;// current vampire = this

    while (currentVamp.creator) {//while (currentvampire.creator) do loop (if this current vamp has a creator)
      currentVamp = currentVamp.creator;// change current vampire to currentvampire.creator
      nodeCount++;// iterate counter
    }

    return nodeCount;//return counter
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let thisCount = this.numberOfVampiresFromOriginal;
    const thatCount = vampire.numberOfVampiresFromOriginal
    return thisCount < thatCount ? true : false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}


const vaughn = new Vampire('Vaughn', 2020);
const sori = new Vampire('Sori', 2021);

vaughn.addOffspring(sori);

console.log(vaughn.isMoreSeniorThan(sori))
console.log(sori)

module.exports = Vampire;

