/*
 * Script minimal pour gérer l’ouverture et la fermeture des blocs de services.
 * Lorsqu’un utilisateur clique sur un titre de service, la description
 * associée s’affiche ou se masque. Vous pouvez enrichir ce script pour
 * ajouter des animations ou un comportement plus avancé.
 */

function toggle(id) {
  const el = document.getElementById(id);
  if (!el) return;
  // Basculer l’affichage en fonction de l’état actuel
  if (el.style.display === 'block') {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}