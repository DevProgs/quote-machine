import { useState, useEffect, useLayoutEffect } from 'react'
import Quote from './components/Quote';
import './styles/style.scss';

function App() {
  const [quoteData, setQuoteData] = useState([])
  const [defaultBackground, setDefaultBackground] = useState('rgba(100, 100, 100, 1)');
  const [randomColor, setRandomColor] = useState('')
  

  const url = 'https://api.quotable.io/random';

  const fetchData = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setQuoteData(data));
    colorFunc()
  }
  
  const colorFunc = () => {
    let num1 = Math.trunc(Math.random()  * (255 - 1) + 1)
    let num2 = Math.trunc(Math.random()  * (255 - 1) + 1)
    let num3 = Math.trunc(Math.random()  * (255 - 1) + 1)
    let opacity = Math.trunc(Math.random())
    let newColor = `rgba(${num1}, ${num2}, ${num3})`
    setRandomColor(newColor);
  }

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ background: randomColor }} className="main__container">
      <Quote
        quoteData={quoteData}
        fetchQuote={fetchData}
        randomColor={randomColor}
      />
    </div>
  );
}

export default App
