import { expect } from 'chai';
import calculator from '../src/index';
describe('calculator 功能测试', () => [
    it('add 方法测试', () => {
        expect(calculator.add(1,2,3,4)).to.be.equal(10);
    })
])