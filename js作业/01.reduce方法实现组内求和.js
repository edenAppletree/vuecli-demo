let arr = [{a:100}, {a: 20}, {a:-10}]

// reduce方法求和对象数组里的值

let initVal = 0
let sum = arr.reduce((previousVal,currentVal) => {
    return previousVal + currentVal.a
},initVal)
console.log(sum);