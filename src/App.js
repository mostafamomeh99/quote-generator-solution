import './App.css';
import React, {useState} from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }
 

  const shareOnTwitter = () => {
    let text = `"${quote.content}" - ${quote.author}`;
    let twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
};
const shareOnWhatsApp = () => {
  let text = `${quote.content} - ${quote.author}`;
  let whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
};
const shareOnfacebook = () => {
  let text = `${quote.content} - ${quote.author}`;
  let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(`${text}`)}`;
  window.open(facebookUrl, '_blank');
};



  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={shareOnfacebook} className="btn">share on facebook</button>
          <button onClick={shareOnTwitter} className="btn">share on twitter</button>
          <button onClick={shareOnWhatsApp} className="btn">Share on WhatsApp</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          
        </div>
      </div>
    </>
  )
}


export default App;
