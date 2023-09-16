
function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
   return function aNamedFUnction(){
    console.log("");
   };
  }
function returnsAnAnonymousFunction(){
    return function (){
        
    };
}

