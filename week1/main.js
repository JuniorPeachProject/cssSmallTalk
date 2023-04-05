function handleInput(e) {
  if (e.value.length >= 1) {
    e.parentElement.classList.add("hasInput");
  } else {
    e.parentElement.classList.remove("hasInput");
  }
}
