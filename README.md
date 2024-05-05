# <span style="color:lime;">Swiggy-Arena Game </span>

## Overview

This repository contains a solution for the Magical Arena game, implemented in Java/Go/Node.js. The solution includes the game logic, unit tests, and a README file for instructions on running the code.

## Problem Statement

Design a Magical Arena where players engage in battles using their health, strength, and attack attributes. The game follows a turn-based combat system, and players attack based on dice rolls and attribute calculations.

## Rules of the Game

- Players have attributes: health, strength, and attack (positive integers).
- Players attack in turns, rolling dice for attack and defense.
- Attack damage is calculated based on attribute values and dice outcomes.
- The game ends when a player's health reaches zero.
- Player with lower health attacks first at the start of a match.

## Example Gameplay

Consider two players:
- Player A: 50 health, 5 strength, 10 attack
- Player B: 100 health, 10 strength, 5 attack

Attacking and defending dice are both 6-sided with values 1-6. Gameplay proceeds as described in the problem statement.

## Implementation Details

The solution is implemented in [Java/Go/Node.js] without using third-party libraries or frameworks except for essential helper functions like `math.rand()`. The code is well-organized and includes unit tests for thorough coverage.

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Compile/run the code using the appropriate command for [Java/Go/Node.js].
4. Follow on-screen instructions to input player attributes and play the game.

## Unit Tests

Comprehensive unit tests are provided to ensure code correctness and functionality. Run the unit tests using the test runner for [Java/Go/Node.js].

## Repository Structure

- `src/`: Contains the source code for the game.
- `test/`: Contains unit tests for the code.
- `README.md`: This file explaining the project and how to run it.

## Evaluation Criteria

The solution will be evaluated based on simplicity, readability, modeling, maintainability, and testability. Commits should be frequent and relevant.

---

For detailed instructions on running the code and additional information, refer to the README file in the repository.

