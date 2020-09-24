let lovable = [{
    name: "Sanchit",
    age: "22",
    country: "India",
    Hobbies: ['code', 'love', 'sports']
}, {
    name: "Ram",
    age: "25",
    country: "India",
    Hobbies: ['teach', 'love', 'maths']
}, {
    name: "Tanya",
    age: "23",
    country: "Indonesia",
    Hobbies: ['talk', 'love', 'anime']
}, {
    name: "Poojan",
    age: "22",
    country: "Japan",
    Hobbies: ['baby', 'love', 'crying']
}];

function display(lovable) {
    lovable.forEach(element => {
        console.log(`Name: ${element.name} 
                     Age:${element.age} 
                     Country:${element.country} 
                     Hobbies:${element.Hobbies}`);
    });
}

function op_1() {
    for (let i = 0; i < lovable.length; i++) {
        if (lovable[i].age < 30) {
            const element = lovable[i];
            console.log(`Name: ${element.name} 
                     Age:${element.age} 
                     Country:${element.country} 
                     Hobbies:${element.Hobbies}`);
        }
    }
}

function op_2() {
    for (let i = 0; i < lovable.length; i++) {
        if (lovable[i].country == "India") {
            const element = lovable[i];
            console.log(`Name: ${element.name} 
                     Age:${element.age} 
                     Country:${element.country} 
                     Hobbies:${element.Hobbies}`);
        }
    }
}
display(lovable);
