
var firebaseConfig = {
      apiKey: "AIzaSyCFeIyI2Bb1csazaq76IYa_ROMOrKbdYa4",
      authDomain: "kwitter-b5f94.firebaseapp.com",
      databaseURL: "https://kwitter-b5f94-default-rtdb.firebaseio.com",
      projectId: "kwitter-b5f94",
      storageBucket: "kwitter-b5f94.appspot.com",
      messagingSenderId: "749375467834",
      appId: "1:749375467834:web:61d25da39eb12e16936003"
    };
  
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;                                         

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout()
 { localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "index.html"; }
