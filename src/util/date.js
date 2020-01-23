// eslint-disable-next-line no-extend-native
Date.prototype.addHours = function(h) {
  this.setHours(this.getHours() + h);
  return this;
};

export default function() {
  return new Date();
}
