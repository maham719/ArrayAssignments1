//Define a TypeScript type alias named Student to represent a student with the following properties:
// name (string): The name of the student.
// grades (number[ ]): An array of grades for different subjects.

type Student={
    name:string;
    grades:number[];
}

// Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.

const students:Student[]=[
    {name:"maham",grades:[80,70,90]},
    {name:"fabiha",grades:[80,80,90]},
    {name:"shiza",grades:[40,50,60]},
];

// Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student

function calculateAverageGrade(student: Student): number {
    const totalGrades = student.grades.reduce((total, grade) => total + grade, 0);
    return  totalGrades / student.grades.length;
}

let result=calculateAverageGrade(students[0]);
console.log(students[0].name,result);
result=calculateAverageGrade(students[1]);
console.log(students[1].name,result);
result=calculateAverageGrade(students[2]);
console.log(students[2].name,result);