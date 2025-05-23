import { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './App.css'
import useClipboard from "react-use-clipboard"

const VoiceSerch = () => {

  const [textToCopy, setTextToCopy] = useState()
  const [isCopied, setCopied] = useClipboard(textToCopy)

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "eng-US" })
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) return 
  
  /*
  unique feature 
  usersearch = computernetwork notes (own uploded file uploaded file)
  usersearch for online = :Ayush NEXT.JS COURSE
  */

  return (
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <br />
      <p>A React hook that converts speech from the microphone to text and makes it available to your React
        components.</p>

      <div className="main-content" onClick={() => setTextToCopy(transcript)}>
        {transcript}
      </div>

      <div className="btn-style">

        <button onClick={setCopied}>
          {isCopied ? "Copied" : "Copied to clipboard"}
        </button>
        <button onClick={startListening}>Start Voice </button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      </div>
    </div>
  )
}

export default VoiceSerch