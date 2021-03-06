{

  
  function Graph() {
    const g = {},
        
        addVertex = (vertexName, edgeList) => {
          !g[vertexName] && (g[vertexName] = {});
          edgeList.forEach( edge => g[vertexName][edge] = true);
        },
        
        BFS = (callback) => {
          const queue = [];
          let currentNode = null;
          const v = {};
    
          queue.push( Object.keys(g)[0] );
          v[ Object.keys(g)[0] ] = true;
          
          while(queue.length > 0){
            currentNode = queue.shift();
            callback(currentNode);
            
            Object.keys(g[currentNode]).forEach( vertex => {
              if(!v[vertex]) {
                queue.push(vertex);
                v[vertex] = true;
              }
            });
          }
        },
          
        DFS = (callback) => {
          const startVertexName = Object.keys(g)[0];
          const stack = [ startVertexName ]; //Add first vertexName
          const v = {};
          v[startVertexName] = true;
          let currentVertex = null;

          while(stack.length > 0) {
            currentVertex = stack.pop();
            callback(currentVertex); // Print

            Object.keys(g[currentVertex]).forEach( edge => {
              if(!v[edge]){
                stack.push(edge);
                v[edge] = true;
              }
            });
          }
        }

        return {
            addVertex,
            DFS,
            BFS
            g
        }
  }


  const G = Graph();
  G.addVertex( 1, [2,5]);
  G.addVertex( 2, [1,3,4,5]);
  G.addVertex( 3, [2,4]);
  G.addVertex( 4, [2,3,5]);
  G.addVertex( 5, [1,2,4]);
  
  1 ---- 2
  |     /| \  
  |   /  |  3
  | /    | /
  5 ----- 4

  console.log(G.DFS( (name)=> console.log(name)));
  console.log(G.BFS( (name)=> console.log(name)));
  console.log(G.g);
  
  // Graph representaion.
  // {
  //   1: {
  //     2:true,
  //     5:true
  //   },
  //   2: {
  //     1:true,
  //     3:true,
  //     4:true,
  //     5:true
  //   },
  //   3: {
  //     2:true,
  //     4:true  
  //   },
  //   4: {
  //     2:true,
  //     3:true,
  //     5:true
  //   },
  //   5: {
  //     1:true,
  //     2:true,
  //     4:true
  //   }
  // }
}
