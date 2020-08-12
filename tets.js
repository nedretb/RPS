function rock(){
    const container = document.querySelector('#result');
    let rmv = document.getElementById("test");
    rmv.remove();

    const paragraph = document.createElement('p');
    paragraph.setAttribute("id", "test");
    paragraph.textContent = "you pressed rock";

    container.appendChild(paragraph);
}

function paper(){
    const container = document.querySelector('#result');
    let rmv = document.getElementById("test");
    rmv.remove();
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.setAttribute("id", "test");
    paragraph.textContent = "you pressed paper";

    container.appendChild(paragraph);
}

function scissors(){
    const container = document.querySelector('#result');
    let rmv = document.getElementById("test");
    rmv.remove();

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.setAttribute("id", "test");
    paragraph.textContent = "you pressed scissors";

    container.appendChild(paragraph);
}