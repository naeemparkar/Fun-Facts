const facts = [
    {
        text: "The world's first speeding ticket was issued in 1902.",
        image: "https://example.com/speeding_ticket.jpg" // Replace with actual image URLs
    },
    {
        text: "The average car has about 30,000 parts.",
        image: "https://example.com/average_car_parts.jpg"
    },
    {
        text: "The longest traffic jam in history was 62 miles long, occurring in France in 1980.",
        image: "https://example.com/traffic_jam.jpg"
    },
    {
        text: "The first car radio was introduced in 1922.",
        image: "https://example.com/car_radio.jpg"
    },
    {
        text: "The first car to be mass-produced was the Model T by Ford in 1913.",
        image: "https://example.com/model_t.jpg"
    }
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    document.getElementById('fact').innerText = fact.text;
    document.getElementById('fact-image').src = fact.image;
}

document.body.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth * 255;
    const y = event.clientY / window.innerHeight * 255;
    document.body.style.background = `rgb(${x}, ${y}, 150)`;
});
