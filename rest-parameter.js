// Rest Parameter
function sum(name, ...data){
    let total = 0;
    for(const item of data){
        total += item;
    }
    console.log(`Total ${name} ada ${total} buah`);
}

sum("Jeruk", 2, 4, 5, 1, 8, 4, 7, 8);
// Total Jeruk ada 39 buah