#!/usr/bin/env node

import startGame from '../src/index.js';
import { gameSettings, gameMessage } from '../src/games/progression.js';

startGame(gameSettings, gameMessage);
