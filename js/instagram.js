
/*Instagram feed*/

var request = new XMLHttpRequest();
			request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1570664764.1677ed0.cb185c4e68154c919c5fcf37377cffc6&count=10', true);

			request.onload = function(container) {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!
			    var data = JSON.parse(request.responseText);
			    for (var i=0;i < data.data.length;i++) {

                    var container = document.getElementById('insta-feed');
                    
                    var imgURL = data.data[i].images.standard_resolution.url;
                    console.log(imgURL);
                    
                    var imgLink = data.data[i].link;
                    console.log(imgLink);


                    var div = document.createElement('div');
                    div.setAttribute('class','instapic');
                    container.appendChild(div);

                    var linki = document.createElement('a')
                    linki.setAttribute('href',imgLink)
                    div.appendChild(linki);

                    var img = document.createElement('img');
                    img.setAttribute('src',imgURL)
                    
                    linki.appendChild(img);
                    



			    }

			    console.log(data);
			  } else {
			  }
			};
			request.onerror = function() {
			  // There was a connection error of some sort
			};
			request.send();