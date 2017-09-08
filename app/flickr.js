function jsonFlickrApi(rsp) {
            var outputStr = "";

            outputStr += "<h1>Flickr by geo</h1>";

            var photos = rsp.photos.photo;
            console.log(photos[0]);
            outputStr += `<p>Photos on this page: ${photos.length}<p>`;
            for (var i = 0 in photos) {
                outputStr += `<a href = \"https://www.flickr.com/photos/${photos[i].owner}/${photos[i].id}\">
                              <img src = \"https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}_t.jpg\"
                                   alt = \"${photos[i].title}\"
                                   title = \"${photos[i].title}\">
                              </a>
                              <p>lat = ${photos[i].latitude}, lon = ${photos[i].longitude}`;
            }
            document.writeln(outputStr);
}
