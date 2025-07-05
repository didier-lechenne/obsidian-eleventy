// Fonction pour obtenir les paramètres de l'URL
export function getUrlParams() {
    return new URLSearchParams(window.location.search);
}

// Fonction pour déterminer le mode de la page
export function getPageMode() {
    const params = getUrlParams();

    if (params.has('print') && params.has('layout')) {
        return 'printLayout';
    } else if (params.has('screen') && params.has('layout')) { // ← MANQUANT
        return 'screenLayout';
    } else if (params.has('print')) {
        return 'print';
    } else if (params.has('layout')) {
        return 'layout';
    } else if (params.has('screen')) {
        return 'screen';
    } else {
        return 'printLayout';
    }
}

// Exporter la fonction pour utilisation dans d'autres modules
export const pageMode = getPageMode();


