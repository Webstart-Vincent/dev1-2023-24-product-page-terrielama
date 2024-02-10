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
// La propriété classList est utilisée pour représenter la valeur des éléments de classe qui est un objet DOMTokenList .
// DOMContentLoaded, qui se déclenche lorsque le document HTML a été complètement chargé
document.addEventListener('DOMContentLoaded', function () {
  
    swatches.forEach((button) => {
      button.addEventListener('click', function () {
        swatches.forEach((btn) => btn.classList.remove('selected'));
        this.classList.add('selected');

        
        switch (true) {
//  contains est une méthode de l'objet classList. Elle est utilisée pour vérifier si une classe particulière est présente dans la liste des classes de l'élément HTML.
            case this.classList.contains('btn-red'):
                // forEach permet d'exécuter une fonction pour chaque élément.
              productThumbs.forEach((thumb) => {
// currentImageSrc : constante appelée en extrayant la propriété src de l'objet thumb
                const currentImageSrc = thumb.src;

// remplacer dans le chemin de l'image toutes les occurrences de 'nike-pegasus-"couleur"' par 'nike-pegasus-"autre couleur"'
                const newImageSrc = currentImageSrc.replace('nike-pegasus-green', 'nike-pegasus-red');
                thumb.src = newImageSrc;
              });
              break;
             }

             switch (true) {
// La méthode contain() est utilisée pour vérifier si la classe spécifiée existe dans les classes CSS et par rapport à elle, elle renvoie la valeur booléenne comme vraie ou fausse.
                case this.classList.contains('btn-red'):
                  productThumbs.forEach((thumb) => {
                    const currentImageSrc = thumb.src;
                    const newImageSrc = currentImageSrc.replace('nike-pegasus-purple', 'nike-pegasus-red');
                    
                    thumb.src = newImageSrc;
                  });
                  break;
                 }


             switch (true) {
                case this.classList.contains('btn-purple'):
                  productThumbs.forEach((thumb) => {
                    const currentImageSrc = thumb.src;
                    const newImageSrc = currentImageSrc.replace('nike-pegasus-red', 'nike-pegasus-purple');
                    
                    thumb.src = newImageSrc;
                  });
                  break;
                 }

                 switch (true) {
                    case this.classList.contains('btn-purple'):
                      productThumbs.forEach((thumb) => {
                        const currentImageSrc = thumb.src;
                        const newImageSrc = currentImageSrc.replace('nike-pegasus-green', 'nike-pegasus-purple');
                        
                        thumb.src = newImageSrc;
                      });
                      break;
                     }

                 switch (true) {
                    case this.classList.contains('btn-green'):
                      productThumbs.forEach((thumb) => {
                        const currentImageSrc = thumb.src;
                        const newImageSrc = currentImageSrc.replace('nike-pegasus-purple', 'nike-pegasus-green');
                        
                        thumb.src = newImageSrc;
                      });
                      break;
                     }

                     
                 switch (true) {
                    case this.classList.contains('btn-green'):
                      productThumbs.forEach((thumb) => {
                        const currentImageSrc = thumb.src;
                        const newImageSrc = currentImageSrc.replace('nike-pegasus-red', 'nike-pegasus-green');
                        
                        thumb.src = newImageSrc;
                      });
                      break;
                     }
        });
      });
    });


