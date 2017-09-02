class Dice {
    span: Element;
    height: number = 50;
    width: number = 50;
    margin: number = 10;
    border: number = 5;
    color: string = 'black';
    value: string;
    constructor(span: Element) {
        this.span = span;
        (<HTMLElement>span).style.cssText = 
        `border: ${this.border}px solid ${this.color};
        display: inline-block;
        line-height: ${this.height}px;
        height: ${this.height}px;
        width: ${this.width}px;
        margin: ${this.margin}px;
        text-align: center`; 
    }
    setValue(value:string){
        (<HTMLElement>this.span).textContent = value;
    }
}
class DiceRoller extends Dice {
    constructor(span: Element) {
        super(span);
    }
    rolleDice(diceValue: number): boolean {
        this.setValue(DiceValues[diceValue]);
        return true;
    }
}

class DiceRollerButton {
  button: Element;
  constructor(button: Element) {
    this.button = button;
    (<HTMLElement>this.button).style.cssText = "display: inline-block;";
    this.button.textContent = "Roll!";
    document.body.appendChild(this.button);
  }

  roll(diceCollection: Array<DiceRoller>) {
    diceCollection.forEach((item) => {
      item.span.textContent = DiceValues[getRandomIntInclusive(1, 6)];
    });
  }
}

enum DiceValues {
    one = 1,
    two,
    three,
    four,
    five,
    six
}
interface DiceTypes {
    span: Element;
}
let Elements: Array<DiceTypes> = [];

let diceCollection: Array<DiceRoller> = [];

for (let index: number = 0; index < 5; index++) {
    let span = document.createElement('span');
    (<HTMLElement>span).innerHTML = '&nbsp;';
    Elements.push({
        'span': span,
    });
}
let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Elements.map((elem, index) => {
    let cube = new DiceRoller(elem.span);
    document.body.appendChild(elem.span);
    diceCollection.push(cube);
});

let diceRollerButton = new DiceRollerButton(document.createElement('button'));

(diceRollerButton.button as HTMLButtonElement).onclick = (event): void => {
  diceRollerButton.roll(diceCollection);
}