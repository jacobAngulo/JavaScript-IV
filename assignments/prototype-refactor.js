/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

// function Parent(attributes) {
//   this.age = attributes.age;
//   this.location = attributes.location;
//   this.name = attributes.name;
//   this.phrase = attributes.phrase;
// }

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;    
    }
    
    destroy() {
        return "Object was removed from the game.";
    }
}

// const GameObject = function(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.dimensions = attributes.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return "Object was removed from the game.";
//   }
  
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
        this.name = attributes.name;      
    }

    takeDamage() {
    return `${this.name} took damage`
    }
}
  
//   const CharacterStats = function(attributes) {
//     GameObject.call(this, attributes);
//     this.healthPoints = attributes.healthPoints;
//     this.name = attributes.name;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage`
//   }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;    
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}
  
//   const Humanoid = function(attributes) {
//     CharacterStats.call(this, attributes);
//     this.team = attributes.team;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language;
//   };
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`
//   };
  
//   console.log(Humanoid);
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  
  //Hero boi
class Hero extends Humanoid {
    constructor(attributes) {
        super(attributes);
    }

    attack(target) {
        if(this.healthPoints > 0) {
            if(target.healthPoints > 0) {
              let damage = (Math.round(Math.random() * 10));
              target.healthPoints = target.healthPoints - damage;
              if (target.healthPoints > 0) {
                console.log(`${this.name} attacked ${target.name} for ${damage} points! ${target.name} now has ${target.healthPoints} health`)
              } else {
                console.log(`${this.name} attacked ${target.name} for ${damage} points and destroyed ${target.name}!`)
              }
            } else {
              console.log(`${this.name} kicked ${target.name}'s dead body`)
            }
          } else {
            console.log(`${this.name}'s body twitched`)
          }
      
    }
}

// const Hero = function(attributes) {
// Humanoid.call(this, attributes);
// }

// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.attack = function(target) {
// if(this.healthPoints > 0) {
//     if(target.healthPoints > 0) {
//       let damage = (Math.round(Math.random() * 10));
//       target.healthPoints = target.healthPoints - damage;
//       if (target.healthPoints > 0) {
//         console.log(`${this.name} attacked ${target.name} for ${damage} points! ${target.name} now has ${target.healthPoints} health`)
//       } else {
//         console.log(`${this.name} attacked ${target.name} for ${damage} points and destroyed ${target.name}!`)
//       }
//     } else {
//     console.log(`${this.name} kicked ${target.name}'s dead body`)
//     }
// } else {
//     console.log(`${this.name}'s body twitched`)
// }
// }

//Villain boi
class Villain extends Hero {
    constructor(attributes) {
        super(attributes);
    }
}

// const Villain = function(attributes) {
// Humanoid.call(this, attributes);
// }

// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.attack = function(target) {
// if(this.healthPoints > 0) {
//     if(target.healthPoints > 0) {
//     let damage = (Math.round(Math.random() * 10));
//     target.healthPoints = target.healthPoints - damage;
//     if (target.healthPoints > 0) {
//         console.log(`${this.name} attacked ${target.name} for ${damage} points! ${target.name} now has ${target.healthPoints} health`)
//     } else {
//         console.log(`${this.name} attacked ${target.name} for ${damage} points and destroyed ${target.name}!`)
//     }
//     } else {
//     console.log(`${this.name} kicked ${target.name}'s dead body`)
//     }
// } else {
//     console.log(`${this.name}'s body twitched`)
// }
// }






const aragorn = new Hero({
createdAt: new Date(),
dimensions: {
    length: 1,
    width: 1,
    height: 2,
},
healthPoints: 20,
name: 'Aragorn',
team: 'Ranger',
weapons: [
    'Andúril',
],
language: 'The laguage of man',
});

const lurtz = new Villain({
createdAt: new Date(),
dimensions: {
    length: 1,
    width: 1,
    height: 2,
},
healthPoints: 20,
name: 'Lurtz',
team: 'Uruk-hai',
weapons: [
    'Bow',
],
language: 'black speech',
});

lurtz.attack(aragorn);
aragorn.attack(lurtz);
lurtz.attack(aragorn);
aragorn.attack(lurtz);
lurtz.attack(aragorn);
aragorn.attack(lurtz);
lurtz.attack(aragorn);
aragorn.attack(lurtz);
lurtz.attack(aragorn);
aragorn.attack(lurtz);
lurtz.attack(aragorn);
aragorn.attack(lurtz);
  
  