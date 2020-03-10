const Queue = require('./queue')
//js graph implementation 
class Graph{
    constructor(numOfVerticies){
    // defining vertex array and 
    // adjacent list 
        this.numOfVerticies = numOfVerticies
        this.AdjList = new Map()
    }
    //It adds the vertex v as key to adjList and initialize its values with an array.
    addVertex(vertex){
    // initialize the adjacent list with a null array 
        this.AdjList.set(vertex, [])
    }

    //add edge to graph
    addEdge(v, w){

        //get the list for vertex v and add vertex w denoting the edge between v and w
        this.AdjList.get(v).push(w)

        //since graph is undirected add an edge from w to v
        this.AdjList.get(w).push(v)

    }

    //prints the vertex and adjacencey list
    printGraph(){
        // get all vertices
        let getKeys = this.AdjList.keys();

        //itterate over the adjacency list
        for(let i of getKeys){

            // get the corresponding adjcencey list for the vertex
            let getValues = this.AdjList.get(i)
            let concat = '';

            //itterate over the adjacency list and concatenate the values into a string
            for(let j of getValues){
                concat += j + ' '
                console.log(i + " -> " + concat); 
            }
        }

    }
}

let g = new Graph(6)

let vertices = ['A','B','C','D','E','F']


//adding verticies
for (let i = 0; i < vertices.length; i++){
    g.addVertex(vertices[i])

    
}

//adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 

g.printGraph()

let q = new Queue 

console.log(q)