// Initialize Cloud Firestore through Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDHwDt_4O_ra6cdNjyACvJEkvOUUUMACGs",
    authDomain: "registration-form-3b53a.firebaseapp.com",
    databaseURL: "https://registration-form-3b53a.firebaseio.com",
    projectId: "registration-form-3b53a",
    storageBucket: "registration-form-3b53a.appspot.com",
    messagingSenderId: "481977977295",
    appId: "1:481977977295:web:b460c192bc69dd34952aba",
    measurementId: "G-GP0GTQN6NZ"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();

var messageDocRef = db.ref('message');

document.getElementById('rForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    //Get Values
    var fName = getInputVal('first_name');
    var lName = getInputVal('last_name');
    var email = getInputVal('email');
    var company = getInputVal('company');
    var phone = getInputVal('phone');

    saveMessage(fName, company, email, phone, lName);

    document.getElementById('rForm').reset();
    console.log('Your message has been sent successfully!');
}

// Function to get input
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save message
function saveMessage(fName, company, email, phone, lName) {

    messageDocRef.set({
        fName: fName,
        company: company,
        email: email,
        lName: lName,
        phone: phone
    }).then(function () {
        console.log("Message sent!");
    }).catch(function (error) {
        console.log("Got an error", error);
    })

}
