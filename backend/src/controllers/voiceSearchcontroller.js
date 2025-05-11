//Voice Reconaion

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()
recognition.continuous = false
recognition.interimResults = false
recognition.maxAlternatives = 1 //max prompts

//adding eventListeners
recognition.onstart =function ()  {
    scrib.show("R is started")
}
recognition.onresult = function(event) {
const transcript = event.
}