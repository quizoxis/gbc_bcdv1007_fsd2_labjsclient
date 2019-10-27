let myListIds = [ 'unOrList1', 'orList1','orList2' ];
let messageText = '';

for (var i = 0; i < myListIds.length; i++) {

    var listData = document.getElementById(myListIds[i]).textContent;
    messageText += 'Word in List No.:[' + i + '] ID:[' + myListIds[i] + '] Words:[' + listData + '\n';
    // console.log(messageText);
}

window.alert(messageText);
