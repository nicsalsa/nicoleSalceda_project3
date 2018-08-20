// global variables
const quizApp = {};
let total = 0;
// doc ready
$(function(){
        quizApp.submitChoices();
});
// objects and arrays

quizApp.results = {
   answer1: { 
      professional: [{
            message: "Professional? Best practice is not to bang in the workplace.",
            tally: 0,
      }],
      personal: [{
            message: "Personal? Bang it up!",
            tally: 20,
      }],
      audience: [{
            message: "audience? Hmm, think about this a little more.",
            tally: 10,
      }],
   },
   answer2: {
      email: [{
            message: "email? Hmm, think about this a little more.",
            tally: 10,
      }],
      messenger: [{
            message: "messenger? Do it up!!!",
            tally: 20,
      }],
      post: [{
            message: "post? hmm, think about this a little more.",
            tally: 10,
      }],
      letter: [{
            message: "letter? Hmm, think about this a little more.",
            tally: 10,
      }],
   },
   answer3: {
      joyful: [{
            message: "joyful? If you're joyful and you know it use a bang!",
            tally: 20,
      }],
      humorous: [{
            message: "humorous? Hmm, Think a little more about it",
            tally: 10,
      }],
      informal: [{
            message: "informal? Why not?!",
            tally: 20,
      }],
      optimistic: [{
            message: "optimistic? You can do it!",
            tally: 20,
      }],
      serious: [{
            message: "serious? Unless you are serious about banging, don't do it.",
            tally: 0,
      }],
      formal: [{
            message: "formal? Definitely, don't do it",
            tally: 0,
      }],
      sad: [{
            message: "sad? No one likes a cry bang. Don't be weird.",
            tally: 0
      }],
      pessimist: [{
            message: "pessimistic? Unless you change your attitude, don't expect to bang.",
            tally: 0
      }],
      horror: [{
            message: "horror? There's a time and a place to bang, this isn't it.",
            tally: 0
      }],
   },
   answer4: {
         astonishment: [{
               message: "I'm amazed! I'm astonished!",
               tally: 20,
            }],
         shock: [{
               message: "shock? I'm so surprised and have mixed feelings!",
               tally: 20,
            }], 
         excitement: [{
               message: "excitement? I'm eager!",
               tally: 20,
            }],
         urgency: [{
               message: "urgency? I need swift action to be taken!",
               tally: 20,
            }],
         vehemence: [{
               message: "vehemence? I am intensely passionate about this!",
               tally: 20,
            }],
         nodeclaration: [{
               message: "nothing to declare? I'm pretty chill right now",
               tally: 0,
            }],
   }
}

quizApp.submitChoices = function(){
      $('form').on('submit', function(e) {
            e.preventDefault();
            // results scroll
            $('html, body').animate({
                  scrollTop: $('#final-results').offset().top
            }, 1000);
            // variables to get values from inputs
            const relationAnswer = $('input[name = relation]:checked').val();
            const modeAnswer = $('input[name = mode]:checked').val();
            const toneAnswer = $('input[name = tone]:checked').val();
            const emphasisAnswer = $('input[name = emphasis]:checked').val();
            // using push method to add values from variables into a new array
            const answerArray = [];
            answerArray.push(relationAnswer, modeAnswer, toneAnswer, emphasisAnswer);
            answerArray.forEach((item) => {
                  total += parseInt(item);
            })
            // when input is selected, append the variable that holds the message in the array
            const selectedId1 = $('.relationship input[type = radio]:checked').attr('id');
            const results1 = quizApp.results.answer1[selectedId1][0].message;
            // $('.relationship-answer').append(results1);

            const selectedId2 = $('.mode input[type = radio]:checked').attr('id');
            const results2 = quizApp.results.answer2[selectedId2][0].message;
            // $('.mode-answer').append(results2);

            const selectedId3 = $('.tone input[type = radio]:checked').attr('id');
            const results3 = quizApp.results.answer3[selectedId3][0].message;
            // $('.tone-answer').append(results3);

            const selectedId4 = $('.emphasis input[type = radio]:checked').attr('id');
            const results4 = quizApp.results.answer4[selectedId4][0].message;
            // $('.emphasis-answer').append(results4);
            // if else function to populate results
            if(total < 50){
                  let dontUseDisplay = $('h2.answers').text(
                        'No bang necessary!'
                  ).append(
                        `<p class="subtext">Many of you eager bangers may have been dissappointed to find that the bang is frowned upon in professional, sad, and/or seriously horrific situations. I believe in you, though. There's a whole brain full of words right in your head that can help you find other ways to convey that emotion.</p>
                        <div class="image"><img src="https://d24bnpykhxwj9p.cloudfront.net/s3file/s3fs-public/users1/2016-10/Mon/6359271129309535251975219305_giphy.gif" alt="trump being the best at words"></div>`);
            } else if(total >= 50 && total <= 60){
                  let cautionDisplay = $('h2.answers').text(
                        'Use with caution'
                  ).append(`<p class="subtext"> In this day and age we rely heavily on exclamation points for more than just conveying joy, but also to set a tone of politeness. Be cautious with this choice! You may be able to express yourself better with words.</p>
                  <img class="image" src="https://data.whicdn.com/images/29153382/original.gif" alt="Family guy watching a stick man slip on a wet floor with wet floor sign.">`);
            } else {
                  let useDisplay = $('h2.answers').text(
                        'Bang at will !!!'
                  ).append(
                        `<p class="subtext"> It is totally appropriate to end your thought with a bang! Express that emotion like you're about to get married on top of a mountain, and there's going to be flutes playing and trombones and flowers and garlands of fresh herbs. Then your children will form a family band and tour the countryside because that is what punctuation does.</p>
                        <div class="image"><img class="burgundy" src="http://www.sharegif.com/wp-content/uploads/2014/05/6-anchorman-quotes-burgundy.gif" alt="I am Ron Burgundy?"></div> `);
            }; 
      });
}







