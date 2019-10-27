function navigate2Page(pageName) {

    let pageList = ['Signup', 'SendMessage','Address','DApp','Smart Contracts','API'];
    let pageIdx = pageList.indexOf(pageName);

    if (pageIdx === -1) {
        alert('Requested Page: [' + pageName + '] does not exists!!');
    } else {
        let pageUrl =  pageName + '.html';
        console.log('Navigating to page: ' + pageName + ' @url' + pageUrl );
        window.location.href = pageUrl;
    }
}

function changeTerms() {
    var eId = document.getElementById("selTerms");
    var optVal = eId.options[eId.selectedIndex].value;
    navigate2Page(optVal);
}

function loadSelectOptions() {

    // Get Reference to select element
    var selTerms = document.getElementById('selTerms');

    // Create Option Element for each of the terms
    for (var i = 0; i < dataTerms.length;i++) {
        var selTermsOpt = document.createElement('option');

        selTermsOpt.appendChild(document.createTextNode(dataTerms[i]));
        selTermsOpt.value = dataTerms[i];

        // Append Option Elements to Select Element
        selTerms.appendChild(selTermsOpt);

    }

}

function appInit() {
    console.log('Initializing....')

    // Loading Select Options
    loadSelectOptions();


    // Setup Event for Buttons
    console.log('Setting up button events');

    var elt = document.getElementById('btnGoToSignup')
    elt.onclick = btnPageA = (e) => {
        e.preventDefault();
        navigate2Page('Signup');
    };

    var elt2 = document.getElementById('btnSendAMessage')
    elt2.onclick = btnPageB = (e) => {
        e.preventDefault();
        navigate2Page('SendMessage');
    };

}

// Main App initializer

// Global Variables
var dataTerms = ['-none-','Address','DApp','Smart Contracts','API'];

window.onload = function() {


    // process DOM elements here
    appInit();
};

