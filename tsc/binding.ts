import { IDispenser, DispenserOptions } from "./dispenser.interface";
import { join } from 'path';

/* eslint-disable @typescript-eslint/no-var-requires */
const addons = require('node-gyp-build')(join(__dirname, '..'));

export var Dispenser: {
  new (options: DispenserOptions): IDispenser
} = addons.Dispenser;