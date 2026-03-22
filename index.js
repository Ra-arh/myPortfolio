// index.js - handles contact form submission and sends email via SMTPJS
// Replace the placeholder SecureToken with a token generated from https://smtpjs.com/
// Next Steps for You
// Generate a SecureToken on https://smtpjs.com/ (free, no server required).
// Replace "YOUR_SECURE_TOKEN_HERE" in 

// index.js
//  with that token.
// Ensure the <script src="index.js"></script> tag is present (it already is at the bottom of 

// legacy/index.html
// ).
// Test the form: fill it out and submit; you should receive an email at jangidr480@gmail.com.


function sendContact(event) {
  event.preventDefault(); // Prevent default form submission

  // Grab form fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('desc').value.trim();

  // Basic validation (you can expand as needed)
  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  // Construct email body
  const body = `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
  `;

  // Send email using SMTPJS
  // NOTE: You must replace 'YOUR_SECURE_TOKEN_HERE' with a token generated from smtpjs.com
  const smtpToken = "rmkj yytq lwpn gaba";
  if (!smtpToken || smtpToken === "rmkj yytq lwpn gaba") {
    alert('SecureToken is missing or placeholder. Please generate a valid token from https://smtpjs.com/ and update the code.');
    return;
  }
  console.log('Using SecureToken:', smtpToken);
  Email.send({
    SecureToken: smtpToken,
    To: "jangidr480@gmail.com",
    From: email,
    Subject: subject,
    Body: body
  })
    .then(message => {
      console.log('Email send response:', message);
      // Show a friendly confirmation message
      const messageEl = document.getElementById('contact-message');
      messageEl.innerHTML = "Thank you for reaching out! We will get back to you shortly.";
      messageEl.style.display = 'block';
      // Optionally reset the form
      document.querySelector('.form').reset();
    })
    .catch(error => {
      console.error('Email send error:', error);
      alert('Oops! Something went wrong while sending your message. Please try again later.');
    });
}



