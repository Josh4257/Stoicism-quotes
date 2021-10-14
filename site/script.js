const fire = document.getElementById("fire");
const welcome = document.getElementById("welcome")
const box = document.getElementById("box")

fire.addEventListener('click', getQuote);

async function getQuote(){
  try{
    var quote = ""
    var response = await fetch("https://catfact.ninja/facts?limit=5");
    const data = await response.json();
    function getRandomInt(max){
      return Math.floor(Math.random()* max);
    }
    
    var number = getRandomInt(5)
    var quote = (data.data[number].fact)
    console.log(number)
    console.log(quote)

    box.style.display = "flex"
    var name = document.getElementById("name").value;
    document.getElementById("welcome").style.color = "white"
    document.getElementById("outputQuote").style.color = "white"
    welcome.innerHTML = ("Greetings " + name);
    outputQuote.innerHTML = (quote);

  } catch (error){
    box.style.display = "flex"
    document.getElementById("welcome").style.color = "white"
    welcome.innerHTML ="Sorry we cannot give you a quote at this time"
  }
}