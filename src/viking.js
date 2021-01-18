// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        }
          
        attack(){
        return this.strength}

        receiveDamage(damage){
            this.health = this.health-damage
        }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage){
        this.health = this.health-damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } 
        return `${this.name} has died in act of combat`
    }//end of function

    battleCry(){
        return "Odin Owns You All!"
    }

}


// Saxon

class Saxon extends Soldier{
    receiveDamage(damage){
        this.health = this.health-damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } 
        return `A Saxon has died in combat`
    }
}
  
// // War

class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(vikingObj){
        this.vikingArmy.push(vikingObj)
    }
    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj)
    }


    vikingAttack(){
        let randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let chosenSaxon = this.saxonArmy[randomIndexSaxon]

        let randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length)
        let chosenViking = this.vikingArmy[randomIndexViking]

        let output = chosenSaxon.receiveDamage(chosenViking.strength);

        if (chosenSaxon.health <= 0){
            this.saxonArmy.splice(randomIndexViking, 1)
        }

        return output;
    }

    saxonAttack(){
        let randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length)
        let chosenViking = this.vikingArmy[randomIndexViking]

        let randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let chosenSaxon = this.saxonArmy[randomIndexSaxon]

        let output = chosenViking.receiveDamage(chosenSaxon.strength);

        if (chosenViking.health <= 0){
            this.vikingArmy.splice(randomIndexSaxon, 1);
        }

        return output
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
        } 

        return "Vikings and Saxons are still in the thick of battle."
    }//end of the function
    
}//end of the class
