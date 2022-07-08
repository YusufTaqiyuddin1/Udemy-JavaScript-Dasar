// Arrow Function tanpa block
const greet = (value) => console.log(`Selamat Pagi ${value}`);

greet("Yusuf Taqiyuddin"); // Selamat Pagi Yusuf Taqiyuddin

// Arrow Function return value
const jumlah = (numb1, numb2) => numb1 + numb2;

console.log(jumlah(2, 3)); // 5

// Arrow Function sebagai parameter
function giveMeName(callback){
    callback("Yusuf");
}

giveMeName((name) => console.log(`Halo ${name}`)); // Halo Yusuf