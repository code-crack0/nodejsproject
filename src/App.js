import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <img
          src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
          height="20px"
        />
        <div class="filter">
          <select class="select" name="currency_1">
            <option>INR</option>
          </select>
          <select class="select" name="currency_2">
            <option>BTC</option>
            <option>ETH</option>
            <option>ETH</option>
            <option>ETH</option>
            <option>ETH</option>
            <option>ETH</option>
            <option>ETH</option>
          </select>
          <button class="buy_btc">BUY BTC</button>
        </div>
      </nav>
    </div>
  );
}

export default App;
