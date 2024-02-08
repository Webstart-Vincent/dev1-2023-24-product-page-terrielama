// class^=" pour  selectionner les classes commencant par "product__thumb-" 
/**@type {Nodelistof<HTMLImageElement>} */
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')

const productDiv = document.querySelector('.product')


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

