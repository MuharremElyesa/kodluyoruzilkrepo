let Isim = prompt()
document.getElementById('myName').innerHTML = Isim

function showTime() {
	let date = new Date().toLocaleString('tr-TR')
    document.getElementById("myClock").innerHTML = date.substr(11)

    let gun = new Date();
	switch(gun.getDay()){
		case 0:
			document.getElementById("myClock").innerHTML += " Pazar"
			break;
		case 1:
			document.getElementById("myClock").innerHTML += " Pazartesi"
			break;
		case 2:
			document.getElementById("myClock").innerHTML += " Salı"
			break;
		case 3:
			document.getElementById("myClock").innerHTML += " Çarşamba"
			break;
		case 4:
			document.getElementById("myClock").innerHTML += " Perşembe"
			break;
		case 5:
			document.getElementById("myClock").innerHTML += " Cuma"
			break;
		case 6:
			document.getElementById("myClock").innerHTML += " Cumartesi"
			break;
		default:
			document.getElementById("myClock").innerHTML += " Tanımsız Gün"
			break;
	}
}
setInterval(showTime, 1000)

