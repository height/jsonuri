var JsonUri = require('../dist/jsonuri.common');
console.log(JsonUri)

let exObj = {
  a: 2,
  b: {
    b1: {
      b11: 311,
      b12: 312
    },
    b2: 32
  },
  list:[0,1,2,3,4,5,6,7,8,9]
};


JsonUri.walk(exObj, function(obj, key, raw, path) {
  //console.log(obj,key,raw, path, "入栈")
})



JsonUri.walk({a:{a1:'x'}}, function(obj, key, raw, path){
  console.log(obj, key, raw, path)
})

JsonUri.up(exObj, '/list/0/')
JsonUri.up(exObj, '/list/1/')
JsonUri.up(exObj, '/list/9/')
console.log(JsonUri.get(exObj, '/list/'))
