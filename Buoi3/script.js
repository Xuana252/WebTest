console.log("Bai 1");
function tinhTong() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) sum += i;
  return sum;
}

console.log("Tong tu 1 den 100 = " + tinhTong());

console.log("Bai 2");

let arr = [1, 2, 3, 4, 5];

let sum = 0;
for (num of arr) {
  sum += num;
}
console.log("Tong cac phan tu trong mang = " + sum);
console.log("Trung binh cac phan tu trong mang = " + sum / 5);

console.log("Bai 3");

function kiemTra(text)
{
    let reversed = [...text].reverse()
    for (let i=0;i<text.length;i++)
    {
        if(text[i] != reversed[i])
            return false
    }
    return true
}

console.log('Ket qua cua "racecar": ' + kiemTra('racecar').toString())
console.log('Ket qua cua "khong phai": ' + kiemTra('khong phai').toString())

console.log("Bai 4");

let hocSinh = {
    name: 'Le Nguyen Dong Xuan',
    age: 20,
    grade: 7.5,
}

function printinfo(hocSinh)
{
    for (let key in hocSinh)
    {
        console.log(`${key} : ${hocSinh[key]}\n`)
    }
}

printinfo(hocSinh)
