'use strict';

let repeatedWord = require('../repeated-word.js');

describe('repeated-word.js', () => {
  const firstInput = 'CodeFellows is fun, but difficult. I enjoy studying at CodeFellows. CodeFellows is in Seattle.';
  const secondInput = 'Then you\'re left in the dust. Unless I stuck by ya. You are a sunflower.';
  const thirdInput = ''; //must be empty string to pass

  it('found repeats', () => {
    const testedString = repeatedWord(firstInput);
    expect(testedString).toEqual('codefellows');
  });

  it('no repeats found', () => {
    const testedString = repeatedWord(secondInput);
    expect(testedString).toEqual('No repeats found.');
  });

  it('string empty', () => {
    const testedString = repeatedWord(thirdInput);
    expect(testedString).toEqual('No repeats found. String empty.');
  });
});