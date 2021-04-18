// https://leetcode.com/problems/online-election/
// In an election, the i-th vote was cast for persons[i] at time times[i].
// Now, we would like to implement the following query 
// function: TopVotedCandidate.q(int t) will return the number of the person that was leading the election at time t.  
// Votes cast at time t will count towards our query.  
// In the case of a tie, the most recent vote (among tied candidates) wins.

// Example 1:

// Input: ["TopVotedCandidate","q","q","q","q","q","q"], [[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]
// Output: [null,0,1,1,0,0,1]
// Explanation: 
// At time 3, the votes are [0], and 0 is leading.
// At time 12, the votes are [0,1,1], and 1 is leading.
// At time 25, the votes are [0,1,1,0,0,1], and 1 is leading (as ties go to the most recent vote.)
// This continues for 3 more queries at time 15, 24, and 8.

/**
 * @param {number[]} persons
 * @param {number[]} times
 */
// Hint: create map like below and run binary search on it.
// [{ time: 0, person: 0 },
// { time: 5, person: 1 },
// { time: 10, person: 1 },
// { time: 15, person: 0 },
// { time: 20, person: 0 },
// { time: 25, person: 1 },
// { time: 30, person: 0 }]

var TopVotedCandidate = function(persons, times) {
  const personToVote = {};
  let leading = null;
  this.votting = persons.map((p, index)=>{
    if(!personToVote[p]) personToVote[p]=0;
    personToVote[p]++;
    
    if(!leading) {
      leading = {
        person: p,
        count: personToVote[p]
      }
    } else if(personToVote[p] >= leading.count){
      leading.count = personToVote[p];
      leading.person = p;
    }
    
    return {
      time: times[index],
      person: leading.person
    }
  })
  console.log(this.votting);
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
//   Implement bonary search here.
  for(let i=0; i<this.votting.length; i++) {
    if(this.votting[i].time > t) return this.votting[i-1].person;
  }
  return this.votting[this.votting.length-1].person
};

// ["TopVotedCandidate",   "q","q","q","q","q","q"]
// [[
//   [0,1, 1, 0, 0, 1, 0],
//   [0,5,10,15,20,25,30]
// ],                      [3],[12],[25],[15],[24],[8]]

// Map created.
// [{ time: 0, person: 0 },
// { time: 5, person: 1 },
// { time: 10, person: 1 },
// { time: 15, person: 0 },
// { time: 20, person: 0 },
// { time: 25, person: 1 },
// { time: 30, person: 0 }]

// Output: 
// [null,0,1,1,0,0,1]

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
