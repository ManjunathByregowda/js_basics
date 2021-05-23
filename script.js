console.log("Loading JS")


var a = "3";
console.log(a, typeof(a));

var b = 3;
console.log(b, typeof(b));

var c;
console.log(c, typeof(c));

var d = null;
console.log(d, typeof(d));

var e = true;
console.log(e, typeof(e));

var f = Symbol()
console.log(f, typeof(f));



// Hosting
console.log(g)
var g;

// if
a = 3, b = 2

if (a > b) {
    console.log(a,"is greater")
} else {
    console.log(b,"is greater")
}

// Function

function add(a, b) {
   var sum = a + b;
   console.log("Total count is", sum)
}
add(55, 33);