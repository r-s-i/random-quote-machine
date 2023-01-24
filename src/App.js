import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [quote, setQuote] = useState({quote: "", author: ""})

  useEffect(() => {
    async function fetchData() {
        const response = await axios.get('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        setData(response.data);
        setQuote(response.data.quotes[Math.floor(Math.random() * response.data.quotes.length) + 1]);
    }
    fetchData();
  }, []);

  function handleClick() {
    setQuote(data.quotes[Math.floor(Math.random() * data.quotes.length) + 1]);
  }

  return (
    <div className="App">
        <main>
          <section id="quote-box">
          <h1>Random Quote Machine</h1>
            <p id="text">{data && JSON.stringify(quote.quote)}</p>
            <p id="author">- {data && JSON.stringify(quote.author)}</p>
            <button id="new-quote" onClick={handleClick}>New quote</button>
            <p>
              <a href="{/*tweet*/}" target="_blank" rel="noreferrer" id="tweet-quote">Tweet quote</a>
            </p>
          </section>
        </main>
      </div>
  );
}

export default App;
