// Create a function that will take a input as fetcherList and 
// return a function with signature as function (callback, prefix)
// return function will be called with callback and prefix
// fetcher function will be call all fetcher function with prefix value and combine and return the response of all fetcher 
// with callback function.
//Here fetcher list is a list of async function which take input as parameter and callback method.


function Fetcher(fetcherList){
  return function(callback, prefix){
    var resultList =[],
      fetchCallbck = (result) => {
      resultList.push(result);
      if(resultList.length === fetcherList.length){
        callback(resultList);
      }
    };
    
    for(var i=0; i<= fetcherList.length-1; i++){
      fetcherList[i](fetchCallbck, prefix);
    }
  }
}

function Fetcher1(callback,prefix){
  setTimeout(()=> callback(`result1 ${prefix}`), 3000);
}
function Fetcher2(callback,prefix){
  setTimeout(()=> callback(`result2 ${prefix}`), 3000);
}
function Fetcher3(callback,prefix){
  setTimeout(()=> callback(`result3 ${prefix}`), 3000);
}
function Fetcher4(callback,prefix){
  setTimeout(()=> callback(`result4 ${prefix}`), 3000);
}


var fetcherMethod = Fetcher([Fetcher1,Fetcher2,Fetcher3,Fetcher4]);
fetcherMethod((result)=>{
  console.log(result)
}, "My result");

//Output
//["result1 My result", "result2 My result", "result3 My result", "result4 My result"]
