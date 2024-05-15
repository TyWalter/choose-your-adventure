// this will contain all the logic to make level three work 

//const { level_3_Story } = require("../../storyarray/storyarray");

// const level_3_Story = {
//     //storyStart: 

const story = {
    part1: {
        description: `“You're not a half-bad fighter, you'll make a great knight.” Princess Katy says, “well, I suppose it's time to head back to Dizzylot, should we go?” “Fine,” she says.  You go your separate ways.`, 
        
        description: `You continue to do good deeds but songs are never written about you.  You kill bad guys and help good people, but no one knows your name.  You lead a life of purpose and anonymity. Due to this, and your humble nature, you die alone and penniless in old age. The world will never know the deeds you did and no one remembers you.`,
        // img: $('body').css('background-image', 'url("imgs/alterending.PNG")')
        question: ` `,
        wrongChoice: ` `,
        rightChoice: ` `,
        wrongResult: ` `,
         // img: $('body').css('background-image', 'url("imgs/castleimg.PNG")')
    },
    part2: {
        description: `You arrive at the gates of the castle, but the guards stop you and ask “Who are you two? The king is not accepting visitors.”`,
        description: `You step up to the guards as if you're going to chat with them and  quickly pull out your sword and stab the first guard, then the second guard comes at you, but the Princess takes him before he gets to you.`,
        description: `You're quickly surrounded by guards and captured. You spend your days awaiting execution for your crimes.`,
        description: `Finally, the day has come for you to die. You're escorted by the guards to the chopping block. You lay your head down and wonder how many people have died the way you are about to? Just before the ax comes down to sever your head from your body, you think, why did I kill those people with so many witnesses?`,
        // img: $('body').css('background-image', 'url("imgs/JAIL CELL.PNG")')
        description: `“Actually sir, this is Princess Katy of Dizzylot and I am with her. 
        We come to claim her position as next in line for the throne” you say.
        “Oh well why didn’t you just say so, Princess Katy?”`,
        description: `The gates open and you're allowed into the castle.  The castle is magnificent, the most beautiful place you've ever seen. You're in the great hall, there are gold and white pillars from floor to ceiling.  The ceiling arches resemble those of a church.`,
        description: `At the end of the hall sits King Gary on a white marble throne. You approach cautiously.  “I have returned to reclaim my throne, Dizzy chose me as Dizzylot’s next ruler. You can leave your post as king regent.” finishes Princess Katy.`,
        description: `“But you have been gone so long Princess, you should wait to adjust back into royal life. It looks like you have been through a lot” says King Gary.`,
        description: `No, I don't need to adjust. I left only to bring Dizzy’s murderer to justice and now that I have completed my mission, I will take my place as rightful Queen of Dizzylot.” “Well, well, left to avenge Dizzy huh?” says Gary, “the king”.  You feel the mood of the whole room shift. “Well I guess you shouldn't have come back yet” says Gary. “What are you saying?” asks Katy.  With thunderous laughter, Gary says “I ordered Dizzy’s death. I am the reason your precious dog is dead.” “WHAT,” she says enraged. Without thinking, she lunges at King Gary with her dagger but misses. In a moment King Gary has disabled her weapon and knocked her aside.`,
        description: `It's your turn, you come at the King remembering what a different king once said to you… `,
        question: ` `,
        wrongChoice: ` `,
        rightChoice: ` `,
        wrongResult: ` `,
        // img: ' ',
        // img2: ' '
    },
    part3: {
        description: `The king easily bushes you aside and casts a spell of death grip.You feel life being sucked out of your body.Your hands wither, your hair grays, and you die a slow and painful death.`, 
        // img: $('body').css('background-image', 'url("imgs/deathscreen.PNG")'),
        description: `Your blade strikes true right into the heart of the king, the battle is over.You see the Queen as she is now beginning to wake.She sees that you have killed the evil king.`,
        // img: $('body').css('background-image', 'url("imgs/blood-png-7140(1).PNG")'),
        description: `The coming days go by in a blur as Queen Katy makes arrangements and does her best to undo all the damage evil King Gary had on the kingdom.`,
        // img: $('body').css('background-image', 'url("imgs/endGamePhoto.PNG")'),
        description: ` You are knighted as well and appointed as the chief role guard to the queen. The Queen and her guard go down in history as one of the most powerful and fair monarchs in all the realm.`,
        description: `From time to time you see a small white dog watching from the distance, Dizzy telling you from another world that you have done well.`,
        question: "enter riddle here",
        wrongChoice: 'wrong riddle',
        rightChoice: 'right riddle',
        wrongResult: ` `,
        rightResult: ` `,
        // img: ' ',
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
        $('body').css('background-image', 'url("imgs/dizzy-the-god.PNG")')
        $(mainText).text("Congratulations You Win!  You beat level 3 of the Queen and her Guard");
        //WHAT to do here?
        button4.text('PLAY AGAIN?');

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