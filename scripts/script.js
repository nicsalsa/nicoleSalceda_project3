
// make objects for relationship, mode, tone, and emphasis

// for each object, make properties that produce a value. write a title for each value produced.
// 0 = dontUse
// 10 = useWithCaution
// 20 = use

const quizApp = {};
let total = 0;

quizApp.Results = {
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
            message: "Hmm, think about this a little more.",
            tally: 10,
      }],
   },
   answer2: {
      email: [{
            message: "Hmm, think about this a little more.",
            tally: 10,
      }],
      messenger: [{
            message: "Do it up!!!",
            tally: 20,
      }],
      post: [{
            message: "hmm, think about this a little more.",
            tally: 10,
      }],
      letter: [{
            message: "Hmm, think about this a little more.",
            tally: 10,
      }],
   },
   answer3: {
      joyful: [{
            message: "If you're joyful and you know it use a bang!",
            tally: 20,
      }],
      humorous: [{
            message: "Hmm, Think a little more about it",
            tally: 10,
      }],
      informal: [{
            message: "Why not?!",
            tally: 20,
      }],
      optimistic: [{
            message: "You can do it!",
            tally: 20,
      }],
      serious: [{
            message: "Unless you are serious about banging, don't do it.",
            tally: 0,
      }],
      formal: [{
            message: "Definitely, don't do it",
            tally: 0,
      }],
      sad: [{
            message: "No one likes a cry bang. Don't be weird.",
            tally: 0
      }],
      pessimistic: [{
            message: "Unless you change your attitude, don't expect to bang.",
            tally: 0
      }],
      horror: [{
            message: "There's a time and a place to bang, this isn't it.",
            tally: 0
      }],
   },
   answer4: {
         astonishment: [{
               message: "I'm amazed! I'm astonished!",
               tally: 20,
            }],
         shock: [{
               message: "I'm so surprised and have mixed feelings!",
               tally: 20,
            }], 
         excitement: [{
               message: "I'm eager!",
               tally: 20,
            }],
         urgency: [{
               message: "I need swift action to be taken!",
               tally: 20,
            }],
         vehemence: [{
               message: "I am intensely passionate about this!",
               tally: 20,
            }],
         nodeclare: [{
               message: "I'm pretty chill right now",
               tally: 0,
            }],
   }
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
            // console.log(answerArray);

            answerArray.forEach((item) => {
                  total += parseInt(item);
                  // console.log(item);
                  console.log(total);
            })
            
      });
}

quizApp.submitChoices();


// when the user checks a radio button, 