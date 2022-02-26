let addTask = document.querySelector('.add-task');
let result = document.querySelector('.result');
let counter = localStorage.getItem('curent-counter') || 0;
const changeCounter = () => {
   counter++
   result.innerHTML += `<p>Значение № ${counter}</p>`;
   localStorage.setItem('curent-counter', counter);
   console.log(result.innerHTML)
}
addTask.addEventListener('click', changeCounter);


const saveContent = () => {
   let content = result.innerHTML;
   localStorage.setItem('list-items', content)
}
document.querySelector('.save-ls').addEventListener('click', saveContent);

const renderContent = () => {
   result.innerHTML = localStorage.getItem('list-items')
}
renderContent();




const saveObj = () => {
   let obj = {
      name: 'Alex',
      age: 38
   }
   localStorage.setItem('obj1', JSON.stringify(obj));
   console.log(JSON.parse(localStorage.getItem('obj1', ('obj1'))))
}
document.querySelector('.save-obj').addEventListener('click', saveObj);
