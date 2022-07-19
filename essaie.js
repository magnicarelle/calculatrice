//dom
const touches = [...document.querySelectorAll('.bouton')];
const listekeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector ('.ecran');


document.addEventListener( 'keydown',(e) => {
const valeur = e.keyCode.toString();
calculer(valeur)
})

document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if (listekeycode.includes(valeur)){
        switch( valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                 const calcul = eval(ecran.textContent);
                 ecran.textContent = calcul;
                //  dernierResultat.value = calcul;
                 localStorage.setItem("dernierResultat", calcul);
                 break;
            case '69':
                const exp = Math.exp(ecran.textContent);
                ecran.textContent = exp;
                break;
            case '220' :
                const abs = Math.abs(ecran.textContent);
                ecran.textContent = abs;
                break;
            case '0' :
                const sqrt = Math.sqrt(ecran.textContent);
                ecran.textContent = sqrt;
                break;                
            case '45':
                ecran.textContent += localStorage.getItem("dernierResultat");
                // localStorage.removeItem("ecran.textContent");
                // dernierResultat.value = calcul;
                // ecran.textContent = calcul;

                // localStorage.setItem("lastname", "Smith");
                break;
            case '46' :
                const floor = Math.floor( Math.random()*9);
                ecran.textContent = floor;
                break;

                default:
               const indexKeycode = listekeycode.indexOf(valeur);
               const touche = touches[indexKeycode];
               ecran.textContent += touche.innerHTML;
        }
    } 
}
window.addEventListener('error', (e)=>{
    alert ('une erreur est survenue dans votre calcul : ' + e.message );
})  
