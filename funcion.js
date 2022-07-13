//Variables para los íconos
const html_icon ='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
const js_icon ='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png'
const css_icon ='https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png'
const node_icon = 'https://icon-library.com/images/nodejs-icon/nodejs-icon-17.jpg'
const mongo_icon = 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png'

//Lista e información de usuarios
const developerList = [
    {name:'Carla',
    photo:
    'https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg',
    bio: 'Hola, soy desarrolladora front-end desde hace 5 años...',
    languages: {
    html: true,
    javascript: true,
    css: true,
    node: false,
    mongodb: false
    }
    },
    {name:'Erick',
    photo:'https://i.pinimg.com/564x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg',
    bio: 'Hi, I am back-end developer from ten years ago, and ...',
    languages: {
        html: true,
        javascript: true,
        css: false,
        node: true,
        mongodb: true
    }
    },
    {name:'Maria',
    photo:'https://i.pinimg.com/564x/ed/be/19/edbe19b1fd4866b2d458aaabf8c02073.jpg',
    bio: 'Hola, soy DevOps en Facebook ...',
    languages: {
        html: false,
        javascript: false,
        css: false,
        node: true,
        mongodb: true
    }
    }
];

//Función para obtener en la página HTML la identificación de los usuarios
function obtenerInfo(){
    var texto="";
    developerList.forEach(object=>{
        texto = texto+ "<div class='contenedor'>";
        //Carga de la imagen de usuario
        texto = texto+"<img src='"+object.photo+"' alt='"+object.name+"' class='imagen'/>";
        //Carga del nombre de usuario y su respectivo enlace
        texto = texto+"<a href=# class='link'>"+object.name+"</a><div class='bloque_img'>";
        //Carga las imágenes de los lenguajes de programación
        if(object.languages.html==true){
            texto=texto+"<img class='icono' src='"+html_icon+"' alt='html'/>";
        }
        if(object.languages.javascript==true){
            texto=texto+"<img class='icono' src='"+js_icon+"' alt='js'/>";
        }
        if(object.languages.css==true){
            texto=texto+"<img class='icono' src='"+css_icon+"' alt='css'/>";
        }
        if(object.languages.node==true){
            texto=texto+"<img class='icono' src='"+node_icon+"' alt='node'/>";
        }
        if(object.languages.mongodb==true){
            texto=texto+"<img class='icono' src='"+mongo_icon+"' alt='mongodb'/>";
        }
        //Carga de la biografía del usuario
        texto = texto+"</div><label class='bio_texto'>"+object.bio+"</label></div>";
    });
    //Subida de la información al contenido HTML
    document.getElementById("cargar").innerHTML = texto;
    texto = "";    
}

//Función para cargar la información de un nuevo usuario
function ingresarUsuario(){
    var HTML=false, JS=false, CSS=false, NODE=false, MONGODB=false;

    //Carga de información de los lenguajes de programación
    if(document.getElementById("html").checked==true){
        HTML = true;
    }
    if(document.getElementById("js").checked==true){
        JS = true;
    }
    if(document.getElementById("css").checked==true){
        CSS = true;
    }
    if(document.getElementById("node").checked==true){
        NODE = true;
    }
    if(document.getElementById("mongodb").checked==true){
        MONGODB = true;
    }

    //Subida de la información a través de un objeto
    developerList.push({
        name: document.getElementById("dev_name").value, 
        photo: document.getElementById("url_avatar").value,
        bio: document.getElementById("biography").value,
        languages: {
            html: HTML,
            javascript: JS,
            css: CSS,
            node: NODE,
            mongodb: MONGODB
        }
    });
    
    //Cargar nuevamente la información a la página
    obtenerInfo();
}