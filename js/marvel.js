function consumirAPI() {
    console.log("Iniciando busqueda");

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'https://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    console.log(url);

    var Cuadro = document.getElementById("HR")

    fetch(url)
    .then(response => response.json())
    .then(json => {

        for (item of json.data.results){

            console.log(item.name)

            var div = document.createElement("div");

            var img = document.createElement("img");
            img.src = item.thumbnail.path + "." + item.thumbnail.extension;

            var parrafo = document.createElement("p");
            parrafo.innerText = item.description

            var label = document.createElement("label");
            label.innerText = item.name;

            div.appendChild(label);
            div.appendChild(img);
            div.appendChild(parrafo);

            var link1 = document.createElement("a");
            link1.innerText = "Ver Series"; 
            link1.href = "html/series.html?Direccion=" + item.series.collectionURI ;
            div.appendChild(link1);

            var link2 = document.createElement("a");
            link2.innerText = "Ver Comics";
            link2.href = "html/comics.html?Direccion=" + item.comics.collectionURI;
            div.appendChild(link2);

            var link3 = document.createElement("a");
            link3.innerText = "Ver Eventos";
            link3.href = "html/eventos.html?Direccion=" + item.events.collectionURI;
            div.appendChild(link3);

            var link4 = document.createElement("a");
            link4.innerText = "Ver Stories";
            link4.href = "html/stories.html?Direccion=" 
            div.appendChild(link4);

            Cuadro.appendChild(div);

        }

    })
}


function  seriesMarvel(){

    
    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";

    const paramURL = window.location.search;

    const parametrosURL = new URLSearchParams(paramURL);

    const Direccion = parametrosURL.get('Direccion');

    var url = Direccion +'?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;




    console.log(url);


    var contenido = document.getElementById("contenido")


    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            console.log(item.title)
            console.log(item.urls[0].url)

            var title = document.createElement("p")
            title.innerText = item.title



            contenido.appendChild(title)

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(link)

            


        }





   

    })









   

}



function  comicsMarvel(){

    
    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";

    const paramURL = window.location.search;

    const parametrosURL = new URLSearchParams(paramURL);

    const Direccion = parametrosURL.get('Direccion');

    var url = Direccion +'?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;




    console.log(url);


    var contenido = document.getElementById("contenido")


    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            console.log(item.title)
            console.log(item.urls[0].url)

            var title = document.createElement("p")
            title.innerText = item.title



            contenido.appendChild(title)

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(link)

            


        }





   

    })





    



   

}


function  EventosMarvel(){

    
    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";

    const paramURL = window.location.search;

    const parametrosURL = new URLSearchParams(paramURL);

    const Direccion = parametrosURL.get('Direccion');

    var url = Direccion +'?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;




    console.log(url);


    var contenido = document.getElementById("contenido")


    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            console.log(item.title)
            console.log(item.urls[0].url)

            var title = document.createElement("p")
            title.innerText = item.title



            contenido.appendChild(title)

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(link)

            


        }





   

    })





    



   

}