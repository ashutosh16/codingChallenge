{
  // envent queue will only exicute after JS is free.
  let timeout = setTimeout(()=>{
    console.log('timeout...');
  }, 100);
  let a = new Date();
  a = a.getTime() + 500;
  while(a !== new Date().getTime()){}
  console.log('end while');
}


{
  // Using Promise 
  function getData(){
    let timeoutSec = 2000,
      p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          if(window.getDataResolved){
            resolve('success');
          }else{
            reject('reject');
          }
        }, 5000);

        setTimeout(()=>{
          reject('rejected taking too long');
        }, timeoutSec);
      });

    return p;
  }

  getData().then((result)=>{
    console.log(result);
  }).catch((result)=>{
    console.log(result);
  });
  console.log('code done.');
}

{
  // Using Async and await.
  function getData(){
    let timeoutSec = 5000,
      p = new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve('success');
        }, 5000);

        setTimeout(() => {
          reject('rejected taking too long');
        }, timeoutSec);
      });

    return p;
  }

  async function asyncCall(){
    try {
      let data = await getData();
      console.log('in try '+ data);
    }
    catch (data) {
      console.log('catch '+ data);
    }

    console.log('function finished.');
  }

  asyncCall();

}

{
    //Nested promise example.
    var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('foo err');
      }, 300);
    });

    function service(){
      return promise1.then(function(res){
          debugger;
          return res;
        }, function (err){
          debugger;
          return null;
        })
    }
    function callService(){
      service().then(function(res){
        console.log('s=', res);
      },
       function(err){
        console.log('e=', err);	
      });
    }
    callService();

}
