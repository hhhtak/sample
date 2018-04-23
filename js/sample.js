// $(function() {
console.log('あああ');
// });
var obj = { name: 10, from: 20 };
var aaa = { name: 10, from: 20 };

for (var key in obj ) {
    if ( obj.hasOwnProperty(key) ) {
        aaa[key] = [ obj[key] ];
        // aaa[key].push(obj[key]);
        console.log(aaa[key] + ":" + [ obj[key] ]);
    }
}

console.log(aaa);