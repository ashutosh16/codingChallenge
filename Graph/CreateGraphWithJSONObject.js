{

  function Graph() {
    const g = {},

        addVertex = (vertexName, edgeList) => {
          !g[vertexName] && (g[vertexName] = {});
          edgeList.forEach( edge => g[vertexName][edge] = true);
        },

        DFS = (callback) => {
          const startVertexName = Object.keys(g)[0];
          const stack = [ startVertexName ], //Add first vertexName
          const v = {
              startVertexName : true
          };
          const currentVertex = null;

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
  }


  const G = Graph();
  G.addVertex( 1, [2,5]);
  G.addVertex( 2, [1,3,4,5]);
  G.addVertex( 3, [2,4]);
  G.addVertex( 4, [2,3,5]);
  G.addVertex( 5, [1,2,4]);

}
