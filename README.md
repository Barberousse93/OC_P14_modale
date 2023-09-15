# La fenêtre modale ultime... Si, si !

Composant [REACT](https://react.dev/blog/2023/03/16/introducing-react-dev) développé dans le cadre du parcours de formation [OpenClassRooms](https://openclassrooms.com/fr/) "Développeur Front-End - Javacsript REACT"

## Fonctionnalités

Afficher une fenètre modale contenant un message d'information à destination de l'utilisateur.

Une fenêtre modale est, dans une interface graphique, une fenêtre qui prend le contrôle total du clavier et de l'écran. Elle est en général associée à un message d'informaiton, une question à laquelle il est impératif que l'utilisateur réponde avant de poursuivre, ou de modifier quoi que ce soit. (Source : [Wikipedia](https://fr.wikipedia.org/wiki/Fen%C3%AAtre_modale))

## Pré-requis

- Node.js v18.12.0
- Npm 9.6.7
- React 18.2.0
- Styled_components 6.0.8

## Technologies utilisées

- [HTML 5](https://developer.mozilla.org/fr/docs/Glossary/HTML5)
- [CSS 3](https://developer.mozilla.org/fr/docs/Web/CSS)
- Javascript ES6
- [REACT 18.2.0](https://react.dev/blog/2023/03/16/introducing-react-dev)

## Installation sur Visual Studio Code

Dans un terminal :

```
npm i modale_by_barberousse
```

ou

```
yarn add modale_by_barberousse
```

## Utilisation

### Dans la fonction du composant appelant la fenêtre modale :

Importer le composant 'Modal' :

```javascript
import Modal from "modale_by_barberousse"
```

Dans la fonction par elle-même, initialiser le state gérant l'état de la fenêtre modale :

```jsx
const [isOpen, setIsOpen] = useState(false)
```

Dans le bloc `return`, insérer la ligne suivante (configuration minimale) :

```jsx
{
  isOpen && <Modal setIsOpen={setIsOpen} />
}
```

Dans les props de l'élement déclencheur, par exemple, un bouton `"Open Modal"` :

```html
<button onClick={() => setIsOpen(true)}>Open Modal</button>
```

## Les props

La fenêtre modale est fournie avec un CSS par défaut mais il est possible de modifier certains paramètres pour adapter le composant à vos besoins :

| Paramètre   | Action sur                      | Format                                         | Valeur par défaut    |
| ----------- | ------------------------------- | ---------------------------------------------- | -------------------- |
| text        | Texte affiché dans la modale    | string                                         | 'Texte de la modale' |
| textColor   | Couleur du texte de la modale   | '#00f' ou 'blue' ou 'rgb(0,0,255)              | '#000'               |
| textSize    | Taille du texte de la modale    | toutes les unités de fontSize (em, rem, px...) | '3rem'               |
| buttonColor | Couleur du bouton de fermenture | '#00f' ou 'blue' ou 'rgb(0,0,255)              | '#f00'               |
| modalWidth  | Largeur de la modale            | pixel ou pourcentage                           | '50%'                |
| modalHeight | Hauteur de la modale            | pixel uniquement                               | '200px'              |
| modalBG     | Couleur du fond de la modale    | '#00f' ou 'blue' ou 'rgb(0,0,255)              | '#fff'               |

Pour une modale rouge opaque à 80%, faisant 50% de la largeur de l'écran, 300px de hauteur avec le message "Le texte de la Modale" en bleu avec une taille de 2.5em et un bouton de fermeture gris, on aura :

```jsx
{
  isOpen && (
    <Modal
      setIsOpen={setIsOpen}
      buttonColor="gray"
      modalWidth="50%"
      modalHeight="300px"
      modalBG="rgb(255,0,0,0,0.8)"
      text="Le texte de la Modale"
      textColor="blue"
      textSize="2.5em"
    />
  )
}
```

Si un des paramètres ci-dessus n'est pas transmis , la valeur par défaut sera appliquée.

### Pour fermer la modale :

- Clic sur le bouton 'X'
- Clic sur le fond de l'écran
- Touche 'Escape'

## Assistance

Sans objet.

## License

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
