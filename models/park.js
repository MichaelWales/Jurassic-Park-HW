const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.sizeOfCollection = function(){
  return this.dinosaurCollection.length;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(){
  this.dinosaurCollection.pop();
}

// Park.prototype.mostAttractiveDinosaur = function(){
//   this.dinosaurCollection.sort(function(a, b){
//     return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
//   });
// }

// Park.prototype.findDinosaurBySpecies = function(species){
//   this.dinosaurCollection.find(function(species){
//     return species === species;
//   });
// }





module.exports = Park;
