let add = function (num1, num2) {
    let users = ['eric', 'tom'];
    users.forEach(item=> {
        console.log(item);
    });
    users.findIndex(item => {
        return item === 'eric'
    });
    return num1 + num2;
};

let p1 = function () {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('数据1')
        }, 100)
    })
};

let p2 = function () {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('数据2')
        }, 100)
    })
};

let pAsync = async function () {
    let pp1 = await p1();
    let pp2 = await p2();
    console.log(pp1, pp2);
};

class Person {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return this.x + ',' + this.y;
    }
}

export {
    add,
    pAsync,
    Person
}
