// Optional Chaining
const person = {
    alamat:{
        negara: "Indonesia"
    }
};

let negara = person?.alamat?.negara;
console.log(negara);