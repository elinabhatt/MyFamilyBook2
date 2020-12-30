var members = [
    "Geeta Bhatt(Mom)",
    "Manoj K Bhatt(Dad)",
    "Elina Bhatt(Me)"
  ];
  
  var images = [
    "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1488142839187-ddd366e62c01?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1501418290025-a3db9af0286b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  ];
  
  var i = 0;
  function nextslide() {
    document.getElementById("r1").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
  }
  