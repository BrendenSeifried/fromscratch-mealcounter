// IMPORT MODULES under test here:
//import { example } from '../example.js';

import { rendFood, rendName } from '../utils.js';


const test = QUnit.test;

test('return stuff', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>cat, 12 cups</li>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = rendFood({ ingredient: 'cat,', amount: 12, type: 'cups' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('return second test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li><p>undefined :</p><ul><li>undefined undefined undefined</li><li>undefined undefined undefined</li><li>undefined undefined undefined</li><li>undefined undefined undefined</li></ul></li>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = rendName({ ingredients: 'test' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


