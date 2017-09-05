namespace DiceUtils{
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
        setValue(value:string){
            (<HTMLElement>this.span).textContent = value;
        }
    }
    export interface DiceTypes {
        span: Element;
    }
}