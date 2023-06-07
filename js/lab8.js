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
Array.prototype.sortAscending = function () {
  return this.slice().sort((a, b) => a - b);
};

//Question4

const LinkedList = {
  head: null,
  Node: function(value) {
    return {
      value,
      next: null,
    };
  },
  add: function(value) {
    const newNode = this.Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  },
  remove: function(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let prev = null;

      while (current) {
        if (current.value === value) {
          prev.next = current.next;
          break;
        }

        prev = current;
        current = current.next;
      }
    }
  },
  print: function() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(`Object literal version`);
    console.log(`LinkedList{${values.join(",")}}`);
  },
};

function LinkedListConstructor() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedListConstructor.prototype.add = function(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};

LinkedListConstructor.prototype.remove = function(value) {
  if (!this.head) {
    return;
  }

  if (this.head.value === value) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        break;
      }

      prev = current;
      current = current.next;
    }
  }
};

LinkedListConstructor.prototype.print = function() {
  let current = this.head;
  let values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  console.log(`Constructor version`);
  console.log(`LinkedList{${values.join(",")}}`);
};

let linkedList = Object.create(LinkedList);

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); //Expected Result: LinkedList{1,2,3}
linkedList.remove(2);
linkedList.print();  //Expected Result: LinkedList{1,3};


let linkedList2 = new LinkedListConstructor();
linkedList2.add(1);
linkedList2.add(2);
linkedList2.add(3);
linkedList2.print(); //Expected Result: LinkedList{1,2,3};
linkedList2.remove(2);
linkedList2.print(); //Expected Result: LinkedList{1,3}


console.log(averageGrades);
console.log(averageGrades2);
console.log(averageGrades2.sortAscending());

