document.addEventListener('DOMContentLoaded', function () {
    // Datos de los testimonios
    const testimonials = [
        {
            quote: '"Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others."',
            name: "Terry Ivans",
            role: "Project manager"
        },
        {
            quote: '"This product has completely transformed our workflow. The collaboration features are outstanding!"',
            name: "Sarah Johnson",
            role: "Marketing Director"
        },
        {
            quote: '"As a developer, I appreciate the clean interface and powerful API integrations. Saves me hours every week."',
            name: "Carlos Mendez",
            role: "Senior Developer"
        },
        {
            quote: '"Our team adoption was seamless. The learning curve is minimal and the benefits are immediate."',
            name: "Lisa Wong",
            role: "Team Lead"
        }
    ];

    // Elementos del DOM
    const quoteElement = document.querySelector('.testimonial__quote');
    const authorElement = document.querySelector('.testimonial__name');
    const roleElement = document.querySelector('.testimonial__role');
    const dots = document.querySelectorAll('.testimonial__dot');
    const prevArrow = document.querySelector('.testimonial__arrow:first-child');
    const nextArrow = document.querySelector('.testimonial__arrow:last-child');

    let currentIndex = 0;

    // Función para actualizar el testimonio mostrado
    function updateTestimonial(index) {
        // Asegurarse de que el índice esté dentro de los límites
        if (index < 0) {
            index = testimonials.length - 1;
        } else if (index >= testimonials.length) {
            index = 0;
        }

        currentIndex = index;

        // Actualizar el contenido
        quoteElement.textContent = testimonials[currentIndex].quote;
        authorElement.textContent = testimonials[currentIndex].name;
        roleElement.textContent = testimonials[currentIndex].role;

        // Actualizar los puntos indicadores
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('testimonial__dot--active');
            } else {
                dot.classList.remove('testimonial__dot--active');
            }
        });
    }

    // Event listeners para las flechas
    prevArrow.addEventListener('click', () => {
        updateTestimonial(currentIndex - 1);
    });

    nextArrow.addEventListener('click', () => {
        updateTestimonial(currentIndex + 1);
    });

    // Event listeners para los puntos
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateTestimonial(i);
        });
    });

    // Inicializar con el primer testimonio
    updateTestimonial(0);

    // Opcional: Auto-avance cada 3 segundos
    setInterval(() => {
        updateTestimonial(currentIndex + 1);
    }, 3000);
});