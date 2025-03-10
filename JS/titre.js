const titre = document.getElementById("title");
const sous_titre1 = document.getElementById("sous_titre1");
const sous_titre2 = document.getElementById("sous_titre2");
const sous_titre3 = document.getElementById("sous_titre3");
const sous_titre4 = document.getElementById("sous_titre4");
const sous_titre5 = document.getElementById("sous_titre5");
const sous_titre6 = document.getElementById("sous_titre6");

titre.addEventListener("mousemove", (event) => {
  // Récupérer la position du curseur dans l'élément
  const rect = titre.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Convertir en couleur RGB dynamique
  const r = Math.min(255, Math.max(0, Math.floor((x / rect.width) * 255)));
  const g = Math.min(255, Math.max(0, Math.floor((y / rect.height) * 255)));
  const b = 150; // Valeur fixe pour l'effet

  titre.style.color = `rgb(${r}, ${g}, ${b})`;
});

titre.addEventListener("mouseleave", () => {
  titre.style.color = "crimson"; // Retour à la couleur initiale
});

sous_titre1.addEventListener("mousemove", (event) => {
  // Récupérer la position du curseur dans l'élément
  const rect = sous_titre1.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Convertir en couleur RGB dynamique
  const r = Math.min(255, Math.max(0, Math.floor((x / rect.width) * 255)));
  const g = Math.min(255, Math.max(0, Math.floor((y / rect.height) * 255)));
  const b = 150; // Valeur fixe pour l'effet

  sous_titre1.style.color = `rgb(${r}, ${g}, ${b})`;
});

sous_titre1.addEventListener("mouseleave", () => {
  sous_titre1.style.color = "crimson"; // Retour à la couleur initiale
});

sous_titre2.addEventListener("mousemove", (event) => {
  // Récupérer la position du curseur dans l'élément
  const rect = sous_titre2.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Convertir en couleur RGB dynamique
  const r = Math.min(255, Math.max(0, Math.floor((x / rect.width) * 255)));
  const g = Math.min(255, Math.max(0, Math.floor((y / rect.height) * 255)));
  const b = 150; // Valeur fixe pour l'effet

  sous_titre2.style.color = `rgb(${r}, ${g}, ${b})`;
});

sous_titre2.addEventListener("mouseleave", () => {
  sous_titre2.style.color = "crimson"; // Retour à la couleur initiale
});

sous_titre3.addEventListener("mousemove", (event) => {
  // Récupérer la position du curseur dans l'élément
  const rect = sous_titre3.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Convertir en couleur RGB dynamique
  const r = Math.min(255, Math.max(0, Math.floor((x / rect.width) * 255)));
  const g = Math.min(255, Math.max(0, Math.floor((y / rect.height) * 255)));
  const b = 150; // Valeur fixe pour l'effet

  sous_titre3.style.color = `rgb(${r}, ${g}, ${b})`;
});

sous_titre3.addEventListener("mouseleave", () => {
  sous_titre3.style.color = "crimson"; // Retour à la couleur initiale
});

sous_titre4.addEventListener("mousemove", (event) => {
  // Récupérer la position du curseur dans l'élément
  const rect = sous_titre4.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Convertir en couleur RGB dynamique
  const r = Math.min(255, Math.max(0, Math.floor((x / rect.width) * 255)));
  const g = Math.min(255, Math.max(0, Math.floor((y / rect.height) * 255)));
  const b = 150; // Valeur fixe pour l'effet

  sous_titre4.style.color = `rgb(${r}, ${g}, ${b})`;
});

sous_titre4.addEventListener("mouseleave", () => {
  sous_titre4.style.color = "crimson"; // Retour à la couleur initiale
});
sous_titre5.addEventListener("mousemove", (event) => {
  // Récupérer la position du curseur dans l'élément
  const rect = sous_titre5.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Convertir en couleur RGB dynamique
  const r = Math.min(255, Math.max(0, Math.floor((x / rect.width) * 255)));
  const g = Math.min(255, Math.max(0, Math.floor((y / rect.height) * 255)));
  const b = 150; // Valeur fixe pour l'effet

  sous_titre5.style.color = `rgb(${r}, ${g}, ${b})`;
});

sous_titre5.addEventListener("mouseleave", () => {
  sous_titre5.style.color = "crimson"; // Retour à la couleur initiale
});
sous_titre6.addEventListener("mousemove", (event) => {
  // Récupérer la position du curseur dans l'élément
  const rect = sous_titre6.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Convertir en couleur RGB dynamique
  const r = Math.min(255, Math.max(0, Math.floor((x / rect.width) * 255)));
  const g = Math.min(255, Math.max(0, Math.floor((y / rect.height) * 255)));
  const b = 150; // Valeur fixe pour l'effet

  sous_titre6.style.color = `rgb(${r}, ${g}, ${b})`;
});

sous_titre6.addEventListener("mouseleave", () => {
  sous_titre6.style.color = "crimson"; // Retour à la couleur initiale
});
