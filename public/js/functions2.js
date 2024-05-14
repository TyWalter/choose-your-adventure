// const { clear } = require("console");

let globalGameState = ''

const story = {
    part1: {
        description: `You are a well-experienced adventurer traveling to the next kingdom.  You awaken in your camp under a small tree feeling well rested for the journey ahead.  You pull out your map and examine it for the next kingdom.  You see a shortcut a villager marked on your map the day before.`,
        question: `Do you take the villager's shortcut or proceed to the well-worn path?`,
        wrongChoice: `You head down the main path.`,
        rightChoice: `You head to the short cut`,
        wrongResult: `Clearly, you are one for reliability and stability. Unfortunately, reliability and stability do not make for a good adventurer. To be a good adventurer one must take the path less traveled. The main path leads you to a nice town you settle down in and never go on another adventure ever again!`,
        img: $('body').css('background-image', 'url("../../public/imgs/startgame.PNG")')
    },
    part2: {
        description: `You head into the forest and take the shortcut.  Not long into the day, you hear the frightened cries of a young woman nearby. As you approach, you see the young woman is Princess Katy from Dizzylot, the kingdom you are traveling to. She is tied to a tree. `,
        question: `Do you cut the rope and free the princess or do you leave her there?`,
        wrongChoice: `Cut the rope.`,
        rightChoice: `Don't cut the rope. `,
        wrongResult: `You go up to the princess as she struggles and say "You're Princess Katy from the kingdom of Dizzylot, right? Are you okay? Do you need help? " She replies "Of course I am, What do you think? I'm tied to a tree!" You lean down to untie her and feel a sharp pain in the middle of your back. Blood sprays onto the princess' face as she looks up at you with an evil grin.The princess says "Nice shot boys! They are sure to have plenty of a loot on them", You died`,
        img: $('body').css('background-image', 'url("../../public/imgs/deathscreen.PNG")')
    },
    part3: {
        description: `You start to walk up to the princess but hear rustling in the leaves nearby and notice that the ropes tying her to the tree look strangely loose. As you start to draw your weapon and prepare for the attack you are sure is coming, you remember the words of a wise professor… `,
        question: "enter riddle here",
        wrongChoice: 'wrong riddle',
        rightChoice: 'right riddel',
        wrongResult: `You get lost in thought tearing up at the thought of your old classmates and teacher. A Bandit comes up and kills you, you should have indented. `,
        rightResult: `Remembering your professor's wise words has focused your senses, you spin around your sword cutting down the first bandit that dared to make a move. You make quick work of the other three but when you turn to look for the princess she is gone. `,
        img: $('body').css('background-image', 'url("../../public/imgs/startgame.PNG")'),
        overlayImg: "bloodimg"
    }
}

let mainText = $("#stupid-div");
// let createdText = $("<div>")
let button1 = $("<button>").attr("id", "btn1").addClass('clickable btn btn-outline-dark').text("Game Start 1")
let button2 = $("<button>").attr("id", "btn2").addClass('clickable btn btn-outline-dark').text("Game Start 2");
// let button3 = $("<button>").addClass('btn btn-outline-dark')
// let button4 = $("<button>").addClass('btn btn-outline-dark');

function startStory(){
    globalGameState = 'start';
    mainText.html(`<span>${story.part1.description}</span>`)
}

function renderStoryStart() {
    document.addEventListener('click', function () {
        $(mainText).html(`<span>${story.part1.question}</span>`);
        $(button1).text(story.part1.wrongChoice);
        $(button2).text(story.part1.rightChoice);
        $(mainText).append(button1, button2);
        // $(button1).on('click', function () {
        //     renderPart2();
        // });
        // $(button2).on('click', function () {
        //     $(mainText).text(story.part1.wrongResult);
        // });
    })
    resultOfButton1();
    // resultOfButton2();
}
// function resultOfButton1() {
//     $(button1).on('click', function () {
//         console.log('this is button 1')
//         renderPart2();
//     });
// }

// function resultOfButton2() {
//     $(button2).on('click', function () {
//         console.log('made it into button2')
//         $(mainText).text(story.part1.wrongResult);
//     });
// }

// function renderWrongChoice(){
//     document.addEventListener('click', function () {
//         console.log('rednerwrong choise')
//         $(mainText).text(story.part1.wrongResult);
//         // img append to body
//     })
// }

function renderPart2() {
    console.log(mainText[0])
    // console.log($(maintext))
    // $(button1).off('click');
    // $(button2).off('click');
    button1.html("");
    button2.html("");
    console.log('renderpart2')
    console.log(story.part2.question)
    mainText.html(`<span>This should work</span>`)
    console.log(mainText[0].textContent)

    button1.text(story.part2.wrongChoice);
    button2.text(story.part2.rightChoice);
    // mainText.append(button1);
    // mainText.append(button2);

}


function gameStatePart1(){
    
    $(button1).text(story.part1.wrongChoice);
    $(button2).text(story.part1.rightChoice);
}

    
    
    $(mainText).append(button1, button2);
    globalGameState = 'part1'
}



// renderStoryStart();
// resultOfButton1();
// resultOfButton2();
$("document").on("click", function(){
    mainText.html(`<span>${story.part1.question}</span>`)
    mainText.append(button1);
    mainText.append(button2);
})


$("#stupid-div").on('click', ".clickable", function () {
    const id = $(this).attr("id");

    switch(globalGameState){
        case 'part1':
        if( id === 'btn1' ){
            // send to next part
        } else {
            // displays wrong choice
        }

        break;

        case 'part1':

        break;
    }

})



startStory()