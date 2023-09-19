import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [toggle, setToggle] = useState("light");
  const [data, setData] = useState([]);
  useEffect(() => {
    getCryptoRates();
  }, []);
  async function getCryptoRates() {
    try {
      const response = await axios.get("http://localhost:4000/api/crypto-data");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div className={toggle === "light" ? `light` : `dark`}>
      <nav className="navbar">
        <img
          src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
          height="20px"
        />
        <div className="filter">
          <select className="select" name="currency_1">
            <option>INR</option>
          </select>
          <select className="select" name="currency_2">
            <option>BTC</option>
            <option>ETH</option>
            <option>ETH</option>
            <option>ETH</option>
            <option>ETH</option>
            <option>ETH</option>
            <option>ETH</option>
          </select>
          <button className="buy_btc">BUY BTC</button>
        </div>
        <div className="socials_toggle">
          <button className="social">Connect Telegram</button>
          <label class="switch">
            <input
              className="toggle"
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setToggle("dark");
                } else {
                  setToggle("light");
                }
              }}
            />
            <span class="slider round"></span>
          </label>
        </div>
      </nav>
      <div
        className="tag1"
        style={{
          color: "#6c757d",
          marginBottom: "5px",
          textAlign: "center",
          fontFamily: "monospace",
        }}
      >
        Best Price to Trade
      </div>
      <div className="trade">
        <div className="trade_style">
          <div>0.41%</div>
          <div className="text_trade">5 Mins</div>
        </div>
        <div className="trade_style">
          <div>0.66%</div>
          <div className="text_trade">1 Hour</div>
        </div>
        <div
          className="main_trade"
          style={
            toggle === "light"
              ? { color: "black", fontWeight: "bold" }
              : {
                  color: "white",
                  fontWeight: "bold",
                  lineHeight: "50px",
                }
          }
        >
          ₹ 29,89,393
        </div>

        <div className="trade_style">
          <div>9.75%</div>
          <div className="text_trade">1 Day</div>
        </div>
        <div className="trade_style">
          <div>15.34%</div>
          <div className="text_trade">7 Days</div>
        </div>
      </div>
      <div
        className="tag2"
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#6c757d",
          fontFamily: "monospace",
        }}
      >
        Average BTC/INR net price including commission
      </div>
      <table className="table">
        <tr>
          <th style={{ width: "5%", fontFamily: "monospace" }}>#</th>
          <th style={{ width: "20%", fontFamily: "monospace" }}>Platform</th>
          <th style={{ width: "15%", fontFamily: "monospace" }}>
            Last Traded Price
          </th>
          <th style={{ width: "20%", fontFamily: "monospace" }}>
            Buy / Sell Price
          </th>
          <th style={{ width: "10%", fontFamily: "monospace" }}>Volume</th>
          <th style={{ width: "15%", fontFamily: "monospace" }}>Base Unit</th>
        </tr>
        {data.map((item, index) => (
          <tr className="entries" key={index}>
            <td
              style={{ width: "5%", fontFamily: "monospace", color: "white" }}
            >
              {index + 1}
            </td>
            <td
              style={{
                width: "20%",
                textTransform: "uppercase",
                fontFamily: "monospace",
                color: "white",
              }}
            >
              {item.name}
            </td>
            <td
              style={{ width: "15%", fontFamily: "monospace", color: "white" }}
            >
              {" "}
              ₹{" " + item.last}
            </td>
            <td
              style={{ width: "25%", fontFamily: "monospace", color: "white" }}
            >
              {item.buy}
              {" / "}
              {item.sell}
            </td>
            <td
              style={{ width: "10%", fontFamily: "monospace", color: "white" }}
            >
              {item.volume}
            </td>
            <td
              style={{ width: "15%", fontFamily: "monospace", color: "white" }}
            >
              {item.base_unit}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
