//Employee Salaries//
//Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary
var employees = [
    { name: "bilal", hoursWorked: 10, hourlyRate: 10, salary: 200 },
    { name: "sara", hoursWorked: 20, hourlyRate: 20, salary: 600 },
    { name: "asif", hoursWorked: 40, hourlyRate: 30, salary: 800 },
];
//Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
function calculateSalary(employees) {
    if (employees.hoursWorked > 10) {
        var extraHours = employees.hoursWorked - 10;
        var extraSalary = extraHours * employees.hourlyRate * 1.5;
        var salary = employees.salary + extraSalary;
        return salary;
    }
    else {
        return employees.salary;
    }
}
var calculatedsalary = calculateSalary(employees[1]);
console.log(calculatedsalary);
