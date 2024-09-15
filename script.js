const navdialog = document.getElementById("nav-dialog")

function handleMenu(){
    navdialog.classList.toggle("hidden");
}


// Initialize EmailJS with your public key
emailjs.init('UJch24NZeaqlgbFGE'); // Replace with your actual public key from EmailJS

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Send the form data using EmailJS
  emailjs.sendForm('service_s1rz41j', 'template_rgayev6', this)
    .then(function(response) {
      document.getElementById('response').innerText = 'Message sent successfully!';
      document.getElementById('contact-form').reset(); // Reset the form
    }, function(error) {
      document.getElementById('response').innerText = 'Failed to send message. Please try again later.';
      console.error('Error:', error);
    });
});

  
