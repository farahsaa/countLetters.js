
function countLetters (str){

    var results = {};
    var noSpace = str.split(" ").join('');
    
      for (var i = 0; i < noSpace.length; i++){
       var currentCharacter = noSpace[i];

        if(!results[currentCharacter]){
        results[currentCharacter]= 1
        }
        else{
    
          results[currentCharacter]+= 1
        }
    
      } return results;
    }
    
    console.log(countLetters("lighthouse in the house"))
