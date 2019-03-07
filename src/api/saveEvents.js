export default function addEvent() {
  const checkedEventsList = document.querySelectorAll('input:checked');
  const idArray = [];
  for (let i = 0; i < checkedEventsList.length; i += 1) {
    idArray.push(checkedEventsList[i].id.replace(/\D+/g, ''));
  }
  localStorage.setItem('checkedEventList', idArray);
}
