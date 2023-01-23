import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <main>
      <h1>Random Quote Machine</h1>
      <section id="quote-box">
        <p id="text">Random quote</p>
        <p id="author">- Author</p>
        <button id="new-quote">New quote</button>
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet quote</a>
      </section>
    </main>
    

    </div>
  );
}

export default App;
