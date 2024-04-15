const greeting = (userName) => {
    console.log (`Hi ${userName}! Getting inspiration for your day.`);
};
greeting("Roberto");

const returnFirstSection = () => {
    const firstSentenceSection = ["You slept tight last night", "You didn't sleep much", "You didn't sleep at all"];    
    const firstSentenceRandom = firstSentenceSection[Math.floor(Math.random() * 3)];
    return firstSentenceRandom
}


// console.log(returnFirstSection());

const returnSecondSection = () => {
    const secondSentenceSection = ["and feel sleepy and tired.", "and feel incredibly brand new.", "and feel happy.", "and feel angry."];
    const secondSentenceRandom = secondSentenceSection[Math.floor(Math.random() * 4)];
    return secondSentenceRandom
}

// console.log(returnSecondSection());

const returnThirdSection = () => {
    const thirdSentenceSection = ["Today holds great experiences for you.", "Today you will find kindness and affection all around you.", "Today you will accomplish what you have been dreaming of.", "Today will be another day to survive."];
    const thirdSentenceRandom = thirdSentenceSection[Math.floor(Math.random() * 4)];
    return thirdSentenceRandom
}

// console.log(returnThirdSection());



const returnAllSections = () => {
const inspiringMessage = [];
inspiringMessage.push(`${returnFirstSection()} ${returnSecondSection()} ${returnThirdSection()}`);
return console.log(inspiringMessage.join(' '));
}

returnAllSections();






