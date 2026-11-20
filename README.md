# Réseau Tous pour Attécoubé · site web

Site vitrine du **Réseau Tous pour Attécoubé** : *Unis · Engagés · Solidaires · Pour Attécoubé*.

## Contenu

- **Le Réseau** : présentation, référent politique, coordonnateur général et chronologie 2019 – 2026
- **Bilan politique 2019 – 2025** : résultats des 5 scrutins, implantation sur les deux rives, mobilisation contre l'abstention, programme en 7 axes
- **Bilan social** : jeunes, femmes, assistance aux familles, huit mois de réforme
- **Conclave du 14 novembre 2026** : affiche, thème, vidéo et galerie photo (photos : @bou pro)
- **Horizon 2030** : les 3 piliers, les forces vives, le parcours de formation des leaders, les défis
- **Documents** : présentations PDF et affiche à télécharger

## Structure

```
index.html          page unique
css/style.css       styles (responsive)
js/main.js          menu mobile, animations, visionneuse photos
assets/img/         logo, affiche, galerie
assets/video/       vidéo du conclave (MP4)
assets/docs/        présentations PDF
```

Site 100 % statique, sans étape de compilation.

## Voir le site en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne avec GitHub Pages

Dans le dépôt GitHub : **Settings → Pages → Source : Deploy from a branch**, choisir la branche et le dossier `/ (root)`.
Le site sera publié à l'adresse `https://<compte>.github.io/<dépôt>/`.

> Attention : une fois publié, le site et les PDF (qui contiennent des chiffres d'implantation par lieu de vote) sont accessibles à tous.
