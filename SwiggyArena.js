var readlineSync = require('readline-sync');

class Player {
    constructor() {
        this.name;
        this.health;
        this.attack;
        this.strength;
    }

    defendValue(dice) {
        return dice * this.strength;
    }

    attackValue(dice) {
        return dice * this.attack;
    }

    reduceHealth(damage) {
        this.health = Math.max(0, this.health - damage);
    }

    isDefeated() {
        return this.health === 0;
    }
}

class SwiggyArena {
    static play = false;

    static rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    static sleep(ms) {
        const start = Date.now();
        while (Date.now() - start < ms) { }
    }

    static initPlayerStatus(player) {
        player.name = readlineSync.question('| Enter Player 1 Name: ');
        player.health = parseInt(readlineSync.question(`| Enter ${player.name}'s Health: `));
        player.attack = parseInt(readlineSync.question(`| Enter ${player.name}'s Attack: `));
        player.strength = parseInt(readlineSync.question(`| Enter ${player.name}'s Strength: `));
    }

    static fight(attacker, defender) {
        console.log('\n----------------------------------------------------------');
        console.log(`|             ${attacker.name}'s TURN TO ATTACK`);
        console.log('----------------------------------------------------------');

        readlineSync.question(`|          ${attacker.name} ROLL THE DICE  `);
        SwiggyArena.sleep(1000);
        let diceValue = SwiggyArena.rollDice();
        let damageCreated = attacker.attackValue(diceValue);
        console.log(`|            ${attacker.name}'s DICE VALUE: ${diceValue}  `);

        readlineSync.question(`|          ${defender.name} ROLL THE DICE  `);
        SwiggyArena.sleep(1000);
        diceValue = SwiggyArena.rollDice();
        let damageDefended = defender.defendValue(diceValue);
        console.log(`|            ${defender.name}'s DICE VALUE: ${diceValue}  `);

        let damage = Math.max(damageCreated - damageDefended, 0);
        defender.reduceHealth(damage);
        console.log(`|             DAMAGE DONE:${damage}                      `);
    }

    static startGame() {
        while (true) {
            if (SwiggyArena.play) {
                console.log('-----------------------------------------------');
                console.log('|            PRESS [1]: TO PLAY AGAIN         |');
                console.log('-----------------------------------------------');
                console.log('|            PRESS [ANY KEY]: TO EXIT         |');
                console.log('-----------------------------------------------');
                let choice = readlineSync.question();
                if(choice !== "1") break;
            } else {
                console.log('-----------------------------------------------');
                console.log('|         WELCOME TO THE SWIGGY-ARENA         |');
                console.log('-----------------------------------------------');
                SwiggyArena.play = true;
            }

            let player1 = new Player();
            SwiggyArena.initPlayerStatus(player1);
            console.log('-----------------------------------------------');
            let player2 = new Player();
            SwiggyArena.initPlayerStatus(player2);

            console.log('-----------------------------------------------');
            let message = "*****ENTERING THE SWIGGY-ARENA*****";
            for (let i = 0; i < message.length; i++) {
                process.stdout.write(message[i]);
                SwiggyArena.sleep((message.length - i) * 5);
            }

            console.log('\n--------------------SCOREBOARD-----------------');
            console.log(`| Name:     ${player1.name}            |        ${player2.name}`);
            console.log(`| Attack:   ${player1.attack}               |        ${player2.attack}`);
            console.log(`| Strength: ${player1.strength}                |        ${player2.strength}`);

            let turn = (player1.health <= player2.health ? true : false);

            while (!player1.isDefeated() && !player2.isDefeated()) {
                console.log(`| Health:   ${player1.health}               |       ${player2.health}`);
                if (turn) {
                    SwiggyArena.fight(player1, player2);
                } else {
                    SwiggyArena.fight(player2, player1);
                }
                console.log('-----------------------------------------------');
                SwiggyArena.sleep(500);
                turn = !turn;
            }

            if (player1.isDefeated()) {
                console.log(`${player2.name} WINS THE GAME`);
            } else {
                console.log(`${player1.name} WINS THE GAME`);
            }
        }
    }
}

module.exports = {
    Player,
    SwiggyArena,
}
