var operations = {
    'x': function (num5, num6) {return num5 * num6;}
 
};

  z = 5;
  v = 5;

  var somethin;
  
  newquestion();
  
  function newquestion() {
      document.getElementById('answer').value = "";
      document.getElementById('answer').style.backgroundColor = "white";
      var num5 = Math.floor(Math.random() * v) + 1;
      var num6 = Math.floor(Math.random() * z) + 1;
      var operationChosen = Object.keys(operations)[Math.floor(Math.random() * Object.keys(operations).length)];
      somethin = operations[operationChosen](num5, num6);
      document.getElementById("11question").innerHTML = num5 + operationChosen + num6;
  }
  
  function check() {
      var answer = parseInt(document.getElementById('answer').value); 
      if (somethin === answer) {
          document.getElementById('answer').style.backgroundColor = "green";
          setTimeout(newquestion, 1500);
      } else {
          document.getElementById('answer').style.backgroundColor = "red";
          document.querySelector('.div5').style.visibility = 'Visible';
          document.getElementById("atsakymas").innerHTML = somethin;
          setTimeout(() => {
              document.querySelector('.div5').style.visibility = 'hidden';
              newquestion()
          }, 1500);
          
      }
  }
  document.getElementById("minusas").onclick = function () {
      location.href = "/Minusas/Minusas.html";
  };
  document.getElementById("pliusas").onclick = function () {
    location.href = "/pagrindinis.html";
};
  
  document.getElementById("hard").onclick = function() {
     
      v += 5;
      z += 5;
  
     newquestion()
     difficulty()
  }
  
  document.getElementById("easy").onclick = function() {
     
      if( v ==5  ){
          return
      }
     
      v -= 5;
      newquestion()
      difficulty()
  }
  
  function difficulty(){
  document.getElementById("difficulty").innerHTML = v / 10;
  }

  