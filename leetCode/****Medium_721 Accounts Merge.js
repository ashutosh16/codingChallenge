// https://leetcode.com/problems/accounts-merge/solution/
// Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

// Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

// After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

// Example 1:
// Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Explanation:
// The first and third John's are the same person as they have the common email "johnsmith@mail.com".
// The second John and Mary are different people as none of their email addresses are used by other accounts.
// We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
// ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

// Example 2:
// Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
// Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// Hint : https://leetcode.com/problems/accounts-merge/discuss/820701/JS-DFS
// Create a graph considering the each unique email as node.
// Connect node(email) to all other nodes(email) for same user.
// Then run the DFS to find sets of connected nodes.
// Input as below
// [
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ]
// Created Graph then run the DFS on this - Same like count number of islends
// {
//   'johnsmith@mail.com': [
//     'johnsmith@mail.com',
//     'johnsmith@mail.com',
//     'john_newyork@mail.com',
//     'johnsmith@mail.com',
//     'johnsmith@mail.com',
//     'john00@mail.com'
//   ],
//   'john_newyork@mail.com': [ 'johnsmith@mail.com' ],
//   'john00@mail.com': [ 'johnsmith@mail.com' ],
//   'mary@mail.com': [ 'mary@mail.com', 'mary@mail.com' ],
//   'johnnybravo@mail.com': [ 'johnnybravo@mail.com', 'johnnybravo@mail.com' ]
// }

var accountsMerge = function (accounts) {
  const emailToNameMap = {};
  const graph = {};
  const createGraph = (accounts) => {
    for (let account of accounts) {
      const name = account[0];
      const from = account[1];
      emailToNameMap[from] = name;
      for (let i = 1; i < account.length; i++) {
        const to = account[i];
        addEdge(graph, from, to);
        addEdge(graph, to, from);
        emailToNameMap[to] = name;
      }
    }
    return graph;
  };

  const addEdge = (graph, from, to) => {
    !graph[from] && (graph[from] = []);
    graph[from].push(to);
  };

  createGraph(accounts);
  const visited = {};
  const result = [];

  const DFS = (email, sameUserEmails, visited) => {
    if (visited[email]) return false;
    visited[email] = true;
    sameUserEmails[email] = true;
    for (const connectedEmail of graph[email]) {
      DFS(connectedEmail, sameUserEmails, visited);
    }
  };

  for (let email of Object.keys(graph)) {
    const sameUserEmails = {};
    if (!visited[email]) {
      DFS(email, sameUserEmails, visited);
      result.push([emailToNameMap[email], ...Object.keys(sameUserEmails).sort()]);
    }
  }
  return result;
};

accountsMerge([
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
]);


//Output
// [
//   ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];
