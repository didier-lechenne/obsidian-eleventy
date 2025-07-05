import { pageMode } from "./utils/pageMode.js";

// Initialisation du mode de page
// console.log('Mode de page actuel:', pageMode);

// Fonction pour appliquer les styles selon le mode
function applyPageMode(mode) {
    let filename;
    switch(mode) {
        case 'print':
            filename = 'print.js';
            break;
        case 'layout':
            filename = 'layout.js';
            break;
        case 'print&layout':
             filename = 'printLayout.js';
            break;
        case 'screen&layout':
            filename = 'screenLayout.js';
            break;
        default:
            filename = 'printLayout.js';
    }

    fetch(`/assets/modes/${filename}`)
        .then(response => response.text())
        .then(js => {
            const script = document.createElement('script');
            script.textContent = js;
            document.head.appendChild(script);
        })
        .catch(error => console.error('Erreur chargement mode:', error));
}



async function main() {
	applyPageMode(pageMode);
}

main();

