let pronoun = ['the','our', 'her', 'his'];
let adjetive = ['great', 'big','beatiful','pretty','adorable' ];
let noun = ['jogger','racoon','cat','dog','mouse' ];
let extension = ['.com','.net','.us','.io','.es' ];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjetive.length; j++) {
    for ( let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        console.log(pronoun[i] + adjetive[j] + noun[k] + extension[l]);
      }  
    }
  } 
}   