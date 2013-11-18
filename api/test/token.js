var serializer = require('serializer')
var obj = { foo : "bar"}
var serializedObj = serializer.secureStringify(obj, 'key', 'anotherkey')
console.log(serializedObj)
var originalObj = serializer.secureParse(serializedObj, 'key', 'anotherkey')
console.log(originalObj)

var tok = "GPC2iVQnaifo04HnlDjeN_aKdbA=V35n9jfmd5a75876182348a3adf7107bc980ecf6be6fe68379655e1a0ae03295ed37564c8bc0817b7196b01574cc193a1ea08d0da2c1f18c4c8b4e2bb9c27624d11f8ba0"
var o = serializer.secureParse(tok, 'hello', 'world')
console.log(o)

