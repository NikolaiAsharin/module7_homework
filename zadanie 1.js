// *Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const myInfo = {
  name: `Andrey`,
  nick: `A_Stalk`,
  age: 35,
  city: `Moscow`,
};
function getObjInfo(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + `: ` + obj[key]);
    }
  }
}
getObjInfo(myInfo);
