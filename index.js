// Тапсырма 1: "Деректермен жұмыс істеу"

let students = [
    { name: "Akerke", age: 18, upai: 84 },
    { name: "Yerkebulan", age: 21, upai: 83 },
    { name: "Asadbek", age: 21, upai: 81 },
    { name: "Meir", age: 13, upai: 82 },
    { name: "Qaisar", age: 12, upai: 80 }
];

students.forEach(function(student){
    console.log(student.name);
});

let kariStudent = students.filter(student => student.age > 20);
console.log(kariStudent)

let doubled = students.map(student => ({
    ...student, 
    upai: student.upai * 1.1
}));
console.log(doubled);

let zhalpyUpai = students.reduce((total, student) => total + student.upai, 0);
console.log(zhalpyUpai);

let maxUpai = students[0].upai
let zhogaryUpai = ""

for (let i = 1; i < students.length; i++) {
    if (maxUpai > students[i].upai){
        maxUpai = students[i].upai
        zhogaryUpai = students[i].name
    }
}

// Тапсырма 2: "Құндылықтарды талдау"

const products = [
    { name: "Telephone", baga: 12000 },
    { name: "Notebook", baga: 45000 },
    { name: "Qulaqqap", baga: 8000 },
    { name: "Sagat", baga: 15000 },
    { name: "Kitap", baga: 800 }
];

let zhogary = products.filter(product => product.baga > 1000);
console.log(zhogary);

let zhalpyBaga = products.reduce((total, product) => total + product.baga, 0);
console.log(zhalpyBaga);

let productAty = products.map(product => product.name);
console.log(productAty);

let skidkaPtoduct = products.filter(product => {
    if (product.baga > 10000) {
      return {
        ...product,
        baga: product.baga * 0.85
      };
    }
});
console.log(skidkaPtoduct);

// Тапсырма 3: "Тапсырма тізімі"

let tapsyrmalar = [
    { name: "Ui tapsyrmasyn oryndau", ayaqtaldy: false },
    { name: "Dukenge baru", ayaqtaldy: true },
    { name: "Zhattygu zhasau", ayaqtaldy: false },
    { name: "Kitap oqu", ayaqtaldy: true },
    { name: "As daiyndau", ayaqtaldy: false }
];

let oryndalmaganTapsyrma = tapsyrmalar.filter(tapsyrma => !tapsyrma.ayaqtaldy);
oryndalmaganTapsyrma.forEach(tapsyrma => alert(`Oryndalmagan tapsyrma: ${tapsyrma.name}`));

let tapsyrmaNomeri = prompt("Tapsyrma nomerin engiziniz (0 bastap):");

if (!(tapsyrmaNomeri) && tapsyrmaNomeri >= 0 && tapsyrmaNomeri < tapsyrmalar.length) {
    tapsyrmalar[tapsyrmaNomeri].ayaqtaldy = true;
    console.log(`Tapsyrma ayaqtaldy: ${tapsyrmalar[tapsyrmaNomeri].name}`);
} else {
    console.log("Qate engizdiniz");
}

let oryndalganTapsyrma = tapsyrmalar.filter(tapsyrma => tapsyrma.ayaqtaldy);
console.log("Ayaqtalgan tapsyrmalar:", ayaqtaldy);

// Тапсырма 4: "Жоғарғы оқушыларды анықтау"

const students = [
    { name: "Алима", grades: [90, 85, 88] },
    { name: "Ерлан", grades: [70, 75, 80] },
    { name: "Диас", grades: [95, 90, 92] }
];

students.forEach(student => {
    const zhalpyUpai = student.grades.reduce((sum, grade) => sum + grade, 0);
    student.ortasha = zhalpyUpai / student.grades.length;
});
console.log("Ortasha upailar:", students);

const zhogaryUpai = students.filter(student => student.ortasha > 85);
console.log("Ortasha upai 85-ten zhogary:", zhogaryUpaie);

const suryptauStudent = [...students].sort((a, b) => a.ortasha - b.ortasha);
console.log("Suryptalgan studentter:", suryptauStudent);r