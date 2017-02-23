var links = document.getElementsByTagName('a');

var linksArray = [].slice.call(links);

function addHandler(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

linksArray.forEach(addHandler);
