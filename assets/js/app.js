var btn = document.getElementById('btn');

btn.addEventListener('click', function(){

	var conteinerPost = document.getElementById('contenedor-posteos');
	//rescatar los textos del ususario en el text area e input
	var name = document.getElementById('nombre').value;

	document.getElementById('nombre').value="";

	var comment = document.getElementById('cajaposteos').value;

	document.getElementById('cajaposteos').value="";
	//crear elementos necesarios para guardar nombre y comentario en un elemento

	var post = document.createElement('div');
	var elementName = document.createElement('strong');
	var elementComment = document.createElement('p');
	var elementLine = document.createElement('hr');

	//creamos nodos de texto
    var nodoDeTextoName = document.createTextNode(name);
    var nodoDeTextoComent = document.createTextNode(comment);

   //empezar a enlazarlos

   elementName.appendChild(nodoDeTextoName);
   elementComment.appendChild(nodoDeTextoComent);

   post.appendChild(elementName);

   post.appendChild(elementComment);
   
   post.appendChild(elementLine);

   post.setAttribute('class','posteo');

   conteinerPost.appendChild(post);

   var counter = document.getElementById('counter-characteres');

});

var textArea =document.getElementById('cajaposteos');

textArea.onkeydown = function(){

	var comment = document.getElementById('cajaposteos').value;
	//rescatamos de la primera funcion y sacamos la longitud del msj

	var long = comment.length;
	var counter = document.getElementById('counter-characteres');

	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --> </span>' + long + '<span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';

};