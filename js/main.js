// title color change
function titleColor(type) {
    type.style.color = '#0c8e97';
}
// change top players title text color
const topPlayers = document.getElementById('top-players');
titleColor(topPlayers);
// change top blogs title text color
const topblog = document.getElementById('top-blog');
titleColor(topblog);

// change top players background color using rgba color
document.getElementById('top-players-box').style.backgroundColor = 'rgba(255,74,96,0.5)';

//item added in ul list
function addItem() {
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = 'new item added';
    ul.appendChild(li);
}
//input value increase
document.getElementById('in-value').addEventListener('click', function () {
    const btn = document.getElementById('in-value');
    const inputValue = document.getElementById('input-number');
    let inputNumber = parseInt(inputValue.value);
    inputNumber++;
    inputValue.value = inputNumber;
    if (inputNumber < 5) {
        document.getElementById('in-value').removeAttribute('disabled');
    } else {
        document.getElementById('in-value').setAttribute('disabled', true);
        btn.style.color = 'rgba(0,0,0,.4)';
    }
});