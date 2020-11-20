var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';
//đếm xem có bao nhiêu ký tự

console.log(greeting.length);

//kiểm tra nodemy nằm ở đâu
var nodemy = greeting.indexOf("nodemy");
console.log(nodemy);

//kiểm tra Nodemy nằm ở đâu
var Nodemy = greeting.indexOf("Nodemy");
console.log(Nodemy);
console.log("=======================");
//kiểm tra Welcome có bắt đầu hay không
if (greeting.startsWith("Welcome") == true) {
    console.log("Có");
} else {
    console.log("Không");
}
console.log("=======================");
//lấy chữ Academy

var Academy = greeting.substr(46, 7)
console.log(Academy);
console.log("=======================");

//split đê tách các từ

var tach = greeting.split(" ")
console.log(tach);
console.log("=======================");
// trim để xóa dâu cách ngoài rìa
var xoaCach = greeting.trim()
console.log(xoaCach);
console.log("=======================");
//dùng include để kiểm tra xem có Nodemy hay không

if (greeting.includes("Nodemy")) {
    console.log("Có chữa phần tử Nodemy");
} else {
    console.log("Không chứa phần tử Nodemy");
}
console.log("=======================");
//dùng replace để thay Nodemy thành NODEMY


var thayThe = greeting.replace(/Nodemy/g, "NODEMY");
console.log(thayThe);
console.log("=======================");
// toUpperCase

var hoa = greeting.toUpperCase()
console.log(hoa);
console.log("=======================");
//charAt

var vi_tri_4 = greeting.charAt(4)
console.log(vi_tri_4);