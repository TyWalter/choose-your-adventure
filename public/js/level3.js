// Level 3 story logic
const story = {
    part1: {
        description: `“You're not a half-bad fighter, you'll make a great knight.” Princess Katy says`,
        // img: $('body').css('background-image', 'url("imgs/alterending.PNG")')
        question: `“Well, I suppose it's time to head back to Dizzylot, shall we go?” `,
        wrongChoice: `I helped you average dizzy I didnt agree to do anything` ,
        rightChoice: `Sure! Let's go`,
        wrongResult:  `“Fine,” she says.  You go your separate ways.You continue to do good deeds but songs are never written about you.  You kill bad guys and help good people, but no one knows your name.  You lead a life of purpose and anonymity. Due to this, and your humble nature, you die alone and penniless in old age. The world will never know the deeds you did and no one remembers you.`,
         // img: $('body').css('background-image', 'url("imgs/castleimg.PNG")')
    },
    part2: {
        description: `You arrive at the gates of the castle, but the guards stop you and ask “Who are you two? The king is not accepting visitors.”`,
        // img: $('body').css('background-image', 'url("imgs/JAIL CELL.PNG")')
        question: `What do you do? `,
        wrongChoice: `Kill the guards`,
        rightChoice: `Convince them to let you in`,
        wrongResult: `You step up to the guards as if you're going to chat with them and  quickly pull out your sword and stab the first guard, then the second guard comes at you, but the Princess takes him before he gets to you. You're quickly surrounded by guards and captured. You spend your days awaiting execution for your crimes. Finally, the day has come for you to die. You're escorted by the guards to the chopping block. You lay your head down and wonder how many people have died the way you are about to? Just before the ax comes down to sever your head from your body, you think, why did I kill those people with so many witnesses?`,
        death: `You died`
        // img: ' ',
        // img2: ' '
    },
    part3: {
        
        description: `“Actually sir, this is Princess Katy of Dizzylot and I am with her. 
        We come to claim her position as next in line for the throne” you say.
        “Oh well why didn’t you just say so, Princess Katy?” The gates open and you're allowed into the castle.  The castle is magnificent, the most beautiful place you've ever seen. You're in the great hall, there are gold and white pillars from floor to ceiling.  The ceiling arches resemble those of a church. At the end of the hall sits King Gary on a white marble throne. You approach cautiously.  “I have returned to reclaim my throne, Dizzy chose me as Dizzylot’s next ruler. You can leave your post as king regent.” finishes Princess Katy. “But you have been gone so long Princess, you should wait to adjust back into royal life. It looks like you have been through a lot” says King Gary. No, I don't need to adjust. I left only to bring Dizzy’s murderer to justice and now that I have completed my mission, I will take my place as rightful Queen of Dizzylot.” 
        “Well, well, left to avenge Dizzy huh?” says Gary, “the king”.  You feel the mood of the whole room shift.
    “Well I guess you shouldn't have come back yet” says Gary.
    “What are you saying?” asks Katy.
    With thunderous laughter, Gary says “I ordered Dizzy’s death. I am the reason your precious dog is dead.” 
    “WHAT,” she says enraged. Without thinking, she lunges at King Gary with her dagger but misses. In a moment King Gary has disabled her weapon and knocked her aside.`,
        // img: $('body').css('background-image', 'url("imgs/deathscreen.
        question: `It's your turn, you come at the King remembering what a different king once said to you….`,
        wrongChoice: 'wrong riddle',
        rightChoice: 'right riddle',
        wrongResult: `The king easily bushes you aside and casts a spell of death grip. You feel life being sucked out of your body. Your hands wither, your hair grays, and you die a slow and painful death.`,
        death: `You died`,
        rightResult:  `Your blade strikes true right into the heart of the king, the battle is over. You see the Queen as she is now beginning to wake. She sees that you have killed the evil king.`,

        endStory: `The coming days go by in a blur as Queen Katy makes arrangements and does her best to undo all the damage evil King Gary had on the kingdom. You are knighted as well and appointed as the chief role guard to the queen. The Queen and her guard go down in history as one of the most powerful and fair monarchs in all the realm. From time to time you see a small white dog watching from the distance, Dizzy telling you from another world that you have done well!`
    }
};

const oldMusic = document.getElementById('background');
const newMusic = document.createElement('audio');
const source = document.createElement('source');
let mainText = $("#stupid-div");
let deathText = $('#death');
let deathDiv = $("<div>").addClass('death');
let button1 = $("<button>").addClass('choice btn btn-outline-light');
let button2 = $("<button>").addClass('choice btn btn-outline-light');
let button3 = $("<button>").addClass('continue btn btn-outline-light');
let button4 = $("<button>").addClass('riddle btn btn-outline-light');
let button5 = $("<button>").addClass('riddle btn btn-outline-light');

