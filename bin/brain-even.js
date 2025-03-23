#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { gameSettings, gameMessage } from '../src/games/even.js';

startGame(gameSettings, gameMessage);
