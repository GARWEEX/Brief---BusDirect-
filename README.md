🚌 BusDirect — Système de Réservation de Bus
​Application web simple et interactive pour la gestion et la réservation des places de bus sur la ligne Safi ⇄ Marrakech.
​📌 Ce qui a été réalisé dans ce projet
​1. Configuration et Interface Utilisateur (UI)
​Initialisation : Configuration du projet et versioning avec GitHub.
​Mise en page : Création du Header et Footer avec barre de navigation.
​Design : Utilisation de Tailwind CSS pour un rendu moderne et responsive.
​Grille des sièges : Affichage interactif de 20 sièges répartis en deux catégories (First Place et Second Place) :
​🔵 Bleu : Siège disponible.
​🔴 Rouge : Siège réservé (avec affichage du numéro et du nom du passager).
​2. Fonctionnalités JavaScript
​Acheter une place :
​Réservation avec nom du passager et choix du siège.
​Vérification de la disponibilité (alerte si le siège est déjà occupé).
​Modifier une réservation :
​Modification du nom du passager ou changement de siège vers une place libre.
​Supprimer une réservation :
​Annulation d'une réservation et libération immédiate de la place.
​Glisser-déposer (Drag & Drop) :
​Possibilité de déplacer directement un passager d'un siège occupé vers un siège libre à la souris.
​Calcul du prix total :
​Mise à jour automatique du montant total en temps réel (80 DH par place).
​Persistance des données :
​Sauvegarde locale avec localStorage pour conserver les réservations après rechargement de la page.
​🛠️ Technologies utilisées
​HTML5 : Structure sémantique et API Drag & Drop.
​Tailwind CSS : Styles utilitaires et design responsive.
​JavaScript (Vanilla JS) : Manipulation du DOM, logique métier et localStorage.
​🚀 Lancement du projet
​Clonez ou téléchargez le projet.
​Ouvrez le fichier index.html dans votre navigateur.