import { useState } from 'react'

// Styles / CSS
import './App.css'

//Components
import FirstComponent from './components/FirstComponent'
import TemplatesExpressions from './components/TemplateExpression'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplatesExpressions/>
      <Events />
      <Challenge />
    </>
    
  )
}

export default App
