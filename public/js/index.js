const gameToProfile = document.querySelector("#sendToProfile");
const gameToHome = document.querySelector("#sendToHome");

gameToHome.addEventListener('click', function(){
    // add things to make this send you home 
    document.location.replace('/')
})

gameToProfile.addEventListener('click', function(){
    // add things to make this send you home 
    document.location.replace('/profile')
})