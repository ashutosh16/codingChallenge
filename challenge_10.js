// Graph coloring problem.
// Try to color given graph with given color such that all adjacent vertex will have the different color.
// Time complexity of this program is C^n 'C' = no of colors and 'n' no of vertex.
class ColorGraph {
  constructor(g, n) {
    this.graph = g;
    this.colors = n;
    this.colorPattern = [];
    this.noOfVertex = g.length - 1;
    this.isGraphColored = false;
    ColorGraph._x = Array(this.noOfVertex + 1);
  }

  //can k'th vertex color with 'color' safely.
  isColorSafe(k, color) {
    //check from vertex 1 to all previous vertex( only previous vertex are colored).
    for(let j = 1; j <= k-1; j++) {
      if (this.graph[j][k] !== 0 && ColorGraph._x[j] === color) {
        return false;
      }
    }
    return true;
  }

  colorVertex(k) {
    for(let i = 0; i < this.colors.length; i++) {
      if(this.isColorSafe(k, this.colors[i])) {
        ColorGraph._x[k] = this.colors[i];
        if (k === this.noOfVertex) {
          this.isGraphColored = true;
          this.colorPattern.push(Object.assign([], ColorGraph._x));
        } else {
          //color next vertex
          this.colorVertex(k+1);
        }
      }
    }
  }

  //color graph
  colorGraph() {
    this.colorVertex(1);
    if(this.isGraphColored) {
      console.log(this.colorPattern);
    }
  }
}

let g = [
  // 0  1  2  3  4  
    [0, 0, 0, 0, 0],//0
    [0, 0, 1, 1, 1],//1
    [0, 1, 0, 1, 0],//2
    [0, 1, 1, 0, 1],//3
    [0, 1, 0, 1, 0],//4
];
let colorGraphProblem = new ColorGraph(g, ['R', 'B', 'G']);
colorGraphProblem.colorGraph();
console.log(`Graph can be colored with ${colorGraphProblem.colorPattern}`);


