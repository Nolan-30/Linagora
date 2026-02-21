// Pour aller chercher les données Strapi
async function fetchMenu() {
  try {
    const response = await fetch("http://localhost:1337/api/menus");
    const result = await response.json();

    const menuContainer = document.getElementById("menu-dynamique");

    // Boucle sur chaque donnée reçue de Strapi
    result.data.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${item.url}">${item.titre}</a>`;
      menuContainer.appendChild(li);
    });
  } catch (error) {
    console.error("Erreur de connexion au CMS :", error);
  }
}

fetchMenu();

// Nouvelle fonction pour le logo
async function fetchLogo() {
  try {
    const response = await fetch("http://localhost:1337/api/global?populate=*");
    const result = await response.json();

    const logoContainer = document.getElementById("logo-container");
    const logoData = result.data.logo;

    // On construit l'URL complète (Base Strapi + URL de l'image)
    const fullUrl = "http://localhost:1337" + logoData.url;

    logoContainer.innerHTML = `<img src="${fullUrl}" alt="Logo Linagora" height="50">`;
  } catch (error) {
    console.error("Erreur logo :", error);
  }
}

// Appeler la fonction au chargement
fetchLogo();
