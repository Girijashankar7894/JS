const currentTime = document.getElementById("currentTime");
setInterval(() => {
    let date = new Date();
    currentTime.innerHTML = date.toLocaleTimeString();
}, 1000);