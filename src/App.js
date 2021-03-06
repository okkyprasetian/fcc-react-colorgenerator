import { useState } from 'react'
import Color from './components/Color'
import Values from 'values.js'


function App() {

  // State
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  // SetState
  const handleSubmit = e => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    }
    catch (error) {
      setError(true)
      console.log('error brother')
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Color Generator</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className={`input ${error && 'error'}`} placeholder="#af30ee" value={color} onChange={e => setColor(e.target.value)} />
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
      <div className="main">
        {list.map((color, index) => {
          return (
            <Color key={index} {...color} index={index} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
