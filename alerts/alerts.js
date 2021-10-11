


function removeAlert() {
  const buttons = document.getElementsByClassName("button--transparent");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
      e.preventDefault();
      e.target.closest('div').remove();
    });
  }
}
removeAlert();
