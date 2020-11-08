document.querySelector('.post').onclick = postTask()
function postTask() {
  if(document.querySelector('.task-input').value.trim()) {
    const maxLength = 7
    if(document.querySelectorAll('.cell').length <= maxLength) {  
      const div = document.createElement('div')
      div.setAttribute('class', 'cell')
      div.innerHTML = `<h3>${document.querySelector('.task-input').value}</h3>`
      document.querySelector('.cell-container').appendChild(div)
      const closeBtn = document.createElement('button')
      closeBtn.classList.add('close-cell-btn')
      document.querySelector('.task-input').value = ''
    }
    else {
      alert('too many tasks. close one to open another again')
    }
  }
  else if(document.querySelector('.task-input').value.trim() === '' || document.querySelector('.task-input').value.trim() === '') {
    alert('please write a task')
  }
}
document.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    postTask()
  }
})