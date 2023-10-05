// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength
    }

    receiveDamage(theDamage) {
       this.health = this.health - theDamage
    }

}
// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
    
        
}

// Saxon
class Saxon  extends Soldier{
    constructor (health, strength) {
        super(health, strength);
     }
     receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if (this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking (aVikingObj) {
        this.vikingArmy.push(aVikingObj);       
    }
    addSaxon(aSaxonObj) {
        this.saxonArmy.push(aSaxonObj);
    }
    vikingAttack() {
        let saxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[saxonNumber];
        let vikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[vikingNumber];
        let result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <=0) {
            this.saxonArmy.splice(saxonNumber, 1);
        }
        return result;
    }
    saxonAttack() {
        let saxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[saxonNumber];
        let vikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[vikingNumber];
        let result = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <=0) {
            this.vikingArmy.splice(vikingNumber, 1);
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
      
        } else {
           return "Vikings and Saxons are still in the thick of battle.";
        }

    }
}