async function startStory(){
    $('body').css('background-image', 'url("../imgs/swamp.jpeg")');
    oldMusic.remove();
    source.setAttribute('src', '/audio/level3.mp3');
    newMusic.appendChild(source);
    document.body.appendChild(newMusic);
    newMusic.play();
    newMusic.volume = .05;
    await typeText(`<p>${story.part1.description}</p>`);
    button3.text("next");
    mainText.append(button3);
    renderStoryStart();
};

function renderStoryStart() {
    button3.on('click', async function (event) {
        event.stopPropagation();
        await typeText(`<p>${story.part1.question}</p>`);
        button1.text(story.part1.rightChoice);
        button2.text(story.part1.wrongChoice);
        const randomNum = Math.floor(Math.random() * 2) + 1;
        if(randomNum === 1){
            mainText.append(button1, button2);
        } else mainText.append(button2, button1);
        resultOfButton1();
        resultOfButton2();
    });
};

function resultOfButton1() {
    button1.on('click', function (event) {
        event.stopPropagation();
        renderPart2();
    });
};

function resultOfButton2() {
    button2.on('click', async function (event) {
        event.stopPropagation();
        $('body').css('background-image', 'url("../imgs/alterending.jpeg")');
        await typeText(`<p>${story.part1.wrongResult}</p>`);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game/3'");
        mainText.append(button3);
        updateStats('losses');
    });
};

async function renderPart2() {
    $('body').css('background-image', 'url("../imgs/castleimg.jpg")');
    await typeText(`<p>${story.part2.description}</p>`);
    mainText.children("p").text();
    mainText.children("button").hide();
    button1.text(story.part2.rightChoice);
    button2.text(story.part2.wrongChoice);
    const randomNum = Math.floor(Math.random() * 2) + 1;
        if(randomNum === 1){
            mainText.append(button1, button2);
        } else mainText.append(button2, button1);
    resultOfButton1Part2();
    resultOfButton2Part2();
};

function resultOfButton1Part2() {
    button1.on('click', function (event) {
        event.stopPropagation();
        renderPart3();
    });
};

function resultOfButton2Part2() {
    button2.on('click', async function (event) {
        event.stopPropagation();
        $('body').css('background-image', 'url("../imgs/deathscreen.PNG")');
        await typeText(`<p>${story.part2.wrongResult}</p>`);
        deathDiv.text("You Died");
        deathText.append(deathDiv);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game/3'");
        mainText.append(button3); 
        updateStats('deaths');
    });
};

async function renderPart3() {
    $('body').css('backgroundImage', 'url("../imgs/throneroom-img.PNG")');
    await typeText(`<p>${story.part3.description}</p>`);
    mainText.children("p").text();
    mainText.children("button").hide();
    button3.text('next')
    mainText.append(button3);
    randomRiddleButton();
};

function randomRiddleButton(){
    button3.on('click', function(event){
        event.stopPropagation();
        const randomNum = Math.floor(Math.random() * 16) + 1;
        getRiddle(randomNum);
    });
};

function getRiddle(num) {
    $.ajax({
        url: `/api/riddles/${num}`,
        method: 'GET',
        success: async function (data) {
            await typeText(`<p>${data.payload.riddle}</p>`)
            button4.text(data.payload.rightanswer);
            button5.text(data.payload.wronganswer);
            const randomNum = Math.floor(Math.random() * 2) + 4;
            if(randomNum === 4){
                mainText.append(button4, button5);
            } else mainText.append(button5, button4);
            resultOfButton1Part3();
            resultOfButton2Part3();
        },
        error: function (xhr, status, error) {
            // Code to handle any errors
            console.error(status, error);
        }
    });
};

function resultOfButton1Part3() {
    button4.on('click', async function (event) {
        event.stopPropagation();
        $('body').css('background-image', 'url("../imgs/endGamePhoto.jpg")');
        await typeText(`<p>${story.part3.endStory}</p>`);
        button3.text('PLAY AGAIN?');
        button3.attr('onclick', "location.href = '/profile'");
        mainText.append(button3);
        updateStats('wins');
    });
};

function resultOfButton2Part3() {
    button5.on('click', async function (event) {
        event.stopPropagation();
        $('body').css('background-image', 'url("../imgs/deathscreen.PNG")');
        await typeText(`<p>${story.part3.wrongResult}</p>`)
        deathDiv.text("You Died");
        deathText.append(deathDiv);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game/3'");
        mainText.append(button3);
        updateStats('deaths');
    });
};

function updateStats(result) {
    $.ajax({
        url: '/api/stats',
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({result}),
        success: function(response) {
            console.log('Data updated:', response.message);
        },
        error: function(xhr, status, error) {
            console.error('Error updating data:', error);
        }
    });
};

async function typeText(text) {
    mainText.html("");
    return new Promise((resolve) => {
        return new TypeIt("#stupid-div", {
            strings: [text],
            speed: 16,
            cursor: false,
            afterComplete: function (instance) {
                instance.destroy();
                resolve();
            }
        })
        .exec(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, 650);
            });
        })
        .go();
    });
}

startStory();