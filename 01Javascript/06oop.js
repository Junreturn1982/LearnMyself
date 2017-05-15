SERIES JAVASCRIPT SIDA – OOP TRONG JAVASCRIPT
23/02/2016 PHẠM HUY HOÀNG	9 COMMENTS
Trước khi xem bài này, các bạn nên ôn lại kiến thức bằng cách xem lại 2 bài viết về object và prototype trong series JavaScript sida. Trước khi phân tích về OOP trong JavaScript, mình sẽ nhắc lại sơ 1 số khái niệm trong OOP. Bạn nào quên rồi có thể lên wiki xem lại nhé: https://vi.wikipedia.org/wiki/Lập trình hướng đối tượng.

Trong phạm vi bài viết, ta sẽ bàn về 3 đặc tính của OOP, so sánh cách hiện thực chúng trong Java và JavaScript. Vì Wiki có sẵn rồi nên mình chỉ copy vào thôi, không giải thích lại lòng vòng nhé:


Encapsulation: Tính bao đóng và che giấu thông tin. Tính chất này không cho phép người sử dụng các đối tượng thay đổi trạng thái nội tại của một đối tượng. Chỉ có các phương thức nội tại của đối tượng cho phép thay đổi trạng thái của nó. Việc cho phép môi trường bên ngoài tác động lên các dữ liệu nội tại của một đối tượng theo cách nào là hoàn toàn tùy thuộc vào người viết mã. Đây là tính chất đảm bảo sự toàn vẹn của đối tượng.
Inheritance: Tính kế thừa. Đặc tính này cho phép một đối tượng có thể có sẵn các đặc tính mà đối tượng khác đã có thông qua kế thừa. Điều này cho phép các đối tượng chia sẻ hay mở rộng các đặc tính sẵn có mà không phải tiến hành định nghĩa lại. Tuy nhiên, không phải ngôn ngữ định hướng đối tượng nào cũng có tính chất này.
Polymophism: Tính đa hình. Thể hiện thông qua việc gửi các thông điệp (message). Việc gửi các thông điệp này có thể so sánh như việc gọi các hàm bên trong của một đối tượng. Các phương thức dùng trả lời cho một thông điệp sẽ tùy theo đối tượng mà thông điệp đó được gửi tới sẽ có phản ứng khác nhau. Người lập trình có thể định nghĩa một đặc tính (chẳng hạn thông qua tên của các phương thức) cho một loạt các đối tượng gần nhau nhưng khi thi hành thì dùng cùng một tên gọi mà sự thi hành của mỗi đối tượng sẽ tự động xảy ra tương ứng theo đặc tính của từng đối tượng mà không bị nhầm lẫn.
Object-oriented-programming-features

OOP trong Java

Như các bạn đã biết, Java là một ngôn ngữ hướng đối tượng, do đó việc hiện thực các đặc tính OOP rất đơn giản và nhanh gọn, dễ hiểu.

Tính bao đóng trong Java thể hiện bằng cách cho cách khai báo các trường private, chỉ có thể truy xuất trong qua các hàm get, set.

public class Person {
  private String firstName;
  private String lastName;
  private int age;
  
  public String getFirstName() { return this.firstName; }
  public void setFirstName(String firstName) { this.firstName = firstName; }
  
  public String getLastName() { return this.lastName; }
  public void setLastName(String lastName) { this.lastName = lastName; }
  
  public int getAge() { return this.age; }
  public void setAge(int age) { this.age= age; }
}
view rawjava_encapsulation.java hosted with ❤ by GitHub
Tính kế thừa và đa hình cũng khá đơn giản, chỉ cần extend và viết hàm mới đè lên là xong (các bạn để ý access modifier private và protect nhé, tí mình sẽ so sánh nó với JavaScript).

public class Person {
  private int personSecret; // Chỉ person truy xuất được
  protected int age; // Superman try xuất được
  public void say(String message)
  {
    System.out.println("Person said + " + message);
  }
}

// Kế thừa và override hàm say
public class Superman extends Person {
  public void say(String message)
  {
    System.out.println("Superman said + " + message);
  }
}
view rawjava_other.java hosted with ❤ by GitHub
OOP trong JavaScript

JavasSript thì ngược lại, do nó vốn sida nên ta phải áp dụng một số chiêu trò để hiện thực các đặc tính này. Trong JavaScript, để hiện thực tính bao đóng , ta có thể tạo ra 1 Constructor Function, đóng gói toàn bộ các trường và hàm vào 1 object. Thông thường, các bạn hay khai báo như sau:

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.showName = function() {
     console.log(this.firstName + ' ' + this.lastName);
  };
}

var psn1 = new Person('Hoang', 'Pham');

// các property khai báo vào biến this có thể bị truy xuất từ bên ngoài
// object không còn bao đóng nữa
psn1.firstName = 'changed';
console.log(ps1.firstName);
view rawno_encap.js hosted with ❤ by GitHub
Với các khai báo này, tính bao đóng không được đảm bảo. Các property có thể bị truy cập, thay đổi từ bên ngoài. Ở đây, ta phải sử dụng biến cục bộ.

function Person(firstName, lastName) {
  var fstName = firstName;
  var lstName = lastName;
  
  this.setFirstName = function(firstName) { fstName = firstName; };
  this.getFirstName = function() { return fstName; };
  
  this.setLastName = function(lastName) { lstName = lastName; };
  this.getLastName = function() { return lstName; }
}

var psn1 = new Person('Hoang', 'Pham');
console.log(ps1.fstName); // Undefined, không thể truy cập được


console.log(ps1.getFirstName()); // Hoang
view rawencap.js hosted with ❤ by GitHub
Tuy nhiên, biến cục bộ này chỉ có thể truy xuất trong Constructor Function, nó tương đương với các trường private trong Java. Trong javascript, không có cách nào để tạo ra các trường protected (Chỉ có thể truy cập từ class kế thừa) như Java và C# được. Việc kế thừa còn sida hơn,  như mình đã nhắc tới ở bài prototype, trong JavaScript không có từ khóa extends cũng chẳng có class, ta phải sử dụng prototype để kế thừa.

function Person() {
  this.firstName = 'Per';
  this.lastName = 'son';
  this.sayName = function() { return firstName + ' ' + lastName };
}

// Viết một Constructor Function khác
function SuperMan(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
// Sử dụng prototype để kế thừa
SuperMan.prototype = new Person();

// Tạo một object mới bằng Constructor Function 
var sm = new SuperMan('Hoang', 'Pham');
sm.sayName(); // Hoang Pham. Hàm này kế thừa từ prototype của Person
view rawinheritance.js hosted with ❤ by GitHub
Kết luận

Lời khuyên cuối cùng của mình là: Nếu bạn cảm thấy khó chịu với JavaScript, bạn có thể thử học TypeScript, CoffeeScript hoặc ES6. Mình chưa dùbg TypeScript bao giờ nhưng đã xem thử code và syntax thì thấy nó khá rõ ràng, trong sáng và bớt sida hơn JavaScript nhiều (Có class có extends đủ cả).