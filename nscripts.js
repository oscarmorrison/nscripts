#! /usr/bin/env node
const chalk = require('chalk');
const dir = process.cwd()+'/package.json';
let packageJSON;

try {
     packageJSON = require(dir);
} catch(e) {
    console.error('no package.json');
    return false;
}

let { scripts } = packageJSON;

Object.keys(scripts).forEach(key => {
    console.log(chalk.black.bgGreen.bold(' '+key+': ')+chalk.inverse(' '+scripts[key]+' \n'));
});
