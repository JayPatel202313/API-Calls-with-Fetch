const out1 = document.getElementById("cent");
const btnAdd = document.querySelector(".btn");

const form = document.querySelector('form');
var display = 0;


form.addEventListener('submit', function (event) {
    event.preventDefault();
    out1.innerHTML = '';
    // call API
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);

            data.results.forEach(a => {
                console.log(a);
                const art = document.createElement('article');
                art.classList.add('card');

                // Create button
                let but1 = document.createElement('button');
                but1.classList.add('buttonSA');
                but1.innerHTML = `<h2>Show Answer</h2>`
                but1.addEventListener('click', (event) => {
                    if (display == 1) {
                        pMsg.style.display = 'block';

                        display = 0;
                    } else {
                        pMsg.style.display = 'none';

                        display = 1;
                    }
                });


                art.innerHTML = `<h2> ${a.category} </h2>
            <p> ${a.question} </p>
            `;
                art.append(but1);

                let pMsg = document.createElement('p');
                pMsg.innerHTML = `<p> ${a.correct_answer} </p>`;
                pMsg.classList.add('hidden');
                art.append(pMsg);

                out1.append(art);

            })

        });
})


