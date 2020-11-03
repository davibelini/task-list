function postTask() {  
  const maxLength = 13
  if(document.querySelectorAll('.cell').length <= maxLength) {  
    const div = document.createElement('div')
    div.setAttribute('class', 'cell')
    div.innerHTML = `<h3>${document.querySelector('.task-input').value}</h3>`
    document.querySelector('.cell-container').appendChild(div)
  }
}
document.addEventListener('keydown', (e) => {
  if(e.key === 'Space') {
    postTask()
  }
})