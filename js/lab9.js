//Question 1

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
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
  }

  remove(value) {
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
  }

  print() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(`LinkedList{${values.join(",")}}`);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print();
linkedList.remove(3);
linkedList.print();

//Question 2

class Student {
  constructor(studentId) {
    this.id = studentId;
    this.answers = [];
  }

  addAnswer(question) {
    this.answers.push(question);
  }
}

class Question {
  constructor(qid, answer) {
    this.id = qid;
    this.ans = answer;
  }

  checkAns(answer) {
    return this.ans === answer;
  }
}

class Quiz {
  constructor(questions, students) {
    this.qs = new Map();
    this.students = students;

    for (const question of questions) {
      this.qs.set(question.id, question.ans);
    }
  }

  scoreStudent(sid) {
    const student = this.students.find((s) => s.id === sid);

    if (!student) {
      return null;
    }

    let score = 0;

    for (const ans of student.answers) {
      const correctAns = this.qs.get(ans.id);

      if (correctAns && ans.checkAns(correctAns)) {
        score++;
      }
    }

    return score;
  }

  getAverageScore() {
    let totalScore = 0;

    for (const student of this.students) {
      const score = this.scoreStudent(student.id);
      totalScore += score;
    }

    return totalScore / this.students.length;
  }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));
const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));
const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudent(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudent(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
