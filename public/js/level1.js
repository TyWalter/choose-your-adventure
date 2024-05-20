// Level 1 story logic
const story = {
    part1: {
        description: `You are a well-experienced adventurer traveling to the next kingdom.  You awaken in your camp under a small tree feeling well rested for the journey ahead.  You pull out your map and examine it for the next kingdom.  You see a shortcut a villager marked on your map the day before.`,
        question: `Do you take the villager's shortcut or proceed to the well-worn path?`,
        wrongChoice: `You head down the main path.`,
        rightChoice: `You head to the short cut`,
        wrongResult: `Clearly, you are one for reliability and stability. Unfortunately, reliability and stability do not make for a good adventurer. To be a good adventurer one must take the path less traveled. The main path leads you to a nice town you settle down in and never go on another adventure ever again!`,
        // img: $('body').css('background-image', 'url("imgs/startgame.PNG")')
    },
    part2: {
        description: `You head into the forest and take the shortcut.  Not long into the day, you hear the frightened cries of a young woman nearby. As you approach, you see the young woman is Princess Katy from Dizzylot, the kingdom you are traveling to. She is tied to a tree. `,
        question: `Do you cut the rope and free the princess or do you leave her there?`,
        wrongChoice: `Cut the rope.`,
        rightChoice: `Don't cut the rope. `,
        wrongResult: `You go up to the princess as she struggles and say "You're Princess Katy from the kingdom of Dizzylot, right? Are you okay? Do you need help? " She replies "Of course I am, What do you think? I'm tied to a tree!" You lean down to untie her and feel a sharp pain in the middle of your back. Blood sprays onto the princess' face as she looks up at you with an evil grin.The princess says "Nice shot boys! They are sure to have plenty of a loot on them"`,
        death: `You died`
        // img1: $('body').css('background-image', 'url("../../public/imgs/shortcut.PNG")'),
        // img: $('body').css('background-image', 'url("../../public/imgs/deathscreen.PNG")')
    },
    part3: {
        description: `You start to walk up to the princess but hear rustling in the leaves nearby and notice that the ropes tying her to the tree look strangely loose. As you start to draw your weapon and prepare for the attack you are sure is coming, you remember the words of a wise professor… `,
        question: "enter riddle here",
        wrongChoice: 'wrong riddle',
        rightChoice: 'right riddle',
        wrongResult: `You get lost in thought tearing up at the thought of your old classmates and teacher. A Bandit comes up and kills you, you should have indented.`,
        death: `You died`,
        rightResult: `Remembering your professor's wise words has focused your senses, you spin around your sword cutting down the first bandit that dared to make a move. You make quick work of the other three but when you turn to look for the princess she is gone. `,
        // img: $('body').css('background-image', 'url("../../public/imgs/startgame.PNG")'),
        // overlayImg: "bloodimg"
    }
};

const music = document.getElementById('background');
let mainText = $("#stupid-div");
let deathText = $('#death');
let deathDiv = $("<div>").addClass('death');
let button1 = $("<button>").addClass('choice btn btn-outline-light');
let button2 = $("<button>").addClass('choice btn btn-outline-light');
let button3 = $("<button>").addClass('continue btn btn-outline-light');
let button4 = $("<button>").addClass('riddle btn btn-outline-light');
let button5 = $("<button>").addClass('riddle btn btn-outline-light');

async function startStory() {
    $('body').css('backgroundImage', 'url("../imgs/startgame.PNG")');
    music.play();
    music.volume = .05;
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
}

function resultOfButton1() {
    button1.on('click', function (event) {
        event.stopPropagation();
        renderPart2();
    });
};

function resultOfButton2() {
    button2.on('click', async function (event) {
        event.stopPropagation();
        $('body').css('backgroundImage', 'url("../imgs/alterending.jpeg")');
        await typeText(`<p>${story.part1.wrongResult}</p>`);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game'");
        mainText.append(button3);
        updateStats('losses')
    });
};

async function renderPart2() {
    $('body').css('backgroundImage', 'url("../imgs/shortcut.PNG")');
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
        $('body').css('backgroundImage', 'url("../imgs/deathscreen.PNG")');
        await typeText(`<p>${story.part2.wrongResult}</p>`);
        deathDiv.text("You Died");
        deathText.append(deathDiv);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game'");
        mainText.append(button3);
        updateStats('deaths')
    });
};

async function renderPart3() {
    $('body').css('backgroundImage', 'url("../imgs/shortcut.PNG")');
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
        $('body').css('backgroundImage', 'url("../imgs/your-character.jpg")');
        await typeText(`<p>"Congratulations You beat Level 1 of the Queen and her Guard"</p>`);
        button3.text('Continue to Level 2');
        button3.attr('onclick', "location.href = '/game/2'; music.pause()");
        mainText.append(button3);
    });
};

function resultOfButton2Part3() {
    button5.on('click', async function (event) {
        event.stopPropagation();
        $('body').css('backgroundImage', 'url("../imgs/deathscreen.PNG")');
        await typeText(`<p>${story.part3.wrongResult}</p>`)
        deathDiv.text("You Died");
        deathText.append(deathDiv);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game'");
        mainText.append(button3);
        updateStats('deaths')
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