var request = new XMLHttpRequest();
var url = 'https://ipinfo.io/json';

request.open('GET', url, true);
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    var data = JSON.parse(request.responseText);
    var ipInfoElement = document.querySelector('.ip-info');
    var ipInfoHTML = '';

    // Define the properties to display
    var properties = {
      'IP': data.ip,
      'City': data.city,
      'Region': data.region,
      'Country': data.country,
      'Postal Code': data.postal,
      'Location': data.loc,
      'Timezone': data.timezone,
      'Hostname': data.hostname,
    };

    // Generate the HTML for each property
    for (var property in properties) {
      if (properties.hasOwnProperty(property)) {
        ipInfoHTML += '<p><strong>' + property + ':</strong> ' + properties[property] + '</p>';
      }
    }

    ipInfoElement.innerHTML = ipInfoHTML;
  }
};
request.send();
