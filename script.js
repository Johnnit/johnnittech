/*typed animation*/
var typed = new Typed(".typing", {
    strings: ["Web Designer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,

})
const playVoice = document.querySelector('.play');
let speechSynthesis = window.speechSynthesis;

window.onload = ()=>{
    playVoice.querySelector('i').classList.add('fa-play');
    let utter = new SpeechSynthesisUtterance('Welcome, to Ajala John portfolio page.\n Click on the play button on the top-right corner of the page to read the page.');

        window.speechSynthesis.speak(utter);
}

playVoice.addEventListener('click',()=>{
    let bdy = document.querySelector('body').textContent;
    let utterance = new SpeechSynthesisUtterance(bdy);
    if(playVoice.querySelector('i').classList.contains('fa-play')){
        playVoice.querySelector("i").classList.add('fa-pause');
        playVoice.querySelector("i").classList.remove('fa-play');
        window.speechSynthesis.speak(utterance);
    }
    else{
    
    playVoice.querySelector("i").classList.remove('fa-pause');
    playVoice.querySelector("i").classList.add('fa-play');
    
    window.speechSynthesis.pause();
    }
})
