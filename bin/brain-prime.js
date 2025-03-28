#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { gameSettings, gameMessage } from '../src/games/prime.js';

startGame(gameSettings, gameMessage);
