// Object Method
const person1 = {
    name: "Yusuf Taqiyuddin",
    sapa: function(name){
        console.log(`Hallo ${name}`);
    }
};

person1.sapa("Yusuf"); // Hallo Yusuf

// Object Method Arrow function
const person2 = {
    name: "Yusuf",
    greet: (name) => {console.log(`Hallo ${name}`)}
};

person2.greet("Udin"); // Hallo Udin