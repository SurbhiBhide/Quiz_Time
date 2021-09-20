class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
  hide(){
    input1.hide();
    input2.hide();
    input3.hide();
    input4.hide();
    input5.hide();
    button.hide();
    title.hide();
        }
  play(){
    //write code here to hide question elements
  question.hide();

    //write code to change the background color here
background("rgb(0, 255, 250)")
    //write code to show a heading for showing the result of Quiz
    textSize(20);
//text("THE ANSWER IS TEMPERATURE",425,200);
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestants !== undefined){
fill("Blue")
textSize(20)
text("NOTE : Contestants who answered correctly are highlighted in green colour !",130,270)
}

var displayPosition1=270;
var displayPosition2=570;
var displayPosition3=870;
var displayPosition4=1170;
    //write code to add a note here
for(var plr in allContestants){
  var correctAns1="2";
  var correctAns2 = "3";
  var correctAns3 = "1";
  var correctAns4 = "4";

  //ans1
  if(correctAns1 === allContestants[plr].answer1){
    fill("Green")
  }
  else
      fill("red")
      displayPosition1=displayPosition1+30
    text(allContestants[plr].name +": Q1 - "+allContestants[plr].answer1,130,displayPosition1);


//ans2
    if(correctAns2 === allContestants[plr].answer2){
      fill("Green")
    }
    else
        fill("red")
        displayPosition2=displayPosition2+30
      text(allContestants[plr].name +": Q2 - "+allContestants[plr].answer2,130,displayPosition2);


      //ans3
    if(correctAns3 === allContestants[plr].answer3){
      fill("Green")
    }
    else
        fill("red")
        displayPosition3=displayPosition3 + 30
      text(allContestants[plr].name +": Q3 - "+allContestants[plr].answer3,130,displayPosition3);


      //ans4
    if(correctAns4 === allContestants[plr].answer4){
      fill("Green")
    }
    else
        fill("red")
        displayPosition4=displayPosition4 + 30
      text(allContestants[plr].name +": Q4 - "+allContestants[plr].answer4,130,displayPosition4);
    }
  }
    //write code to highlight contest who answered correctly
    
}