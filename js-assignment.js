'use strict';
let institute = {
 mbaDepartment: [
   { name: 'Yogesh', salary: 10000 },
   { name: 'Vinoo', salary: 5000 }
 ],
 mcaDepartment: [
   { name: 'Prachi', salary: 40000 },
   { name: 'Tarang', salary: 25000 },
   { name: 'Sejal', salary: 20000 }
 ]
};

function calculateTotalSalary(institute){
 let totSalary = 0;
 for(let department in institute){
   let employeeArray = institute[department];
   for(let index = 0; index<employeeArray.length; index++){
     totSalary += employeeArray[index].salary
   }
 }
 return totSalary;
}

let totalSalary = calculateTotalSalary( institute );

console.log( 'Total Salary : ', totalSalary ); // expected result - Total Salary : 100000
