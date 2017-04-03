function checkHistory(targetId) {
  var history = localStorage.history;
  var htmlContent = '';

  if (history != "" && history != null) {
    var insert = true;
    var sp = history.toString().split(",");
    for ( var i = sp.length - 1; i >= 0; i--) {
        htmlContent += '<a style="color: white;" class="demo-pricing demo-pricing-1" href="'
                    + sp[i]
                    + '">'
                    + sp[i].substring(sp[i].lastIndexOf('/') + 1) + '</a><br>';
            if (sp[i] == document.URL) {
                insert = false;
            }
            document.getElementById(targetId).innerHTML = htmlContent;
        }
        if (insert) {
            sp.push(document.URL);
        }
        localStorage.history = sp.toString();
    } else {
        var stack = new Array();
        stack.push(document.URL);
        localStorage.history = stack.toString();
    }
}


function clearHistory() {
  localStorage.history = "";
  alert("Visited page links were cleared");
}
