var links = document.getElementsByTagName('a'); //http://stackoverflow.com/questions/3871358/get-all-the-href-attributes-of-a-web-site

var linksArray = [].slice.call(links);

function addHandler(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

linksArray.forEach(addHandler);
