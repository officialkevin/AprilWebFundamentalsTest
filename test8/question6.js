//initial logic!!
// let UnsortedArray=[2,5,4,3,6,9,8,7,0,1]
// let sortedArray=UnsortedArray.sort()
// console.log(sortedArray)
// let a=sortedArray.length-1

// console.log(a)

// console.log(sortedArray[a])


//final logic after research

let UnsortedArray=[2,50,4,3,6,90,8,7,0,1]
let sortedArray=UnsortedArray.sort(function(a, b) {
  return a - b;
})
console.log("All copyrights © reserved to kevin roland")
console.log()
console.log("Sorted Array- "+UnsortedArray)
console.log()

let a=sortedArray.length-1

console.log("nth Largest Element in the above Sorted Array- "+sortedArray[a])

