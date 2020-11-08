function showDiv(idVanTeTonenDiv) {
	var divIdT = document.getElementById(idVanTeTonenDiv);
	divIdT.style.display = 'block';
	var nogGeenKeuze = document.getElementById("tekstbox-nogGeenKeuze");
	nogGeenKeuze.style.display = 'none';


	var tekstboxHavo1 = document.getElementById("tekstbox-havo1");
	var tekstboxHavo2 = document.getElementById("tekstbox-havo2");
	var tekstboxHavo3 = document.getElementById("tekstbox-havo3");
	var tekstboxHavo4 = document.getElementById("tekstbox-havo4");
	var tekstboxHavo5 = document.getElementById("tekstbox-havo5");

	if (divIdT.id != tekstboxHavo1.id) {
		tekstboxHavo1.style.display = 'none';
	} 
	if (divIdT.id != tekstboxHavo2) {
		tekstboxHavo2.style.display = 'none';
	}
	if (divIdT.id != tekstboxHavo3) {
		tekstboxHavo3.style.display = 'none';
	} 
	if (divIdT.id != tekstboxHavo4) {
		tekstboxHavo4.style.display = 'none';
	} 
	if (divIdT.id != tekstboxHavo5) {
		tekstboxHavo5.style.display = 'none';
	}
};