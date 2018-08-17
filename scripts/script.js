
// make objects for relationship, mode, tone, and emphasis

// for each object, make properties that produce a value. write a title for each value produced.
// 0 = dontUse
// 10 = useWithCaution
// 20 = use

const quizApp = {};
let total = 0;

$(function(){
      quizApp.submitChoices();
});

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
//    resultsDisplay: {
//          use: [{

//          }],
//          useWithCaution: [{}],
//          dontUse: [{}],
//    }
}

quizApp.submitChoices = function(){
      $('form').on('submit', function(e) {
            e.preventDefault();
            const relationAnswer = $('input[name = relation]:checked').val();
            const modeAnswer = $('input[name = mode]:checked').val();
            const toneAnswer = $('input[name = tone]:checked').val();
            const emphasisAnswer = $('input[name = emphasis]:checked').val();
            
            const answerArray = [];
            answerArray.push(relationAnswer, modeAnswer, toneAnswer, emphasisAnswer);
            answerArray.forEach((item) => {
                  total += parseInt(item);
                  // console.log(item);
                  console.log(total);
            })

            // when input is selected 
            const selectedId1 = $('.relationship input:checked').attr('id');
            const results1 = quizApp.results.answer1[selectedId1][0].message;
            console.log(results1);

            const selectedId2 = $('.mode input:checked').attr('id');
            const results2 = quizApp.results.answer2[selectedId2][0].message;
            console.log(results2);

            const selectedId3 = $('.tone input:checked').attr('id');
            const results3 = quizApp.results.answer3[selectedId3][0].message;
            console.log(results3);

            const selectedId4 = $('.emphasis input:checked').attr('id');
            const results4 = quizApp.results.answer4[selectedId4][0].message;
            console.log(results4);

            if(total < 50){
                  let dontUseDisplay = $('<li class="display1">').append(
                        '<h2>No bang necessary!</h2>'
                  );
                  $('.answers').append(dontUseDisplay);
            } else if(total >= 50 && total <= 60){
                  let cautionDisplay = $('<li class="display2">').append(
                        '<h2>Use with caution</h2>'
                  );
                  $('.answers').append(cautionDisplay);
            } else {
                  let useDisplay = $('<li class="display3">').append(
                        '<h2>Bang at will!!!</h2>'
                  );
                  $('.answers').append(useDisplay);
            };            
      });
}






// when the user checks a radio button, 