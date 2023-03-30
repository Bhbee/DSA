var wordBreak = function(s, wordDict) {
    if(!wordDict) return false;
      
    let sArray = new Array(s.length + 1);
    sArray[0] = true; 
    for(let i = 1; i <= s.length; i++) {
      for(let j = 0; j<i; j++) {
            if(sArray[i]) break; 
        if(sArray[j] && wordDict.indexOf(s.substring(i,j)) >= 0) {
          sArray[i] = true;
          break;
        }
      }
    }
    return Boolean(sArray[s.length]);
  };