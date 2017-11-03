var hiddenClassName = 'hidden';
var defaultView = 'home';

var links = document.getElementsByClassName('nav-link');

// links.forEach(function(link) {
//     link.onclick = function() {

//     }
// })

function enableView(viewName) {

    viewName = viewName || defaultView;
    viewName = viewName.replace("#", "");

    if (!document.getElementById(viewName)) {
        //if the user passed in a bad hash, send them back to home page
        viewName = defaultView;
    }

    var sections = document.getElementsByTagName('section');

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        if (section.id == viewName) {
            section.classList.remove(hiddenClassName);
        } else {
            section.classList.add(hiddenClassName);
        }
    }
}

window.onhashchange = function() {
    enableView(window.location.hash);
};
enableView(window.location.hash);


