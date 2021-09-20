class Contestant {
  constructor(){
    this.index = null;
    this.answer1 = 0;
    this.answer2 = 0;
    this.answer3 = 0;    
    this.answer4 = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer1:this.answer1,
      answer2:this.answer2,
      answer3:this.answer3,
      answer4:this.answer4
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}