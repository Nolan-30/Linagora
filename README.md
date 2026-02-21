🌐 Linagora Training - Menu & Logo Dynamique
Ce projet est un exercice pratique consistant à lier une interface Frontend à un CMS Headless (Strapi) pour rendre le contenu du site entièrement administrable sans toucher au code. 🛠️

🚀 Fonctionnalités
Menu Dynamique : Les liens de navigation sont récupérés via l'API Strapi. 🔗

Logo Administrable : Le logo "Linagora" est géré comme un média dans le CMS. 🖼️

Architecture Découplée : Séparation nette entre la gestion des données (Backend) et l'affichage (Frontend). 🏗️

🛠️ Stack Technique
Frontend : HTML, CSS JavaScript Vanilla (Fetch API). 💻

Backend : Strapi (CMS Headless). 💾

API : REST avec gestion des permissions et du peuplement de données (populate). 📡

📖 Comment ça marche ?
Le Backend expose les données sur http://localhost:1337/api/. 🔌

Le JavaScript utilise fetch() pour interroger ces points d'entrée (endpoints). 📥

Le DOM est mis à jour dynamiquement pour injecter le menu et le logo. ⚡
