'use strict'; 

// Get the user's name 

var userName= prompt('Hi there! What is your name?');

alert('Nice to have you here, ' + userName +' . I\'m going to ask you some fun questions about me. These are all yes/no questions, so feel f ree to answer with y/n or yes/no.'); 


// Ask them five y/n questions

var answerOne = prompt('Do I have any pets?').toLowerCase();
if (answerOne === 'y' || answerOne === 'yes') {
    alert('That is correct! I have two cats named JiJi and Ren.')
} else { 
    alert('Sorry, you got it wrong! I have two cats named JiJi and Ren.')

}

  var answerTwo = prompt('Do I speak German?').toLowerCase();
  if (answerTwo === 'y' || answerTwo === 'yes') {
    alert('Das ist Korrekt!') 
}
 else {
     alert('Sorry, you got it wrong! Ich Spreche Deutch!')

}

 var answerThree = prompt('Have I lived in Florida?').toLowerCase(); 
if (answerThree === 'n' || answerThree === 'no') {
    alert('That is correct! I have never lived there.');
console.log('The user was asked if I lived in Florida. ');
}else { 
        alert('Sorry, you got it wrong! I have never lived in Florida and I don\'t think I ever will. I don\'t like humidity.');
    }

var answerFour = prompt('Do I think mushrooms are delicious?').toLowerCase();
if (answerFour === 'n' || answerFour ==='no') {
    alert('That is correct, I think they\'re disgusting!');

} else {
    alert('Heck, no!!!!!!!! Those things are disgusting!');
}
var answerFive = prompt('Do I brew kombucha at home?').toLowerCase(); 
if (answerFive === 'y' || answerFive ==='yes') {
    alert('That is correct...I also like to make pickles!');

}else {
    alert('Sorry, you got it wrong! I brew kombucha as a hobby. I also like to pickle things!');

}


// if (answerOne.toLowerCase() === 'y' || answerOne.toLowerCase() === 'yes') {
alert('you got it right!');