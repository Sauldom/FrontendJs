import { getTweets } from "./tweet-model.js";
import { buildTweet,builtEmptyTweetList} from "./tweet-view.js";
//CONTROLADOR: es el mediador entre el modelo y la vista interactua con el dom
//INTERESANTE PARA RENOMBRAR SELECCIONAR EL NOMBRE A CAMBIAR Y DAR A F2

export function tweetListController(tweetList) {
  

  const showButton = document.createElement('button');
  showButton.textContent = 'mostrar tweet';
  tweetList.appendChild(showButton);

  showButton.addEventListener('click', ()=>handleShowTweetsButtonClicked(tweetList))
}


function renderTweets(tweets, tweetList){
    tweets.forEach(tweet => {
    const divsTweet = document.createElement('div');
    divsTweet.innerHTML = buildTweet(tweet);
    tweetList.appendChild(divsTweet);
})
}


async function handleShowTweetsButtonClicked(tweetList){
  try {
      const tweets = await getTweets(tweetList);
      if(tweets.length ===0){
        renderEmptyTweetList(tweetList);
      }else{
        renderTweets(tweets, tweetList);
      }     
  } catch (errorMessage) {
    alert(errorMessage);
  }
  
}

function renderEmptyTweetList(tweetList){
  tweetList.innerHTML =builtEmptyTweetList();
}