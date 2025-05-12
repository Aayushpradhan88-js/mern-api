//Voice Reconaion

// const SpeechRecognition =
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if (!SpeechRecognition) {
  console.error("SpeechRecognition is not supported in you're browser")
} else {
  const recognition = new SpeechRecognition()
  recognition.continuous = false
  recognition.interimResults = false
  recognition.maxAlternatives = 1 //max prompts

  //adding eventListeners
  recognition.onstart = function () {
    // console.log("speech recognition is started")
    scrib.show("R is started")
  }

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript //TODO:
    scrib.show(`You said@ ${transcript}`)
  }

  recognition.start()
}
