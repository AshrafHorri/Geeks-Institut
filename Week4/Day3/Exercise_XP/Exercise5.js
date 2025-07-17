class Dog {
  constructor(name) {
    this.name = name;
  }
};

// Only option 2 will work:
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

const lab = new Labrador('Max', 'Large');
console.log(lab.name, lab.size);
