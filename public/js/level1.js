

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
        rightChoice: 'right riddel',
        wrongResult: `You get lost in thought tearing up at the thought of your old classmates and teacher. A Bandit comes up and kills you, you should have indented. `,
        rightResult: `Remembering your professor's wise words has focused your senses, you spin around your sword cutting down the first bandit that dared to make a move. You make quick work of the other three but when you turn to look for the princess she is gone. `,
        // img: $('body').css('background-image', 'url("../../public/imgs/startgame.PNG")'),
        // overlayImg: "bloodimg"
    }
}


let mainText = $("#stupid-div").css('backgroundColor', 'white');
// let createdText = $("<div>")
let button1 = $("<button>").addClass('btn btn-outline-dark')
let button2 = $("<button>").addClass('btn btn-outline-dark');
let button3 = $("<button>").addClass('btn btn-outline-dark');
let nextLevelButton = $("<button>").addClass('btn btn-outline-dark');
let bloodscreen = $("<div>").addClass('overlay-image');
let played = 0;
let wins = 0;
let deaths = 0;
let losses = 0;
// let button3 = $("<button>").addClass('btn btn-outline-dark')
// let button4 = $("<button>").addClass('btn btn-outline-dark');

function startStory(){
    mainText.html(`<span>${story.part1.description}</span>`);
    $('body').css('background-image', 'url("imgs/startgame.PNG")')
    button2.text("next");
    renderStoryStart();
}

function renderStoryStart() {
    document.addEventListener('click', function (event) {
        event.stopPropagation()
        $(mainText).html(`<span>${story.part1.question}</span>`);// which path do you choose 
        $(button2).text(story.part1.wrongChoice);//main path
        $(button1).text(story.part1.rightChoice);//the short cut 
        $(mainText).append(button1, button2);// thisis the two buttons with this text
        // $(button1).on('click', function () {
        //     renderPart2();
        // });
        // $(button2).on('click', function () {
        //     $(mainText).text(story.part1.wrongResult);
        // });
        resultOfButton1();
        resultOfButton2();
    })
}
function resultOfButton1(event) {
    button1.on('click', function (event) {
        event.stopPropagation()
        console.log('this is button 1')
        // mainText.children("span").text();
        renderPart2();
    });
}

function resultOfButton2() {
    $(button2).on('click', function (event) {
        event.stopPropagation()
        console.log('made it into button2')
        $(mainText).text(story.part1.wrongResult);
        $('body').css('background-image', 'url("imgs/alterending.PNG")')
        button3.text('StartOver'); 
        losses++;
        played++;
    });
}

// function renderWrongChoice(){
//     document.addEventListener('click', function () {
//         console.log('rednerwrong choise')
//         $(mainText).text(story.part1.wrongResult);
//         $('body').css('background-image', 'url("../../public/imgs/alterending.PNG")')
//         // img append to body
//     })
// }

function renderPart2() {
    console.log("ok")
    console.log(mainText)
    mainText.html(`<span>${story.part2.description}</span>`);
    $('body').css('background-image', 'url("imgs/shortcut.PNG")')
    mainText.children("span").text();
    mainText.children("button").hide();

    button2.text(story.part2.wrongChoice);
    button1.text(story.part2.rightChoice);
    mainText.append(button1);
    mainText.append(button2);
    resultOfButton2Part2();
    resultOfButton1Part2();
}

function resultOfButton1Part2(event) {
    button1.on('click', function (event) {
        event.stopPropagation()
        console.log('this is button 1 part 2')
        // mainText.children("span").text();
        renderPart3();
        return 
    });

}

function resultOfButton2Part2() {
    $(button2).on('click', function (event) {
        event.stopPropagation()
        console.log('made it into button2')
        $(mainText).text(story.part2.wrongResult);
        $('body').css('background-image', 'url("imgs/deathscreen.PNG")')
        button3.text('StartOver'); 
        deaths++;
        played++;

    });
}

function renderPart3() {
    console.log("ok")
    console.log(mainText)
    mainText.html(`<span>${story.part3.description}</span>`);
    $('body').css('background-image', 'url("imgs/shortcut.PNG")')
    // this could use a new img
    mainText.children("span").text();
    mainText.children("button").hide();

    button2.text(story.part3.wrongChoice);
    button1.text(story.part3.rightChoice);
    mainText.append(button1);
    mainText.append(button2);
    resultOfButton2Part3();
    resultOfButton1Part3();
}

function resultOfButton1Part3(event) {
    button1.on('click', function (event) {
        event.stopPropagation()
        console.log('this is button 1 part 2')
        // we need an you won img
        $('body').css('background-image', 'url("imgs/your-character.PNG")')
        $(mainText).text("Congratulations You beat Level 1 of the Queen and her Guard");
        button4.text('Continue to Level 2');

        mainText.append(button3);
        wins++;
        played++;
        return 
    });
}

function resultOfButton2Part3() {
    $(button2).on('click', function (event) {
        event.stopPropagation()
        console.log('made it into button2')
        $(mainText).text(story.part2.wrongResult);
        $('body').css('background-image', 'url("imgs/deathscreen.PNG")')
        deaths++;
        played++;
        button3.text('StartOver'); 
        
    });
}
// renderStoryStart();
// resultOfButton1();
// resultOfButton2();
function startOver(event) {
    button3.on('click', function (event) {
        event.stopPropagation()
    startStory();
    });
}

console.log(deaths, wins, losses, played)
startStory()


