#!/usr/bin/env node
import startGame from '../src/index.js';
import { gameSettings, gameMessage } from '../src/games/gcd.js';

startGame(gameSettings, gameMessage);
