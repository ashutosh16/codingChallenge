// https://leetcode.com/problems/employee-importance/submissions/
// You are given a data structure of employee information, which includes the employee's unique id, their importance value and their direct subordinates' id.

// For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. 
// They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]],
// and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, 
// the relationship is not direct.

// Now given the employee information of a company,
// and an employee id, you need to return the total importance value of this employee and all their subordinates.

// Example 1:
// Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
// Output: 11

// Explanation:
// Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3.
// They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.

// Definition for Employee.
function Employee(id, importance, subordinates) {
 this.id = id;
 this.importance = importance;
 this.subordinates = subordinates;
}

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let map = {};
    for(let emp of employees) {
      map[emp.id] = {
        importance: emp.importance,
        subordinates: emp.subordinates
      }
    }
    
    if(!map[id]) return 0;
    
    let importance = 0;
    let queue = [id];
    while(queue.length){
      let sub = queue.shift();
      importance += map[sub].importance;
      if(map[sub].subordinates.length) {
        queue.push(...map[sub].subordinates);
      }
    }
  return importance;
};


GetImportance([{id: 1, importance: 5, subordinates: [2,3] }, {id: 2, importance: 3, subordinates: [] }, {id: 3, importance: 3, subordinates: [4]}, {id: 4, importance: 4, subordinates: []}], 1);
// 15



// Inhancement Calculate the ratting of full hierarchy for given employee id

function FindRate(arr, id){
  const map = arr.reduce((acc, item)=>{
    acc[item[0]] = {
      ratting: item[1],
      sub: item[2]
    };
    return acc;
  }, {});
 
//  BFS
  const findRatting = (id) => {
    const st = [id];
    let result = 0;
    while(st.length) {
      const id = st.pop();
      result += map[id].ratting; 
      map[id].sub.length && st.push(...map[id].sub);
      
    }
    return result;
  }
  return findRatting(id);

}

FindRate([[1, 5, [2, 3]], [2, 3, [4]], [3, 3, []], [4, 3, []], [5, 3, []]], 1);
// 14

