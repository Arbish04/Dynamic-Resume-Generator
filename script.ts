document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    const formContainer = document.querySelector('.form-container') as HTMLElement;
    const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLElement;
    const generateResumeBtn = document.getElementById('generateResumeBtn') as HTMLButtonElement;
    const backToFormBtn = document.getElementById('backToFormBtn') as HTMLButtonElement;

    // Handle resume generation on button click
    generateResumeBtn.addEventListener('click', function () {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Validate input
        if (!name || !email || !phone || !address || !experience || !education || !skills) {
            alert("Please fill in all the fields!");
            return;
        }

        // Hide the form and show the resume
        formContainer.style.display = 'none';
        resumeContainer.style.display = 'block';

        // Populate the resume content
        resumeContent.innerHTML = `
            <h2>${name}'s Resume</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <h3>Experience:</h3>
            <p>${experience}</p>
            <h3>Education:</h3>
            <p>${education}</p>
            <h3>Skills:</h3>
            <p>${skills}</p>
        `;
    });

    // Back to form button
    backToFormBtn.addEventListener('click', function () {
        formContainer.style.display = 'block';
        resumeContainer.style.display = 'none';
    });
});




