//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
const corrections = {
    '5' : 'S',
    '0' : 'O',
    '1' : 'I',
};
const correct = string => {
    string.replace(/[501]/g, character => corrections[character])
}

// test cases
correct('L0ND0N')// "LONDON"
correct('DUBL1N') // "DUBLIN"
