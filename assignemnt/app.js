// ***********************  Question: 1  *****************************************

class PersonAccount{
    constructor(fn,ln,inc,exp){
        this.firstName = fn;
        this.lastName = ln;
        this.incomes = inc;
        this.expenses = exp;
        this.totalInc = 0;
        this.totalExp = 0;
    }
    totalIncome(){
        this.incomes.forEach((income) => {
            for(let key in income){
                this.totalInc += income[key] 
            }
        })
        console.log(`Your total income is ${this.totalInc}`)
    }

    totalExpense(){
        this.expenses.forEach((expense) => {
            for(let key in expense){
                this.totalExp += expense[key] 
            }
        })
        console.log(`Your total expense is ${this.totalExp}`)
    }

    accounInfo(){
        console.log(`Account name: ${this.firstName} ${this.lastName} \nMonthly income: ${this.totalInc} \nMonthly expense: ${this.totalExp}`)
    }

    addIncome(newIncome){
        this.incomes.push(newIncome);
        console.log(this.incomes)
    }

    addExpense(newExpense){
        this.expenses.push(newExpense)
        console.log(this.expenses)
    }

    accountBalance(){
        console.log(`Your account balance is: ${this.totalInc}`)
    }
}

let hassan = new PersonAccount('Hassan', 'Shahid', [{job:100000},{rent:20000}],
[{grocery:10000},{bills:20000}])

hassan.totalIncome()
hassan.totalExpense()
hassan.addIncome({buisness:50000})
hassan.accounInfo()

// ***********************  Question: 2  *****************************************

class autoMobile{
    constructor(_name,_model,_color,_type){
        this.name = _name;
        this.model = _model;
        this.color = _color;
        this.type = _type;
    }

    openDoor(){
        console.log('opening doors')
    }

    closeDoor(){
        console.log('closing doors')
    }

    start(){
        console.log('starting engine')
    }

    close(){
        console.log('stopping engine')
    }
}

// ***********************  Question: 3  *****************************************


class car extends autoMobile{
    constructor(_name,_model,_color,_type,_engine){
        super(_name,_model,_color,_type);
        this.engine = _engine;
    }
}
class bus extends autoMobile{
    constructor(_name,_model,_color,_type,_seats){
        super(_name,_model,_color,_type);
        this.seats = _seats;
    }
}
class truck extends autoMobile{
    constructor(_name,_model,_color,_type,_wheels){
        super(_name,_model,_color,_type);
        this.wheels = _wheels;
    }
}

