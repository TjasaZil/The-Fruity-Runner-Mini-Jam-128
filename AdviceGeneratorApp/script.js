const icon = document.getElementById("icon");
  

  icon.addEventListener("click", function(){
    const number = document.getElementById("number");
    const quote = document.getElementById("quote");
    const fetchAdvice = async () => {
        const advice = await fetch("https://api.adviceslip.com/advice")
        const data = await advice.json()
      
        number.textContent = `Advice #${data.slip.id}`
        quote.textContent = `"${data.slip.advice}"`
      }
fetchAdvice()

  })