class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here...");
    this.input2 = createInput("Correct Option No.");
    this.input3 = createInput("Correct Option No.");
    this.input4 = createInput("Correct Option No.");
    this.input5 = createInput("Correct Option No.");

    this.reset=createButton("Reset")
    this.button = createButton('Submit');

    this.question = createElement('h2');
    this.question2 = createElement('h2');
    this.question3 = createElement('h2');
    this.question4 = createElement('h2');

    this.Q1option1 = createElement('h3');
    this.Q1option2 = createElement('h3');
    this.Q1option3 = createElement('h3');
    this.Q1option4 = createElement('h3');

    this.Q2option1 = createElement('h3');
    this.Q2option2 = createElement('h3');
    this.Q2option3 = createElement('h3');
    this.Q2option4 = createElement('h3');

    this.Q3option1 = createElement('h3');
    this.Q3option2 = createElement('h3');
    this.Q3option3 = createElement('h3');
    this.Q3option4 = createElement('h3');

    this.Q4option1 = createElement('h3');
    this.Q4option2 = createElement('h3');
    this.Q4option3 = createElement('h3');
    this.Q4option4 = createElement('h3');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    //question 1

    this.question.html("Question:- What goes up and down, but never moves?" );
    this.question.position(130, 100);

    this.Q1option1.html("1: Height " );
    this.Q1option1.position(130, 140);
    
    this.Q1option2.html("2: Temperature" );
    this.Q1option2.position(130, 165);

    this.Q1option3.html("3: Trees" );
    this.Q1option3.position(130, 190);

    this.Q1option4.html("4: Rain" );
    this.Q1option4.position(130, 215);

    // question2

    this.question2.html("Question:- What is always spelt incorrectly?" );
    this.question2.position(130,425);

    this.Q2option1.html("1: Definitely " );
    this.Q2option1.position(130, 470);
    
    this.Q2option2.html("2: Supercalifragilisticexpialidocious" );
    this.Q2option2.position(130, 495);

    this.Q2option3.html("3: Incorrectly " );
    this.Q2option3.position(130, 520);

    this.Q2option4.html("4: Incomprehensibilities" );
    this.Q2option4.position(130, 545);

    // question3

    this.question3.html("Question:- What starts with T, ends with T, and has T in it?" );
    this.question3.position(130,725);

    this.Q3option1.html("1: Teapot " );
    this.Q3option1.position(130, 760);
    
    this.Q3option2.html("2: Teleport" );
    this.Q3option2.position(130, 785);

    this.Q3option3.html("3: Tent " );
    this.Q3option3.position(130, 810);

    this.Q3option4.html("4: Tartlet" );
    this.Q3option4.position(130, 835);

    // question4

    this.question4.html("Question:- When you speak you break it. What is it?" );
    this.question4.position(130,1035);

    this.Q4option1.html("1: Bone " );
    this.Q4option1.position(130, 1070);
    
    this.Q4option2.html("2: Promise" );
    this.Q4option2.position(130, 1095);

    this.Q4option3.html("3: Glass " );
    this.Q4option3.position(130, 1120);

    this.Q4option4.html("4: Silence" );
    this.Q4option4.position(130, 1145);

    this.input1.position(130, 265);
    this.input2.position(350, 265);
    this.input3.position(350, 565);
    this.input4.position(350, 855);
    this.input5.position(350, 1145);
    this.button.position(290, 1290);
    this.reset.position(1000, 1300);
    
    this.button.mousePressed(()=>{
      //this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.input3.hide();
      this.input4.hide();
      this.input5.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer1 = this.input2.value();
      contestant.answer2 = this.input3.value();
      contestant.answer3 = this.input4.value();
      contestant.answer4 = this.input5.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

    });

    this.reset.mousePressed(()=>{
      contestant.updateCount(0);
      quiz.update(0);

      database.ref('/').update({
        contestants:null
      });
  })
   
  }
}