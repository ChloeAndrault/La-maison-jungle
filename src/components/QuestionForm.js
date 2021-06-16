import { useState } from 'react'

function QuestionForm(el){
  
  function checkValue(value) {
    if (!value.includes('f')) {
      setInputValue(value)
    }
  }

  const [inputValue, setInputValue] = useState("Posez votre question ici")
  const isInputError = inputValue.includes('f') 

  return (
    <div>
     

      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onChange={(e) => checkValue(e.target.value)}
        onChange={(e) => checkValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
  )
}

export default QuestionForm
