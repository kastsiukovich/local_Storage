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

const saveArr = () => {
   let arr = ['item1', 100, false, 'string2'];
   localStorage.setItem('arr1', JSON.stringify(arr));
   // console.log(localStorage.setItem('arr1', JSON.stringify(arr)))
}
document.querySelector('.save-arr').addEventListener('click', saveArr);

const renderArr = () => {
   let list = document.querySelector('.arr-list');
   let correntArr = JSON.parse(localStorage.getItem('arr1'));
   correntArr.forEach((item) => {
      list.innerHTML += `<li>${item}</li>`
   })
}
document.querySelector('.get-arr').addEventListener('click', renderArr);

const addElement = () => {
   let correntArr = JSON.parse(localStorage.getItem('arr1'));
   correntArr.push(counter);
   localStorage.setItem('arr1', JSON.stringify(correntArr));
}
document.querySelector('.add-arr').addEventListener('click', addElement)


localStorage.setItem('random-str', false);
// localStorage.removeItem('random-str')

// localStorage.clear()

