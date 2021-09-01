/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
     let graph = {};
    let returnVal = [];
    for(let ticket of tickets){
        if(!graph[ticket[0]]) graph[ticket[0]] = [];
        graph[ticket[0]].push(ticket[1]);
    }
    for(let ticket in graph){
        graph[ticket].sort();
    }
    let dfs = (place)=>{
        let places = graph[place];
        while(places && places.length){
            dfs(places.shift());
        }
        returnVal.push(place);
    }
    dfs("JFK");
    return returnVal.reverse()
};