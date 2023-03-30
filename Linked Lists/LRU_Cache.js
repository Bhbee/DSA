/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.list = new DoubleLinkedList();
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
    return -1; 
    }
    
    const node = this.cache.get(key);
    this.list.moveToHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        const nodeToUpdate = this.cache.get(key);
        nodeToUpdate.val = value;
        this.list.moveToHead(nodeToUpdate);
        return;
    }
    if (this.list.size >= this.capacity) {
        const evictedNode = this.list.popTail();
        if (evictedNode) {
        this.cache.delete(evictedNode.key);
        }
    }
  
    const nodeToPut = new ListNode(key, value);
    this.list.addToHead(nodeToPut);
    this.cache.set(key, nodeToPut)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function ListNode(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}
class DoubleLinkedList {
    constructor() {
        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head; 
        this.size = 0;
    }
    addToHead(node) {
        const succ = this.head.next;
        const pred = this.head;
        
        node.next = succ;
        node.prev = pred;
        pred.next = node; 
        succ.prev = node;
        this.size++;
    }
    moveToHead(node) {
        this._delete(node);
        this.addToHead(node);
    }
    _delete(node) {
        const succ = node.next;
        const pred = node.prev;
        succ.prev = pred;
        pred.next = succ;
        
        node.prev = node.next = null;
        this.size--;
    }
    popTail() {
        if (this.size > 0) {
        const nodeToPop = this.tail.prev;
        this._delete(nodeToPop);
        return nodeToPop;
        } else {
        return null;
        }
    }
}