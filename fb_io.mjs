//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { fb_initialise, fb_authenticate, fb_detectLoginChange }

function fb_initialise() {
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const firebaseConfig =
    {
        apiKey: "AIzaSyAQ3Qc6Ej_4YvNXCAjqsfLoA8p75j3R7-8",
        authDomain: "comp2025-ryan-parks.firebaseapp.com",
        databaseURL: "https://comp2025-ryan-parks-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp2025-ryan-parks",
        storageBucket: "comp2025-ryan-parks.firebasestorage.app",
        messagingSenderId: "73072219046",
        appId: "1:73072219046:web:7608445213a3fd3e973567",
        measurementId: "G-R89L1J8Z4D"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const firebaseGameDB = getDatabase(app);
    console.info(firebaseGameDB);
    document.getElementById("p_fbInitialise").innerHTML = "Initialised";
}
function fb_authenticate() {
    console.log('%c fb_authenticate(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {
        //✅ Code for a successful authentication goes here
        console.log("Authenticated");
    })

        .catch((error) => {
            //❌ Code for an authentication error goes here
            console.log("ERROR!!!!!!!!");

        });
    document.getElementById("p_fbAuthenticate").innerHTML = "Authentication success";
}

function fb_detectLoginChange() {
    console.log('%c fb_detectLoginChange(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const AUTH = getAuth();

    onAuthStateChanged(AUTH, (user) => {

        if (user) {

            //✅ Code for user logged in goes here
            console.log("Logged in code");
        } else {

            //✅ Code for user logged out goes here
            console.log("Logged out");

        }

    }, (error) => {

        //❌ Code for an onAuthStateChanged error goes here

    });
    document.getElementById("p_fbdetectLoginChange").innerHTML = "Login change detected";
}


/**************************************************************/
// END OF CODE
/**************************************************************/