// https://leetcode.com/problems/minimum-area-rectangle-ii/
// Given a set of points in the xy-plane, determine the minimum area of any rectangle formed 
// from these points, with sides not necessarily parallel to the x and y axes.

// If there isn't any rectangle, return 0.

// Example 1:
// Input: [[1,2],[2,1],[1,0],[0,1]]
// Output: 2.00000
// Explanation: The minimum area rectangle occurs at [1,2],[2,1],[1,0],[0,1], with an area of 2.

// Example 2:
// Input: [[0,1],[2,1],[1,1],[1,0],[2,0]]
// Output: 1.00000
// Explanation: The minimum area rectangle occurs at [1,0],[1,1],[2,1],[2,0], with an area of 1.

// Example 3:
// Input: [[0,3],[1,2],[3,1],[1,3],[2,1]]
// Output: 0
// Explanation: There is no possible rectangle to form from these points.

// Example 4:
// Input: [[3,1],[1,1],[0,1],[2,1],[3,3],[3,2],[0,2],[2,3]]
// Output: 2.00000
// Explanation: The minimum area rectangle occurs at [2,1],[2,3],[3,3],[3,1], with an area of 2.
 
// Hint:
// Find distence between all 2 points consider them as diagonals
// Create a map with key as distence between 2 points and x,y of the center of that line
// value as [i, j] points formming this line.
// any 2 points having same key means they are formming a line which intersecting at same point and have same distence.
// means this 4 points can form a rectangle.

// Iterate the map keys and consider only key with value length more than 1.
// loop points under same key as they are formming reactangle.
// calculate all combinations and find min area squre between them.


/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
    let len = points.length;
    
    if (len < 4) return 0;
    
    // Helper function to calculate distance
    // between two points, optionally return 
    // without sqrt if want to use as key
    const getDistance = (a, b, isKey = false) => {
        let [xa, ya] = a;
        let [xb, yb] = b;
        
        const distance = (xa - xb) * (xa - xb) + (ya - yb) * (ya - yb);
        return isKey ? distance : Math.sqrt(distance);
    }
    
    let map = new Map();
    
    // let's loop over all points and find all possible
    // diagonals and calc - dis with midpoints and 
    // save as key with co-ordinates as values
    for (let i = 0; i < len; i += 1) {
        for (let j = i + 1; j < len; j += 1) {
            let disKey = getDistance(points[i], points[j], true);
            let [xa, ya] = points[i];
            let [xb, yb] = points[j];
            
            // x and y is center point of the line.
            let x = (xa + xb) / 2;
            let y = (ya + yb) / 2;
            
            // key is distence between point i and j and co-ordinates of center point
            let key = `${disKey}-${x}-${y}`;
            
            let list = [];
            
            if (!map.has(key)) {
                map.set(key, list)
            } else list = map.get(key);
            
            list.push([i, j]);
            
            map.set(key, list);
        }
    }
    
    // console.log(map);
    let res = Number.MAX_VALUE;
    
    // loop over map of keys above and
    // only iterate through the list where at least 
    // 2 set of co-ordinates have been found above
    map.forEach((list, key) => {
        if (list.length > 1) {
            for (let i = 0; i < list.length; i += 1) {
                for (let j = i + 1; j < list.length; j += 1) {
                    let p1 = list[i][0]; // point from first line
                    let p2 = list[j][0]; // point from second line
                    let p3 = list[j][1]; // point from second line
                    
                    let l = getDistance(points[p1], points[p2]);
                    let b = getDistance(points[p1], points[p3]);
                    res = Math.min(res, l * b);
                }
            }
        }
    })
    
    return res === Number.MAX_VALUE ? 0 : res;
};
