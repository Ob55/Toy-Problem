 function gradeingSystem(score){
       if(score > 100)  {
          return 'invalid';
       }
     if(score >= 79 &&  score <= 100){
          return "A";
     }
     else if(score >= 60 && score < 79){
          return "B-";
     } 
     else if(score >= 49 && score < 60){
          return "c-";
     }
     else if(score >= 40 && score < 49){
          return "D-";
     }
      else if (score < 40 && score >= 0){
          return "E";
      }
} 
   console.log(gradeingSystem(55)) 






