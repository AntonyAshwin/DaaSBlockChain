$(document).ready(function() {
  $('#loginButton').click(function() {
    // Simulate login success (you would replace this with your actual login logic)
    var username = $('#username').val();
    var password = $('#password').val();
    if (username === 'example' && password === 'password') {
      // Redirect to the data page upon successful login
      window.location.href = 'loggedin.html'; // Replace 'data_page.html' with the actual filename of the data page
    } else {
      // Display an error message or handle login failure
      alert('Invalid username or password. Please try again.');
    }
  });
});
