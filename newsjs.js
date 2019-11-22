function news(){
    
    var url = "https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=bdceeaeb320c4e2bafb98c5bad6375ad";
    var xtp = new XMLHttpRequest();
    xtp.open("GET", url, true);
    xtp.send();
    xtp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var result = this.responseText;
            //console.log(result);
            var jsonresult = JSON.parse(result);
            console.log(jsonresult);
            //let list = document.getElementById('list');
            let output= "";
            let latestNews =jsonresult.articles;
            for (var i in latestNews) {
                output += `<div class="col l4 m6 s12">
                            <div class="card medium hoverable">
                                <div class="card-image">
                                    <img src="${latestNews[i].urlToImage}" class="responsive-img" style="width:300px;height:300px;" alt="${latestNews[i].title}">
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
                                    <h6 class="truncate">Title: <a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>
                                    <p><b>Author</b>: ${latestNews[i].author} </p>
                                    <p><b>News source</b>: ${latestNews[i].source.name} </p>
                                    <p><b>Published</b>: ${latestNews[i].publishedAt} </p>
                                </div>

                                <div class="card-reveal">
                                    <span class="card-title"><i class="material-icons right">close</i></span>
                                    <p><b>Description</b>: ${latestNews[i].description}</p>
                                </div>

                                <div class="card-action">
                                    <a href="${latestNews[i].url}" target="_blank" class="btn">Read More</a>
                                </div>
                            </div>
                        </div>`;
            }
            if (output !== "") {
                $("#newsResults").html(output);
            }
        }
    }
}    
function news1(){
    
    var url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-22&sortBy=publishedAt&apiKey=bdceeaeb320c4e2bafb98c5bad6375ad";
    var xtpp = new XMLHttpRequest();
    xtpp.open("GET", url, true);
    xtpp.send();
    xtpp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var resultt = this.responseText;
            //console.log(result);
            var jsonresultt = JSON.parse(resultt);
            console.log(jsonresultt);
            //let list = document.getElementById('list');
            let output= "";
            let latestNewss =jsonresultt.articles;
            for (var i in latestNewss) {
                output += `<div class="col l4 m6 s12">
                            <div class="card medium hoverable">
                                <div class="card-image">
                                    <img src="${latestNewss[i].urlToImage}" class="responsive-img" style="width:300px;height:300px;" alt="${latestNewss[i].title}">
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
                                    <h6 class="truncate">Title: <a href="${latestNewss[i].url}" title="${latestNewss[i].title}">${latestNewss[i].title}</a></h6>
                                    <p><b>Author</b>: ${latestNewss[i].author} </p>
                                    <p><b>News source</b>: ${latestNewss[i].source.name} </p>
                                    <p><b>Published</b>: ${latestNewss[i].publishedAt} </p>
                                </div>

                                <div class="card-reveal">
                                    <span class="card-title"><i class="material-icons right">close</i></span>
                                    <p><b>Description</b>: ${latestNewss[i].description}</p>
                                </div>

                                <div class="card-action">
                                    <a href="${latestNewss[i].url}" target="_blank" class="btn">Read More</a>
                                </div>
                            </div>
                        </div>`;
            }
            if (output !== "") {
                $("#newsResults").html(output);
            }
        }
    }
}    
function news2(){
    var country = document.getElementById("country").value;
    var url = "https://newsapi.org/v2/top-headlines?country="+country+"&category=business&apiKey=bdceeaeb320c4e2bafb98c5bad6375ad";
    var xtpp = new XMLHttpRequest();
    xtpp.open("GET", url, true);
    xtpp.send();
    xtpp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var resul = this.responseText;
            //console.log(result);
            var jsonresul = JSON.parse(resul);
            console.log(jsonresul);
            //let list = document.getElementById('list');
            let output= "";
            let latestNew =jsonresul.articles;
            for (var i in latestNew) {
                output += `<div class="col l4 m6 s12">
                            <div class="card medium hoverable">
                                <div class="card-image">
                                    <img src="${latestNew[i].urlToImage}" class="responsive-img" style="width:300px;height:300px;" alt="${latestNew[i].title}">
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
                                    <h6 class="truncate">Title: <a href="${latestNew[i].url}" title="${latestNew[i].title}">${latestNew[i].title}</a></h6>
                                    <p><b>Author</b>: ${latestNew[i].author} </p>
                                    <p><b>News source</b>: ${latestNew[i].source.name} </p>
                                    <p><b>Published</b>: ${latestNew[i].publishedAt} </p>
                                </div>

                                <div class="card-reveal">
                                    <span class="card-title"><i class="material-icons right">close</i></span>
                                    <p><b>Description</b>: ${latestNew[i].description}</p>
                                </div>

                                <div class="card-action">
                                    <a href="${latestNew[i].url}" target="_blank" class="btn">Read More</a>
                                </div>
                            </div>
                        </div>`;
            }
            if (output !== "") {
                $("#newsResults").html(output);
            }
        }
    }
}