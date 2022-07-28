//Tên biến bị sai khi bắt đầu bằng số ,bắt đầu bằng ký tự đặc biệt , và khi trùng với keywords trong javascript
//vidu
// let @name = "@tuan";
// let char = "27tuoi";
// let 0235m = "3021";
//cách kiểm tra kểu dữ liệu sử dụng Toán tử typeof sẽ giúp bạn kiểm tra kiểu dữ liệu của một dữ liệu bất kỳ, cách sử dụng như sau:
//
//Có bao nhiêu kiểu dữ liệu cơ bản trong Javascript, kể tên? có 7 loại dữ liệu trong javascript
//String : chuỗi
//number : số
//Boolean : kiểu logic true / false 
//null  : các giá trị không xác định  - một loại độc lập có một giá trị duy nhất null.
//undefined : các giá trị chưa được gán – một kiểu độc lập có một giá trị duy nhất
//object  :  các cấu trúc dữ liệu phức tạp hơn.
//array
//*Bài tập
//bài 2
// let MSG =  " Rikkei is awesome";
// let  studentCount = "0";
// console.log(MSG);
// console.log(studentCount);



//bài 3
// let MSG =  " Rikkei is awesome";
// let  studentCount = "0";
// console.log(MSG);
// console.log(studentCount);
//  MSG = "Coding is hard but super cool and fun";
//  studentCount = "30";
// console.log(MSG);
// console.log(studentCount);
// let upper = MSG.toUpperCase();// CÁCH VIẾT 1 DÒNG THÀNH CHỮ TO
// console.log(upper);
// let lower = MSG.toLowerCase(); // CÁCH VIẾT 1 DÒNG THÀNH CHỮ NHỎ
// console.log(lower);




//tăng giá trị 1 số nên N đơn vị
// let studentCount = 30;
// let b = Number(prompt("nhập vào 1 số"));
// let tong = (studentCount)+(b);
// console.log(tong);



//bài 4
//alert("gửi ngàn trái tim tới người đang xem"); //alert thay cho console.log()



//bài5

// let A = prompt("tên của bạn là gì ");
// alert("Chào Bạn " + A);

//bài 6
// let A = prompt("firstName");
// let B = prompt("lastName");
// alert("Chào "+(A)+(B));
 

//bài 7
// let canhA = Number(prompt("nhập vào 1 cạnh "));
// dientich = canhA**2;
// alert("diện tích là :" + dientich) ;

//bài 8

// let bankinh = Number(prompt("Nhập vào bán kính hình tròn"));
// dientich = 3.14*bankinh**2;
// alert("diện thích hình tròn đó là :"+ dientich);

 //bài 9  chuyển độ c sang độ f
//  let doC = Number(prompt("Nhập vào nhiệt độ của bạn"));
//  doF = doC*1.8+32;
//  alert("nhiệt độ F của bạn là:" + doF);

//BÀI 10

let A = ("“The quick ___ fox jumps over the ___ dog”");
alert(A);
let B = prompt("Nhập từ cần thiết vào dấu _");
let C = prompt("Nhập từ tiếp theo vào dấu _");
alert (`kết quả là :The quick  ${B}  fox jumps over the  ${C}  `);







