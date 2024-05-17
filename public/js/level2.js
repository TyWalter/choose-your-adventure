// Level 2 story logic
const story = {
    part1: {
        description: `The bandits are all dead by your blade and you notice footprints in the dirt that lead off the path. It might lead to the Princess…`,
        question: `Do you go after her?`,
        wrongChoice: `No`,
        rightChoice: `Yes`,
        wrongResult: `You make your way down the path but slip on all the blood and fall. You don't even notice the blade sticking out of your chest until you try to get up and are pulled down. Once you notice it is impossible to notice anything else, the pain racks your body and in your final moments, you think to yourself “I should have…followed the…Princess.”`,
        death: `You died`
        //img: $('body').css('background-image', 'url("../../public/imgs/deathscreen.PNG")'),
    },
    part2: {
        description: `You follow the footprints into the woods, the forest grows thick as you run deeper and deeper through it. At this point, almost no sunlight is breaking through the thick dense forest treetop. You see a figure just barely in front of you. Wait, let me explain,” the Princess says. “You have one minute.” You reply. I left the royal life after the death of my dog Dizzy. He actually was the creator of my kingdom and closer to a god than a real dog, but he was old and weak and someone murdered him.He was my best friend. I left to find his murderer, joined this group of bandits and became their leader. Through their connections, I learned the name of Dizzy’s killer, who happens to have an assassin in the marshes.`,
        question: `If you help me, I'll make sure you're knighted and that you are declared a hero of the realm. What do you say?”`,
        wrongChoice: `I dont have time for this`,
        rightChoice: `Of course I'll help avenge dizzy`,
        wrongResult: `“Pffs why should I care about some old half-taxidermied dog, he probably was ready to die!!” The Princess replies “HOW DARE YOU!!!” She scratches and lunges towards you with a dagger she had hidden behind her. “How dare you not grieve for Dizzy the all creator?” The blade hits you first on the left side of your stomach, then, right then, in the middle… she stabs you over and over until everything goes black.`,
        death: `You died`
        // img: $('body').css('background-image', 'url("../../public/imgs/deathscreen.PNG")'),
    },
    part3: {
        description: `Dizzy the creator was murdered! Of course, I’ll avenge Dizzy, that poor old boy, where is his murderer?”, “It's an assassin who goes by the name of CSS.  Many have fallen to her stylish and well-organized blade. We will have to be careful of her followers’ bootstrap and flex-box as well.” You follow the Princess to the swamp where she lives and prepare to do battle again. In the swamp, there is a small shack of a house. “This is it,” the Princess says. You go into the house sword at the ready for whatever comes your way. Just as you enter the door you think about a great thing Dizzy always said..... `,
        question: `riddle`,
        wrongChoice: `riddle answer wrong`,
        rightChoice: `riddle answer right`,
        wrongResult: `As the door opens you see three figures standing by the fireplace of the small house ready to attack. ‘Damn!” you think, “we were too loud, we are going to die”. As soon as the door opens there is a dagger square in your chest, but you can't stop now. You fight through the pain and move forward sloppily. You hear a cry behind you. The Princess has been slain. You swing at CSS but miss. She laughs in your face, “Trying to assassinate the assassin? How cute.” She kicks you down and you fall with a grunt. “What do you think boy, should we have some fun?” They laugh cruelly at your pain. You die slowly over the next two hours as the assassins torture you for being so arrogant as to think you could defeat CSS and her frameworks.`,
        death: `You died`,
        //img: $('body').css('background-image', 'url("../../public/imgs/deathscreen.PNG")'),
        rightResult: `The noise of your entrance startles the sleeping assassins. You see the one they call Bootstrap rises from his cot on the ground with a look of surprise. You go forward slicing him in half before he has time to draw his blade. You hear a noise behind you, it's Princess Katy slaying Flex-box where he stands. You feel a blade fly by your right ear barely missing you. You swing around and engage the infamous and very beautiful killer known only as CSS. She lunges towards you, teeth bared and eyes bright. You dodge, but a split second too late and the blade grazes your arm. It's your turn as you step forward and thrust your blade into her stomach. Her face displays a look of surprise and pain. “Why?’ she asks as she falls to the floor and dies.`,
        // img: $('body').css('background-image', 'url("../../public/imgs/blood-png-7140(1).PNG")'),
    }
};

