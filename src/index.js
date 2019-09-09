import Add from './add';


class Calculator {
    add(...nums) {
        return Add(...nums);
    }
}

const calculator = new Calculator();

export default calculator;