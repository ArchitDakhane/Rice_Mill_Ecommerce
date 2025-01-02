document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// export js

/* write a js code for below code :
 <div class="export-form">
                        <div class="title">
                            <p class="p1">Want To Export With Us?</p>
                            <p class="p1">We’d Be Happy To Get In Touch!</p>
                        </div>
                        <div>
                           <form action="">
                                <div>
                                    <input type="text" placeholder="Name" required>
                                    <input type="email" placeholder="Email" required>
                                    <input type="tel" maxlength="10" placeholder="Phone No." required>
                                    <input type="text" placeholder="City" required>
                                    <input type="text" placeholder="Reason" required>
                                    <button type="submit" value="Get In Touch">Get In Touch</button>
                                    
                                </div>
                           </form>
                        </div>
                    </div>
*/

// export js code
document.addEventListener('DOMContentLoaded', () => {
    const exportForm = document.createElement('div');
    exportForm.classList.add('export-form');
    
    const title = document.createElement('div');    
    title.classList.add('title');
    
    const p1 = document.createElement('p');
    p1.classList.add('p1');
    p1.textContent = 'Want To Export With Us?';
    
    const p2 = document.createElement('p');
    p2.classList.add('p1');
    p2.textContent = 'We’d Be Happy To Get In Touch!';
    
    title.appendChild(p1);
    title.appendChild(p2);
    
    const form = document.createElement('form');
    form.action = '';
    
    const div = document.createElement('div');
    
    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'Name';
    input1.required = true;
    
    const input2 = document.createElement('input');
    input2.type = 'email';
    input2.placeholder = 'Email';
    input2.required = true;
    
    const input3 = document.createElement('input');
    input3.type = 'tel';
    input3.maxlength = '10';
    input3.placeholder = 'Phone No.';
    input3.required = true;
    
    const input4 = document.createElement('input');
    input4.type = 'text';
    input4.placeholder = 'Company Name';
    input4.required = true;
    
    const input5 = document.createElement('input');
    input5.type = 'text';
    input5.placeholder = 'Your Message';
    input5.required = true;
    
    const button = document.createElement('button');
    button.type = 'submit';
    button.value = 'Get In Touch';
    
    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(input3);
    div.appendChild(input4);
    div.appendChild(input5);
    div.appendChild(button);
    
    form.appendChild(div);
    
    exportForm.appendChild(title);
    exportForm.appendChild(form);
    
    document.body.appendChild(exportForm);
    document.body.appendChild(exportForm);
});