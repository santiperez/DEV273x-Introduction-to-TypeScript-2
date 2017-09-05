import * as Chance from "chance";

function getRandomIntInclusive():number {
    let chance = new Chance();
    return chance.d6();
}

enum DiceValues {
    one = 1,
    two,
    three,
    four,
    five,
    six
}

function rollDice():string {
    return DiceValues[getRandomIntInclusive().toString()];
}

export default rollDice;