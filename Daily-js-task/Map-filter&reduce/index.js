let arr = [1,3,6,8]
arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index
})

let arr2 = [2,4,5,7,54,7,9,10]
let a2=arr2.filter((a)=>{
     return a<10
})
console.log(a2)

let arr3 = [ 1,34,2,4,2,4,4]
let a3 = arr3.reduce((h1,h2)=>{
    return h1 + h2
})
console.log(a3)