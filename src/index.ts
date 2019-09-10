import Add from './add';

class Calculator {
    add(...nums: number[]): number {
        return Add(...nums);
    }
}

const calculator = new Calculator();

export default calculator;