// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
const checkIfPropertyExistsAndTruthy = (a, b) => {
  return a.hasOwnProperty(b) && Boolean(a[b])
}

console.log(checkIfPropertyExistsAndTruthy({ a: 1, b: 2, c: 3 }, "b"))
console.log(checkIfPropertyExistsAndTruthy({ x: "a", y: null, z: "c" }, "y"))
console.log(checkIfPropertyExistsAndTruthy({ x: "a", b: "b", z: undefined }, "z")
)

/*
Test cases:
myFunction({a:1,b:2,c:3},'b') Expected true
myFunction({x:'a',y:null,z:'c'},'y') Expected false
myFunction({x:'a',b:'b',z:undefined},'z') Expected false
*/

console.log("==============================")
// ========================================

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
const getCountry = (obj) => {
  return obj.country
}

console.log(getCountry({ continent: "Asia", country: "Japan" }))
console.log(getCountry({ country: "Sweden", continent: "Europe" }))

/*
Test cases:
myFunction({ continent: 'Asia', country: 'Japan' }) Expected 'Japan'
myFunction({ country: 'Sweden', continent: 'Europe' }) Expected 'Sweden'
*/

console.log("==============================")
// ========================================

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets to access the property
const getWeirdKeyValue = (obj) => {
  return obj["prop-2"]
}

console.log(getWeirdKeyValue({ one: 1, "prop-2": 2 }))
console.log(getWeirdKeyValue({ "prop-2": "two", prop: "test" }))

/*
Test cases:
myFunction({  one: 1,  'prop-2': 2}) Expected 2
myFunction({  'prop-2': 'two',  prop: 'test'}) Expected 'two'
*/

console.log("==============================")
// ========================================

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
const getPropertyByString = (obj, key) => {
  return obj[key]
}

console.log(
  getPropertyByString({ continent: "Asia", country: "Japan" }, "continent")
)
console.log(
  getPropertyByString({ country: "Sweden", continent: "Europe" }, "country")
)

/*
Test cases:
myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent') Expected 'Asia'
myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country') Expected 'Sweden'
*/

console.log("==============================")
// ========================================

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// NOTE: Test case 3 is a bit tricky because the value of property 'z' is undefined, but the property itself exists
const checkIfPropertyExists = (a, b) => {
  return a.hasOwnProperty(b)
}

console.log(checkIfPropertyExists({ a: 1, b: 2, c: 3 }, "b"))
console.log(checkIfPropertyExists({ x: "a", y: "b", z: "c" }, "a"))
console.log(checkIfPropertyExists({ x: "a", y: "b", z: undefined }, "z"))

/*
Test cases:
myFunction({a:1,b:2,c:3},'b') Expected true
myFunction({x:'a',y:'b',z:'c'},'a') Expected false
myFunction({x:'a',y:'b',z:undefined},'z') Expected true
*/

console.log("==============================")
// ========================================

// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object
const createObjectWithKeyValue = (a) => {
  return { key: a }
}

console.log(createObjectWithKeyValue("a"))
console.log(createObjectWithKeyValue("z"))
console.log(createObjectWithKeyValue("b"))

/*
Test cases:
myFunction('a') Expected {key:'a'}
myFunction('z') Expected {key:'z'}
myFunction('b') Expected {key:'b'}
*/

console.log("==============================")
// ========================================

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
const createObjectWithKeyAndValue = (a, b) => {
  return { a: b }
}

console.log(createObjectWithKeyAndValue("a", "b"))
console.log(createObjectWithKeyAndValue("z", "x"))
console.log(createObjectWithKeyAndValue("b", "w"))

/*
Test cases:
myFunction('a','b') Expected {a:'b'}
myFunction('z','x') Expected {z:'x'}
myFunction('b','w') Expected {b:'w'}
*/

console.log("==============================")
// ========================================

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
const createObjectFromArrays = (a, b) => {
  let object = {}
  a.forEach((value, i) => {
    object[value] = b[i]
  })
  return object
}

console.log(createObjectFromArrays(["a", "b", "c"], [1, 2, 3]))
console.log(createObjectFromArrays(["w", "x", "y", "z"], [10, 9, 5, 2]))
console.log(createObjectFromArrays([1, "b"], ["a", 2]))

/*
Test cases:
myFunction(['a','b','c'],[1,2,3]) Expected {a:1,b:2,c:3}
myFunction(['w','x','y','z'],[10,9,5,2]) Expected {w:10,x:9,y:5,z:2}
myFunction([1,'b'],['a',2]) Expected {1:'a',b:2}
*/

