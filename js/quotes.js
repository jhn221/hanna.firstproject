const quotes = [
    {
        quote : "The world is your oyster.It’s up to you find the pearls.",
        author : "Chris Gartner"
    },
    {
        quote : "To be mature means to face, and not evade, every fresh crisis that comes.",
        author : "Fritz Kunkel"
    },
    {
        quote : "The universe is change; our life is what our thoughts make it.",
        author : "Marcus Aurelius Antoninus"
    },
    {
        quote : "A good plan, violently executed now, is better than a perfect plan next week.",
        author : "George S.Patten"
    },
    {
        quote : "The whole life of man is but a point of time; let us enjoy it.",
        author : "Plutarch"
    },
    {
        quote : "Regret for wasted time is more wasted time.",
        author : "Mason Cooley"
    },
    {
        quote : "Great deeds are usually wrought at great risks.",
        author : "Herodotus"
    },
    {
        quote : "Self-confidence is the first requisite to great undertakings.",
        author : "Samuel Johnson"
    },
    {
        quote : "Learning without thought is labor lost; thought without learning is perilous.",
        author : "Confucius"
    },
    {
        quote : "Despair is a narcotic. It lulls the mind into indifference.",
        author : "Charlie Chaplin"
    }
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const toDayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuote.quote;
author.innerText = toDayQuote.author;