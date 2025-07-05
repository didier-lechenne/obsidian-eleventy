import { pageMode } from "./utils/pageMode.js";

// Initialisation du mode de page
// console.log('Mode de page actuel:', pageMode);

// Fonction pour appliquer les styles selon le mode
function applyPageMode(mode) {
 
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = `/assets/modes/${mode}.css`;
    document.head.appendChild(cssLink);

    const script = document.createElement('script');
    script.type = 'module'; // ou sans pour JS classique
    script.src = `/assets/modes/${mode}.js`;
    script.onload = () => console.log(`Mode ${mode} chargé`);
    script.onerror = () => console.error(`Erreur chargement mode ${mode}`);
    document.head.appendChild(script);
}



async function main() {
	applyPageMode(pageMode);
}

main();

