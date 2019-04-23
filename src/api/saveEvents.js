export default function addEvent() {
  const checkedEventsList = document.querySelectorAll('input[type=checkbox]:checked');
  const idArray = [];
  for (let i = 0; i < checkedEventsList.length; i += 1) {
    idArray.push(checkedEventsList[i].id);
  }
  localStorage.setItem('checkedEventList', idArray);
}
