import { pageMode } from "./utils/pageMode.js";

// Initialisation du mode de page
// console.log('Mode de page actuel:', pageMode);

// Fonction pour appliquer les styles selon le mode
function applyPageMode(mode) {
    
    switch(mode) {
        case 'print':
            document.body.classList.add('print');
            break;
        case 'layout':
            document.body.classList.add('layout');
            break;
        case 'print&layout':
            document.body.classList.add('print-layout');
            break;
        case 'screen&layout':
            document.body.classList.add('screen-layout');
            break;
    }
}



async function main() {
	applyPageMode(pageMode);
}

main();

