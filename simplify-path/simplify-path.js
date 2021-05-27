/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
     let stack=[];
    //split the path arr
    let pathArr=path.split('/');
    console.log(pathArr)
    let answer ="";
    for (let i=0; i< pathArr.length; i++){
        // if stack is not empty &&  .. - pop    
        
        if((stack.length !== 0) && (pathArr[i] === "..")){
               stack.pop();
            
        }else if( pathArr[i]!=='.' && pathArr[i]!=='..' && pathArr[i]!==''){
           
            stack.push(pathArr[i]);
        }
    }
    console.log(stack)
   if(stack.length === 0){
        return '/'
    }
    while(stack.length!==0){
        answer= '/'+(stack.pop())+answer;
    }
    
    return answer
};