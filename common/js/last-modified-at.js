function timeSince(date) {
  
  let buildString = function(number, intervalName) {
    let pluralIntervalName = (number === 1) ? intervalName : intervalName + "s";
    return number + " " + pluralIntervalName + " ago";
  }

  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return buildString(interval, "year");
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return buildString(interval, "month");
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return buildString(interval, "day");
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return buildString(interval, "hour");
  }
  return "Just now";
}

var time = document.getElementById("last-modified-at");

if (time) {
  let modifiedDate = new Date(time.getAttribute("datetime"));

  if (!isNaN(modifiedDate)) {
    let modifiedTimeAgo = timeSince(modifiedDate);
    let modifiedDateString = time.innerText;

    time.innerText = modifiedTimeAgo;

    if (modifiedDateString) {
      time.parentElement.onclick = function() {
        time.innerText === modifiedTimeAgo
          ? (time.innerText = modifiedDateString)
          : (time.innerText = modifiedTimeAgo);
      };
    }
  }
}
