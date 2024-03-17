import Left from "./components/Left component/Left"
import Right from "./components/Right component/Right"
import './App.css'
import { useState } from "react"
export default function App() {
  const [amount, setAmount] = useState(0)
  return (
    <div className="main">
      <div className="left">
      <Left
      setAmount={setAmount}
      amount = {amount}/>
      </div>
      <div className="right">
      <Right
        setAmount={setAmount}
        amount = {amount}/>
      </div>
    </div>
  )
}