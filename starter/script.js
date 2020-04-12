

/*

var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}

var lastName = prompt('what is your name?', 'Harry Potter');
alert(lastName);
*/
/*
var age = [14,16,18,20,24]
for (var i = 0; i <= age.length; index++) {
};

var gate = function(age){
    if (age >= 18 ){
        console.log('you are older than ' + 18 + '. you drink beer!');
    }else{
        console.log('you can have a juice');
    }

}
gate(age[i]);

/*
age[0] >=18 ? console.log('drinks a beer')
: console.log('drinks a juice');
*/


/*******************
 * loops and iterations
 */

// lets see what this bullshit does
/*
// for loop
var john = ['John', 'Smith', 1980, 'teacher', false];
for (var i = 0; i < john.length; i++){// i++ to i = i + 1,   i += 2 to i = i +2...
    console.log(john[i]);
}

// while loop
var john = ['John', 'Smith', 1980, 'teacher', false];
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++
}
// continue and break statements

*/

/*

var john = ['John', 'Smith', 1980, 'teacher', false];
for (var i = 0; i < john.length; i++){// i++ to i = i + 1,   i += 2 to i = i +2...
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
  
}

var john = ['John', 'Smith', 1980, 'teacher', false];
for (var i = 0; i < john.length; i++){// i++ to i = i + 1,   i += 2 to i = i +2...
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
  
}

*/
// challenge 5, part 1

var john = {

    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42 ],
    tip: function(){

        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++){

            var percentage;

            var bill = this.bills[i];

            if(bill < 50){
                percentage = 0.2;
    
            } else if (bill >= 50 && bill < 200){
                percentage = 0.15;
    
            } else {
                percentage = 0.1;
            }
            this.tips[i] = percentage * bill;
            this.finalValues[i] = percentage * bill + bill;

        }
    }


}

john.tip();
console.log(john);





