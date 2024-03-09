import { getTweets } from "./tweet-model.js";
import { buildTweet} from "./tweet-view.js";
//CONTROLADOR: es el mediador entre el modelo y la vista interactua con el dom

export function tweetListController(tweetList) {
  

  const showButton = document.createElement('button');
  showButton.textContent = 'mostrar tweet';
  tweetList.appendChild(showButton);

  showButton.addEventListener('click', async ()=>{
    try {
        const tweets = await getTweets();
        renderTweets(tweets, tweetList);
        
    } catch (errorMessage) {
      alert(errorMessage);
    }
    
  })
}
function renderTweets(tweets, tweetList){
    tweets.forEach(tweet => {
    const divsTweet = document.createElement('div');
    divsTweet.innerHTML = buildTweet(tweet);
    tweetList.appendChild(divsTweet);
})
}