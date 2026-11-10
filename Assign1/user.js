//Handles Registration and Login Forms

// ==========================================
// 1. REGISTRATION FORM
// ==========================================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", register);
}

function register(e) {
    // Prevent the default form submission (stops page refresh)
    e.preventDefault();

    // Retrieve input values by id
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create the User JavaScript Object
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
    };

    // Print to browser console for verification
    console.log("--- New User Registered ---");
    console.log(newUser);

    // Optional: Reset form fields after submission
    registerForm.reset();
}


// ==========================================
// 2. LOGIN FORM
// ==========================================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", login);
}

function login(e) {
    // Prevent default form submission
    e.preventDefault();

    // Retrieve login input values by id
    const loginUser = document.getElementById("loginUsername").value;
    const loginPass = document.getElementById("loginPassword").value;

    // Create Login Credentials Object
    const userCredentials = {
        username: loginUser,
        password: loginPass
    };

    // Print to browser console for verification
    console.log("--- User Login Submitted ---");
    console.log(userCredentials);

    // Optional: Reset form fields
    loginForm.reset();
}