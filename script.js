fetch('config.json')
  .then(res => res.json())
  .then(config => {
    const apikey = config.key;

    const element = document.getElementById('api-key');
    element.innerText = apikey;
});