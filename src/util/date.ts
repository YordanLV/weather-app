declare global {
  interface Date {
    addHours(params: any): void;
  }
}

// eslint-disable-next-line no-extend-native
Date.prototype.addHours = function (h: any) {
  this.setHours(this.getHours() + h);
  return this;
};

export default function () {
  return new Date();
}
