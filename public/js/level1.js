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
        wrongResult: `You go up to the princess as she struggles and say "You're Princess Katy from the kingdom of Dizzylot, right? Are you okay? Do you need help? " She replies "Of course I am, What do you think? I'm tied to a tree!" You lean down to untie her and feel a sharp pain in the middle of your back. Blood sprays onto the princess' face as she looks up at you with an evil grin.The princess says "Nice shot boys! They are sure to have plenty of a loot on them", You died`,
        // img1: $('body').css('background-image', 'url("../../public/imgs/shortcut.PNG")'),
        // img: $('body').css('background-image', 'url("../../public/imgs/deathscreen.PNG")')
    },
    part3: {
        description: `You start to walk up to the princess but hear rustling in the leaves nearby and notice that the ropes tying her to the tree look strangely loose. As you start to draw your weapon and prepare for the attack you are sure is coming, you remember the words of a wise professor… `,
        question: "enter riddle here",
        wrongChoice: 'wrong riddle',
        rightChoice: 'right riddle',
        wrongResult: `You get lost in thought tearing up at the thought of your old classmates and teacher. A Bandit comes up and kills you, you should have indented. `,
        rightResult: `Remembering your professor's wise words has focused your senses, you spin around your sword cutting down the first bandit that dared to make a move. You make quick work of the other three but when you turn to look for the princess she is gone. `,
        // img: $('body').css('background-image', 'url("../../public/imgs/startgame.PNG")'),
        // overlayImg: "bloodimg"
    }
};

let mainText = $("#stupid-div");
let button1 = $("<button>").addClass('btn btn-outlin-light');
let button2 = $("<button>").addClass('btn btn-outlin-light');
let button3 = $("<button>").addClass('btn btn-outline-light');
let button4 = $("<button>").addClass('btn btn-outline-light');
let nextLevelButton = $("<button>").addClass('btn btn-outline-light');
let bloodscreen = $("<div>").addClass('overlay-image');
let played = 0;
let wins = 0;
let deaths = 0;
let losses = 0;
const music = document.getElementById('background');

function startStory() {
    mainText.html(`<span>${story.part1.description}</span>`)
    mainText.append(button2);
    button2.text("next");
    $('body').css('backgroundImage', 'url("../imgs/startgame.PNG")');
    music.play();
    music.volume = .05;
    renderStoryStart();
};

function renderStoryStart() {
    button2.on('click', function (event) {
        event.stopPropagation();
        mainText.html(`<span>${story.part1.question}</span>`); // which path do you choose 
        button2.text(story.part1.wrongChoice); //main path
        button1.text(story.part1.rightChoice); //the short cut 
        mainText.append(button1); // thisis the two buttons with this text
        mainText.append(button2);
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
    button2.on('click', function (event) {
        event.stopPropagation();
        mainText.text(story.part1.wrongResult);
        $('body').css('backgroundImage', 'url("../imgs/alterending.PNG")');
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game'");
        mainText.append(button3);
        losses++;
        played++;
    });
};

function renderPart2() {
    mainText.html(`<span>${story.part2.description}</span>`);
    $('body').css('backgroundImage', 'url("../imgs/shortcut.PNG")');
    mainText.children("span").text();
    mainText.children("button").hide();
    button2.text(story.part2.wrongChoice);
    button1.text(story.part2.rightChoice);
    mainText.append(button1);
    mainText.append(button2);
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
    button2.on('click', function (event) {
        event.stopPropagation();
        mainText.text(story.part2.wrongResult);
        $('body').css('backgroundImage', 'url("../imgs/deathscreen.PNG")');
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game'");
        mainText.append(button3);
        deaths++;
        played++;
    });
};

function renderPart3() {
    button1.on('click', function (event) {
        event.stopPropagation();
    mainText.html(`<span>${story.part3.description}</span>`);
    $('body').css('backgroundImage', 'url("../imgs/shortcut.PNG")');
    mainText.children("span").text();
    mainText.children("button").hide();
    button1.text('next')
    mainText.append(button1);
    randomRiddleButton();
    })

};

function resultOfButton1Part3() {
    button1.on('click', function (event) {
        event.stopPropagation();
        $('body').css('backgroundImage', 'url("../imgs/your-characcter.jpg")');
        mainText.text("Congratulations You beat Level 1 of the Queen and her Guard");
        button4.text('Continue to Level 2');
        button4.attr('onclick', "location.href = '/game/2'; music.pause()");
        mainText.append(button4);
        wins++;
        played++;
    });
};

function resultOfButton2Part3() {
    button2.on('click', function (event) {
        event.stopPropagation();
        mainText.text(story.part2.wrongResult);
        $('body').css('backgroundImage', 'url("../imgs/deathscreen.PNG")');
        deaths++;
        played++;
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game'");
        mainText.append(button3);
    });
};

function randomRiddleButton(){
    button1.on('click', function(event){
        event.stopPropagation();
        let randomRiddle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16];
        const randomIndex = Math.floor(Math.random() * randomRiddle.length);
        const randomElement = randomRiddle[randomIndex];
    getRiddle(randomElement);
})
}

function getRiddle(num) {
    $.ajax({
        url: `/api/riddles/${num}`,
        method: 'GET',
        success: function (data) {
            mainText.text(data.payload.riddle)
            button2.text(data.payload.rightanswer);
            button1.text(data.payload.wronganswer);
            mainText.append(button1);
            mainText.append(button2);
            resultOfButton2Part3();
            resultOfButton1Part3();
        },
        error: function (xhr, status, error) {
            // Code to handle any errors
            console.error(status, error);
        }
    });
};

function typeText(text, callback) {
    mainText.html(""); // Clear the text container
    new TypeIt("#tested123", {
        strings: [text],
        speed: 75,
        cursorChar: "🗡️",
        afterComplete: function (instance) {
            instance.destroy();
            if (callback) callback();
        }
    }).go();
};

startStory();