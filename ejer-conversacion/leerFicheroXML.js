function gestionarFicheroXML(xmlDoc){
	alert(xmlDoc)
	let capaVacia = document.querySelector("#ficheroXML")
	let P1 = xmlDoc.querySelectorAll("persona1")
	let P2 = xmlDoc.querySelectorAll("persona2")

	for(let i=0; i<P1.length; i++)
		{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='persona1'>" + P1[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='persona2'>" + P2[i].textContent + "</p>"
		}
        alert("recargo")
}
function CargarFichero()
{
        loadDocA("conversacion.xml","xml")
}
    setInterval(CargarFichero,7000)
