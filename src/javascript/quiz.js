document.addEventListener('DOMContentLoaded', () => {
    // Det her er her hvor jeg laver start knappen til at virke
    let quizArticle = document.querySelector('.quiz-article');
    let quizstart = document.querySelector('.quizStart');
    quizstart.addEventListener('click', ()=>{
    //her får det første spørgsmål frem når man trykker på start på knappen
        quizArticle.innerHTML = `
        <section>
        <h2>Hvornår startede 2 verdenskrig</h2>
    </section>
    <section>
        <button class="false">1930</button>
        <button class="false">1933</button>
        <button class="true">1939</button>
        <button class="false">1940</button>
        <button class="next1">Næste Spørgsmål</button>
        </section>
        `
        //Her får jeg det rigtige svar til at blive blot
        
        let sandt = document.querySelector('.true')
        let falsk = document.querySelectorAll('.false')
        sandt.addEventListener('click', ()=>{
            sandt.style.backgroundColor = "lightgreen";
            if (sandt.style.backgroundColor = "lightgreen") {
                falsk.style.visibilty = "hidden";
            }
        })
        falsk.forEach(element => {
            element.addEventListener('click', () =>{
                element.style.backgroundColor = "red";
            })
        });

        //Her starter det andet spørgsmål
        document.querySelector('.next1').addEventListener('click', ()=>{

            if (sandt.style.backgroundColor = "lightgreen") {
                quizArticle.innerHTML = `
                <section>
                <h2>Hvad er 5*5+5</h2>
            </section>
            <section>
                <button class="false">25</button>
                <button class="false">30</button>
                <button class="false">55</button>
                <button class="true">50</button>
                <button class="next2">Næste Spørgsmål</button>
                </section>
                `
                // her bliver det rigtige svar blåt
                let sandt = document.querySelector('.true')
                sandt.addEventListener('click', ()=>{
                    sandt.style.backgroundColor = "lightgreen";
                })
            }


            // Her starter spørgsemål nr 3
            document.querySelector('.next2').addEventListener('click', ()=>{
                if (sandt.style.backgroundColor = "lightgreen") {
                    quizArticle.innerHTML = `
                    <section>
                    <h2>Hvad er h2o</h2>
                </section>
                <section>
                    <button class="true">vand</button>
                    <button class="false">ild</button>
                    <button class="false">jord</button>
                    <button class="false">luft</button>
                    <button class="next2">Næste Spørgsmål</button>
                    </section>
                    `
                    // her bliver det rigtige svar blåt
                    let sandt = document.querySelector('.true')
                    sandt.addEventListener('click', ()=>{
                        sandt.style.backgroundColor = "lightgreen";
                    })
                }
            })
        })
    })
})