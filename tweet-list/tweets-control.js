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





async function handleShowTweetsButtonClicked(tweetList){
  const spinner = tweetList.querySelector('.lds-ring');
  try {      
      spinner.classList.toggle('hidden');
      const tweets = await getTweets(tweetList);
      if(tweets.length ===0){
        renderEmptyTweetList(tweetList);
      }else{
        renderTweets(tweets, tweetList);
      }
           
  } catch (errorMessage) {
    dispatchErrorEvent(errorMessage,tweetList);
  } finally{
    spinner.classList.toggle('hidden');
  }
  
}
function dispatchErrorEvent(errorMessage,tweetList){
  const event = new CustomEvent('error-loading-tweets',{
    detail:{
      message: errorMessage
    }
  });//creamos el evento
  tweetList.dispatchEvent(event); //disparamos el evento

}


function renderTweets(tweets, tweetList){
    tweets.forEach(tweet => {
    const divsTweet = document.createElement('div');
    divsTweet.innerHTML = buildTweet(tweet);
    tweetList.appendChild(divsTweet);
})
}


function renderEmptyTweetList(tweetList){
  tweetList.innerHTML =builtEmptyTweetList();
}