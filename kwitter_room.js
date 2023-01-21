// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASXgLlqSXgugHoAUSLUfyMI0RHho2Z36c",
  authDomain: "let-s-chat-8c008.firebaseapp.com",
  projectId: "let-s-chat-8c008",
  storageBucket: "let-s-chat-8c008.appspot.com",
  messagingSenderId: "901895201090",
  appId: "1:901895201090:web:1e729e64892a2f606a68db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var UserName = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + UserName + "!";

function addRoom() {
  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding room"
  });
  localStorage.setItem("Room_name", room_name);
  window.location = "Kwiiter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      // Start code
      Room_names = childKey;
      console.log("Room name = " + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirect(this.id)' > #"+ Room_names +" </div>";
      document.getElementById("output").innerHTML += row;
      //End Code
    });
  });

}

getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
