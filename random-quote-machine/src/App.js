import './App.css';
import {useState} from 'react';

const quotes = [
    {
        text: '2 + 2 is 4',
        author: 'Math'
    },
    {
        text: 'So true!',
        author: 'Weenie'
    },
    {
        text: '3, 2, 1, Rider... Kick!',
        author: 'Tendou'
    },
    {
        text: 'I put the cute in acute depression',
        author: 'Someone clever'
    },
    {
        text: 'I wish I was a bird',
        author: 'Norio Wakamoto'
    },
    {
        text: 'BRITANNIA!',
        author: 'Norio Wakamoto'
    },
    {
        text: 'I must kill Chaos!',
        author: 'Jack Garland'
    },
    {
        text: 'It\'s called Final Fantasy because it was going to be the final game we would make',
        author: 'Square'
    },
    {
        text: 'MegaMan Battle Network is a really deep game',
        author: 'playerzero'
    },
    {
        text: 'who here love megaman',
        author: 'Salad'
    },
];

function App() {
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
    return (
        <div className="App">
            <div id="quote-box" className="">
                <div className="quote">
                    <p id="text"><b>{quote.text}</b></p>
                    <small id="author"><i>-{quote.author}</i></small>
                </div>
                <button id="new-quote" onClick={() => {
                    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
                }}>Give me a new one, chief!</button>
                <a id="tweet-quote" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${encodeURI(quote.text)} - ${encodeURI(quote.author)}`} >Tweet this thing!</a>
            </div>
        </div>
    );
}

export default App;
