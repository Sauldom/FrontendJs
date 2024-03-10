import { notificationController } from "./notification/notification-control.js";
import { tweetListController } from "./tweet-list/tweets-control.js";

const tweetList  = document.querySelector('.tweet-list');
const notificationList = document.querySelector('.notification-list');

notificationController(notificationList);
tweetListController(tweetList);