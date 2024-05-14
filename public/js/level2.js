// this will contain all the logic to make level two work 

// Importing level_3_Story from the module if it's nested within another object
//const { storyObject: { level_3_Story } } = require("../../storyarray/storyarray");


//const { level_3_Story } = require("../../storyarray/storyarray");

// const level_2_Story = {
//     // storyStart: 
//     questions2: [`“Pffs why should I care about some old half-taxidermied dog, he probably was ready to die!!” `, `The Princess replies “HOW DARE YOU!!!” She scratches and lunges towards you with a dagger she had hidden behind her. “How dare you not grieve for Dizzy the all creator?”`, `The blade hits you first on the left side of your stomach, then, right then, in the middle… she stabs you over and over until everything goes black.`, `You die `, `Dizzy the creator was murdered! Of course, I’ll avenge Dizzy, that poor old boy, where is his murderer?” `, `“It's an assassin who goes by the name of CSS.  Many have fallen to her stylish and well-organized blade. We will have to be careful of her followers’ bootstrap and flex-box as well.” `, `You follow the Princess to the swamp where she lives and prepare to do battle again. In the swamp, there is a small shack of a house. “This is it,” the Princess says. `, `You go into the house sword at the ready for whatever comes your way. Just as you enter the door you think about a great thing Dizzy always said “Go to where he lives in a swamp and engage in battle.” `,],
//     questions3: [`As the door opens you see three figures standing by the fireplace of the small house ready to attack. ‘Damn!” you think, “we were too loud, we are going to die”. As soon as the door opens there is a dagger square in your chest, but you can't stop now. You fight through the pain and move forward sloppily.`, `You hear a cry behind you. The Princess has been slain. You swing at CSS but miss. She laughs in your face, “Trying to assassinate the assassin? How cute.” She kicks you down and you fall with a grunt. “What do you think boy, should we have some fun?” They laugh cruelly at your pain. You die slowly over the next two hours as the assassins torture you for being so arrogant as to think you could defeat CSS and her frameworks. `, `The noise of your entrance startles the sleeping assassins. You see the one they call Bootstrap rises from his cot on the ground with a look of surprise. You go forward slicing him in half before he has time to draw his blade. `, `You hear a noise behind you, it's Princess Katy slaying Flex-box where he stands. You feel a blade fly by your right ear barely missing you. You swing around and engage the infamous and very beautiful killer known only as CSS. She lunges towards you, teeth bared and eyes bright. You dodge, but a split second too late and the blade grazes your arm. It's your turn as you step forward and thrust your blade into her stomach. Her face displays a look of surprise and pain. “Why?’ she asks as she falls to the floor and dies. `]
// }

const story = {
        part1: {
            description: `The bandits are all dead by your blade and you notice footprints in the dirt that lead off the path. It might lead to the Princess…`,
            question: `Do you go after her?`,
            wrongChoice:  `No`,
            rightChoice: `Yes`,
            wrongResult: `You make your way down the path but slip on all the blood and fall. You don't even notice the blade sticking out of your chest until you try to get up and are pulled down. Once you notice it is impossible to notice anything else, the pain racks your body and in your final moments, you think to yourself “I should have…followed the…Princess.”`,
            img: ''
        },
        part2: {
            description: `You follow the footprints into the woods, the forest grows thick as you run deeper and deeper through it. 
            At this point, almost no sunlight is breaking through the thick dense forest treetop. You see a figure just barely in front of you. 
            Wait, let me explain,” the Princess says. 
            “You have one minute.” You reply. I left the royal life after the death of my dog Dizzy. He actually was the creator of my kingdom and closer to a god than a real dog, but he was old and weak and someone murdered him., He was my best friend. I left to find his murderer, joined this group of bandits and became their leader. Through their connections, I learned the name of Dizzy’s killer, who happens to have an assassin in the marshes.`,
            question: `If you help me, I'll make sure you're knighted and that you are declared a hero of the realm. What do you say?”`,
            wrongChoice: `No`,
            rightChoice: `Yes`,
            wrongResult: `“Pffs why should I care about some old half-taxidermied dog, he probably was ready to die!!”, The Princess replies “HOW DARE YOU!!!” She scratches and lunges towards you with a dagger she had hidden behind her. “How dare you not grieve for Dizzy the all creator?”, The blade hits you first on the left side of your stomach, then, right then, in the middle… she stabs you over and over until everything goes black., You die `,
            img: ' '
        },
        part3: {
            description: `Dizzy the creator was murdered! Of course, I’ll avenge Dizzy, that poor old boy, where is his murderer?”, “It's an assassin who goes by the name of CSS.  Many have fallen to her stylish and well-organized blade. We will have to be careful of her followers’ bootstrap and flex-box as well.” You follow the Princess to the swamp where she lives and prepare to do battle again. In the swamp, there is a small shack of a house. “This is it,” the Princess says. You go into the house sword at the ready for whatever comes your way. Just as you enter the door you think about a great thing Dizzy always said “Go to where he lives in a swamp and engage in battle.” `,
            question: '',
            wrongChoice: `No`,
            rightChoice: `Yes`,
            wrongResult: `As the door opens you see three figures standing by the fireplace of the small house ready to attack. ‘Damn!” you think, “we were too loud, we are going to die”. As soon as the door opens there is a dagger square in your chest, but you can't stop now. You fight through the pain and move forward sloppily. You hear a cry behind you. The Princess has been slain. You swing at CSS but miss. She laughs in your face, “Trying to assassinate the assassin? How cute.” She kicks you down and you fall with a grunt. “What do you think boy, should we have some fun?” They laugh cruelly at your pain. You die slowly over the next two hours as the assassins torture you for being so arrogant as to think you could defeat CSS and her frameworks.`,
            rightResult: `The noise of your entrance startles the sleeping assassins. You see the one they call Bootstrap rises from his cot on the ground with a look of surprise. You go forward slicing him in half before he has time to draw his blade. You hear a noise behind you, it's Princess Katy slaying Flex-box where he stands. You feel a blade fly by your right ear barely missing you. You swing around and engage the infamous and very beautiful killer known only as CSS. She lunges towards you, teeth bared and eyes bright. You dodge, but a split second too late and the blade grazes your arm. It's your turn as you step forward and thrust your blade into her stomach. Her face displays a look of surprise and pain. “Why?’ she asks as she falls to the floor and dies.`,
            img: ' '
        }
    }

