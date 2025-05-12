document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
    const status = document.getElementById('formStatus');
  
    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'red';
      return;
    }
  
    // Simulate form submission
    status.textContent = 'Message sent successfully!';
    status.style.color = 'green';
  
    e.target.reset();
  });
  