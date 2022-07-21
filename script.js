let nom=document.getElementById("mon1inpt");
let mail=document.getElementById("mon2inpt");
let err1=document.getElementById("errNom");
let err2=document.getElementById("errMail");
const questionSuivant = document.querySelector('#question-suivant');
const btnQuitter = document.querySelector('#quitter');
const assertions = document.querySelector('#assertions');
const afficheQuestion = document.querySelector('#affiche-question');
const questionCompteur = document.querySelector('#question-compteur');
const questionForm = document.querySelector('#questionForm');
const assertionRep = document.querySelectorAll('.assertionRep');
const mesInputs = document.querySelectorAll("input[type='radio']");
let  finCompt=0;
let recupNom=document.getElementById("recupNom");
let recupMail=document.getElementById("recupMail");
let monLogo = document.getElementById("result_symbole")

const pages = document.querySelectorAll('.card');
const formulaireIdentification = document.querySelector('#enregistrement');
//questions[0].intitule;
const questions = [
    {
        intitule: 'Quel est le type d un fichier javascript',
        assertions: ['ts', 'jsx', 'js', 'j'],
        bonneReponse: 'js'
    },
    {
        intitule: 'Dans quel balise HTML plaçons-nous  le code JavaScript?',
        assertions: ['La balise js', 'La balise javascript', 'la balise script', 'la balise rel'],
        bonneReponse: 'la balise script'
    },
    {
        intitule: 'Comment faire appelle à une fonction nommée « sum »?',
        assertions: ['sum()', 'call function sum()', 'call sum()', 'aucune bonne reponse'],
        bonneReponse: 'sum()',
    },
    {
        intitule: 'Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »?',
        assertions: ['<script href="myscript.js">', '<script name="myscript.js">', '<script src="myscript.js">', 'Tout les réponses sont vrais'],
        bonneReponse: '<script src="myscript.js">',
    },
    {
        intitule: 'Quel est le bon endroit pour insérer un code JavaScript?',
        assertions: ['La section <head>', 'Les deux sections <head> et <body> sont correctes', ' La section <body>', 'Aucune de ces réponses n’est vraie.'],
        bonneReponse: 'Les deux sections <head> et <body> sont correctes'
    },
    {
        intitule: 'Comment écrivez-vous « Hello World » dans une boîte d’alerte?',
        assertions: ['msg("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");'],
        bonneReponse: 'alert("Hello World");'
    },
    {
        intitule: 'Comment écrire une condition IF en JavaScript?',
        assertions: ['if a = 2 then', 'if a = 2', 'if a == 2 else', 'if (a == 2)'],
        bonneReponse: 'if (a == 2)'
    },
    {
        intitule: 'Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2?',
        assertions: ['if a <> 2', 'if (a != 2)', 'if a =! 2 then', 'if (a <> 2)'],
        bonneReponse: 'if (a != 2)'
    },
    {
        intitule: 'Comment créer une fonction en JavaScript?',
        assertions: ['function f()', 'function = f()', 'function:f()', 'Aucune de ces réponses n’est vraie.'],
        bonneReponse: 'function f()'
    },
    {
        intitule: 'Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?',
        assertions: ['if (c == "XYZ") then { } else { }', 'if (c = "XYZ") then { } else { }', 'if (c == "XYZ") { } else { }', 'if (c = "XYZ") { } else { }'],
        bonneReponse: 'if (c == "XYZ") { } else { }'
    },
    {
        intitule: 'quelle est la syntaxe pour cree une constante en javascript',
        assertions: ['tar', 'constante', 'constan', 'const'],
        bonneReponse: 'const'
    },
    {
        intitule: 'quelle est la syntaxe recommandé pour cree une variable en js',
        assertions: ['var', 'tar', 'let', 'const'],
        bonneReponse: 'let'
    },
    {
        intitule: 'Dans quelle balise Html est conseillé de placer le chemin du script?',
        assertions: ['html', 'head', 'body', 'footer'],
        bonneReponse: 'body'
    },
    {
        intitule: 'pourquoi on met le script en bas dans la balyse body',
        assertions: ['pour qu il soit lu en dernier', 'pour le design', 'pour le style', 'pour la forme'],
        bonneReponse: 'pour qu il soit lu en dernier'
    },
    {
        intitule: 'N est pas une methode d objet en js',
        assertions: ['compile()', 'exec()', 'test()', 'var'],
        bonneReponse: 'var'
    }
    
];

let utilisateurNom = '';
let utilisateurEmail = '';
let utilisateurPoint = 0;
// let coteSymbole=