let mainText = $("#stupid-div");
let deathText = $('#death')
let deathDiv = $("<div>").addClass('death')
let button1 = $("<button>").addClass('btn btn-outlin-light');
let button2 = $("<button>").addClass('btn btn-outlin-light');
let button3 = $("<button>").addClass('btn btn-outline-light');
let button4 = $("<button>").addClass('btn btn-outline-light');
let nextLevelButton = $("<button>").addClass('btn btn-outline-light');
let bloodscreen = $("<div>").addClass('overlay-image');
const oldMusic = document.getElementById('background');
const newMusic = document.createElement('audio');
const source = document.createElement('source');

function startStory() {
    mainText.html(`<span>${story.part1.description}</span>`);
    $('body').css('backgroundImage', 'url("../imgs/Runningaftertheprincess.PNG")');
    button2.text("next");
    mainText.append(button2);
    oldMusic.remove();
    source.setAttribute('src', '/audio/level2.wav');
    newMusic.appendChild(source);
    document.body.appendChild(newMusic);
    newMusic.play();
    newMusic.volume = .05;
    renderStoryStart();
};

function renderStoryStart() {
    button2.on('click', function(event) {
        event.stopPropagation();
        mainText.html(`<span>${story.part1.question}</span>`);
        button2.text(story.part1.wrongChoice);
        button1.text(story.part1.rightChoice);
        mainText.append(button1, button2);
        resultOfButton1();
        resultOfButton2(); 
    });
};

function resultOfButton1() {
    button1.on('click', function (event) {
        event.stopPropagation();
        $('body').css('backgroundImage', 'url("../imgs/Runningaftertheprincess.PNG")');
        renderPart2();
    });
};

function resultOfButton2() {
    button2.on('click', function (event) {
        event.stopPropagation();
        mainText.text(story.part1.wrongResult);
        $('body').css('backgroundImage', 'url("../imgs/deathscreen.PNG")');
        deathDiv.text("You Died");
        deathText.append(deathDiv);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game/2'");
        mainText.append(button3);
        deaths++;
        played++;
        //ajax put inside each of these 
    });
};

function renderPart2() {
    mainText.html(`<span>${story.part2.description}</span>`);
    $('body').css('backgroundImage', 'url("../imgs/Runningaftertheprincess.PNG")');
    mainText.children("span").text();
    mainText.children("button").hide();
    button2.text(story.part2.wrongChoice);
    button1.text(story.part2.rightChoice);
    mainText.append(button1);
    mainText.append(button2);
    resultOfButton2Part2();
    resultOfButton1Part2();
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
        deathDiv.text("You Died");
        deathText.append(deathDiv);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game/2'");
        mainText.append(button3);
        deaths++;
        played++;
    });
};

function renderPart3() {
    button1.on('click', function (event) {
        event.stopPropagation();
    mainText.html(`<span>${story.part3.description}</span>`);
    $('body').css('backgroundImage', 'url("../imgs/swamp.PNG")');
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
        $('body').css('backgroundImage', 'url("../imgs/dizzy-the-god.PNG")');
        mainText.text("Congratulations You beat Level 2 of the Queen and her Guard");
        button4.text('Continue to Level 3');
        button4.attr('onclick', "location.href = '/game/3'");
        mainText.append(button4);
        wins++;
        played++;
    });
};

function resultOfButton2Part3() {
    button2.on('click', function (event) {
        event.stopPropagation();
        console.log('made it into button2');
        mainText.text(story.part2.wrongResult);
        $('body').css('backgroundImage', 'url("../imgs/deathscreen.PNG")');
        deathDiv.text("You Died");
        deathText.append(deathDiv);
        button3.text('StartOver');
        button3.attr('onclick', "location.href = '/game/2'");
        mainText.append(button3);
        deaths++;
        played++;
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
            mainText.text(data.payload.riddle);
            button1.text(data.payload.rightanswer);
            button2.text(data.payload.wronganswer);
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
    new TypeIt("#text-container", {
        strings: [text],
        speed: 75,
        cursorChar: "🗡️",
        afterComplete: function(instance) {
            instance.destroy();
            if (callback) callback();
        }
    }).go();
};

startStory();
