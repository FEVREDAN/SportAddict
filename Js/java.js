const IdeeActivite = document.querySelector('#IdeeActivite')
const LesPlusPopulaires = document.querySelector('#LesPlusPopulaires')
const LesEvenementsAvenir = document.querySelector('#LesEvenementsAvenir')
const select = document.querySelector('.select')


select.addEventListener('change', () => {
   var value = select.value
   switch (value) {
      case "IdeeActivite":
         // console.log(value)
         IdeeActivite.style.display ="flex"
         LesPlusPopulaires.style.display ="none"
         LesEvenementsAvenir.style.display ="none"
         break;
      case "LesPlusPopulaires":
         // console.log(value)
         IdeeActivite.style.display ="none"
         LesPlusPopulaires.style.display ="flex"
         LesEvenementsAvenir.style.display ="none"
         break;
      case "LesEvenementsAvenir":
         // console.log(value)
         IdeeActivite.style.display ="none"
         LesPlusPopulaires.style.display ="none"
         LesEvenementsAvenir.style.display ="flex"
         break;
      default:
         // console.log("default")
         IdeeActivite.style.display ="flex"
         LesPlusPopulaires.style.display ="flex"
         LesEvenementsAvenir.style.display ="flex"
         break;
   }
})



// Récupération des vignettes (sous forme de tableau)
const eleImage = document.querySelectorAll(".eleImage");
// Récupération des images (sous forme de tableau)
const elemImage2 = document.querySelectorAll(".ShowImage");

// On exécute sur toutes les vignettes le même code : (foreach parcourt le tableau de eleImage)
eleImage.forEach((element) => {
  element.addEventListener("click", (e) => {
    // On récupère le parent de l'endroit où l'on click (donc la vignette)
    var element = e.target.parentNode;
    // On test si le click a lieu sur la 2nd div de la vignette
    if (element.classList.contains("contain")) {
      //  Si c'est le cas alors on récupère le parent du parent (donc la vignette : a > div > vignette)
      element = e.target.parentNode.parentNode;
      //  Si ce n'est pas le cas, element vaut toujours le premier parent de l'élément cliqué
    } else if (element.classList[1] === undefined) {
      //  Cette condition s'effectue si l'élément cliqué est la div globale 'vignettes', si c'est le cas elle arrête la fonction.
      return false;
    }
    // On cherche ensuite sur la page l'élément qui a l'id qui correspond à la classe de la vignette
    var element = document.querySelector("#" + element.classList[1]);

    // On créer une boucle qui fait le tour de toutes les images déjà cachées. Cela pour initialiser la classe hidden pour éviter des problèmes.
    for (let i = 0; i < elemImage2.length; i++) {
      //  On ajout donc à toutes les images la classe 'hidden'
      elemImage2[i].classList.add("hidden");
    }

    // Ensuite on redirige l'utilisateur avec un href vers la photo
    window.location.replace("#" + element.id);
    //   On enlève ensuite la classe hidden ce qui fait apparaître la div
    element.classList.remove("hidden");
    document.querySelectorAll(".vignettes").forEach((element) => {
      element.style.display = "none";
    });
  });
});





















// IdeeActivite.style.display ="none"







/*const btn = document.querySelector('#btn')
const img = document.getElementById('img')

btn.addEventListener('click', () => {
   img.classList.toggle('show')
})
  
const btn2 = document.querySelector('#btn2')
const img2 = document.getElementById('img2')

btn2.addEventListener('click', () => {
   img2.classList.toggle('show')
})
export function URL_CONDITION() {
   if (GetUrlClassParam === "Idée d'activité") {
     URL_GET_IDEE();
   } else if (GetUrlClassParam === "Les plus populaires") {
     URL_GET_POPULAIRE();
   } else if (GetUrlClassParam === "Les événements à venir") {
     URL_GET_A_VENIR();
   }
}
 
export function URL_GET_IDEE() {
   document.querySelector("title").innerHTML = "Idée d'activité";
}
const myParam = urlParams.get('var');

const ballon = data.find(x => x._id === myParam)
*/
