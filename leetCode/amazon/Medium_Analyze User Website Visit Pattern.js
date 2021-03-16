// https://leetcode.com/problems/analyze-user-website-visit-pattern/
// We are given some website visits: the user with name username[i] visited the website website[i] at time timestamp[i].
// A 3-sequence is a list of websites of length 3 sorted in ascending order by the time of their visits.  
// (The websites in a 3-sequence are not necessarily distinct.)
// Find the 3-sequence visited by the largest number of users. If there is more than one solution, return the lexicographically smallest such 3-sequence.


// Example 1:

// Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], timestamp = [1,2,3,4,5,6,7,8,9,10], website = ["home","about","career","home","cart","maps","home","home","about","career"]
// Output: ["home","about","career"]
// Explanation: 
// The tuples in this example are:
// ["joe", 1, "home"]
// ["joe", 2, "about"]
// ["joe", 3, "career"]
// ["james", 4, "home"]
// ["james", 5, "cart"]
// ["james", 6, "maps"]
// ["james", 7, "home"]
// ["mary", 8, "home"]
// ["mary", 9, "about"]
// ["mary", 10, "career"]
// The 3-sequence ("home", "about", "career") was visited at least once by 2 users.
// The 3-sequence ("home", "cart", "maps") was visited at least once by 1 user.
// The 3-sequence ("home", "cart", "home") was visited at least once by 1 user.
// The 3-sequence ("home", "maps", "home") was visited at least once by 1 user.
// The 3-sequence ("cart", "maps", "home") was visited at least once by 1 user.
 

// Note:

// 3 <= N = username.length = timestamp.length = website.length <= 50
// 1 <= username[i].length <= 10
// 0 <= timestamp[i] <= 10^9
// 1 <= website[i].length <= 10
// Both username[i] and website[i] contain only lowercase characters.
// It is guaranteed that there is at least one user who visited at least 3 websites.
// No user visits two websites at the same time.


/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function (username, timestamp, website) {
  const userMap = {};
  const entriesMap = timestamp.map((a, i) => [username[i], timestamp[i], website[i]]).sort((a, b) => a[1] - b[1]);

  //userMap -> map with usename and its website name in sequence of their visits.
  
  for (let i = 0; i < entriesMap.length; i++) {
    const username = entriesMap[i][0];
    const website = entriesMap[i][2];
    userMap[username] ? userMap[username].push(website) : (userMap[username] = [website]);
  }

  function createSequeceOf3(data, seqMap) {
    let s = 0;
    if (data.length < 3) return;
    for (let i = 0; i < data.length - 2; i++)
      for (let j = i + 1; j < data.length - 1; j++)
        for (let k = j + 1; k < data.length; k++) {
          const seq = `${data[i]}-${data[j]}-${data[k]}`;
          if (seqMap[seq]) {
            seqMap[seq] += 1;
          } else {
            seqMap[seq] = 1;
          }
        }
  }

  const seqMap = {};
  const users = Object.keys(userMap);
  for (let i = 0; i < users.length; i++) {
    createSequeceOf3(userMap[users[i]], seqMap);
  }
  // seqMap will be object with seq with its count;
  // Now need to find the seq with max number of frequency.
//   If frequency is same then lexicographically smallest sould take priority.
//   lexicographically smallest -> first came in dictionary .
  
  const seq = Object.keys(seqMap);
  let maxSeq = {
    seqCount: seqMap[seq[0]],
    seqString: seq[0],
  };

  for (let i = 1; i < seq.length; i++) {
    if (maxSeq.seqCount < seqMap[seq[i]] || (maxSeq.seqCount === seqMap[seq[i]] && maxSeq.seqString > seq[i])) {
      maxSeq = {
        seqCount: seqMap[seq[i]],
        seqString: seq[i],
      };
    }
  }
  return maxSeq.seqString.split("-");
};

mostVisitedPattern(["joe","joe","joe","james","james","james","james","mary","mary","mary"],
                   [1,2,3,4,5,6,7,8,9,10],
                   ["home","about","career","home","cart","maps","home","home","about","career"]);
// userMap = {
//   joe: [ 'home', 'about', 'career' ],
//   james: [ 'home', 'cart', 'maps', 'home' ],
//   mary: [ 'home', 'about', 'career' ]
// }

// seqMap = {
//   'home-about-career': 2,
//   'home-cart-maps': 1,
//   'home-cart-home': 1,
//   'home-maps-home': 1,
//   'cart-maps-home': 1
// }

// Output: ["home","about","career"]




