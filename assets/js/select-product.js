// class^=" pour  selectionner les classes commencant par "product__thumb-" 
/**@type {Nodelistof<HTMLImageElement>} */
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')
const productDiv = document.querySelector('.product')
const swatches = document.querySelectorAll('.swatches button');

/**@type {HTMLImageElement}*/
const productMainImg = document.querySelector('.product__main')

//boucle :
//1. Ajouter un event handler/listner sur le click du productThumb
//2. Recupérer le src du productThumb
//3.Donner au src de la productDiv

// fonction dans une fonction --> call back = code asynchrone (qui s'execute plus tard)

productThumbs.forEach((productThumb,index) => {
//ajouter un event handler sur le click du productThumb
    productThumb.addEventListener('click' , () =>{
        const src = productThumb.src
//donner src en valeur au src de productMainImg
        productMainImg.src=src

        //donner au className de la div productDiv
        productDiv.className = `product active-${index + 1}`
    })
});

// ---------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  swatches.forEach((button) => {
    button.addEventListener('click', function () {
      swatches.forEach((btn) => btn.classList.remove('selected'));
      this.classList.add('selected');

// this fait référence à l'élément DOM sur lequel l'événement de clic a été déclenché, c'est-à-dire le bouton.
// dataset est un objet qui représente tous les attributs de données (data-*) de l'élément. L'attribut data-color est alors extrait en utilisant dataset.color.
      const color = this.dataset.color;


// productThumbs, qui représente toutes les images des miniatures du produit.
// productThumbs.forEach((thumb) => { ... }); : Cela signifie que pour chaque élément thumb dans productThumbs, le code à l'intérieur des accolades sera exécuté.
// const currentImageSrc = thumb.src; : Cette ligne extrait la source (l'URL) de l'image actuellement pointée par l'itération de la boucle et la stocke dans la variable currentImageSrc.
// let newColor; : Cette ligne déclare une variable newColor en utilisant le mot-clé let, qui sera utilisée pour stocker la nouvelle couleur à appliquer à l'image. Cependant, à ce stade, la variable n'a pas encore de valeur.
      productThumbs.forEach((thumb) => {
        const currentImageSrc = thumb.src;
        let newColor;

        switch (color) {
          case 'red':
            newColor = 'red';
            break;
          case 'purple':
            newColor = 'purple';
            break;
          case 'green':
            newColor = 'green';
            break;
          default:
            newColor = 'green'; // Couleur par défaut
        }

// const newImageSrc = currentImageSrc.replace(nike-pegasus-${color}, nike-pegasus-${newColor}); : Dans cette ligne, la méthode replace() est utilisée pour effectuer le remplacement de texte dans la chaîne currentImageSrc. La partie à remplacer est déterminée par l'expression  ${color}, où ${color} est la couleur actuelle extraite des données de l'élément sur lequel l'itération de la boucle est en cours.
// Cette partie du chemin de l'image est remplacée par la nouvelle couleur, représentée par ${newColor}. Ainsi, cette ligne crée un nouveau chemin d'image avec la couleur mise à jour.
// thumb.src = newImageSrc; : Cette ligne met à jour la propriété src de l'élément de l'image (thumb) avec le nouveau chemin d'image. elle applique le chemin d'image modifié à l'image miniature, changeant ainsi dynamiquement la couleur de la miniature en fonction de l'interaction de l'utilisateur.
        const newImageSrc = currentImageSrc.replace(`nike-pegasus-${color}`, `nike-pegasus-${newColor}`);
        thumb.src = newImageSrc;
      });

      //  l'image principale du produit.
// const currentMainImageSrc = productMainImg.src; : Cela récupère le chemin actuel de l'image principale du produit en le stockant dans la variable currentMainImageSrc.
// const newMainImageSrc = currentMainImageSrc.replace(nike-pegasus-${currentColor}, nike-pegasus-${color}); : La méthode replace() est utilisée pour effectuer le remplacement de texte dans la chaîne currentMainImageSrc. La partie à remplacer est déterminée par l'expression régulière ${currentColor}, où ${currentColor} est la couleur actuelle de l'image principale, stockée précédemment. Cette partie du chemin de l'image principale est remplacée par la nouvelle couleur, représentée par ${color}. cette ligne crée un nouveau chemin d'image pour l'image principale avec la couleur choisi.
// productMainImg.src = newMainImageSrc; : Cette ligne met à jour la propriété src de l'élément de l'image principale (productMainImg) avec le nouveau chemin d'image. elle applique le chemin d'image modifié à l'image principale, changeant ainsi dynamiquement la couleur de l'image principale en fonction de l'interaction de l'utilisateur.
      const currentMainImageSrc = productMainImg.src;
      const newMainImageSrc = currentMainImageSrc.replace(`nike-pegasus-${currentColor}`, `nike-pegasus-${color}`);
      productMainImg.src = newMainImageSrc;

      // productDiv.className = `product active-${color}`; : Ici, la propriété className de l'objet productDiv est modifiée. La nouvelle valeur de la classe est définie à l'aide d'une chaîne de texte dynamique générée à l'aide d'interpolation. La classe mise à jour est composée de deux parties 
// 'product' est classe statique qui est utilisée pour définir les styles de base communs à tous les produits.
// active-${color} : C'est une classe dynamique qui dépend de la couleur actuelle sélectionnée par l'utilisateur. Elle est générée en fonction de la couleur choisie (color). Ainsi, cette partie de la classe varie dynamiquement en fonction de la couleur sélectionnée, permettant ainsi de styliser différemment les produits en fonction de leur couleur.
      productDiv.className = `product active-${color}`;
    });
  });
});
