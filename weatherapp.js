// first create a folder
// open command prompt (terminal) and navigate to that folder
// run the following commands
// npm init -y
// npm install express axios
// save the following code in a file named app.js
// run the following command to start the server
// node app.js


// app.js
const express = require('express');
const axios = require('axios');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.render('home'));
app.post('/weather', async (req, res) => {
  let city = req.body.city;
  let key = '77003d306b25e391aca3f6d95268b3ed';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  try {
    let r = await axios.get(url);
    let w = r.data;
    res.render('weather', {
      city: w.name,
      temp: w.main.temp,
      humidity: w.main.humidity,
      condition: w.weather[0].main
    });
  } catch {
    res.send('City not found');
  }
});
app.listen(3000, () => console.log('Server running'));

// create a folder with name views and create the following files in that folder:

// home.ejs
<form action="/weather" method="POST">
  <input type="text" name="city" placeholder="Enter city">
  <button type="submit">Get Weather</button>
</form>


// weather.ejs
<h2>Weather in <%= city %></h2>
<p>Temperature: <%= temp %>°C</p>
<p>Humidity: <%= humidity %>%</p>
<p>Condition: <%= condition %></p>


/// access the app at: http://localhost:3000
