import { Controller, Get } from '@nestjs/common';

// Some cat facts, courtesy of https://catfact.ninja
const catFacts = [
  'Cats have supersonic hearing',
  'On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.',
  'A cat uses its whiskers for measuring distances. The whiskers of a cat are capable of registering very small changes in air pressure.',
  'A healthy cat has a temperature between 38 and 39 degrees Celcius.',
  'A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.',
  "Jaguars are the only big cats that don't roar.",
  "Cats have 'nine lives' thanks to a flexible spine and powerful leg and back muscles",
  "The cat's tail is used to maintain balance.",
  "The technical term for a cat’s hairball is a 'bezoar.'",
  'The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.',
  'A happy cat holds her tail high and steady.',
  'A cat can jump 5 times as high as it is tall.',
];

@Controller('facts')
export class FactsController {
  @Get('random')
  getRandomFact(): string {
    return catFacts[Math.floor(Math.random() * catFacts.length)];
  }
}
