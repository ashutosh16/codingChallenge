// 1376. Time Needed to Inform All Employees
// https://leetcode.com/problems/time-needed-to-inform-all-employees/

// A company has n employees with a unique ID for each employee from 0 to n - 1. 
// The head of the company is the one with headID.

// Each employee has one direct manager given in the manager array where manager[i] 
// is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that 
// the subordination relationships have a tree structure.

// The head of the company wants to inform all the company employees of an urgent piece of news. 
// He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates 
// (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

// Return the number of minutes needed to inform all the employees about the urgent news.

// Example 1:
// Input: n = 1, headID = 0, manager = [-1], informTime = [0]
// Output: 0
// Explanation: The head of the company is the only employee in the company.

// Example 2:
// Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
// Output: 1
// Explanation: The head of the company with id = 2 is the direct manager of all the employees in the company and needs 1 minute to inform them all.
// The tree structure of the employees in the company is shown.

// Example 3:
// Input: n = 7, headID = 6, manager = [1,2,3,4,5,6,-1], informTime = [0,6,5,4,3,2,1]
// Output: 21
// Explanation: The head has id = 6. He will inform employee with id = 5 in 1 minute.
// The employee with id = 5 will inform the employee with id = 4 in 2 minutes.
// The employee with id = 4 will inform the employee with id = 3 in 3 minutes.
// The employee with id = 3 will inform the employee with id = 2 in 4 minutes.
// The employee with id = 2 will inform the employee with id = 1 in 5 minutes.
// The employee with id = 1 will inform the employee with id = 0 in 6 minutes.
// Needed time = 1 + 2 + 3 + 4 + 5 + 6 = 21.

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

// Hint
// 1. Travel bottom up recursively and mark calculated time manager as -1.
// 2. run this for all nodes.
// 3. this will end up in calculating the informTime for each emp to get news from its parent.
// 4. get max value from the informTime array.
var numOfMinutes = function(n, headID, manager, informTime) {
    const timeFromHeadToEmp = (id)=> {
      if(manager[id] !== -1) {
        informTime[id] += timeFromHeadToEmp(manager[id]);
        manager[id] = -1;
      }
      
      return informTime[id];
    }
    
    for(let i=0; i < manager.length; i++){
      timeFromHeadToEmp(i);
    }
  return Math.max(...informTime);
};


numOfMinutes(7, 6, [1,2,3,4,5,6,-1], [0,6,5,4,3,2,1]);
// 21
