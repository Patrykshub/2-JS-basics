

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


// challenge part 2  gejostwo nie dziala, juz dziala.

var mark = {

    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    tip: function(){

        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++){

            var percentage;

            var bill = this.bills[i];

            if(bill < 100){
                percentage = 0.2;
    
            } else if (bill >= 100 && bill < 300){
                percentage = 0.1;
    
            } else {
                percentage = 0.25;
            }
            this.tips[i] = percentage * bill;
            this.finalValues[i] = percentage * bill + bill;

        }
    }


}

mark.tip();
console.log(mark);

    function calcAverage (tips){
        var sum = 0;
            for(var i = 0; i < tips.length; i++){

                sum = sum + tips[i];

            }
            return average = sum / tips.length;


    }

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

    if (john.average > mark.average){
        console.log(john.fullName + '\s family pays higher tips, with an average of $' + john.average);
    } else if (mark.average > john.average){
        console.log(mark.fullName + '\s family pays higher tips, with an average of $' + mark.average);
    }else{
        console.log('the average tips are equal for both of the families');
    }



/**********************************
 * fucking around
 */
/*
var x ={
    
    liczby: [10, 12, 20, 18, 16, 33, 40, 50],

    podstawa: function(){

        for(i = 0; i < this.liczby.length; i++);

            if(this.liczby[i] < 20){
               console.log('to sa liczby ponizej 20:' + this.liczby[i]); 
            } else if (this.liczby[i] > 20 && this.liczby[i] < 35){
                console.log('te liczby >20&&<35' + this.liczby[i]);

            }   else {
                console.log('te liczby >35' + this.liczby[i]);
            }

    
    }
    

}
x.podstawa();
console.log(x);


*/





