
# 🌐 Linagora Training - Menu & Logo Dynamique
Ce projet est un exercice pratique consistant à lier une interface Frontend à un CMS Headless (Strapi) pour rendre le contenu du site entièrement administrable sans toucher au code. 🛠️

## 🚀 Fonctionnalités
Menu Dynamique : Les liens de navigation sont récupérés via l'API Strapi. 🔗

Logo Administrable : Le logo "Linagora" est géré comme un média dans le CMS. 🖼️

Architecture Découplée : Séparation nette entre la gestion des données (Backend) et l'affichage (Frontend). 🏗️

🛠️ Stack Technique
Frontend : HTML, CSS JavaScript Vanilla (Fetch API). 💻

Backend : Strapi (CMS Headless). 💾

API : REST avec gestion des permissions et du peuplement de données (populate). 📡

## 📖 Comment ça marche ?
Le Backend expose les données sur http://localhost:1337/api/. 🔌

Le JavaScript utilise fetch() pour interroger ces points d'entrée (endpoints). 📥

Le DOM est mis à jour dynamiquement pour injecter le menu et le logo. ⚡

## ⚙️ Installation & Configuration
Pour faire fonctionner ce projet localement, suivez ces étapes :

1. Cloner le projet 📥
git clone https://github.com/Nolan-30/Linagora.git
cd Linagora

2. Configurer le Backend (Strapi) 🏗️
Allez dans le dossier : cd mon-backend.
Installez les dépendances : npm install.
Lancez le serveur : npm run develop.

Configuration manuelle :
Créez un Collection Type nommé Menu avec les champs titre et url.
Créez un Single Type nommé Global avec un champ Media nommé logo.
Dans Settings > Roles > Public, cochez find pour Menu et Global.

3. Lancer le Frontend 🌐
Ouvrez simplement le fichier index.html dans votre navigateur.
Vérifiez que le serveur Strapi tourne bien sur "http://localhost:1337" pour que les données s'affichent.
