const number = [10,10,5,15];

function sum(numbers){
    const output = 0;
    for(let i=0; i<number.length; i++){
        output += number[i];
    }
    return output;
}

const ans = number.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
}, 0);

console.log(ans);

function product(number){
    const output = 1;
    for(let i =0; i<number.length; i++){
        output = number[i] * output;
    }
    return output;
}

const productReducer = number.reduce((accumulator, currentNumber) => {
    return accumulator * currentNumber;
}, 1);

console.log(productReducer);

const transactions = [
    {type: "income", ammount: 1000},
    {type: "expense", ammount: 400},
    {type: "income", ammount: 200},
    {type: "expense", ammount: 700},
    {type: "income", ammount: 1500},
];

function balance(transactions){
    const output = 0;
    for(let i=0; i<transactions.length; i++){
        if(transactions[i].type === 'income'){
            output += transactions[i].ammount;
        }
        else if(transactions[i].type === 'expense'){
            output -= transactions[i].ammount;
        }
    }
    console.log(output);
    return output;
}

const result = transactions.reduce((acc, trans) => {
    if(trans.type === 'income'){
        acc += trans.ammount;
    }
    else if(trans.type === 'expense'){
        acc -= trans.ammount;
    }
    return acc; 
}, 0);

console.log(result);

async function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name:'John', age:30};
            resolve(data);

            reject(new Error("Something is not right"));
        }, 2000);
    });
}

async function getData(){
    try{
        const data = await fetchData();
        console.log(data); // process the fetched data
    }
    catch(error){
        console.log(error);
    }
}

getData();



