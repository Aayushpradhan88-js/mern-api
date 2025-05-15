import {useState} from 'react'

const UiVoiceSerch = () => {
    const [transcript, setTranscript] = useState('')
    const[results, setResuts] = useState([])
    const [isListening, setIsListening]= useState(false)

    
  return (
    <div>UiVoiceSerch</div>
  )
}

export default UiVoiceSerch