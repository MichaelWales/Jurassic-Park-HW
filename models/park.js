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



module.exports = Park;
