// With Statement
const person = {
  name: "Yusuf Taqiyuddin",
  age: 20,
  address: "Semarang",
};

with(person){
    console.log(name); // Yusuf Taqiyuddin
    console.log(address); // Semarang
}