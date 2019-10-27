let welcomeMessage = 'Welcome to the Home of Output';


try {
    alert('hello user');

    console.log('OK');
} catch (err) {
    document.getElementById('msgBox').innerHTML = err.message;
} finally {
    console.log('finally: Task Completed!!!!');
}

document.title = welcomeMessage;

