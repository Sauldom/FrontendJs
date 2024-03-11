import { notificationController } from "./notification/notification-control.js";
import { tweetListController } from "./tweet-list/tweets-control.js";

const tweetList  = document.querySelector('.tweet-list');
const notificationList = document.querySelector('.notification-list');

const {showNotification} = notificationController(notificationList);

//los listener tienen que star activos antes del evento
tweetList.addEventListener('error-loading-tweets', (event)=>{
    console.log(event);
    showNotification(event.detail.message,event.detail.type);
    event.stopPropagation();
})


tweetListController(tweetList);

window.addEventListener('offline', ()=>{
    showNotification('Has perdido la conexion', 'error');
})

