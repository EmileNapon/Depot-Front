// Fonction pour afficher les offres par type
function filterOffers(type) {
    // Récupérer toutes les offres
    var offers = document.querySelectorAll('.offer-item');
    
    // Parcourir chaque offre
    offers.forEach(function(offer) {
        // Masquer toutes les offres
        offer.style.display = 'none';
        
        // Afficher uniquement les offres du type sélectionné
        if (offer.classList.contains(type)) {
            offer.style.display = 'block';
        }
    });
}

// Fonction pour afficher ou masquer la description
function toggleDescription(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === 'none') {
        desc.style.display = 'block';
    } else {
        desc.style.display = 'none';
    }
}

// Ajouter des événements de clic aux boutons
document.getElementById('stage-btn').addEventListener('click', function() {
    filterOffers('stage');
});

document.getElementById('emploi-btn').addEventListener('click', function() {
    filterOffers('emploi');
});

document.getElementById('capacitation-btn').addEventListener('click', function() {
    filterOffers('capacitation');
});

// Optionnel : afficher toutes les offres par défaut au chargement
window.onload = function() {
    filterOffers('stage'); // Par exemple, afficher les stages au chargement
};