//.............................js.....................
let timerWidth = 100;
let startTime = 60;
let coutDown=document.querySelector('#coutDown');
let timer=document.querySelector('.ProgressionAp');
function counter() {
   if (startTime >= 0) {
      coutDown.textContent = `${startTime}`
      timerWidth = timerWidth - (100 / 60)
      timer.style.width = `${timerWidth}%`;
      startTime--;
   }
   if(startTime== -1){
    if(pageActive.question < 14) {
        chargementPages(1, pageActive.question += 1);
        btnSubmit();
        
    }
    else {
        chargementPages(2);
        recupNom.textContent=utilisateurNom;
        recupMail.textContent=utilisateurEmail;
        document.querySelector('#points').textContent = utilisateurPoint + '/ 15';
    }
    timerWidth=100
    startTime=60;

   }
//    if (pageActive.question>=15 )
    // clearInterval(finCompt);
}

    
//..................................................
function btnSubmit(){
  if (pageActive.question==13){
              questionSuivant.textContent="submit"
      }else{
        questionSuivant.textContent="suivant"
        
      }
}btnSubmit

let pageActive = {
    page: 0,
    question: 0,
}

formulaireIdentification.addEventListener('submit', (e) => {
    e.preventDefault();
    checkerror();
    

});

//Fonction pour charger les pages
function chargementPages(page = 0, question = 0) {
    for(let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    if(question < 15) {
        afficheQuestion.textContent = questions[question].intitule;
        document.querySelector('#afficheAssertion1').textContent = questions[question].assertions[0];
        document.querySelector('#afficheAssertion2').textContent = questions[question].assertions[1];
        document.querySelector('#afficheAssertion3').textContent = questions[question].assertions[2];
        document.querySelector('#afficheAssertion4').textContent = questions[question].assertions[3];
        document.querySelector('#assertion1').value = questions[question].assertions[0];
        document.querySelector('#assertion2').value = questions[question].assertions[1];
        document.querySelector('#assertion3').value = questions[question].assertions[2];
        document.querySelector('#assertion4').value = questions[question].assertions[3];
        questionCompteur.textContent = pageActive.question + 1 + '/' + questions.length;
        questionSuivant.disabled=true;
        if(utilisateurPoint<8){
            monLogo.setAttribute("class","mdi mdi-close-circle-outline");
            monLogo.setAttribute("id","result_symbole1");
            
        }else {
            monLogo.setAttribute("class","mdi mdi-check-circle-outline")
            monLogo.setAttribute("id","result_symbole");

        }
      

        
    }
    pages[page].style.display = 'block';
    
}
chargementPages();


function checkerror (){
    const regNom= /^(?=.{3,50}$)[a-zA-Z ]+(?:['_.\s][a-z]+)*$/;
    const fullName=nom.value.trim();
    const fullEmail=mail.value.trim();
    const regMail=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (regNom.test(fullName) && (regMail.test(fullEmail))){
        pageActive.page += 1;
        chargementPages(pageActive.page);
        utilisateurEmail = mail.value;
        utilisateurNom = nom.value;
        finCompt=setInterval(counter, 1000) ;
    }else{
        if(regNom.test(fullName)){
            err1.innerHTML=""

        }else{
            err1.innerHTML="veille entrer un nom valide"
        }
        if(regMail.test(fullEmail)){
            err2.innerHTML=""
        }else{
            err2.innerHTML="veille entrer un mail valide"

        }    
    }
}
function myRep(){
    for(let i = 0; i < assertionRep.length; i++) {
        if(assertionRep[i].checked) {
            if(assertionRep[i].value == questions[pageActive.question].bonneReponse) {
                utilisateurPoint += 1;
                // alert(utilisateurPoint)
            }
            // alert(utilisateurPoint);
        break;
        }
    }
}

questionForm.addEventListener('submit', e => {
    e.preventDefault();
    
    if(pageActive.question <14) {
        myRep();
        chargementPages(1, pageActive.question += 1);
        recupNom.textContent=utilisateurNom;
        recupMail.textContent=utilisateurEmail;
    }
    else {
        myRep();
        document.querySelector('#points').textContent = utilisateurPoint + '/ 15';
        pageActive.page = 2;
        chargementPages(pageActive.page);
        // if (pageActive.question>=15 )
        recupNom.textContent=utilisateurNom;
        recupMail.textContent=utilisateurEmail;
        clearInterval(finCompt);
        
        
    }
    startTime=60;
    timerWidth=100;
    questionForm.reset();
})




mesInputs.forEach((el) => {
    el.addEventListener('change', () => questionSuivant.disabled=false)
});

btnQuitter.addEventListener('click', () => {
    document.querySelector('#points').textContent = utilisateurPoint + '/ 15';
    chargementPages(2);
    recupNom.textContent=utilisateurNom;
    recupMail.textContent=utilisateurEmail;
    clearInterval(finCompt);
})