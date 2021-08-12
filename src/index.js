
import {Person} from "./app1";
import {Employee} from "./app2";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

Person.test();
Employee.test();



// Customize Bootstrap JS //
const button = document.getElementById('button');

button.addEventListener('click', function(){
    button.textContent = 'New';
})