document.querySelector('.button-primary').addEventListener('click', () => {
	let chosenCity = document.querySelector('select').value;
	document.querySelector('.weather-table').style.display = "block";	

	//Making request to openweathermap api. APi id = 5b0df5fc5d2de741b0e218c105505d44
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=5b0df5fc5d2de741b0e218c105505d44`)
	.then(function (resp){
		return resp.json()	//return json data string
	})
	.then(function (data){
		console.log(data);	//Filling data to html
		document.querySelector('.city-name').textContent = `City:  ${data.name}`;
		document.querySelector('.temperature').innerHTML = `Temperature: ${Math.round(data.main.temp - 273) + '&deg;'}C`;
		document.querySelector('.pressure').textContent = `Pressure:  ${data.main.pressure * 0.75} mm Hg`;
		document.querySelector('.description').innerHTML = `Sky: ${data.weather[0]['description']}`;
		document.querySelector('.weather-logo').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	})
	.catch(function() {
		console.log('Error!')
	});	
});



