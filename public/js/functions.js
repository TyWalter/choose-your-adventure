const level_1_Story = {
    storyStart: [`You are a well-experienced adventurer traveling to the next kingdom.  You awaken in your camp under a small tree feeling well rested for the journey ahead.  You pull out your map and examine it for the next kingdom.  You see a shortcut a villager marked on your map the day before.`, `Do you take the villager’s shortcut or proceed to the well-worn path?`, `You head down the main path.`, `You head to the short cut`],
    questions1: [`Clearly, you are one for reliability and stability. Unfortunately, reliability and stability do not make for a good adventurer. To be a good adventurer one must take the path less traveled. The main path leads you to a nice town you settle down in and never go on another adventure ever again!`, `You head into the forest and take the shortcut.  Not long into the day, you hear the frightened cries of a young woman nearby. As you approach, you see the young woman is Princess Katy from Dizzylot, the kingdom you are traveling to. She is tied to a tree. `],
    questions2: [`Do you cut the rope and free the princess or do you leave her there?`, `Cut the rope.`, `Don't cut the rope. `, `You go up to the princess as she struggles and say “You’re Princess Katy from the kingdom of Dizzylot, right? Are you okay? Do you need help? ”`, `She replies “Of course I am, What do you think? I'm tied to a tree!”`, `You lean down to untie her and feel a sharp pain in the middle of your back. Blood sprays onto the princess' face as she looks up at you with an evil grin.`, `The princess says “Nice shot boys! They are sure to have plenty of a loot on them”`, `You died`],
    questions3: [`You start to walk up to the princess but hear rustling in the leaves nearby and notice that the ropes tying her to the tree look strangely loose. As you start to draw your weapon and prepare for the attack you are sure is coming, you remember the words of a wise professor… `, `You get lost in thought tearing up at the thought of your old classmates and teacher. A Bandit comes up and kills you, you should have indented. `, `Remembering your professor's wise words has focused your senses, you spin around your sword cutting down the first bandit that dared to make a move. You make quick work of the other three but when you turn to look for the princess she is gone. `]
}
let startOfstory = level_1_Story.storyStart;
let questions1 = level_1_Story.questions1;
let questions2 = level_1_Story.questions2;
let questions3 = level_1_Story.questions3;
// on click to excute this function 
let mainText = $(".storyTextLevel1")
let ArrayText = $("<div>")
let ArrayText1 = $("<div>")
let ArrayText2 = $("<div>")
let ArrayText3 = $("<div>")
let ArrayText4 = $("<div>")
let ArrayText5 = $("<div>")
let ArrayText6 = $("<div>")
const button1 = $("<button>")
const button2 = $("<button>")
const button3 = $("<button>")
const button4 = $("<button>")
const button5 = $("<button>")
const button6 = $("<button>")
const buttonArea = $(".choiceLevel1")
button1.addClass('btn btn-outline-dark')
button2.addClass('btn btn-outline-dark')
button3.addClass('btn btn-outline-dark')
button4.addClass('btn btn-outline-dark')
button5.addClass('btn btn-outline-dark')
button6.addClass('btn btn-outline-dark')

$(document).ready(function () {
    ArrayText.text(startOfstory[0]);
    ArrayText.appendTo(mainText);
})

function renderStoryStart() {
    document.addEventListener('click', function () {
        ArrayText.text(startOfstory[1])
        ArrayText.appendTo(mainText);
        button1.text(startOfstory[3]);
        button2.text(startOfstory[2]);
        button1.appendTo(buttonArea);
        button2.appendTo(buttonArea);
    })
}
function renderButtonTwo() {
    button2.on("click", function () {
        // startOfstory[0].hide();
        // startOfstory[1].hide();
        button2.hide(); // Hide button2 using jQuery method
        button1.hide(); // Hide button1 using jQuery method
        ArrayText1.text(questions1[0]);
        $('body').css('background-image', 'url("../../public/imgs/alterending.PNG")');
        ArrayText1.appendTo(mainText);
    })
}

function renderButtonOne(){
    button1.on("click", function () {
        // startOfstory[0].hide();
        // startOfstory[1].hide();
        button2.hide(); // Hide button2 using jQuery method
        button1.hide(); // Hide button1 using jQuery method

        ArrayText1.text(questions1[1]);
        // $('body').css('background-image', 'url("../../public/imgs/Runningaftertheprincess.PNG")')
        ArrayText1.appendTo(mainText);

        ArrayText3.text(questions2[0])
        ArrayText3.appendTo(mainText);
        renderButtonThree();
    });
}

function renderButtonThree(){
        // ArrayText3.text(startOfstory[1])
        // ArrayText3.appendTo(mainText);
        button3.text(questions2[1]);
        button4.text(questions2[2]);
        button3.appendTo(buttonArea);
        button4.appendTo(buttonArea);
}

function renderWrongQuestionTwo(){
    button3.on('click', function() {
        // ArrayText4.hide();?
        button3.hide();
        button4.hide();
        ArrayText4.text([questions2[3], questions2[4], questions2[5], questions2[6],questions2[7]]);
        //i need to make the hokd text disapear as well 
        ArrayText4.appendTo(mainText);
    });
}

function renderQuestionThree(){
    button4.on('click', function() {
        // ArrayText4.hide();?
        ArrayText4.text(questions3[0]);
        //i need to make the hokd text disapear as well 
        button3.hide();
        button4.hide();
        ArrayText4.appendTo(mainText);
        button5.text("riddle Wrong answer");
        button6.text("riddle right answer");
        button5.appendTo(buttonArea);
        button6.appendTo(buttonArea);
    });
    //still need to get rid of old text 
}
        // function renderRiddleButtons(){
        //     // not sure how we want to do this yet
        //     button5.text("riddle right answer");
        //     button6.text("riddle Wrong answer");
        //     button5.appendTo(buttonArea);
        //     button6.appendTo(buttonArea);
        // }

function wrongAnswer(){
    button5.on('click', function() {
    ArrayText5.text(questions3[1]);
    //i need to make the hokd text disapear as well 
    ArrayText5.appendTo(mainText);
    })
}

function rightAnswer(){
    button6.on('click', function() {
        ArrayText6.text(questions3[2]);
        //i need to make the hokd text disapear as well 
        ArrayText6.appendTo(mainText);
        })
}

renderStoryStart();
renderButtonTwo();
renderButtonOne();
renderWrongQuestionTwo();
// renderRiddleButtons();
wrongAnswer();
rightAnswer();
renderQuestionThree();