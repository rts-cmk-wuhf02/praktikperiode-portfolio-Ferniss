document.addEventListener('DOMContentLoaded', () => {
    let quizArticle = document.querySelector('.quiz-article');
    let quizstart = document.querySelector('.quizStart');
    quizstart.addEventListener('click', ()=>{
        quizArticle.innerHTML = `
        <section>
        <h2>Hvornår startede 2 verdenskrig</h2>
    </section>
    <section>
        <p>1930</p>
        <p>1933</p>
        <p>1939</p>
        <p>1940</p>
        </section>
        <button>Næste spørgsmål</button>
        `
    })
})