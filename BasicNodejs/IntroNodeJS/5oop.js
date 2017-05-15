var person = {
	ho : "Nguyen",
	ten : "Hoang",
	chaomung : function(){
		console.log("Chao mung "+this.ho+" "+this.ten);
	}
}

person.chaomung();

console.log(person.ho);
console.log(person["ten"]);

/*=== prototype (function oop) ===*/

function KhoaHoc(ten,hocphi){
	this.Ten = ten;
	this.HocPhi = hocphi;
}
// prototype hanh dong
KhoaHoc.prototype.mota = function(){
	console.log("Khoa hoc "+this.Ten +" - "+this.HocPhi);
}

var nodejs = new KhoaHoc("Lap trinh NodeJS", 3000000);

nodejs.mota();