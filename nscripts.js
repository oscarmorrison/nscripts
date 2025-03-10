#! /usr/bin/env node
import chalk from 'chalk';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const dir = join(process.cwd(), 'package.json');
let packageJSON;

try {
    const rawData = readFileSync(dir, 'utf8');
    packageJSON = JSON.parse(rawData);
} catch(e) {
    console.error('no package.json');
    process.exit(1);
}

const { scripts } = packageJSON;

if (!scripts) {
    console.error('no scripts found in package.json');
    process.exit(1);
}

Object.keys(scripts).forEach(key => {
    console.log(chalk.black.bgGreen.bold(` ${key}: `) + chalk.inverse(` ${scripts[key]} \n`));
});
