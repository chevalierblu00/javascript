class tueur {
    constructor(name, health) {
        this.name = name
        this.health = health
    }
};

class Survivant {
    constructor(name, stats) {
        this.name = name
        this.stats = stats
    }
}

class Stats {
    constructor(name, death, damage, final) {
        this.name = name
        this.death = death
        this.damage = damage
        this.final = final
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function randBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let jason = new tueur("jason", 100)

let survivant = []
let mort = []
let cliché = ["nerd", "sportif", "blonde", "fêtard", "L’hystérique"]
let prénom = ["Douglas", "Dorothy", "Johnson ", "Lisa", "Omar"]

for (let i = 0; i < 5; i++) {

    let degat = randBetween(0, 100)
    let mort = randBetween(0,100 - degat)
    let dégat_mort = 100 - degat - mort

    survivant.push(new Survivant(prénom[getRandomInt(prénom.length)],
                                new Stats(cliché[getRandomInt(cliché.length)],
                                            degat / 100,
                                            mort / 100,
                                            dégat_mort / 100)))
}




let jeux = 1


while ( jeux === 1 ) {

    let choose = survivant[0]
    
    let proba = Math.random()

    console.log(jason.name + " à " + jason.health + " PV")

    if (proba <= choose.stats.death) {

        console.log(jason.name + " à tué " + choose.name + " !");
        mort.push(survivant[0].name)
        survivant.shift()
    } else if (proba > choose.stats.death && proba <= choose.stats.damage) {

        console.log(choose.name + " à esquivé et a infligé 10 de dégâts !")
        jason.health -= 10
    } else {

        console.log(jason.name + " à tué " + choose.name + " mais il la frappé avant de mourrir")
        jason.health -= 15
        mort.push(survivant[0].name)
        survivant.shift()
    }

    if (jason.health <= 0) {
        if (mort.length == 0) {
            mort.push("personne")
        }

        if (survivant.length == 0) {
            console.log("Tout le monde est mort !")
            jeux = 0
        } else {
            console.log("Les survivants ont gagné mais RIP à " + mort)
            jeux = 0
        }
    } else if (survivant.length == 0) {
        console.log("Les survivants sont tous mort !")
        jeux = 0
    }
}