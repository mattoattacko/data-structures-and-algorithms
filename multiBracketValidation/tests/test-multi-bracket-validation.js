'use strict';

const testValidation = require('../multi-bracket-validation.js');

describe('Multi-Bracket-Validation', () => {
  it('perfectly balanced, as all things should be...', () => {
    let input = '({[]})'; //balanced
    let userPrompt = testValidation.multiBracketValidation(input);
    expect(userPrompt).toEqual(true);
  });
  it('if false, Thanos will have to bring balance...', () => {
    let input = '{[]})'; //missing the (
    let userPrompt = testValidation.multiBracketValidation(input);
    expect(userPrompt).toEqual(false);
  });
  it('if string has content', () => {
    let input = '{[test]}'; //use something else? 
    let userPrompt = testValidation.multiBracketValidation(input);
    expect(userPrompt).toEqual(true);
  });
  it('string has no content', () => {
    let input = ''; //no more nothing here
    let userPrompt = testValidation.multiBracketValidation(input);
    expect(userPrompt).toEqual('add some stuff to the string my dudes...');
  });
});