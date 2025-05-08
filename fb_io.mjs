//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Ryan Parks, Term 2 2025
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
import { signOut }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { ref, set }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { get }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { fb_initialise, fb_authenticate, fb_detectLoginChange, fb_logout, fb_WriteRec, fb_ReadRec }

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
function fb_logout() {
    console.log('%c fb_logout(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const AUTH = getAuth();

    signOut(AUTH).then(() => {

        //✅ Code for a successful logout goes here

    })

        .catch((error) => {

            //❌ Code for a logout error goes here

        });
    document.getElementById("p_fblogout").innerHTML = "Logged out";
}

function fb_WriteRec() {
    console.log('%c fb_WriteRec(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const DB = getDatabase()
    const dbReference= ref(DB, "Test/Userdata");

    set(dbReference, {Location: "pool", Name: "Jeff"}).then(() => {

        //✅ Code for a successful write goes here
        console.log("success write");

    }).catch((error) => {

        //❌ Code for a write error goes here
         console.log("fail write");
         console.log(error);

    });
    document.getElementById("p_fbWriteRec").innerHTML = "record written";
}

function fb_ReadRec() {
    console.log('%c fb_ReadRec(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const dbReference= ref(what-DB, where-to-read-from);

    get(dbReference).then((snapshot) => {

        var fb_data = snapshot.val();

        if (fb_data != null) {

            //✅ Code for a successful read goes here
            console.log("successful read");

        } else {

            //✅ Code for no record found goes here
            console.log("no record found");
        }

    }).catch((error) => {

        //❌ Code for a read error goes here
        console.log("fail read");

    });
    document.getElementById("p_fbReadRec").innerHTML = "record written";
}
/**************************************************************/
// END OF CODE
/**************************************************************/