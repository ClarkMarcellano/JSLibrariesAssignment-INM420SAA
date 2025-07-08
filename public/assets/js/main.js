// Glide.js
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
    hoverpause: true,
    gap: 10
}).mount();


// Chart.js
const ctx = document.getElementById('bookingChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Bookings per Month',
            data: [10, 15, 60, 20, 40, 75],
            backgroundColor: 'rgba(0, 198, 255, 0.2)',
            borderColor: '#00c6ff',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Monthly Bookings Trend'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                }
            }
        }
    }
});

// greensock animation platform
gsap.from(".hero-content", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: "power3.out"
});

