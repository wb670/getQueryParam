<!--
 * @Date: 2021-06-26 18:34:30
 * @LastEditors: lion.wang
 * @FilePath: /getQueryParam/README.md
-->
### getQueryParam

> 兼容 history hash 模式获取 query

现在前端会使用大量的框架来搭建前端页面应用，比如vue，当开启hash模式的时候，在实例外部方法无法使用this.$route时，老方法window.location.search也获取不到，这时需要使用window.location.hash来获取参数,所以写了这个库.  

使用方式  

可传入参数也可以不传  
传入参数的时候只返回符合的 key 的相关值  
一个参数的时候直接返回对应的 value  
多个参数或不传参数的时候返回 一个对象  

使用用例

```javascript

//  localhost/demo.html?a=1&b=2&c=3


const query = getQueryParam ()
console.log(query)
//{a:"1",b:"2",c:"3"}

const query = getQueryParam ('a')
console.log(query)
// 1

const query = getQueryParam ('a','b')
console.log(query)
// {a:"1",b:"2"}


const query = getQueryParam ('d')
console.log(query)
// null

const query = getQueryParam ('a','b','d')
console.log(query)
// {a:"1",b:"2"}

```