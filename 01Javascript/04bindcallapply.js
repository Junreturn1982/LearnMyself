SERIES JAVASCRIPT SIDA – BIND, CALL VÀ APPLY TRONG JAVASCRIPT
08/03/2016 PHẠM HUY HOÀNG	2 COMMENTS
Để hiểu rõ về các hàm được đề cập trong bài viết này, các bạn nên ôn lại chút kiến thức về object trong javascript và đít (this) trong javascript nhé. Như đã hứa, trong bài này mình sẽ giới thiệu bộ 3 function bind, call ,apply. Đây là 3 hàm tạo nên sự mạnh mẽ và bá đạo của JavaScript.

Trói đít (this) lại bằng bind

Bind là một hàm nằm trong Function.prototype, do đó chỉ có function mới có khả năng gọi nó. Như đã nhắc tới trong bài viết về this, bind được dùng để xác định tham số this cho một function.

1


Như trong trường hợp dưới đây, khi ta truyền hàm showName vào như một callback cho hàm button.click, giá trị this ở đây chính là button đó. Để hàm chạy đúng, ta dùng bind để bind giá trị person và this.

var person = {
  firstName: 'Hoang',
  lastName: 'Pham',
  showName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};

//showName truyền vào như callback, ở đây this chính là button
$('button').click(person.showName); 

// Dùng bind để xác định giá trị this
$('button').click(person.showName.bind(person)); //this ở đây vẫn là object person
view rawthisSample.js hosted with ❤ by GitHub
Không chỉ bind được giá trị this, bind còn bind được các tham số truyền vào cho hàm nữa. Do đó, Bind còn được dùng để viết partial function.

Nói một cách đơn giản, partial function tức là tạo ra 1 function mới từ 1 function cũ bằng cách gán mặc định một số tham số cho function cũ đó. Bạn hãy xem ví dụ cụ thể sau. Mình có một hàm log đơn giản có 3 tham số:

function log(level, time, message) {
  console.log(level + ' - ' + time + ': ' + message);
}
view rawsimpleLog.js hosted with ❤ by GitHub
Giả sử mình muốn tạo một hàm log khác, ghi lại các log error của hôm nay, mình có thể viết một hàm mới dựa theo hàm log cũ:

function log(level, time, message) {
  console.log(level + ' - ' + time + ': ' + message);
}

function logErrToday(message) {
  log("Error", "Today", message);
}

logErrToday("Server die."); // Error - Today: Server die.
view rawlogImproved.js hosted with ❤ by GitHub
Thay vì viết như thế, mình có thể viết đơn giản hơn bằng các dùng bind. Ở đây log là function cũ, logErrToday là function mới, được tạo ra bằng cách gán mặc định 2 tham số level và time.

function log(level, time, message) {
  console.log(level + ' - ' + time + ': ' + message);
}

// Không có this nên set this là null
// Set mặc định 2 tham số level và time
var logErrToday = log.bind(null, 'Error', 'Today');

// Hàm này tương ứng với log('Error', 'Today', 'Server die.')
logErrToday("Server die."); 
// Error - Today: Server die.
view rawlogBind.js hosted with ❤ by GitHub
Partial Function còn được gọi là Curry (Nhiều người bảo 2 cái đó là một, nhiều người bảo 2 cái đấy khác nhau). Nếu bạn thấy khái niệm partial function/curry khá lạ tai cũng đừng lo, chúng ít được dùng trong Java, C# mà hay được sử dụng khá nhiều trong một số ngôn ngữ kiểu lập trình hàm (functional programming) như Haskell, F#, Scala,…. . Functional programming khá là khó học, dễ nhức đầu đau não, bạn nào muốn thử sức thì cứ kiếm ngôn ngữ Haskell mà phang nhé.

Call và Apply, tuy 2 mà 1, thấy 1 mà 2

Đây là 1 cặp anh em… nhầm, chị em song sinh trong JavaScript. Hai hàm này nằm trong prototype của Function (Function.prototype), do đó chỉ function mới có thể gọi. Chúng có chung một chức năng lại: Gọi 1 function, xác định tham số this, truyền các tham số còn lại vào.

