

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5kMZ7wvJpLAT9u7Z8YBKV59XjF-aqqRE",
    authDomain: "project-93-letschat-web-app-1.firebaseapp.com",
    databaseURL: "https://project-93-letschat-web-app-1-default-rtdb.firebaseio.com",
    projectId: "project-93-letschat-web-app-1",
    storageBucket: "project-93-letschat-web-app-1.appspot.com",
    messagingSenderId: "599747272052",
    appId: "1:599747272052:web:04fa716f9c059b29902021"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+ msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data ['name'];
message = message_data ['message'];
like = message_data ['like'];
dislike = message_data ['dislike'];

name_with_tag = "<h4>" + name + "<img class = 'user_take' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";

like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
span_with_tag_up = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: " + like + "</span> </button> <hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag_up; //add dislike_button and span_with_tag_down

document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();