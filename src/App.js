import './App.css';
import { useState } from 'react';

// hardcoded quotes as stand-in:
const quotes = [
  {
    quote: "Tomorrow belongs to those who can hear it coming.",
    author: "David Bowie"
  },
  {
    quote: "I love the fact that I can make people happy, in any form. Even if it’s just an hour of their lives, if I can make them feel lucky or make them feel good, or bring a smile to a sour face, that to me is worthwhile.",
    author: "Freddie Mercury"
  },
  {
    quote: "If you fell down yesterday, stand up today.",
    author: "H.G. Wells"
  }
];

function App() {

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  console.log(currentQuote);
  function handleClick() {
    const ri = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[ri]);
  }

  return (
    <div className="App">
      <main>
        <section id="quote-box">
        <h1>Random Quote Machine</h1>
          <p id="text">"{currentQuote.quote}"</p>
          <p id="author">- {currentQuote.author}</p>
          <button id="new-quote" onClick={handleClick}>New quote</button>
          <p>
            <a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id="tweet-quote">Tweet quote</a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
