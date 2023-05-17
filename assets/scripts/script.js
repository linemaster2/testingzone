let counter = 0; let Title = 'Testing zone'; let direction = true;
aniTitle = setInterval(function () {
    if (counter == Title.length) direction = false;
    if (counter == false) direction = true;
    counter = (direction == true) ? ++counter : --counter;
    newtitle = (counter == 0) ? "" : Title.slice(0, counter);
    document.title =  '' + newtitle;
}, 400)


fetch('https://raw.githubusercontent.com/linemaster2/testingzone/main/announcement.txt')
  .then(response => response.text())
  .then(text => {
    document.getElementById('announcement').textContent = text;
  })
  .catch(error => {
    console.error('Error:', error);
  });