import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { set, ref, push, getDatabase, onValue , remove , update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs6eWSXnV_pO_4-kk13iiT-kCjjF_S440",
  authDomain: "todo-app-2a64f.firebaseapp.com",
  databaseURL: "https://todo-app-2a64f-default-rtdb.firebaseio.com",
  projectId: "todo-app-2a64f",
  storageBucket: "todo-app-2a64f.appspot.com",
  messagingSenderId: "34940051663",
  appId: "1:34940051663:web:fdeb1a10ef4a2af01817ba"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

window.Addbtn = function () {
  let input = document.getElementById('input').value;
  let inputobj = {
    input: input
  }
  document.getElementById('input').value = "";
  let refn = push(ref(database, "Todo List"));
  let iteamkey = refn.key;
  set(ref(database, `Todo List/${iteamkey}`), inputobj)
    .then(function () {
      alert('Data Successfully');
    })
    .catch(function (err) {
      alert('Error: ' + err);
    });
} 
let di = document.getElementById("display");
if (di.textContent.trim() === "") {
  // di.style.display = "none";
  
}


window.getdata = function () {
  let todoref = ref(database, "Todo List");

  onValue(todoref, (dataall) => {
    let data = dataall.val();
    let displayElement = document.getElementById("display");

    displayElement.innerHTML = " ";
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];
        
        // div create 
        let div = document.createElement("div");
        div.setAttribute("class", "paradiv p-3 pb-0 mt-3 m-2");
        
        displayElement.appendChild(div);
        let p = document.createElement("p");
        p.setAttribute('class' , 'fs-5 fw-bold')
        p.textContent = item.input;

        div.appendChild(p);
        
        // Delete Btn Strat
        let delbtn = document.createElement("button");
        let delbtntext = document.createTextNode('Delete')
        delbtn.appendChild(delbtntext);
        delbtn.setAttribute('class','btn btn-danger ps-4 pe-4 ms-5');
        p.appendChild(delbtn);
        delbtn.addEventListener('click', function () {
          // Remove the item from the database
          remove(ref(database, `Todo List/${key}`))
          .then(function (){
          div.remove();
          alert('Data deleted successfully')
        })
        .catch(function (err) {
          alert('Data Delete failed: ' + err.message)
        });
      }); 

      // Edit btn Start
      let editbtn = document.createElement('button');
      let editbtntext = document.createTextNode('Edit');
      editbtn.appendChild(editbtntext);
      editbtn.setAttribute('class' , 'btn btn-primary ps-4 pe-4 ms-1');
      editbtn.addEventListener('click' , function (){
        let promp = prompt('Enter Update Value');
      if(promp !== null && promp !== item.value){
      // update(ref(database, `Todo List/${key}`), { input: promptValue })
      // update(ref(database, `Todo list/${ey}`), { input: promp })
      update(ref(database, `Todo List/${key}`), { input: promp })
      .then(function(){
       p.textContent = promp;
       alert('Updated successfully');
      })
      .catch(function(err){
        alert('Updated failed: ' + err);
      })
      }
    });
    p.appendChild(editbtn);

      }
      
    }
    
  })
}
getdata();

window.deleteAll = function () {
   let refdel = ref(database , 'Todo List');
   remove(refdel)
   .then(function () {
    alert('All Data deleted successfully');
   })
   .catch(function (err) {
      alert('All Data deleted failed ' , err);
   })
}



