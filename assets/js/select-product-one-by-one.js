//Accèder aux éléments HTML nécessaires
//Si je fais  "document." j'ai accès a toute les propriétés de document


//Accèder au productMain
/**@type {HTMLImageElement}*/
const productMain =  document.querySelector('.product__main')

// Accèder au product avec le filtre
/**@type {HTMLImageElement}*/
const productDiv =  document.querySelector('.product')

//Accèder au productThumb1
/**@type {HTMLImageElement}*/
const productThumb1 = document.querySelector('.product__thumb-1')

//Accèder au productThumb2
/**@type {HTMLImageElement}*/
const productThumb2 = document.querySelector('.product__thumb-2')

//Accèder au productThumb3
/**@type {HTMLImageElement}*/
const productThumb3 = document.querySelector('.product__thumb-3')

//Accèder au productThumb4
/**@type {HTMLImageElement}*/
const productThumb4 = document.querySelector('.product__thumb-4')
// ---------------------------------------------------------------

//Traiter le clic sur l'image :

//Quand je clique sur une image  l'image principale prend le src de l'image 2

//=> fonction fléchée (différente façon d'écrire une fonction)
productThumb1.addEventListener('click',() => {
    productMain.src = productThumb1.src
    productDiv.className = 'product active-1'
})

productThumb2.addEventListener('click',() => {
productMain.src = productThumb2.src
productDiv.className = 'product active-2'
})

productThumb3.addEventListener('click',() => {
    productMain.src = productThumb3.src
    productDiv.className = 'product active-3'
})

productThumb4.addEventListener('click',() => {
    productMain.src = productThumb4.src
    productDiv.className = 'product active-4'
})

// ----------------------------------



