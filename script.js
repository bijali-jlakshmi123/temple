// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    alert('Thank you for contacting us, ' + name + '. Your message has been sent!');
    // Optionally, clear the form
    document.getElementById('contactForm').reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});
