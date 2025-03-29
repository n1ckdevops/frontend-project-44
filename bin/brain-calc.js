#!/usr/bin/env node
import startGame from '../src/index.js';
import { gameMessage, gameSettings } from '../src/games/calc.js';

startGame(gameSettings, gameMessage);
