//Question 1

const object = {
  firstName: "",
  lastName: "",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    return (
      this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
    );
  },
};

const studentsArray = [
  Object.assign(Object.create(object), {
    firstName: "Test",
    lastName: "Test4",
    grades: [85, 90],
  }),
  Object.assign(Object.create(object), {
    firstName: "Test2",
    lastName: "Test5",
    grades: [75, 80],
  }),
  Object.assign(Object.create(object), {
    firstName: "Test3",
    lastName: "Test6",
    grades: [95, 88],
  }),
];

const averageGrades = studentsArray.map((e) => e.computeAverageGrade());

//Question 2

function Question2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

Question2.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};

Question2.prototype.computeAverageGrade = function () {
  return (
    this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
  );
};

const studentsArray2 = [
  new Question2("Test", "Test4"),
  new Question2("Test2", "Test5"),
  new Question2("Test3", "Test6"),
];

studentsArray2[0].inputNewGrade(85);
studentsArray2[0].inputNewGrade(90);
studentsArray2[1].inputNewGrade(75);
studentsArray2[1].inputNewGrade(80);
studentsArray2[2].inputNewGrade(95);
studentsArray2[2].inputNewGrade(88);

const averageGrades2 = studentsArray2.map((e) => e.computeAverageGrade());

//Question3
Array.prototype.sortAscending = function() {
    return this.slice().sort((a, b) => a - b);
};

console.log(averageGrades)
console.log(averageGrades2)
console.log(averageGrades2.sortAscending())