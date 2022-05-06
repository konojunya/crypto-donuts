const sharpe = require('sharp');
const fs = require('fs');
const path = require('path');

const baseImage = './inputs/base.png';
const tastes = new Array(7).fill().map((_, i) => `./inputs/taste-${i + 1}.png`);
const toppings = new Array(11).fill().map((_, i) => `./inputs/topping-${i + 1}.png`);

let count = 1;

(async () => {
  for await (taste of tastes) {
    await sharpe(baseImage)
      .composite([{input: taste, compose: 'over'}])
      .toFile(`./outputs/donuts-${count}.png`);
    count++;
  }

  for await (topping of toppings) {
    for await (taste of tastes) {
      await sharpe(baseImage)
        .composite([
            {input: taste, compose: 'over'},
            {input: topping, compose: 'over'}
          ])
        .toFile(`./outputs/donuts-${count}.png`);
      count++;
    }
  }
})()

