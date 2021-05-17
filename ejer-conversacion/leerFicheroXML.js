function gestionarFicheroXML(xmlDoc){
	alert(xmlDoc)
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++)
		if (i == 2)
		{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='izquierda'>" + libros[i].textContent + "</p>"
		}
		else
		{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='derecha'>" + libros[i].textContent + "</p>"

		}
        alert("recargo")
        loadDocA("conver.xml","xml");

}
    setInterval(CargarFichero,2000);