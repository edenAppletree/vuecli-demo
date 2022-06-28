let str = 'asdasdwerfedsd'
// 1.先转数组
let arr = str.split('')
// console.log(arr);
let count = arr.reduce((obj,ele)=> {
    // console.log(max);
    if(ele in obj) {
        obj[ele]++
    } else {
        obj[ele]=1
    }
    return obj
},{})
console.log(count);
let max = 0
let char = ''
for(let k in count) {
    // console.log(count[k]);
    if(max < count[k]) {
        max = count[k]
        char = k
    }
}
console.log(`字符次数出现最多的是${char},次数为${max}`);