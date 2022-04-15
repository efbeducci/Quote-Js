const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName= document.querySelector(".author .name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
backgorund = document.querySelector("body");

quoteBtn.addEventListener("click",randomQuote)
//Hacemos una random quote con API
function randomQuote(){
    quoteBtn.innerText= "Loading...";
    backgorund.classList.add("color")
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText= result.content
        authorName.innerText=result.author
        quoteBtn.innerText= "New Quote"
        quoteBtn.classList.remove("loading")
    })
    
}

soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    utterance.lang= 'en-US'
    speechSynthesis.speak(utterance)

})
copyBtn.addEventListener("click", ()=>{
    //Copying the quote into copyBtn
    navigator.clipboard.writeText(quoteText.innerText);
    window.alert("Copied to dashboard")
})
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl= `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank")
})

