// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?

// Example 1:
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


//https://www.youtube.com/watch?v=akFRa58Svug&t=0s
// https://leetcode.com/problems/lru-cache/discuss/1066217/Javascript-Solution-Uses-Built-In-Map()-96-Fast

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
  this.capacity = capacity;
  this.size = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const result = this.cache.get(key);
  if(typeof result !== "undefined") {
    this.cache.delete(key);
    this.cache.set(key, result)
    return result;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.cache.get(key)) {
    this.cache.delete(key);
    this.cache.set(key, value);
    return;
  } 
  
  if(this.capacity === this.size) {
    for(let [k, val] of this.cache){ // New Map will allway maintain the sequence in which elements are added. It will return the in sequence for Iterator like for.
      this.cache.delete(k);//Just delete the first added element. which is least recently used.
      this.size--;
      break;
    }
  }
  this.cache.set(key, value);

  this.cache.set(key, value);
  this.size++;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// HINT: Map Object stored the value in sequence which they are added to map.
// While adding new if cache is full we delete the first item from Map.
// While update existing item delete present copy and add as new copy to make its sequence in last(recently use)


