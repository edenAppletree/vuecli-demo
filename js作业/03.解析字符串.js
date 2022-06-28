// 需求：http://www.baidu.com?name=zhangsan&age=18&sex=nan#， 封装一个函数，将该地址里的参数解析出来
// let url = 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#'


// console.log(arr[1]);
const getData = (url) => {
    const index1 = url.indexOf('?')
    const index2 = url.indexOf('#')

    const str = url.slice(index1 + 1, index2)
    const arr = str.split('&')
    // console.log(arr);
    let obj = {}
    arr.forEach((item) => {
        let newArr = item.split('=')
        obj[newArr[0]] = newArr[1]
    })
    return obj
}

console.log(getData('http://www.baidu.com?name=zhangsan&age=18&sex=nan#'));