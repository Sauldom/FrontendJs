import { getTweets } from "./tweet-model.js";
import { buildTweet, BuildDrawTweetsButton } from "./tweet-view.js";
//CONTROLADOR: es el mediador entre el modelo y la vista interactua con el dom

export function tweetListController(tweetList) {
  //1 pintar el boton

  //const button = BuildDrawTweetsButton();
  //no podemos hacer un appendChild porque es una cadena de texto
  //pero podemos hacerlo sin funcion

  const showButton = document.createElement('button');
  showButton.textContent = 'mostrar tweet';
  tweetList.appendChild(showButton);

  //2 asignar evento al boton
  showButton.addEventListener('click', () => {
    //3 mostrar los tweets
    getTweets()
      .then((tweets) => {
        tweets.forEach(tweet => {
          const divsTweet = document.createElement('div');
          divsTweet.innerHTML = buildTweet(tweet);
          tweetList.appendChild(divsTweet);
        })
      })
      .catch((errorMessage)=>{
        alert(errorMessage)
      });


  })

}
