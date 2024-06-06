//Employee Salaries//

// Define a type alias named Employee with the following properties:
// name (string): The name of the employee.
//hoursWorked (number): The number of hours the employee worked
//hourlyRate (number): The hourly rate of the employee
//salary (number): The base salary of the employee.

type Employee = {
    name:string;
   hoursWorked:number;
   hourlyRate:number;
   salary:number;
}

//Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary

let employees:Employee[]=[
    {name:"bilal",hoursWorked:10,hourlyRate:10,salary:200},
    {name:"sara",hoursWorked:20,hourlyRate:20,salary:600},
    {name:"asif",hoursWorked:40,hourlyRate:30,salary:800},
]

//Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.

function calculateSalary(employees:Employee):number{
    if(employees.hoursWorked>10){
        const extraHours = employees.hoursWorked - 10;
        const extraSalary = extraHours * employees.hourlyRate * 1.5;
       let salary=employees.salary+extraSalary;
       return salary;
    }else {
       
        return employees.salary
    }
}

let calculatedsalary=calculateSalary(employees[1]);
console.log(calculatedsalary);

