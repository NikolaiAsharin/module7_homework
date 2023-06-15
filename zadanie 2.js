// *Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const myInfo = {
  name: `Andrey`,
  nick: `A_Stalk`,
  age: 35,
  city: `Moscow`,
};
function getObjInfo(str, obj) {
  console.log(str in obj);
}
getObjInfo(`name`, myInfo);
