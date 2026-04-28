const steps = document.querySelectorAll('.step');
const visuals = document.querySelectorAll('.visual-element');
const container = document.getElementById('scrolly-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stepNum = entry.target.getAttribute('data-step');
            
            // Clear current states
            visuals.forEach(v => v.classList.remove('active'));
            container.classList.remove('state-1', 'state-2', 'state-3');

            // Set new active state
            document.getElementById(`vis-${stepNum}`).classList.add('active');
            container.classList.add(`state-${stepNum}`);
        }
    });
}, { threshold: 0.5 });

steps.forEach(step => observer.observe(step));