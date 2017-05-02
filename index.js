function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var user = JSON.parse(this.responseText);
     document.getElementById("account").innerHTML = '<h5>Account<br/>' + user.accountId + '</h5>';
     document.getElementById("customer").innerHTML = '<h5>Customer<br/>' + user.firstName + ' ' + user.lastName +  '</h5>';
     document.getElementById("balance").innerHTML = '<h5>Balance<br/>' + parseFloat(user.balance).toFixed(2) + '</h5>';
    }
  };
  xhttp.open("GET", "mockData.txt", true);
  xhttp.send();
}

$(document).ready(function(){
    loadDoc();
});
