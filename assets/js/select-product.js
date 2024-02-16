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


// Cet événement se déclenche lorsque le document HTML a été complètement chargé. C'est le point de départ de l'exécution du script JavaScript.
document.addEventListener('DOMContentLoaded', function () {

// Chaque bouton de couleur a un écouteur d'événements pour le clic.
// Lorsqu'un bouton est cliqué, il retire la classe 'selected' de tous les boutons et ajoute 'selected' au bouton actuel.
// La couleur est extraite en supprimant la partie 'btn-' du nom de classe du bouton.
  swatches.forEach((button) => {
    button.addEventListener('click', function () {
      swatches.forEach((btn) => btn.classList.remove('selected'));
      this.classList.add('selected');

      // this.classList[0] :
// this fait référence à l'élément sur lequel l'événement a été déclenché, soit le bouton dans ce cas.
// classList est une propriété qui renvoie un objet DOMTokenList représentant la liste des classes de l'élément.
// [0] récupère la première classe de la liste des classes du bouton.


    // replace('btn-', '') :
// replace est une méthode des chaînes de caractères en JavaScript.
// Elle prend deux arguments : le premier est la sous-chaîne à rechercher, et le second est la sous-chaîne de remplacement.
// Dans ce cas, elle remplace la sous-chaîne 'btn-' par une chaîne vide (''), c'est-à-dire qu'elle supprime 'btn-' de la classe.
      const color = this.classList[0].replace('btn-', '');

// invocation de fonction, où color est un argument passé à la fonction. Cela suggère qu'il existe une fonction appelée updateImagesAndClasses et cette fonction prend un paramètre la couleur.
      updateImagesAndClasses(color);
    });
  });

// Cette fonction prend la nouvelle couleur comme argument.
// Elle met à jour les images des vignettes en remplaçant la couleur actuelle par la nouvelle couleur dans le chemin de l'image.
// Elle fait de même pour l'image principale du produit.
// elle met à jour la classe de la div productDiv pour refléter la nouvelle couleur.
  function updateImagesAndClasses(newColor) {
    productThumbs.forEach((thumb) => {
      const currentImageSrc = thumb.src;
      const newImageSrc = currentImageSrc.replace(/nike-pegasus-(\w+)-(\d+)\.jpg/, `nike-pegasus-${newColor}-$2.jpg`);
      thumb.src = newImageSrc;
    });

    
// productMainImg:  une variable qui référence un élément HTML, une image (<img>). Cette variable est définie avec const productMainImg = document.querySelector('.product__main');.
//  Elle représente l'élément principal de l'image dans votre page.
// .src:une propriété de l'élément image (<img>) qui contient l'URL/source de l'image actuellement chargée.productMainImg.src donne l'URL de l'image que l'élément image affiche actuellement.
//const currentMainImageSrc une déclaration de variable utilisant const pour créer une nouvelle variable nommée currentMainImageSrc. Cette variable stocke la valeur de l'URL/source de l'image actuellement chargée dans l'élément productMainImg.
    const currentMainImageSrc = productMainImg.src;
    const newMainImageSrc = currentMainImageSrc.replace(/nike-pegasus-(\w+)-01\.jpg/, `nike-pegasus-${newColor}-01.jpg`);
    productMainImg.src = newMainImageSrc;



// productDiv.className = product active-${newColor};permet de modifier la classe de l'élément DOM représenté par la variable productDiv.
// productDiv est une variable qui référence un élément du DOM dans votre page HTML, une div définie avec const productDiv = document.querySelector('.product');. Elle représente l'élément div qui contient les images du produit. 
// .className est une propriété de l'objet DOM qui représente la liste des classes de l'élément. Elle vous permet de récupérer ou de définir la valeur de l'attribut class d'un élément. 
// product active-${newColor}: C'est une chaîne de texte qui sera définie comme la nouvelle valeur de la classe de l'élément productDiv. Cette chaîne utilise l'interpolation de modèle pour incorporer la valeur de la variable newColor dans la chaîne. Le résultat sera quelque chose comme product active-red, product active-purple, etc.
    productDiv.className = `product active-${newColor}`;
  }
});
