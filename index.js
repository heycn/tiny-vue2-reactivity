const user = {
  name: '张三',
  birth: '1990-01-01',
}

function showFirstName() {
  document.querySelector('#firstName').textContent = `姓：${user.name[0]}`
}
function showLastName() {
  document.querySelector('#lastName').textContent = `名：${user.name.slice(1)}`
}
function showAge() {
  const birthday = new Date(user.birth)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const age = today.getFullYear() - birthday.getFullYear()
  document.querySelector('#age').textContent = `年龄：${age}`
}

let cacheName = user.name
Object.defineProperty(user, 'name', {
  get: function () {
    return cacheName
  },
  set: function (value) {
    cacheName = value
    showFirstName()
    showLastName()
  }
})
let cacheBirth = user.birth
Object.defineProperty(user, 'birth', {
  get: function () {
    return cacheBirth
  },
  set: function (value) {
    cacheBirth = value
    showAge()
  }
})

user.name = '李四'
user.birth = '2000-01-01'