//let startOfstory = level_1_Story.storyStart;

let questions1 = level_2_Story.questions1;
let questions2 = level_2_Story.questions2;
let questions3 = level_2_Story.questions3;
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
    ArrayText.text(questions1[0])
    ArrayText.appendTo(mainText);
})

function renderQuestion1lvl2() {
    document.addEventListener('click', function () {
        ArrayText.text(questions1[1])
        ArrayText.appendTo(mainText);
        button1.text(questions1[2]);
        button2.text(questions1[3]);
        button1.appendTo(buttonArea);
        button2.appendTo(buttonArea);
    })
}
// function renderButtonTwo() {
//     button2.on("click", function () {
//         // startOfstory[0].hide();
//         // startOfstory[1].hide();
//         button2.hide(); // Hide button2 using jQuery method
//         button1.hide(); // Hide button1 using jQuery method
//         ArrayText1.text(questions1[0]);
//         $('body').css('background-image', 'url("../../public/imgs/alterending.PNG")');
//         ArrayText1.appendTo(mainText);
//     })
// }

// function renderButtonOne(){
//     button1.on("click", function () {
//         // startOfstory[0].hide();
//         // startOfstory[1].hide();
//         button2.hide(); // Hide button2 using jQuery method
//         button1.hide(); // Hide button1 using jQuery method

//         ArrayText1.text(questions1[1]);
//         // $('body').css('background-image', 'url("../../public/imgs/Runningaftertheprincess.PNG")')
//         ArrayText1.appendTo(mainText);

//         ArrayText3.text(questions2[0])
//         ArrayText3.appendTo(mainText);
//         renderButtonThree();
//     });
// }

// function renderButtonThree(){
//         // ArrayText3.text(startOfstory[1])
//         // ArrayText3.appendTo(mainText);
//         button3.text(questions2[1]);
//         button4.text(questions2[2]);
//         button3.appendTo(buttonArea);
//         button4.appendTo(buttonArea);
// }

// function renderWrongQuestionTwo(){
//     button3.on('click', function() {
//         // ArrayText4.hide();?
//         button3.hide();
//         button4.hide();
//         ArrayText4.text([questions2[3], questions2[4], questions2[5], questions2[6],questions2[7]]);
//         //i need to make the hokd text disapear as well 
//         ArrayText4.appendTo(mainText);
//     });
// }

// function renderQuestionThree(){
//     button4.on('click', function() {
//         // ArrayText4.hide();?
//         ArrayText4.text(questions3[0]);
//         //i need to make the hokd text disapear as well 
//         button3.hide();
//         button4.hide();
//         ArrayText4.appendTo(mainText);
//         button5.text("riddle Wrong answer");
//         button6.text("riddle right answer");
//         button5.appendTo(buttonArea);
//         button6.appendTo(buttonArea);
//     });
//     //still need to get rid of old text 
// }
//         // function renderRiddleButtons(){
//         //     // not sure how we want to do this yet
//         //     button5.text("riddle right answer");
//         //     button6.text("riddle Wrong answer");
//         //     button5.appendTo(buttonArea);
//         //     button6.appendTo(buttonArea);
//         // }

// function wrongAnswer(){
//     button5.on('click', function() {
//     ArrayText5.text(questions3[1]);
//     //i need to make the hokd text disapear as well 
//     ArrayText5.appendTo(mainText);
//     })
// }

// function rightAnswer(){
//     button6.on('click', function() {
//         ArrayText6.text(questions3[2]);
//         //i need to make the hokd text disapear as well 
//         ArrayText6.appendTo(mainText);
//         })
// }

renderQuestion1lvl2()
// renderButtonTwo();
// renderButtonOne();
// renderWrongQuestionTwo();
// // renderRiddleButtons();
// wrongAnswer();
// rightAnswer();
// renderQuestionThree();
// module.exports = {}