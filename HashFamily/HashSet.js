//Implement a HashSet using the HashMap class in ./HashMapClass
const HashMap = require('./HashMapClass');

class MySet {
  constructor() {
    this.hashMap = new HashMap();
  }

  add(value) {
    this.hashMap.set(value);
  }

  has(value) {
    return this.hashMap.has(value);
  }

  get size() {
    return this.hashMap.size;
  }

  delete(value) {
    return this.hashMap.delete(value);
  }

  entries() {
    return this.hashMap.keys.reduce((acc, key) => {
      if(key !== undefined) {
        acc.push(key.content);
      }
      return acc
    }, []);
  }
}

const assert = require('assert');
// const set = new Set(); // Using the built-in
const set = new MySet(); // Using our own implementation

set.add('moon');
set.add('mono');
set.add('moon'); // should add this once and not twice

assert.equal(set.has('moon'), true);
assert.equal(set.has('mode'), false);

assert.equal(set.size, 2);
assert.equal(set.has('mono'), true);
assert.equal(set.delete('moon'), true);
assert.equal(set.delete('moon'), false);
assert.equal(set.size, 1);