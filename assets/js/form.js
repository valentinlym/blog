document.addEventListener("DOMContentLoaded", function () {
    const formulaire = document.getElementById("sumitForm");
    if (formulaire != null) {
        const champsObligatoires = Array.from(
            formulaire.querySelectorAll("[required]")
        );
        const btnSoumettre = document.getElementById("btnSoumettre");
        formulaire.addEventListener("input", function () {
            // Vérifie si tous les champs obligatoires sont remplis
            const champsValides = champsObligatoires.every(
                (champ) => champ.value.trim() !== ""
            );

            // Active ou désactive le bouton en fonction de l'état des champs
            btnSoumettre.disabled = !champsValides;

            // Ajoute ou supprime la classe btn__primaire en fonction de l'état des champs
            if (champsValides) {
                btnSoumettre.classList.add("btn__primaire");
            } else {
                btnSoumettre.classList.remove("btn__primaire");
            }
        });
    }
});
