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
}

// Student class constructor
class Student extends Person {
    constructor(traits) {
        super(traits);
        this.previousBackround = traits.previousBackround;
        this.className = traits.className;
        this.favSubjects = traits.favSubjects;
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
    favSubjects: ['JavaScript', 'HTML', 'CSS']
});

taylor.listSubjects();
chance.standup('web17_chance');
console.log(josh.catchPhrase);