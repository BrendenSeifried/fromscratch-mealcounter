

import { rendFood } from '../utils.js';
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

