// CODE here for your Lambda Classes

// Person class constructor
class Person {
    constructor(traits) {
        this.name = traits.name;
        this.age = traits.age;
        this.location = traits.location;
        this.gender = traits.gender;
    }

    speak() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
    }
}


// Instructor class constructor                                                            
class Instructor extends Person {
    constructor(traits) {
        super(traits);
        this.specialty = traits.specialty;
        this.favLanguage = traits.favLanguage;
        this.catchPhrase = traits.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
    changeGrade(student) {
        let gradeDifference = Math.round((Math.random() * 10) * (Math.random() * 10))
        if((Math.round(Math.random() * 10)) % 2 == 0) {
            student.grade = student.grade + gradeDifference;
            if(student.grade > 70) {
                console.log(`${this.name} changed ${student.name}'s grade by adding ${gradeDifference}% to their grade. ${student.name}'s grade is now ${student.grade}%. Since ${student.name}'s grade is now above a 70% they are eligible to graduate!`);
            } else {
                console.log(`${this.name} changed ${student.name}'s grade by adding ${gradeDifference}% to their grade. ${student.name}'s grade is now ${student.grade}%.`);
            }
        } else {
            let oldGrade = student.grade;
            student.grade = student.grade - gradeDifference;
            if(student.grade <= 0) {
                student.grade = 0;
                console.log(`${student.name}'s grade was ${oldGrade}% before ${this.name} subtracted ${gradeDifference}% from their grade. A grade this low isn't acceptable, please turn in your badge and gun`);
            } else if(student.grade > 70) {
                console.log(`${this.name} changed ${student.name}'s grade by subtracting ${gradeDifference}% from their grade. ${student.name}'s grade is now ${student.grade}%. Despite this deduction, ${student.name} is still eligible for graduation.`);
            } else {
                console.log(`${this.name} changed ${student.name}'s grade by subtracting ${gradeDifference}% from their grade. ${student.name}'s grade is now ${student.grade}%.`);
            }
        }
    }
}

// Student class constructor
class Student extends Person {
    constructor(traits) {
        super(traits);
        this.previousBackround = traits.previousBackround;
        this.className = traits.className;
        this.favSubjects = traits.favSubjects;
        this.grade = traits.grade;
    }

    listSubjects() {
        console.log(...this.favSubjects);
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
    canGraduate() {
        if(this.grade > 70) {
            console.log(`Graduation thyme`)
        } else {
            console.log(`Your princess is in another castle`)
        }
    }
}

// PM class constructor
class ProjectManager extends Instructor {
    constructor(traits) {
        super(traits);
        this.gradClassName = traits.gradClassName;
        this.favInstructor = traits.favInstructor;
    }

    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
}



// Examples

const josh = new Instructor({
    name: 'Josh',
    age: 'however old Josh is',
    location: 'wherever Josh is',
    gender: 'M',
    specialty: 'teaching',
    favLanguage: 'JS',
    catchPhrase: 'Banjos time!'
});

const chance = new ProjectManager({
    name: 'Chance',
    age: 'however old Chance is',
    location: 'wherever Chance is at',
    gender: 'M',
    specialty: 'PMing',
    favLanguage: 'JS',
    catchPhrase: 'sooo time for code wars?',
    gradClassName: 'idk',
    favInstructor: 'Josh?'
});

const taylor = new Student({
    name: 'Taylor',
    age: 'however old Taylor is',
    location: 'wherever Taylor is at',
    gender: 'M',
    previousBackround: '?',
    className: 'Web17',
    favSubjects: ['JavaScript', 'HTML', 'CSS'],
    grade: 40
});

taylor.listSubjects();
chance.standup('web17_chance');
console.log(josh.catchPhrase);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
josh.changeGrade(taylor);
taylor.canGraduate();