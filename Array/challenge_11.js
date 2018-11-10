// Sum of sub set
class SumOfSubSet {
  constructor(maxWeight, weights){
    this.totalWeight = 0;
    this.subset = [];
    this.weights = weights;
    this.maxWeight = maxWeight;

    for (let item of this.weights) {
      this.totalWeight += item;
    }

    SumOfSubSet._currentWeight = 0; //Current weight added
    SumOfSubSet._remainingWeight = this.totalWeight;
    SumOfSubSet._set = Array(weights.length); //weights which are added
  }

  sum(k) {
    let s = 0;
    for(let j = 0; j <= k -1; j++) {
      s+= this.weights[j];
    }
    return s;
  }


  addInSet(k, i) {
    if(this.sum(k) + this.weights[i] > this.maxWeight) {
      return false;
    } else {
      return true;
    }
  }

  findSubset(k = 0){
    let isadded = false;
    for (let i = k; i < this.weights.length; i++) {
      debugger;
      // console.log(k, i);
      // if (i < this.weights.length && (SumOfSubSet._currentWeight + this.weights[i]) <= this.maxWeight) {
      if (this.addInSet(k, i)){
        SumOfSubSet._set[i] = this.weights[i];
        SumOfSubSet._currentWeight += this.weights[i];
        debugger;
        console.log(SumOfSubSet._set);
        if (SumOfSubSet._currentWeight === this.maxWeight) {
          this.subset.push(Object.assign([], SumOfSubSet._set));
          SumOfSubSet._set[k] = 1;
          SumOfSubSet._currentWeight -= this.weights[i];
          break;
        } else {
          this.findSubset(k+1);
        }
        // console.log('this.findSubset(i+1) = ', i+1);
        // i++;
        // this.findSubset(i);
      }
    }
    if (isadded) {
      SumOfSubSet._currentWeight -= this.weights[k];
      SumOfSubSet._set[k] = 0;
    }

  }
    
}

let obj = new SumOfSubSet(30, [5, 10, 12, 13, 15, 18]);
// let obj = new SumOfSubSet(15, [5, 10, 12]);
obj.findSubset();
debugger;
console.log(obj.subset);