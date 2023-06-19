const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const decision = document.querySelector(".decision")

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore


results(mostRecentScore)
//variable to store your answer//
var answer = "";
//function which goes through results//
function results(val) {
  
  
    switch (val) {
      case "0":
        case "100":
          case "200":
      answer = "Looks like bicycle is your thing";
      break;
    case "300":
      case "400":
      answer = "You deserve Nissan Micra";
      break;
    case "500":
      case "600":
        case "700":
      answer = "Your car is BMW 3";
      break;
    case "800":
      case "900":
        case "1000": 
      answer = "Your car is E63 AMG";
      break;
    case "1100":
      case "1200": 
      answer = "Your car is Lamborghini Aventador";
      break;
      case "1300": 
      answer = "You can pick any car you like";
      break;
      default: 
      answer = "Something went wrong try again";
      break;
    }

    decision.innerHTML = answer
  }
  


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    
    window.location.assign('index.html')
}