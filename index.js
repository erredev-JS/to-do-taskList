const input = document.getElementById('input');
const btn = document.getElementById('btn');
const ul = document.getElementById('list');
const btnDelete = document.getElementById('btn__delete');
const checkboxContainer = document.getElementById('checkbox-container');

if (localStorage.getItem('lista')) {
  ul.innerHTML = localStorage.getItem('lista');
}

btn.addEventListener('click', () => {
  if (input.value != '') {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${ul.children.length}`;
    checkbox.classList.add('checkbox');

    const label = document.createElement('label');
    label.setAttribute('for', `checkbox-${ul.children.length}`);
    label.textContent = input.value;

    li.classList.add('main__li');
    li.appendChild(label);
    li.appendChild(checkbox);
    ul.appendChild(li);

    localStorage.setItem('lista', ul.innerHTML);
  }
  input.value = '';
});

btnDelete.addEventListener('click', () => {
  localStorage.removeItem('lista');
  ul.innerHTML = '';
});

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach((checkbox) => {
  const isChecked = localStorage.getItem(checkbox.id);
  if (isChecked) {
    checkbox.checked = isChecked === 'true';
  }
  checkbox.addEventListener('change', () => {
    localStorage.setItem(checkbox.id, checkbox.checked)
  })});