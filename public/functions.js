const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const addBtn = document.getElementById('addBtn');

const database = firebase.database();
const usersRef = database.ref('/users');
const usersRef = database.ref('/users');
const normalUsersRef = usersRef.child('normal_users');
const superUsersRef = usersRef.child('super_users');
const database = firebase.database();
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(userId.value).set({
    first_name: firstName.value,
    last_name: lastName.value,
    age: age.value
  });
});
  