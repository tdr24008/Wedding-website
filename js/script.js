/* ============================================
   NAVIGATION & HAMBURGER MENU
   ============================================ */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* ============================================
   ACTIVE NAVIGATION HIGHLIGHT
   ============================================ */

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

/* ============================================
   RSVP FORM HANDLING
   ============================================ */

const rsvpForm = document.getElementById('rsvpForm');
const formMessage = document.getElementById('formMessage');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const guests = document.getElementById('guests').value;
        const attending = document.querySelector('input[name="attending"]:checked');
        const dietary = document.getElementById('dietary').value.trim();

        // Validation
        if (!name || !email || !guests || !attending) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        console.log('RSVP Form Data:', {
            name: name,
            email: email,
            guests: guests,
            attending: attending.value,
            dietary: dietary
        });

        // Show success message
        showMessage('Thank you for your RSVP! We will see you there! 💕', 'success');

        // Reset form
        rsvpForm.reset();

        // Remove message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success');
        }, 5000);
    });

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
    }
}

/* ============================================
   GALLERY HOVER EFFECTS
   ============================================ */

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

/* ============================================
   SMOOTH SCROLLING FOR ANCHOR LINKS
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   PAGE LOAD ANIMATION
   ============================================ */

window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.animation = 'fadeIn 0.8s ease-in forwards';
    }
});

// Add fade-in animation to CSS dynamically if not present
if (!document.querySelector('style[data-animations]')) {
    const style = document.createElement('style');
    style.setAttribute('data-animations', 'true');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}
