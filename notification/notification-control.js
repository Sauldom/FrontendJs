import { buildNotification } from "./notification-view.js";


export function notificationController(notificationContainer){
    
}

function showNotification(message, noticiactionContainer){
    const notification = document.createElement('div');
    notification.innerHTML = buildNotification(message);
    noticiactionContainer.appendChild(notification);
}