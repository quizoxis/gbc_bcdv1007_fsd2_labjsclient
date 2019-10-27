let words = ['Demonstrate', 'Operators', 'Types', 'Inspector', 'Terminal'];
let numbers = [100, 150, 200, 250, 300];

let output = '';

// Check if both arrays have same length
if (words.length != numbers.length) {

    output += '<br><b>Invalid number of items in list.</b>';
    output += '<br>No. of items in Word List:' + words.length;
    output += '<br>No. of items in Number List:' + numbers.length;

} else {
    for (i = 0; i < words.length; i++) {
        output += '<br>' + words[i] + ' ' + numbers[i];

    }
}

document.getElementById('data').innerHTML = output;


