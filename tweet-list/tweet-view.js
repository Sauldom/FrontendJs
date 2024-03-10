//VISTA: construccion de los datos que vamos a mostrar  seria el HTML, los datos que trabajo 


export function buildTweet(tweet){
    return `<span>${tweet.handler}</span>
            <span>${tweet.date}</span>
            <p>${tweet.message}</p>
            <p>${tweet.likes}</p>        
            `
}

export function BuildDrawTweetsButton(){
    return `<button> Mostrar Tweets</button>`
}

export function builtEmptyTweetList(){
    return '<h3> Lo sentimos no hay tweets disponibles</h3>'
}