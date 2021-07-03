const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')


let apiQuotes = []
const apiUrl = 'https://type.fit/api/quotes'


// Handle fetching  quotes from api 
const getQuotes = async () => {
    showLoader()
    try {
        const res = await fetch(apiUrl)
        apiQuotes = await res.json()
        newQuote()
    } catch (err) {
        //catch error 
        console.log('something went wrong ' + err)
    }
}

// Handle newQuote
const newQuote = () => {
    showLoader()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }
    quoteText.textContent = quote.text
    hideLoader()
}


// Handle tweetQuote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`
    window.open(twitterUrl, '_blank')
}

// Handle show loader 
const hideLoader = () => {
    loader.hidden = true
    quoteContainer.hidden = false
}

const showLoader = () => {
    loader.hidden = true
    quoteContainer.hidden = false
}

// Handle EventListener 
twitterBtn.addEventListener('click', tweetQuote)
newQuoteBtn.addEventListener('click', newQuote)


getQuotes()

