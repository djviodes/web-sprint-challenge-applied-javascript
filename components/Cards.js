// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsContainer = document.querySelector('.cards-container')
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {

        const jsArray = res.data.articles.javascript
        const bsArray = res.data.articles.bootstrap
        const techArray = res.data.articles.technology
        const jqArray = res.data.articles.jquery
        const nodeArray = res.data.articles.node

        const javascript = cardMaker(jsArray)
        const bootstrap = cardMaker(bsArray)
        const technology = cardMaker(techArray)
        const jquery = cardMaker(jqArray)
        const node = cardMaker(nodeArray)

        cardsContainer.appendChild(javascript)
        cardsContainer.appendChild(bootstrap)
        cardsContainer.appendChild(technology)
        cardsContainer.appendChild(jquery)
        cardsContainer.appendChild(node)

    })

    .catch(error => {

        debugger

    })

function cardMaker(cardArray){

    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(image)
    author.appendChild(authorName)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = cardArray.headline
    image.src = cardArray.authorPhoto
    authorName.textContent = cardArray.authorName

    card.addEventListener('click', () => {
        console.log(cardObject.headline)
    })

    return card

}