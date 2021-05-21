function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#cine")
    capaVacia.innerHTML =""
	let cine = xmlDoc.querySelectorAll("cine")
	for(let i=0; i<cine.length; i++)
		if (i == 2)
		{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='exa'>" + cine[i].textContent + "</p>"
		}
}
function CargarFichero()
{
        loadDocA("cine.xml","xml")
}
    setInterval(CargarFichero,5000)
