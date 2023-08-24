import {useState} from 'react'
import {BiCopyright} from 'react-icons/bi'
import './index.css'

// const amountList = [97.5, 207, 211.2]

const PageDisplay = () => {
  const [amount, setAmount] = useState(0)

  return (
    <div className="bg-container">
      <div className="heading-container">
        <p className="line">_____________</p>
        <h1 className="heading">Bundle & Save</h1>
        <p className="line">_____________</p>
      </div>
      <div className="radio-container">
        <div className="input-item-container">
          <label htmlFor="option1">
            <input
              type="radio"
              id="option1"
              onChange={() => setAmount(97.5)}
              name="amount"
            />
            <div className="item">
              <p> 1 Pair</p>
              <p>DKK 195.00</p>
            </div>
          </label>
        </div>
        <p>50% Off</p>
      </div>
      <div className="radio-container">
        <div className="input-item-container">
          <input type="radio" onChange={() => setAmount(207)} name="amount" />
          <div className="item">
            <p> 1 Pair</p>
            <p>DKK 345.00</p>
            <div className="select-container">
              <p>#1</p>
              <select className="space">
                <option key="S">S</option>
                <option key="M">M</option>
                <option key="L">L</option>
                <option key="XL">XL</option>
                <option key="XXL">XXL</option>
              </select>
              <select className="space">
                <option key="color">color</option>
                <option key="white">white</option>
                <option key="brown">brown</option>
                <option key="purple">purple</option>
              </select>
            </div>
            <div className="select-container">
              <p>#2</p>
              <select className="space">
                <option key="S">S</option>
                <option key="M">M</option>
                <option key="L">L</option>
                <option key="XL">XL</option>
                <option key="XXL">XXL</option>
              </select>
              <select className="space">
                <option key="color">color</option>
                <option key="white">white</option>
                <option key="brown">brown</option>
                <option key="purple">purple</option>
              </select>
            </div>
          </div>
        </div>
        <di>
          <p>Most Popular</p>
          <p>40% Off</p>
        </di>
      </div>
      <div className="radio-container">
        <div className="input-item-container">
          <input type="radio" onChange={() => setAmount(211.2)} name="amount" />
          <div className="item">
            <p> 3 Pair</p>
            <p>DKK 528.00</p>
          </div>
        </div>
        <p>60% Off</p>
      </div>
      <div className="shopping">
        <p className="space-free text">Free 2 Day Shopping</p>
        <p>
          Total: <span className="span-element">DKK {amount}</span>
        </p>
      </div>
      <button type="button" className="button">
        + Add to Cart
      </button>
      <p className="text alignment-container">
        <BiCopyright />
        Powered by pumper
      </p>
    </div>
  )
}

export default PageDisplay
