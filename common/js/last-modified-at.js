function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  return "Just now";
}

var time = document.getElementById("last-modified-at");

if (time) {
  let modifiedDate = new Date(time.getAttribute("datetime"));

  if ( !isNaN(modifiedDate) ) {
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
