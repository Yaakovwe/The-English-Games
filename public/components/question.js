class Question extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // write element functionality in here
        // Create a shadow root
        let shadow = this.attachShadow({ mode: 'open' });

        // Create spans
        let question = document.createElement('span');
        question.setAttribute('class', 'wrapper');
        let answer = document.createElement('button');
        answer.setAttribute('class', 'icon');
        answer.setAttribute('tabindex', 0);


        // Take attribute content and put it inside the info span
        let q = this.getAttribute('q');
        let ans = this.getAttribute('answers');
        debugger;
        question.textContent = q;
        answer.textContent = ans;
        // Create some CSS to apply to the shadow dom
        let style = document.createElement('style');

        // style.textContent = '.wrapper {' +
        // CSS truncated for brevity
        style.textContent = `
        .wrapper {
          position: relative;
        }
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
        img {
          width: 1.2rem;
        }
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;
        // attach the created elements to the shadow dom

        shadow.appendChild(style);
        shadow.appendChild(question);
        question.appendChild(answer);

    }
}
customElements.define('question-answer', Question);
