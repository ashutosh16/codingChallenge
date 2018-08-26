// Nqueen Program

class Nqueen {
  constructor(n) {
    this.n = n; //Total no of queens.
    this.safePlace = [];//Array which represent result. Column in which queen should be placed safely.
    Nqueen._x = [];// store the safe place for all n queen.
  }

  /**
   * 
   * @param {Number} k queen number 
   * @param {Number} i column number in which we try to place k'th queen
   * @returns {boolean} true (k'th queen can be placed at ith column and k'th row safely) else false
   */
  isSafePlace(k,i) {
    for(let j = 1; j <= k-1; j++) {
      let columnDiff = Math.abs(Nqueen._x[j] - i),
        rowDiff = Math.abs(j - k);
        // if difference between column numbers and row numbers is same, means they queens are diagonal to each other.
      if (Nqueen._x[j] === i || columnDiff === rowDiff) {
        return false;
      }
    }
    return true;
  }

  /**
   * 
   * @param {Number} k queen number which we are tying to place at safe column
   * @returns {Array} place the k'th queen in safe location and update olumn number in Nqueen._x array, also call itself for next queen. Until all queens are placed safely.
   */
  placeNqueen(k=1) {
    for(let i = 1; i <= this.n; i++) {
      if (this.isSafePlace(k, i)) {
        Nqueen._x[k] = i;
        if(k === this.n) {
          this.safePlace.push(Object.assign([], Nqueen._x)); // function will return as soon as all queens reached safe location.
        } else {
          this.placeNqueen(k+1); // function called for k+1 queen, when k'th queen is at safe location.
        }
      }
      
    }
    return this.safePlace;
  }
}

let nQueen = new Nqueen(4);
nQueen.placeNqueen();
console.log(`${nQueen.n} queens are safely placed at ${nQueen.safePlace}`);