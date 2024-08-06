// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  fetch("https://formspree.io/f/mkgwrdeq", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        form.reset(); // Clear the form
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    })
    .catch(error => {
      alert("Error sending message: " + error.message);
    });
}