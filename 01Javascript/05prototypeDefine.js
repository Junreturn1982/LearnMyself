https://kipalog.com/posts/prototype-la-khi-gi-
prototype là khỉ gì ?
Javascript 146  nodeepshit 12  prototype 1
 quocnguyen viết ngày 25/06/2016
Prototype là hệ thống phân chia quyền lực của giang hồ !

Sở dĩ ta nói như vậy là vì Khi hỏi object 1 property nào đó, nếu bản thân nó ko làm dc, nó sẽ nhờ prototype của nó, prototype này tuy-mặt-đầy-thẹo nhưng nếu vẫn chưa làm nổi, sẽ lại tiếp tục hỏi prototype cấp trên và cứ thế cho đến thằng prototype đại ca nhất, quyền lực nhất có tên là Object.prototype mà giang hồ còn gọi là bố già.

Object.getPrototypeOf(Object.prototype)
// null
Trên cấp của Object.prototype là ko có, do đó nó là soái ca nhất.

Array rất lưu manh và chỉ nghe lệnh cấp trên của nó là Array.prototype, nhưng đáng tiếc thằng này cũng là lính của Object.prototype thôi.

Function chợ búa cũng thế, hết mình vì đại ca Function.prototype của nó. Vị đại ca này, tuy mạnh nhưng vẫn là đàn em của Object.prototype.

Object.getPrototypeOf([]) === Array.prototype
// true

Object.getPrototypeOf(Function) === Function.prototype
// true
alt text

Như vậy ta có thể nói trong javascript, đại đa số đều là lính của object, hay nói cách khác trong javascript toàn bộ đều là object, ngoại trừ cặp vợ chồng suốt ngày sống trong cổ mộ, không thích ra đường: anh dương-undefined và chị tiểu-long-null.

Hiểu đặc tính của prototype, ta có thể lợi dụng nó để thêm chức năng cho đệ tử, kiểu như nếu sư phụ có thịt ăn thì đệ tử cũng phải được chia chén canh.

Lấy ví dụ, nếu ban đầu vợ chỉ biết mổi nấu ăn.

function Wife() {
  this.cook = function() { 
    console.log('nấu mì chua-cay-hao-hao'); 
  }
}

var ngoctrinh = new Wife();
ngoctrinh.cook(); 
// in ra nấu mì ...
mà thật ra thì ăn mì mãi cũng chán, do đó chúng ta sẽ thêm tính năng cho vợ

// thêm tính năng ấy vào function vợ.
Wife.prototype.ay = function() {
  // chức năng này khó, do các bạn tự code !
}
Như vậy, chúng ta biết ngoctrinh là đệ tử của Wife, hay nói cách khác là instance của constructor Wife. Do đó ngoctrinh ngay lập tức biết "ấy". Chúng ta có thể trực tiếp gọi ngoctrinh.ay() để kiểm tra.

Nguy hiểm hơn nữa, chúc ta có thể trực tiếp dạy cho Object.prototype tuyệt thế võ công makeSandwich:

Object.prototype.makeSandwich = function() {
  console.log('sudo make me a sandwich');
}
Và như thế ngoctrinh đã biết làm bánh

ngoctrinh.makeSandwich();
// sudo make me a sandwich
Là một coder hay tò và mò, chúng ta cần kiểm tra lại xem ngoctrinh biết làm những gì.

for(var skill in ngoctrinh) { console.log(skill); }
// cook (tự biết)
// ay ( mẹ vợ dạy)
// makeSandwich ( mẹ của mẹ vợ dạy )
Tuy nhiên, thật bất ngờ ngoctrinh còn biết toString(), toLocaleString(), hasOwnProperty() v..v.. nữa, mấy thứ này là quà khuyến mãi tặng kèm từ 2 bên nhà nội ngoại của ngoctrinh, mà chúng ta ko cần.

Chưa hết, ai lại muốn 1 bà vợ mà tuỳ thời sẽ bị nhà vợ dạy thêm vào những thứ khác, không thể kiểm soát dc. Một ngày đẹp trời nào đó, lỡ như:

Object.prototype.karate = function() {
  console.log('dùng khi chồng nhậu khuya');
}
Thì coi như xong. Do đó trong những trường hợp này, khi mà chúng ta ko cần đến sức mạnh của prototype, ko cần kế thừa gì cả, thì Object.create(null) sẽ giúp chúng ta tạo ra object thuần khiết, trong trắng ko kế thừa.

var ngoctrinh = Object.create(null);

Object.prototype.karate = function() {
  console.log('dùng khi chồng nhậu khuya');
}

ngoctrinh.karate(); 
// TypeError: ngoctrinh.karate is not a function
// yay so much win !
Vậy là chúng ta tha hồ đi nhậu về khuya.