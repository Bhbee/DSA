//Implement Your own HashMap Class using an array as the underlying structure and your own hash function



class MyHashMap {

    constructor(initialCapacity = 2) {
        this.bins = new Array(initialCapacity);
        this.collisions = 0;
    }
    
    set(key, value) {
        const binIndex = this.getIndex(key);
        if(this.bins[binIndex]) {
        this.bins[binIndex].push({key, value});
        if(this.bins[binIndex].length > 1) { this.collisions++; }
        } else {
        this.bins[binIndex] = [{key, value}];
        }
        return this;
    }
    
    get(key) {
        const binIndex = this.getIndex(key);
        for (let arrayIndex = 0; arrayIndex < this.bins[binIndex].length; arrayIndex++) {
        const entry = this.bins[binIndex][arrayIndex];
        if(entry.key === key) {
            return entry.value
        }
        }
    }
    
    hash(key) {
        let hashValue = 0;
        const stringTypeKey = `${key}${typeof key}`;
    
        for (let index = 0; index < stringTypeKey.length; index++) {
        const charCode = stringTypeKey.charCodeAt(index);
        hashValue += charCode << (index * 8);
        }
    
        return hashValue;
    }
    
    getIndex(key) {
        const indexHash = this.hash(key);
        const index = indexHash % this.bins.length;
        return index;
    }
}