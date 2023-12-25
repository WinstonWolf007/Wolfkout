function updateDate() {
    const today = new Date();
    const date_text = document.querySelector("sub");

    date_text.innerText = [
        today.getMonth() + 1, 
        today.getDate(),
        today.getFullYear(),
    ].join("/");
}

function configYAML() {
    const yamlUrl = 'config.yaml';

    fetch(yamlUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(yamlData => {
        const jsonData = jsyaml.load(yamlData);
        console.log(jsonData);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

window.onload = () => {
    updateDate();
    configYAML();
}