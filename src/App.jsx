
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [username, setUsername] = useState("")
  const [records, setRecords] = useState([])
  const [poll, setPoll] = useState("")

  let polls = [
    "Kya weekend par picnic karni chahiye?",
    "Kya online classes useful hoti hain?",
    "Kya aap roz exercise karte hain?",
    "Kya mobile games time waste karti hain?",
    "Kya coding students ke liye important hai?"
  ]

  useEffect(() => {
    let index = Math.floor(Math.random() * polls.length)
    setPoll(polls[index])
  }, [records])

  let saveVote = (answer) => {

    if (username == "") {
      alert("Please Enter Your Name")
      return
    }

    let voteData = {
      username: username,
      answer: answer,
      polling: poll
    }

    setRecords([...records, voteData])
    setUsername("")
  }

  return (
    <>
      <div className="app">
        <h1 className="question">{poll}</h1>

        <input
          className="name-input"
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="btn btn-yes" onClick={() => saveVote("Yes")}>Yes</button>
        <button className="btn btn-no" onClick={() => saveVote("No")}>No</button>
      </div>

      <div className="history">
        {records.map((item, index) => {
          return (
            <div key={index} className="vote-item">
              <h2>{item.polling}</h2>
              <p>{item.username} selected {item.answer}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