console.log("==============================")
// ========================================
// Write a function that takes an object (a) as argument
// Return an array with all object keys
// Tip: Object.keys()
const extractKeysFromObject = (a) => {
  return Object.keys(a)
}

console.log(extractKeysFromObject({ a: 1, b: 2, c: 3 }))
console.log(extractKeysFromObject({ j: 9, i: 2, x: 3, z: 4 }))
console.log(extractKeysFromObject({ w: 15, x: 22, y: 13 }))

/*
Test cases:
myFunction({a:1,b:2,c:3}) Expected ['a','b','c']
myFunction({j:9,i:2,x:3,z:4}) Expected ['j','i','x','z']
myFunction({w:15,x:22,y:13}) Expected ['w','x','y']
*/

console.log("==============================")
// ========================================
// Write a function that takes an object as argument
// In some cases the object contains other objects with some deeply nested properties
// Return the property 'b' of object 'a' inside the original object if it exists
// If not, return undefined
const getNestedProperty = (obj) => {
  if (obj.a) return obj.a.b
}

console.log(getNestedProperty({ a: 1 }))
console.log(getNestedProperty({ a: { b: { c: 3 } } }))
console.log(getNestedProperty({ b: { a: 1 } }))
console.log(getNestedProperty({ a: { b: 2 } }))

/*
Test cases:
myFunction({a:1}) Expected undefined
myFunction({a:{b:{c:3}}}) Expected {c:3}
myFunction({b:{a:1}}) Expected undefined
myFunction({a:{b:2}}) Expected 2
*/

console.log("==============================")
// ========================================
// Write a function that takes an object (a) as argument
// Return the sum of all object values
// Tip: Object.values()
const calcSumOfAllObjectValues = (a) => {
  let extractedValues = Object.values(a)
  return extractedValues.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue
  }, 0)
}

console.log(calcSumOfAllObjectValues({ a: 1, b: 2, c: 3 }))
console.log(calcSumOfAllObjectValues({ j: 9, i: 2, x: 3, z: 4 }))
console.log(calcSumOfAllObjectValues({ w: 15, x: 22, y: 13 }))

/*
Test cases:
myFunction({a:1,b:2,c:3}) Expected 6
myFunction({j:9,i:2,x:3,z:4}) Expected 18
myFunction({w:15,x:22,y:13}) Expected 50
*/

console.log("==============================")
// ========================================
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
// Tip: Spread syntax
const removePropertyB = (obj) => {
  const { b, ...rest } = obj
  return rest
}

console.log(removePropertyB({ a: 1, b: 7, c: 3 }))
console.log(removePropertyB({ b: 0, a: 7, d: 8 }))
console.log(removePropertyB({ e: 6, f: 4, b: 5, a: 3 }))

/*
Test cases:
myFunction({ a: 1, b: 7, c: 3 }) Expected { a: 1, c: 3 }
myFunction({ b: 0, a: 7, d: 8 }) Expected { a: 7, d: 8 }
myFunction({ e: 6, f: 4, b: 5, a: 3 }) Expected { e: 6, f: 4, a: 3 }
*/

console.log("==============================")
// ========================================
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
// Tip: Spread syntax
const mergeAndFixObjects = (x, y) => {
  const { b: d, ...restY } = y
  return { ...x, ...restY, d }
}

console.log(mergeAndFixObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))
console.log(mergeAndFixObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))

/*
Test cases:
myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }) Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }) Expected { a: 5, b: 4, c: 3, e: 2, d: 1}
*/

console.log("==============================")
// ========================================
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
const multipyAllValuesByB = (a, b) => {
  const newObjects = {}
  for (const [key, value] of Object.entries(a)) {
    newObjects[key] = value * b
  }
  return newObjects
}

console.log(multipyAllValuesByB({ a: 1, b: 2, c: 3 }, 3))
console.log(multipyAllValuesByB({ j: 9, i: 2, x: 3, z: 4 }, 10))
console.log(multipyAllValuesByB({ w: 15, x: 22, y: 13 }, 6))

/*
Test cases:
myFunction({a:1,b:2,c:3},3) Expected {a:3,b:6,c:9}
myFunction({j:9,i:2,x:3,z:4},10) Expected {j:90,i:20,x:30,z:40}
myFunction({w:15,x:22,y:13},6) Expected {w:90,x:132,y:78}
*/
