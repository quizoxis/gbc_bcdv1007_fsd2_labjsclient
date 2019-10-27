function navigate2Page(pageName) {

    let pageList = ['Signup', 'SendMessage'];
    let pageIdx = pageList.indexOf(pageName);

    if (pageIdx === -1) {
        alert('Requested Page: [' + pageName + '] does not exists!!');
    } else {
        let pageUrl =  pageName + '.html';
        console.log('Navigating to page: ' + pageName + ' @url' + pageUrl );
        window.location.href = pageUrl;
    }
}

function appInit() {
    console.log('Initializing....')

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
window.onload = function() {

    // process DOM elements here
    appInit();
};

