/***************1**************/
function valMinMax(arr){
  if(arr.length > 0){
    let sumsByExcluding = [];
   function sumByExcludingFunc(iToExclude,arr2){
     let sum = 0;
     for(let i = 0; i < arr2.length; i++){
       if(i === iToExclude) {continue;}
       sum += arr2[i];
     }
 
     return sum;
   }

   for(let j = 0; j < arr.length; j++){

      sumsByExcluding.push(sumByExcludingFunc(j,arr));
   }
   sumsByExcluding.sort(function(a, b){return b - a});
   return sumsByExcluding[sumsByExcluding.length - 1]+ " " + sumsByExcluding[0];
    
  } else {
    return "0 0";
  }
 }

/***************2**************/
function matriceCaree(arr){
  let sum1 = 0, sum2 = 0;
  let arrLength = arr.length;
  for(let i = 0; i < arrLength;i++){
    sum1 += arr[i][i];
  }
  
for(let i = 0, j = arrLength - 1; i < arrLength;i++){
    sum2 += arr[i][j];
    j--;
  }
  return Math.abs(sum1-sum2);
  
}

/***************3**************/
function camelCase(str){
  let strLength = str.length;
  let nombreDeMots = 0;
  if(str.length > 0){
   for(let i = 0; i < strLength; i++){
    let character = str.charAt(i);
    if( character == character.toUpperCase()){
      nombreDeMots++;
    }
  } 
    nombreDeMots++;
  }
 return nombreDeMots; 
}

/***************4**************/
function arcadeRank(top_scores, jeu){
    let classementApresChaqueMatch = [];
     let topScoresWR = Array.from(new Set(top_scores));
     let jeuLength = jeu.length;
 
     for(let i = 0; i < jeuLength; i++){
       
       if(jeu[i] < topScoresWR[topScoresWR.length - 1]){
         topScoresWR.push(jeu[i]);
         if(i-1 > 0 && jeu[i] < jeu[i-1]){
            classementApresChaqueMatch.push(classementApresChaqueMatch[i-1]);
         } else {
            classementApresChaqueMatch.push(topScoresWR.length);
         }
         
       } else {
         for(let j = 0; j < topScoresWR.length; j++){
         
           if(jeu[i] >= topScoresWR[j]){
             if(!topScoresWR.includes(jeu[i])){//pour ajouter le nouveau score de jeu dans les top_scores
   
               topScoresWR.splice(j,0,jeu[i]);
               if(i-1 > 0 && jeu[i] < jeu[i-1]){
                classementApresChaqueMatch.push(classementApresChaqueMatch[i-1]);
                } else {
                classementApresChaqueMatch.push(j+1);
                }
                 
            } else {
                if(i-1 > 0 && jeu[i] < jeu[i-1]){
                    classementApresChaqueMatch.push(classementApresChaqueMatch[i-1]);
                    } else {
                    classementApresChaqueMatch.push(j+1);
                    }
                 
               }
   
               break;
           }   
         }
       }
     }
     return classementApresChaqueMatch;
    }

module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };
