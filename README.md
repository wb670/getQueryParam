<!--
 * @Date: 2021-06-26 18:34:30
 * @LastEditors: lion.wang
 * @FilePath: /getQueryParam/README.md
-->
## getQueryParam

### Install
```
npm i -s @lion.wang/get-query-param
```

### Example

```javascript

import getQueryParam from "@lion.wang/get-query-param"

//https://localhost/demo.html?a=1&b=2&c=3

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