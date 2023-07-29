//Тесты 1
// 1)
//что выведет в консоли функция call
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
//'Alex' = 24



// 2)
//получите доступ к методу call и запустите его
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
person.call()


// 3)
//выведите в консоли все ключи из обьекта с помощью for
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
for(let i in person){
    console.log(i)
}

// 4)
//выведите в консоли все значения из обьекта с помощью for
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
for(let i in person4){
    console.log(person[i])
}

// 5)
//преобразуйте обьект ниже в массив
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
let total = []
let l = 0
function toArray(a){
    total = []
    for(let i in a){
        l = total.length
        total[l] = []
        total[l][0] = i
        total[l][1] = a[i]
    }
    return total
}
console.log(toArray(person))

// 6)
//преобразуйте обьект ниже в строку
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
console.log(JSON.stringify(person))

// 7)
//преобразуйте обьект ниже в конструктор функции
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
function Me(){
    this.name = 'Alex'
    this.age = 24
    this.isMarried = false
    this.hasCar = false
    this.hasJob = true
    this.job = 'Programmer'
    this.childs = ['Hanz', 'Marry']
    this.awards = {itMaster: 'Legend rang', driver: 'Fast man'}
}

// 8)
//перечисли встроенные конструкторы javascript
//new Number,new Date ,new Array, new Function, new String,new Map, new Boolean, new Object,  new RegExp,  new Set

// 9)
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}




//Тесты 2
// 1) 
//создайте пустой обьект 3мя способами
let obj = {}
obj = new Object()
obj = Object.create() 

// 2)
//создайте обьект с вашими персональными данными 
//пример: 
let obj = {
    name: 'Alex',
    age: 24
}
let obj = {
    name: 'Rovshan',
    age: 15
}

// 3)
//чем является name в обьекте ниже?
let obj = {
    name: 'Alex',
    age: 24
}
//Ключом.

// 4)
//чем является 'Alex' в обьекте ниже?
let obj4 = {
    name: 'Alex',
    age: 24
}
//Значение

// 5)
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/
let obj = {}
obj.name = 'Samuil'
obj.Date = '04.05.1998'
obj.age = 24
obj.won = ['Mr. Future']
obj.awards = {highMath}
obj.hobbies = ['Reading', 'Programming']

// 6)
//выведите в консоли значение name из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.name)

// 7)
//выведите в консоли значение age из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.age)

// 8)
//выведите в консоли значение isMarried из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.isMarried)

// 9)
//выведите в консоли имя первого ребенка из обьекта
let obj= {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    children: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.children[0])

// 10)
//выведите в консоли имена всех детей с помощью for из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(let i of obj.children){
    console.log(i)
}

// 11)
//выведите в консоли значение itMaster из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj.awards.itMaster)

// 12)
//выведите в консоли все свойства с помощью for...in из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(let i in obj){
    console.log(i)
}

// 13)
//выведите в консоли значение всех свойств с помощью for...in из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
for(let i in obj){
    console.log(obj[i])
}

// 14)
//поменяйте имя дочери на 'Linda' в обьекте ниже
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj.childs[1] = 'Linda'

// 15)
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
obj.job = 'menedjer'

// 16)
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj['awards']['itMaster'])


// 17)
//выведите в консоли значение name из обьекта c помощью квадратных скобок
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
console.log(obj['name'])

// 18)
//удалите job из обьекта и поменяйте значение hasJob на 'false'
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj.job
obj.hasJob = false

// 19)
//удалите name из обьекта
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj.name

// 20)
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}
delete obj['job']
obj['hasJob'] = false




//Тесты 3


// 1)
//что такое JSON?
//java script object notation

// 2)
//зачем использовать JSON?
Формат JSON используется для упорядоченного хранения данных в процессе их обмена между веб-браузером или клиентской частью приложения и сервером или между разными серверами. Более того, благодаря текстовому виду строки, данные JSON можно легко передавать через любые другие каналы обмена информацией в интернете.
//
// 3)
//преобразуйте строку ниже в обьект JSON и выведите в консоли
let str = '{name: "Alex", age: 24}';
console.log(JSON.stringify(str))
//или
let str2 = '{"name": "Alex", "age": 24}'
console.log(str2)

// 4)
//преобразуйте обьект ниже в строку и выведите в консоли
//let obj = {name: "Alex", age: 24};
//console.log(JSON.stringify(obj))

// 5)
//создайте в отдельности 2 переменные и присвойте одному обьект JSON другому обьект Javascript
//let Json = '{"name": "Alex", "age": 24}'
//let Object = {name: 'Alex', age: 24}

// 6)
//какие типы данных может содержать JSON обьект?
//строка,null,массив, число, объект,  логические данные

// 7)
//какие типы данных не может содержать обьект?
//Даты и функции

// 8)
//в каком виде мы получаем JSON с сервера?
//в виде строки.

// 9)
//в каком виде мы отправляем JSON на сервер?
//в виде строки.