import rollDice from "./diceRollingApp.js";
import * as _ from "lodash";

namespace DiceUtils {
    export class Dice {
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
        setValue(value:string) {
            (<HTMLElement>this.span).textContent = value;
        }
    }
    export interface DiceTypes {
        span: Element;
    }
}

let size = 5;
let Elements: Array<DiceUtils.DiceTypes> = [];
init();

function setDiceRoll(id) {
    (Elements[id] as DiceUtils.Dice).setValue(rollDice());
}

function init() {
    //Add span
    _.range(size).forEach(i=> {
        let span = document.createElement('span');
        (<HTMLElement>span).innerHTML = '&nbsp;';
        Elements.push(new DiceUtils.Dice(span));
        document.body.appendChild(span);
    });
    //Add button
    let button = document.createElement('button');
    (<HTMLElement>button).style.cssText = "display: inline-block;";
    button.textContent = "Roll!";
    button.onclick = function() {
        _.range(size).forEach(i=> {
            setDiceRoll(i);
        });
    }
    document.body.appendChild(button);
}
