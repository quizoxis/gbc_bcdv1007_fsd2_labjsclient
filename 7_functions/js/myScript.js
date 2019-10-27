function home() {

    return '<h1>This is home function</h1>';
}

function page1() {
    return '<h1>This is page1 function</h1>';
}

function page2() {
    return '<h1>This is page2 function</h1>';
}

let output = '';

if ( document.title === '') {
    output += 'Document\'s title is missing';
} else {

    switch (document.title) {
        case "Home":
            output += home();
            break;
        case "Page1":
            output += page1();
            break;
        case "Page2":
            output += page2();
            break;
        default:
            output += 'This Page\'s Title  is not mapped to a function';
            break;
    }
}

// Update the page with output
document.getElementById('data').innerHTML = output;


