const facts = [
    "The world's first speeding ticket was issued in 1902.",
    "The average car has about 30,000 parts.",
    "The longest traffic jam in history was 62 miles long, occurring in France in 1980.",
    "The first car radio was introduced in 1922.",
    "The first car to be mass-produced was the Model T by Ford in 1913.",
    "Electric cars have been around since the 1830s.",
    "The first windshield wipers were invented by Mary Anderson in 1903.",
    "Cruise control was invented in 1948 by Ralph Teetor, who was blind.",
    "The first car to feature seat belts was the 1950 Nash Rambler.",
    "The most popular car color in the world is white."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}
