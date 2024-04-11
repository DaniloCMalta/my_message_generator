const greeting = (userName) => {
    console.log (`Hi ${userName}! Getting inspiration for your day.`);
};
greeting("Roberto");

const returnFirstSection = () => {
    const firstSentenceSection = ["You slept tight last night", "You didn't sleep much", "You didn't sleep at all"];
    const inspiringMessage = [];
    const firstSentenceRandom = firstSentenceSection[Math.floor(Math.random() * 3)];
    inspiringMessage.push(firstSentenceRandom);
    return inspiringMessage
}


console.log(returnFirstSection());


const secondSentenceSection = ["and feeel sleepy and tired.", "and feel incredibly brand new.", "and feel happy", "and feel angry"];
const thirdSentenceSection = ["Today holds great experiences for you", "Today you will find kindness and affection all around you", "Today you will accomplish what you have been dreaming of", "Today will be another day to survive"]

/* start creating arrays - perhaps one array for every group of possible sentence parts. 
So, after randonly choosing each section of the 3 sentences, 
we can nested loop among them and create a full sentence (using new array.push) as a result of the join( ) array function between them. 
*/




