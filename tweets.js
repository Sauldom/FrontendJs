const tweets = [{
    handler: '@usuario1',
    date: new Date().toISOString(),
    message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
    likes: 40,
  },
  {
    handler: '@usuario2',
    date: new Date().toISOString(),
    message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
    likes: 3,
  },
  {
    handler: '@usuario3',
    date: new Date().toISOString(),
    message: 'Ayer estuve en le parque y me lo pasé genial',
    likes: 34,
  },
  {
    handler: '@usuario4',
    date: new Date().toISOString(),
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    likes: 400,
  }];

  //cada uno crear una estructura html con los datos
  //recorrer el array de tweets
  //añadirlo al dom
  
  
  
const target = document.querySelector('.tweet-list');

function pintar (){
    tweets.forEach(element =>{
        const divsTweet = document.createElement('div');
        divsTweet.textContent = element.handler;
        target.appendChild(divsTweet);
        const divsTweet2 = document.createElement('div');
        divsTweet2.textContent = element.date;
        target.appendChild(divsTweet2);
        const divsTweet3 = document.createElement('div');
        divsTweet3.textContent = element.message;
        target.appendChild(divsTweet3);
        const divsTweet4 = document.createElement('div');
        divsTweet4.textContent = element.likes;
        target.appendChild(divsTweet4);
      })   
}
pintar();

