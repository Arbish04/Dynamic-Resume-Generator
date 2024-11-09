document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    var formContainer = document.querySelector('.form-container');
    var resumeContainer = document.getElementById('resumeContainer');
    var resumeContent = document.getElementById('resumeContent');
    var generateResumeBtn = document.getElementById('generateResumeBtn');
    var backToFormBtn = document.getElementById('backToFormBtn');
    // Handle resume generation on button click
    generateResumeBtn.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var experience = document.getElementById('experience').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        // Validate input
        if (!name || !email || !phone || !address || !experience || !education || !skills) {
            alert("Please fill in all the fields!");
            return;
        }
        // Hide the form and show the resume
        formContainer.style.display = 'none';
        resumeContainer.style.display = 'block';
        // Populate the resume content
        resumeContent.innerHTML = "\n            <h2>".concat(name, "'s Resume</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <h3>Experience:</h3>\n            <p>").concat(experience, "</p>\n            <h3>Education:</h3>\n            <p>").concat(education, "</p>\n            <h3>Skills:</h3>\n            <p>").concat(skills, "</p>\n        ");
    });
    // Back to form button
    backToFormBtn.addEventListener('click', function () {
        formContainer.style.display = 'block';
        resumeContainer.style.display = 'none';
    });
});
