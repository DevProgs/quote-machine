import React from 'react';
import {nanoid} from 'nanoid';

function Quote({ quoteData, fetchQuote, randomColor }) {

  // needed to generate a key from fade-in effect to work for each re-render
  const getRandomKey = () => {
    return nanoid();
  };

  return (
    <div className="container">
      <div key={getRandomKey()} className="quote fade-in">
        <h2 style={{ color: randomColor }} className="quote__famous--quote">
          "{quoteData.content}"
        </h2>
        <p style={{ color: randomColor }} className="quote__author">
          -{quoteData.author}
        </p>
      </div>
      <div className="buttons">
        <a href="http://www.twitter.com" target="_blank">
          <button
            style={{ background: randomColor }}
            className="buttons__social"
          >
            <i className="fa-brands fa-twitter fa-2x"></i>
          </button>
        </a>
        <a href="http://www.facebook.com" target="_blank">
          <button
            style={{ background: randomColor }}
            className="buttons__social"
          >
            <i className="fa-brands fa-facebook fa-2x"></i>
          </button>
        </a>
        <button
          style={{ background: randomColor }}
          className="buttons__quote"
          onClick={fetchQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
