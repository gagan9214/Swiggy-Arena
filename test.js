const { Player, SwiggyArena } = require('./SwiggyArena');
class TestSwiggyArena {
    // Test player initialization
    static testPlayerInitialization() {
      const player = new Player();
      console.log(player.name === undefined); // Expected output: true
      console.log(player.health === undefined); // Expected output: true
      console.log(player.attack === undefined); // Expected output: true
      console.log(player.strength === undefined); // Expected output: true
    }
  
    // Test defend value calculation
    static testDefendValueCalculation() {
      const player = new Player();
      player.strength = 5;
      const result = player.defendValue(3);
      console.log(result === 15); // Expected output: true
    }
  
    // Test attack value calculation
    static testAttackValueCalculation() {
      const player = new Player();
      player.attack = 10;
      const result = player.attackValue(2);
      console.log(result === 20); // Expected output: true
    }
  
    // Test reduce health method
    static testReduceHealth() {
      const player = new Player();
      player.health = 50;
      player.reduceHealth(20);
      console.log(player.health === 30); // Expected output: true
    }
  
    // Test isDefeated method
    static testIsDefeated() {
      const player = new Player();
      player.health = 0;
      console.log(player.isDefeated() === true); // Expected output: true
  
      player.health = 10;
      console.log(player.isDefeated() === false); // Expected output: false
    }
  
    // Test rollDice method
    static testRollDice() {
      const diceValue = SwiggyArena.rollDice();
      console.log(diceValue >= 1 && diceValue <= 6); // Expected output: true
    }
  
    // Test sleep method (manual observation required)
    static testSleep() {
      const start = Date.now();
      SwiggyArena.sleep(1000);
      const end = Date.now();
      console.log(end - start >= 1000); // Expected output: true (after manual observation)
    }
  
    // Test startGame method (manual observation required)
    static testStartGame() {
      // Since startGame involves user input/output and game logic, manual observation is required
      // You can run the game and verify the output in the console
      SwiggyArena.startGame();
    }
  
    // Run all tests
    static runAllTests() {
      console.log('Running all tests...\n');
      this.testPlayerInitialization();
      this.testDefendValueCalculation();
      this.testAttackValueCalculation();
      this.testReduceHealth();
      this.testIsDefeated();
      this.testRollDice();
      this.testSleep();
      // Test startGame manually
      console.log('\nAll tests completed.');
    }
  }
  
  // Run all tests
  TestSwiggyArena.runAllTests();
  