document.addEventListener('DOMContentLoaded', () => {
    let quizArticle = document.querySelector('.quiz-article');
    let quizstart = document.querySelector('.quizStart');
    quizstart.addEventListener('click', ()=>{
        quizArticle.innerHTML = `
        <section>
        <h2>Hvornår startede 2 verdenskrig</h2>
    </section>
    <section>
        <button class="false">1930</button>
        <button class="false">1933</button>
        <button class="true">1939</button>
        <button class="false">1940</button>
        <button class="next">Næste Spørgsmål</button>
        </section>
        `
        let sandt = document.querySelector('.true')
        sandt.addEventListener('click', ()=>{
            sandt.style.backgroundColor = "lightgreen";
        })
        document.querySelector('.next').addEventListener('click', ()=>{

            if (sandt.style.backgroundColor = "lightgreen") {
                quizArticle.innerHTML = `
                <section>
                <h2>Hvad er 5*5+5</h2>
            </section>
            <section>
                <button class="false">25</button>
                <button class="false">30</button>
                <button class="true">50</button>
                <button class="false">55</button>
                <button>Næste Spørgsmål</button>
                </section>
                `
            }
        })
    })
})