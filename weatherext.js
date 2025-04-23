// first create a folder
// open command prompt (terminal) and navigate to that folder
// run the following commands
// npm init -y
// save the following code in a file named app.js
// run the following command to start the server
// node app.js


// app.js
const http = require('http');
const url = require('url');
const fs = require('fs');
const renderEJS = (templateName, data, res) => {
  fs.readFile(`views/${templateName}.ejs`, 'utf8', (err, template) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }
    const rendered = template.replace(/<%= (\w+) %>/g, (_, key) => data[key] || '');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(rendered);
  });
};
const fetchWeather = (city, callback) => {
  const key = '77003d306b25e391aca3f6d95268b3ed';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  http.get(apiUrl, (apiRes) => {
    let data = '';
    apiRes.on('data', chunk => {
      data += chunk;
    });
    apiRes.on('end', () => {
      callback(null, JSON.parse(data));
    });
  }).on('error', (err) => {
    callback(err);
  });
};
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    renderEJS('home', {}, res);
  } else if (parsedUrl.pathname === '/weather' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const city = new URLSearchParams(body).get('city');
      // fetchWeather(city, (err, weatherData) => {
      //   if (err || !weatherData) {
      //     res.writeHead(404, { 'Content-Type': 'text/html' });
      //     res.end('City not found');
      //   } else {
          renderEJS('weather', {
            city: city,
            temp: "30 celcius",
            humidity: "40%",
            condition: "cloudy"
          }, res);
        // }
      // });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

// Start server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// create a folder with name views and create the following files in that folder:

// home.ejs
<form action="/weather" method="POST">
  <input type="text" name="city" placeholder="Enter city">
  <button type="submit">Get Weather</button>
</form>


// weather.ejs
<h2>Weather in <%= city %></h2>
<p>Temperature: 30 C</p>
<p>Humidity: 40 %</p>
<p>Condition: cloudy</p>


// access the app at: http://localhost:3000
