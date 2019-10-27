let wordList = ['Terminal','IDE', 'Toolset'];
let numberList = [100,300,600];

let letter = 'T';
let number = 100;
let output = '';


// Display World List
// If wordList is not empty loop through it.
if (wordList.length > 0) {
    output += '<b>Word List starting with letter [' + letter + ']</b><ul>';

    // Display Words
    for (i = 0; i < wordList.length; i++) {

        switch (wordList[i].charAt(0)) {
            case letter:
                output += '<li>' + wordList[i] + '</li>';
            default:
        }
    }
    output += '</ul><hr />';
}

// Display Number List
// If list is not empty loop through it
if (numberList.length > 0) {
    output += '<b>Number List greater than [' + number + ']</b><ul>';
    for (i = 0; i < numberList.length; i++) {

        if (numberList[i] > number) {
            output += '<li>' + numberList[i] + '</li>';
        }
    }
    output += '</ul><hr />';
}

// Final Output the results into div element
document.getElementById('data').innerHTML = output;