function myEach(collection, cb) {
  const col = Object.values(collection);
  for (let i = 0; i < col.length; i++) {
    cb(col[i]);
  }
  return collection;
}

// myEach({one: 1, two: 2, three: 3}, console.log);

function myMap(collection, cb) {
  const newArray = [];
  const col = Object.values(collection);
  for (let i = 0; i < col.length; i++) {
    newArray.push(cb(col[i]));
  }
  return newArray;
}
// console.log(myMap([1, 2, 3], function(num){ return num * 3; }));

// function myReduce(collection, cb, acc){

//     const col= Object.values(collection)
//     if (acc === undefined){
//         acc = col[0]
//         for (let i=0; i< col.length-1; i++){
//             acc = cb(acc,col[i+1],col)
//         }

//     }
//     else {
//         for (let i=0; i< col.length; i++){
//             acc = cb(acc,col[i],col)
//         }
//     }

//     return acc
// }

function myReduce(collection, cb, acc) {
  const col = Object.values(collection);

  for (let i = 0; i < col.length; i++) {
    if (acc === undefined) {
      acc = col[0];
      i++;
    }
    acc = cb(acc, col[i], col);
  }

  return acc;
}

// console.log(
//     myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10),
//     myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; })
// );

function myFind(collection, predicate) {
  const col = Object.values(collection);
  for (let i = 0; i < col.length; i++) {
    if (predicate(col[i]) === true) return col[i];
  }
}

// console.log(
//     myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }),
//     myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; })
//     );

function myFilter(collection, predicate) {
  const col = Object.values(collection);

  let newArray = [];
  for (let i = 0; i < col.length; i++) {
    if (predicate(col[i]) === true) {
      newArray.push(col[i]);
    }
  }
  return newArray;
}

// console.log(
//     myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }),
//     myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })
// );

function mySize(collection) {
  const col = Object.values(collection);
  return col.length;
}

// console.log(
//     mySize({one: 1, two: 2, three: 3}),
//     mySize([])
// );

function myFirst(arrayPara, n) {

  let newArray = [];
  if (n === undefined) {
    return arrayPara[0];
  } else {
    for (let i = 0; i < n; i++) {
      newArray.push(arrayPara[i]);
    }
    return newArray;
  }
}
// console.log(myFirst([5, 4, 3, 2, 1]), myFirst([5, 4, 3, 2, 1], 3));

function myLast(arrayPara, n){

    let newArray = [];
    if (n === undefined) {
      return arrayPara[arrayPara.length-1];
    } else {
      for (let i = n; i >0; i--) {
        newArray.push(arrayPara[arrayPara.length - i]);
      }
      return newArray;
    }
}
// console.log(
//     // myLast([5, 4, 3, 2, 1]),
//     myLast([5, 4, 3, 2, 1], 3)
// );

function myKeys(object){
    let keysArr =[]
   for (const key in object) {
    keysArr.push(key)
   }
   return keysArr
}
// console.log(
//     myKeys({one: 1, two: 2, three: 3})
// );

function myValues(object){
    let valuesArr =[]
    for (const key in object) {
        valuesArr.push(object[key])
    }
    return valuesArr
}