const audioContext = window.AudioContext || window.webkitURLAudioContext; 
const audioCtx = new AudioContext();

const audioElem = document.querySelector('audio');
const audioTrack = audioCtx.createMediaElementSource(audioElem);

// const startGameButton

// https://codepen.io/Rumyra/pen/qyMzqN/
// if we have time 


