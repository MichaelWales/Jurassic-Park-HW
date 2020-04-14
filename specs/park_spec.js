const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20)
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  describe('Collection', function(){

    it('should have a collection of dinosaurs', function(){
      const actual = park.dinosaurCollection;
      assert.deepStrictEqual(actual, []);
    });

    it('should be able to return the size of the dinosaur collection', function(){
      const actual = park.sizeOfCollection();
      assert.deepStrictEqual(actual, 0)
    });

    it('should be able to add a dinosaur to its collection', function(){
      park.addDinosaur('Stegosaurus', 'Herbivore', 30);
      const actual = park.sizeOfCollection();
      assert.deepStrictEqual(actual, 1);
    });

    it('should be able to remove a dinosaur from its collection', function(){
      park.addDinosaur('Stegosaurus', 'Herbivore', 30);
      park.removeDinosaur();
      const actual = park.sizeOfCollection();
      assert.deepStrictEqual(actual, 0);
    });

    it('should be able to find the dinosaur that attracts the most visitors', function(){
      park.addDinosaur('Stegosaurus', 'Herbivore', 30);
      park.addDinosaur('Triceratops', 'Herbivore', 15);
      const actual = park.dinosaurCollection.sort(function(a, b){
        return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
      });
      assert.deepStrictEqual(actual, ['Stegosaurus', 'Triceratops'])
    });

    xit('should be able to find all dinosaurs of a particular species', function(){
      park.addDinosaur('Stegosaurus', 'Herbivore', 30);
      park.addDinosaur('Triceratops', 'Herbivore', 15);
      park.findDinosaurBySpecies();
      assert.deepStrictEqual(actual, ['Stegosaurus'])
    });

  });









  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
