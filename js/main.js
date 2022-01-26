
$( document ).ready(function() {
    console.log( "ready!" );

    $( "#submit" ).click(function(event) {
      user = $("#username-field").val();
      pass = $("#password-field").val();
      //alert('user: '+user+' // pass: '+pass);

      //success
      if((user == 'admin' && pass=='1234') || (user == '/' && pass=='.')) {
        alert(user+' / '+pass+' login success!');
      }else {
        alert(user+' / '+pass+' login failed!')
      }
      event.preventDefault();
    });

    $( "#signup" ).click(function(event) {
      alert('to sign up page (link ok)');
    });

    $( "#facebook" ).click(function(event) {
      alert('to youtube page (link ok)');
    });

    $( "#forgot" ).click(function(event) {
      alert('to logout page (link ok)');
    });

    $( "#remember" ).click(function(event) {
      alert('remember function (ok)');
    });

    $( "#twitter" ).click(function(event) {
      alert('to twitter page (error 404)');
    });
});
