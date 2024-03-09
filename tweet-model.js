
function parseTweets(data){
    return data.map(data =>({
        handler:data.author,
        date: new Date().toISOString(),
        message: data.message,
        likes: data.likes.length
    }))
}



export async function getTweets(){
  
  const url = 'https://fake-tweets-api-kc.vercel.app/posts';
  let tweets=[];
  try {
    const response = await fetch(url);
    const data = await response.json();
    tweets = parseTweets(data); // SI PONEMOS AQUI UN ARRAY VACIO SE VERIA EL MENSAJE DE NO HAY TWEETS
    
  } catch (error) {
    throw new Error('Error obteniendo tweets');
  }
  return tweets;

}
        

