var HoneyMakerBee = function() {
  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';
  Grub.call(this, 'food');
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;