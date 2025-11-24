// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Chatbot Functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle Chatbot
chatbotToggle.addEventListener('click', function() {
    chatbot.classList.add('active');
    chatbotToggle.style.display = 'none';
});

chatbotClose.addEventListener('click', function() {
    chatbot.classList.remove('active');
    chatbotToggle.style.display = 'flex';
});

// Send Message Function
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    userInput.value = '';

    // Generate bot response
    setTimeout(() => {
        const botResponse = generateResponse(message);
        addMessage(botResponse, 'bot');
    }, 800);
}

// Add Message to Chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Generate Bot Response
function generateResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('hours') || msg.includes('open') || msg.includes('time')) {
        return "We're open 24/7! You can access the gym anytime with your membership card.";
    } 
    else if (msg.includes('price') || msg.includes('membership') || msg.includes('cost') || msg.includes('how much')) {
        return "Our membership starts from £29.99/month including 24/7 access, unlimited sauna, classes, and our bespoke app! Would you like to book a tour?";
    }
    else if (msg.includes('class') || msg.includes('schedule') || msg.includes('yoga') || msg.includes('hiit') || msg.includes('spin')) {
        return "We offer HIIT, yoga, spin, strength training, boxing, and pilates! Check our Classes section or book directly. What type of class interests you?";
    }
    else if (msg.includes('trainer') || msg.includes('pt') || msg.includes('personal training')) {
        return "Our certified personal trainers are available for 1-on-1 sessions. Would you like to book a free consultation?";
    }
    else if (msg.includes('sauna')) {
        return "Unlimited sauna access is included in all memberships! Perfect for post-workout recovery.";
    }
    else if (msg.includes('location') || msg.includes('where') || msg.includes('address')) {
        return "We're located in Tavistock, Devon, UK. You can find us easily!";
    }
    else if (msg.includes('tour') || msg.includes('visit')) {
        return "We'd love to show you around! Book your free tour using the contact form or call us at 01822 123456.";
    }
    else if (msg.includes('equipment') || msg.includes('facilities')) {
        return "We have state-of-the-art cardio machines, free weights, strength training equipment, group studio, sauna, and personal training zones!";
    }
    else if (msg.includes('join') || msg.includes('sign up') || msg.includes('register')) {
        return "Great! You can join by booking a free tour first. Click on 'Join Now' or contact us at 01822 123456.";
    }
    else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hello! Welcome to Tavistock Fitness. How can I help you today?";
    }
    else if (msg.includes('thank')) {
        return "You're welcome! Feel free to ask if you have more questions. We're here to help!";
    }
    else {
        return "Thanks for your question! Our team can help you with that. Call us at 01822 123456 or book a free tour to learn more!";
    }
}

// Send message on button click
sendBtn.addEventListener('click', sendMessage);

// Send message on Enter key
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.pricing-card, .class-card, .facility-card, .review-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Counter Animation for Stats (if you want to add stats section)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Loading Animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Form Validation (Basic)
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#374151';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '#a855f7';
    });
});

// Book Now Buttons - Show Confirmation
document.querySelectorAll('.class-card .gradient-btn').forEach(button => {
    button.addEventListener('click', function() {
        const className = this.closest('.class-card').querySelector('h3').textContent;
        alert(`Booking confirmed for ${className}! You'll receive a confirmation email shortly.`);
    });
});

// Membership Get Started Buttons
document.querySelectorAll('.pricing-card .btn').forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.closest('.pricing-card').querySelector('h3').textContent;
        alert(`Great choice! You've selected the ${planName} plan. Our team will contact you shortly!`);
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active class style
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #a855f7 !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Console Welcome Message
console.log('%c Welcome to Tavistock Fitness! ', 'background: linear-gradient(135deg, #a855f7, #ec4899); color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Powered by Fitness Professionals ', 'color: #a855f7; font-size: 14px;');