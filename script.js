function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function performSearch() {
    var query = document.getElementById('search').value.trim();
    if (query) {
        
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search term.");
    }
}

function toggleNotification() {
    var dropdown = document.getElementById("notificationDropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        
    });
});

function toggleProfile() {
    var profileContent = document.getElementById("profileContent");
    if (profileContent.style.display === "none" || profileContent.style.display === "") {
        profileContent.style.display = "block";
    } else {
        profileContent.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');

    const isUserLoggedIn = localStorage.getItem('userEmail');

    if (isUserLoggedIn) {
       
        loginButton.textContent = 'Go to Profile';
        loginButton.addEventListener('click', function () {
            window.location.href = 'profile.html';
        });
    } else {
       
        loginButton.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }
});



function savePin(pinId) {
    const savedPins = JSON.parse(localStorage.getItem('savedPins')) || [];
    if (!savedPins.includes(pinId)) {
        savedPins.push(pinId);
        localStorage.setItem('savedPins', JSON.stringify(savedPins));
        alert('Pin saved to your profile!');
    } else {
        alert('This pin is already saved.');
    }
}


function hidePin(pinId) {
    const pinCard = document.getElementById(pinId);
    if (pinCard) {
        pinCard.style.display = 'none';
    }
}



function hidePin(pinId) {
    document.getElementById(pinId).style.display = 'none';
}

function toggleNotification() {
    var dropdown = document.getElementById('notificationDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}


document.querySelectorAll('.hide-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.currentTarget.closest('.pin-card').style.display = 'none';
    });
});
