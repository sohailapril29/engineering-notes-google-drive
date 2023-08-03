document.addEventListener('DOMContentLoaded', () => {
    const semesterSelect = document.getElementById('semesterSelect');
    const subjectSelect = document.getElementById('subjectSelect');
    const getLinkButton = document.getElementById('getLinkButton');
    const googleDriveLink = document.getElementById('googleDriveLink');
    const result = document.getElementById('result');


    const semesterSubjects = {
        1:  [
            { name: 'Control System', link: 'https://drive.google.com/drive/folders/1R6E1pGAfsm-3tgFG8BCFlnqGWhe_NO_r?usp=sharing' },
            { name: 'Microprocessor and Microcontroller', link: 'https://drive.google.com/drive/folders/1i6ZpynK80PykOSK2WlvsLw3iiACGc14-?usp=sharing' },
            // { name: 'Subject 2C', link: 'https://drive.google.com/subject2c-link' },
            // { name: 'Subject 2D', link: 'https://drive.google.com/subject2d-link' },
            // { name: 'Subject 2E', link: 'https://drive.google.com/subject2e-link' }
        ],
        2: [
            { name: 'Computer Architecture', link: 'https://drive.google.com/drive/folders/1TXbeNhxSEpO7chgjgGL5KJXOKWdS8_iH?usp=sharing' },
            { name: 'Microwave and Radar Engineering', link: 'https://drive.google.com/drive/folders/1FMQNqORFUcRrSwqdEycWTn2W3RCwTZZR?usp=sharing' },
            { name: 'Digital Signal Processing', link: 'https://drive.google.com/drive/folders/1ZjzCi1nkzzkgXiJoUSj0_8zTVI7_x7y7?usp=sharing' },
            { name: 'Information Theory and Coding Techniques', link: 'https://drive.google.com/drive/folders/1KipytQ4pcfReD0z2Q97Pj5muTGySHBJ9?usp=sharing' },
            { name: 'Business Economics and Financial Analysis', link: 'https://drive.google.com/drive/folders/1utl8jBhdLLB5VwqEtejujMJLFVb1Ta7M?usp=sharing' },
            { name: 'Design of Algorithms', link: 'https://drive.google.com/drive/folders/1_VFXkGth2YIu72UJ-Z_7E52oR3LneNnE?usp=sharing' } // Fixed link for "Design of Algorithms"
        ],

    };


    function populateSubjects() {
        const selectedSemester = semesterSelect.value;
        subjectSelect.innerHTML = '<option value="">Select a Subject</option>';

        if (selectedSemester) {
            semesterSubjects[selectedSemester].forEach((subject) => {
                const option = document.createElement('option');
                option.textContent = subject.name;
                option.value = subject.link;
                subjectSelect.appendChild(option);
            });
            subjectSelect.disabled = false;
        } else {
            subjectSelect.disabled = true;
            getLinkButton.disabled = true;
        }
    }


    semesterSelect.selectedIndex = 0;


    semesterSelect.addEventListener('change', () => {
        populateSubjects();
        result.classList.add('hidden');
    });


    subjectSelect.addEventListener('change', () => {
        getLinkButton.disabled = !subjectSelect.value;
        result.classList.add('hidden');
    });


    getLinkButton.addEventListener('click', () => {
        const selectedLink = subjectSelect.value;
        googleDriveLink.href = selectedLink;
        googleDriveLink.textContent = selectedLink;
        result.classList.remove('hidden');
    });
});