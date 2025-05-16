import { useState } from 'react'
import axios from 'axios'
// import { voiceSearch } from '../../../../../backend/src/controllers/voiceSearchController'

const VoiceSerch = () => {
  const [transcript, setTranscript] = useState('')
  const [results, setResults] = useState([])
  const [isListening, setIsListening] = useState(false)
  const scrib = window.scribble

  const recognition = window.SpeechRecognition || window.webKitSpeechRecognition
  const startVoiceSearch = () => {
    recognition.continuous = false
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    //search
    recognition.onStart = () => {
      setIsListening(true)
      scrib.show("Recoginition has been started")
    }

    //result
    recognition.onresult = async function (event) {
      const speechResult = event.results[0][0].transcript
      setTranscript(speechResult)
      scrib.show(`You Said:${speechResult}`)

      const result = await fetch('http://localhost:5000/api/v2user/search', {
        +
      })

      try {
        const response = await axios.get('http://localhost:5000/api/v2user/search',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify((
              { 
                voiceSearch: speechResult
              }
            ))
          },
          {
            params: {
              voiceSearch: speechResult
            },
          })
        setResults(`You Said:${response.data}`)
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    }

    recognition.start()
  }
  /*
  unique feature 
  usersearch = computernetwork notes (own uploded file uploaded file)
  usersearch for online = :Ayush NEXT.JS COURSE
  */
  return (
    <div className="text-center p-5 max-w-4xl mx-auto">
      <h1 className='"text-3xl font-bold mb-4'>Voice Search App</h1>
      <button
        onClick={startVoiceSearch}
        disabled={isListening}
        className={`bg-blue-500 text-white border-none rounded cursor-pointer py-2 px-4 text-lg disabled:bg-gray-500 disabled:cursor-not-allowed`}
      >
        {isListening ? 'Listening...' : 'Start Voice Search'}
      </button>
      {transcript && (
        <p>You said: <strong>{transcript}</strong></p>
      )}
      <div>
        <h2 className="text-2xl font-semibold mt-6">Search Results</h2>
        {results.length > 0 ? (
          <ul className="list-none p-0">
            {results.map((item) => (
              <li key={item._id} className="my-2 p-2 border border-gray-300 rounded">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4">No results found.</p>
        )}
      </div>
    </div>
  );

}

export default VoiceSerch