Điểm khác nhau là apply truyền vào một array chứa toàn bộ các tham số còn call truyền lần lượt từng tham số. Dể dễ nhớ, ta có thể nhẩm “A là một Array, C là nhiều Cục“.

apply

call

Cùng xem ví dụ đơn giản này về call và apply, bạn sẽ hiểu ngay

// Tìm max bằng cách gọi hàm Math.max
Math.max(4, 3, 2, 10);

// Thay vì gọi trực tiếp hàm Math.max, ta có thể dùng call
// Set this bằng null
Math.max.call(null, 4, 3, 2, 10);

// Apply tương tự call, nhưng không truyền lần lượt
// Mà truyền một array chứa toàn bộ các tham số
Math.max.apply(null, [4, 3, 2, 10]);
view rawcallAndApply.js hosted with ❤ by GitHub
Call và apply thường được dùng để mượn hàm (borrowing function). Các bạn thử đọc xem dòng code dưới đây làm gì?

function test(firstParam, secondParam, thirdParam){
  var args = Array.apply(null, arguments);
  console.log(args);
}

test(1, 2, 3); // [1, 2, 3]
view rawsimpleCall.js hosted with ❤ by GitHub
Gợi ý: Arguments là một biến cục bộ trong function, chứa toàn bộ các tham số được truyền vào.

Đáp án: Arguments là một object giống array nhưng không phải là array (đấy, thấy sida chưa). Arguments giống array vì nó có field length, có thể truy cập các giá trị nó chứa thông qua index 0,1,2. Tuy nhiên, do arguments không phải là array nên nó không thể gọi các hàm của Array.prototype.

Do đó, ta phải sử dụng call/apply để mượn một số hàm trong Array.prototype, các hàm này sẽ trả ra một array cho ta xử lý. Dòng code phía trên chuyển object arguments thành một array. Sao rắc rối quá vậy?? Sao arguments không phải là array luôn đi cho mọi chuyện đơn giản? Lý do là Javascript nó sida. Hồi mới biết thằng arguments này mình cũng muốn chửi thề như vậy đấy.

4

Ngoài ra, call và apply còn được dùng để monkey-patching hoặc tạo spy. Ta có thể mở rộng chức năng của một hàm mà không cần sửa source code của hàm đó. Ví dụ ta có hàm accessWeb của object computer.

var computer = {
  accessWeb : function(site) {
    // Đi tới site nào đó
    console.log ('Go to: ' + site);
  }
};

computer.accessWeb('thiend*a.com'); //Go to: thiend*a.com
view rawmonkeyPatch.js hosted with ❤ by GitHub
Sử dụng call, ta có thể ghi thêm log trước và sau khi hàm accessWeb được gọi mà không can thiệp vào code của hàm đó

var computer = {
  accessWeb : function(site) {
    // Đi tới site nào đó
    console.log ('Go to: ' + site);
  }
};

var oldFunction = computer.accessWeb;
// Tráo function accessWeb bằng hàm mới
computer.accessWeb = function() {
  console.log('Con gà bắt đầu vào web');
  oldFunction.apply(this, arguments); // giữ nguyên hàm cũ
  console.log('Con gà đã vào web');
}

computer.accessWeb('thiend*a.com'); 
// Con gà bắt đầu vào web
// Go to: thiend*a.com
// Con gà đã vào web
view rawmonkeyPatchCall.js hosted with ❤ by GitHub
 

Nói nhỏ các bạn nghe nè, mấy cái call/apply với bind này cũng ít người rành, do đó các bạn đọc xong bài này có thể lấy kiến thức ra để lòe thiên hạ. Vì ít người biết nên nếu viết code mà dùng call, apply v…v bạn nhớ giải thích rõ nhé, viết code khó hiểu dễ bị ăn chửi lắm (Nói thật đấy, ngày xưa đoạn code Array.call gì đó làm mình khó hiểu, đau cả đầu nên phải lôi cả họ nhà thằng code ra mà chửi).

Bài viết có tham khảo một số nguồn ở đây:

http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
http://codeblog.jonskeet.uk/2012/01/30/currying-vs-partial-function-application/