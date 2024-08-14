document.addEventListener('DOMContentLoaded', function () {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial-item');
    const totalTestimonials = testimonials.length;
    let index = 0;

    function updateTestimonials() {
        const offset = -index * 50; // 50% para desplazar dos testimonios a la vez
        testimonialContainer.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.next-arrow').addEventListener('click', function () {
        if (index < totalTestimonials - 2) { // Mostrando dos testimonios a la vez
            index++;
            updateTestimonials();
        }
    });

    document.querySelector('.prev-arrow').addEventListener('click', function () {
        if (index > 0) {
            index--;
            updateTestimonials();
        }
    });

    // Set the container width dynamically to fit all testimonials
    testimonialContainer.style.width = `${totalTestimonials * 50}%`;
});
testimonialContainer.style.width = `${totalTestimonials * 50}%`;
