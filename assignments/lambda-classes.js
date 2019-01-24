// CODE here for your Lambda Classes

class Person {
  constructor(personAtts) {
    this.name = personAtts.name;
    this.age = personAtts.age;
    this.location = personAtts.location;
    this.gender = personAtts.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAtts) {
    super(instructorAtts);
    this.speciality = instructorAtts.speciality;
    this.favLanguage = instructorAtts.favLanguage;
    this.catchPhrase = instructorAtts.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name}receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(student1Atts) {
    super(student1Atts);
    this.previousBackground = student1Atts.previousBackground;
    this.className = student1Atts.className;
    this.favSubjects = student1Atts.favSubjects;
  }
  listsSubjects(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.
        `;
  }
}

class ProjectManagers extends Instructor {
  constructor(pmAtts) {
    super(pmAtts);
    this.gradClassName = pmAtts.gradClassName;
    this.favInstructor = pmAtts.favInstructor;
  }
  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const kyle = new Instructor({
  name: "kyle",
  location: "Bedfor",
  age: 39,
  gender: "male",
  speciality: "redux",
  favLanguage: "JavaScript, Python, Elm etc.",
  catchPhrase: "Don't forget the homies"
});
console.log(kyle.name);
console.log(kyle.gender);
console.log(kyle.demo("HTML and CSS"));

const sarah = new Student({
  name: "sarah",
  location: "new hampshir",
  age: 30,
  gender: "female",
  previousBackground: "IT support",
  className: "WEBPT4",
  favSubjects: ["Html", "CSS", "JavaScript"]
});
console.log(sarah.listsSubjects(sarah.favSubjects));
console.log(sarah.PRAssignment("Java Script"));
console.log(sarah.sprintChallenge("Java Script II"));

const alex = new ProjectManagers({
  name: "alex",
  location: "Boston",
  age: 24,
  gender: "male",
  gradClassName: "CS1",
  favInstructor: "Sean"
});
console.log(alex.standup("web4"));
console.log(alex.debugCode(sarah, "Java Script II"));
