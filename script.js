const darkMode = document.getElementById("darkMode");

darkMode.onclick = () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    darkMode.innerHTML = "☀️";
  }else{
    darkMode.innerHTML = "🌙";
  }

};
