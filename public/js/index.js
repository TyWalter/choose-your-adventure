const gameToProfile = document.querySelector("#sendToProfile");
const gameToHome = document.querySelector("#sendToHome");

gameToHome.addEventListener('click', function(){
    document.location.replace('/')
})

gameToProfile.addEventListener('click', function(){
    document.location.replace('/profile')
})