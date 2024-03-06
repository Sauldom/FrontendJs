  import { tweets } from "./tweet-model.js";
import { buildTweet } from "./tweet-view.js";
//CONTROLADOR: es el mediador entre el modelo y la vista interactua con el dom

const target = document.querySelector('.tweet-list');


tweets.forEach(tweet =>{
    const divsTweet = document.createElement('div');
    divsTweet.innerHTML = buildTweet(tweet);
    target.appendChild(divsTweet);
  })   

