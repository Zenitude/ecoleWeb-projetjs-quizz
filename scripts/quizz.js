const btn = document.querySelector('button');
const titreResultat = document.querySelector('.titre-resultat');
const faireResultat = document.querySelector('.faire');
const avanceeResultat = document.querySelector('.avancement');
const emojis = ['✔️','✨','👀','😭','👎'];
let avancee;
let bonnesReponses = ['Bonaparte', '04071776', '395apJC', 'Ljubljana', '4.9Millions'];
let recupReponses = [];

/* Résultat par défaut */

    titreResultat.innerText = `Cliquez sur valider pour voir les résultats.`;

/* Évênement bouton */

    btn.addEventListener('click', (e) =>
    {
        e.preventDefault();

        recupererInputsChecked();

        verificationValeurs();

        afficherProgression();
    });

/* Récupérer données formulaire */

    function recupererInputsChecked()
    {
        recupReponses[0] = document.querySelector(`input[name="empereur"]:checked`).value;
        recupReponses[1] = document.querySelector(`input[name="independance"]:checked`).value;
        recupReponses[2] = document.querySelector(`input[name="empire"]:checked`).value;
        recupReponses[3] = document.querySelector(`input[name="capitale"]:checked`).value;
        recupReponses[4] = document.querySelector(`input[name="habitants"]:checked`).value;
    }

/* Vérifier les valeurs */

    function verificationValeurs()
    {
        avancee = 0;
        
        for(let i = 0; i < 5; i++)
        {
            let a = 0;

            if(recupReponses[i] === bonnesReponses[i])
            {
                document.querySelector(`.quizz${i+1}`).style.backgroundColor = "lightgreen";
                
                a++;
            }
            else
            {
                document.querySelector(`.quizz${i+1}`).style.backgroundColor = "rgba(255,0,0,0.5)";
                document.querySelector(`.quizz${i+1}`).classList.add('echec');

                setTimeout(() =>
                {
                    
                    document.querySelector(`.quizz${i+1}`).classList.remove('echec');

                }, 500)
            
            }

            avancee += a;
        }

    }

/* Afficher progression */

    function afficherProgression()
    {
            if(avancee === 5)
            {
                titreResultat.innerHTML = `${emojis[0]} Bravo, c'est un sans faute ! ${emojis[0]}`;
            }
            else if(avancee === 4)
            {
                titreResultat.innerText = `${emojis[1]} Vous y êtes presque ! ${emojis[1]}`;
                faireResultat.innerText = `Retentez une autre réponse dans la case rouge, puis re-validez !`;
            }
            else if(avancee === 3)
            {
                titreResultat.innerText = `${emojis[1]} Encore un effort... ${emojis[2]}`;
                faireResultat.innerText = `Retentez une autre réponse dans les cases rouges, puis re-validez !`;
            }
            else if(avancee === 2)
            {
                titreResultat.innerText = `${emojis[2]}Il reste quelques erreurs. ${emojis[3]}`;
                faireResultat.innerText = `Retentez une autre réponse dans les cases rouges, puis re-validez !`;
            }
            else if(avancee === 1)
            {
                titreResultat.innerText = `${emojis[3]}Peut mieux faire !${emojis[4]}`;
                faireResultat.innerText = `Retentez une autre réponse dans les cases rouges, puis re-validez !`;
            }
            else if(avancee === 0)
            {
                titreResultat.innerText = `${emojis[4]}Peut mieux faire !${emojis[4]}`;
                faireResultat.innerText = `Retentez une autre réponse dans les cases rouges, puis re-validez !`;
            }

            avanceeResultat.innerText = `${avancee}/5`;
    }






