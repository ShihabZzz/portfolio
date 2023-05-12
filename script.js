// tab-selection-logic
const tabtexts = document.getElementsByClassName('tab-text');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(argument) {
  for (const nodeText of tabtexts) {
    nodeText.classList.remove('active-text');
  }
  for (const nodeContent of tabcontents) {
    nodeContent.classList.remove('active-contents');
  }
  event.currentTarget.classList.add('active-text');
  document.getElementById(argument).classList.add('active-contents');
}