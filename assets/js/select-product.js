// class^=" pour  selectionner les classes commencant par "product__thumb-" 
/**@type {Nodelistof<HTMLImageElement>} */
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')
const productDiv = document.querySelector('.product')
const swatches = document.querySelectorAll('.swatches button');

/**@type {HTMLImageElement}*/
//.product__main représente l'élément principal de l'image dans votre page.
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
 
//L'événement DOMContentLoaded est un événement JavaScript qui se déclenche lorsque le document HTML a été complètement chargé et analysé, sans attendre le chargement complet de tous les fichiers comme les images et le css
document.addEventListener('DOMContentLoaded', function () {
//  Une boucle forEach est utilisée pour itérer sur chaque élément dans la liste des sélecteurs de couleur (swatches). Chaque élément est représenté par la variable button.
  swatches.forEach((button) => {
// button.addEventListener('click': Pour chaque bouton (représenté par la variable button
    button.addEventListener('click', function () {
// : Avant d'ajouter la classe 'selected' au bouton actuellement cliqué,il faut utiliser un forEach pour parcourir tous les boutons de couleur et supprimer la classe 'selected' de chacun d'eux donc qu'un seul bouton à la fois aura la classe 'selected'.
      swatches.forEach((btn) => btn.classList.remove('selected'));
      this.classList.add('selected');

// this est une référence à l'élément DOM sur lequel l'événement a été déclenché le bouton sur lequel l'utilisateur a cliqué.
// classList est une propriété qui renvoie un objet DOMTokenList représentant la liste des classes de l'élément.
// classList[0] permet de récupèrer la première classe de la liste des classes du bouton. Les classes sont stockées dans l'ordre où elles ont été définies sur l'élément.
// on utilise l'indice [0] pour récupérer la première classe, [1] pour la deuxième etc
// donc classList[0] récupère la première classe de l'élément.l'indice est utilisé lorsqu'un élément a une seule classe principale 
// .replace('btn-', '')est une méthode des chaînes de caractères qui permet de remplacer une sous-chaîne (dans ce cas, 'btn-') par une autre sous-chaîne (une chaîne vide '').
      const color = this.classList[0].replace('btn-', '');


// la méthode replace permet L'expression régulière /nike-pegasus-\w+/ est utilisée pour rechercher une sous-chaîne qui correspond à nike-pegasus- suivi de n'importe quel caractère alphanumérique (représenté par \w+).çacorrespond à une partie spécifique de l'URL de l'image.
// La partie correspondante de l'URL est ensuite remplacée par une nouvelle chaîne qui utilise la valeur de la variable color. Cela signifie que chaque occurrence de 'nike-pegasus-' suivie de caractères alphanumériques dans l'URL source de chaque image est remplacée par 'nike-pegasus-' suivi de la couleur extraite du bouton cliqué.
// productThumbs permet de remplacer la partie spécifique liée à la couleur par la nouvelle couleur extraite du bouton cliqué = changement dynamique
      productThumbs.forEach((thumb) => {
        const currentImageSrc = thumb.src;
        const newImageSrc = currentImageSrc.replace(/nike-pegasus-\w+/, `nike-pegasus-${color}`);

// thumb représente un élément de la liste productThumbs, qui est un type d'image (<img>) associés à un product.
// newImageSrc est le nouv chemin de l'image après avoir appliqué les modifications nécessaires à l'URL source actuelle de l'image définie par currentImageSrc
        thumb.src = newImageSrc;
      });


// const currentMainImageSrc est une variable utilisant const pour créer une nouvelle variable nommée currentMainImageSrc. Cette variable stocke la valeur de la source/le chemin de l'image actuellement chargée dans l'élément productMainImg.
      const currentMainImageSrc = productMainImg.src;

// const newMainImageSrcest une  variable utilisant const pour créer une nouvelle variable : newMainImageSrc. Cette variable stockera la nouvelle URL/source/le chemin de l'image principale après le remplacement.
// currentMainImageSrc est la variable qui contient l'URL/le chemin actuelle de l'image principale du produit et récupérée avec const currentMainImageSrc = productMainImg.src;
// replace(/nike-pegasus-\w+/, nike-pegasus-${color}): appel à la méthode .replace qui effectue le remplacement
      const newMainImageSrc = currentMainImageSrc.replace(/nike-pegasus-\w+/, `nike-pegasus-${color}`);
      productMainImg.src = newMainImageSrc;


// productDiv contient les images du produit.
// .className est une propriété en JavaScript qui permet de récupérer ou définir la valeur de l'attribut class d'un élément HTML
// productDiv.className permet un interpolation ou ${color} est remplacé par la couleur actuelle donc productDiv permet de mettre a jour les couleurs
  productDiv.className = `product active-${color}`;
    });
  });
});
