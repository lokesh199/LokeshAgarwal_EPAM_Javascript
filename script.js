let isValidEmailId = false;
let isValidMobileNumber = false;
let isGenderEntered = false;
let isNameEntered = false;
let isDateOfBirthEntered = false;

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let dateOfBirth = document.querySelector("#date-of-birth").value;
    let emailId = document.querySelector("#email-id");
    let mobileNumber = document.querySelector("#mobile-no");



    if (firstName == "" || lastName == "") {
        alert("name cannot be empty");
    }
    else {
        isNameEntered = true;
    }

    if (dateOfBirth == "") {
        alert("enter valid date of birth");
    }
    else {
        isDateOfBirthEntered = true;
    }
    if (isValidEmail(emailId.value)) {
        isValidEmailId = true;
    }
    if (isValidMobileNo(mobileNumber.value)) {
        isValidMobileNumber = true;
    }
    console.log(isValidEmailId);
    console.log(isValidMobileNumber);
    console.log(isGenderEntered);
    console.log(isNameEntered);
    console.log(isDateOfBirthEntered);
    if (isValidEmailId == true && isValidMobileNumber == true && isGenderEntered == true && isNameEntered == true && isDateOfBirthEntered == true) {
        alert("all details are in valid format");
    }
})

function isValidEmail(email) {

    let len = email.length;
    let isAtTheRateFound = false;
    if (email[0] == "@" || email[0] == ".") {
        alert("invalid email address");
        return false;
    }
    for (let i = 0; i < len - 1; i++) {
        if (email[i] == "@") {
            isAtTheRateFound = true;
        }
        if (email[i] == "@" && email[i + 1] == ".") {
            alert("invalid email address");
            return false;
        }
        if (email[i] == "." && email[i + 1] == ".") {
            alert("invalid email address");
            return false;
        }
        if (!(email[i] == "_" || email[i] == "-" || (email[i] >= "a" && email[i] <= "z") || (email[i] >= "0" && email[i] <= "9") || email[i] == "." || email[i] == "@")) {
            alert("invalid email address");
            return false;
        }
    }
    if (isAtTheRateFound == false) {
        alert("invalid email address");
        return false;
    }
    return true;
}

function isValidMobileNo(mobileNumber) {
    if (mobileNumber == "") {
        alert("mobile number cannot be empty");
        return false;
    }
    let mobileNo = parseInt(mobileNumber, 10);
    if (isNaN(mobileNo)) {
        alert("invalid mobile number");
        return false;
    }
    let noOfDigits = 0
    while (mobileNo != 0) {
        noOfDigits += 1;
        mobileNo = parseInt(mobileNo / 10);
    }
    if (noOfDigits == 10) {
        return true;
    }
    else {
        return false;
    }
}

let maleSelector = document.querySelector("#male");
maleSelector.addEventListener("click", maleClicked);

let femaleSelector = document.querySelector("#female");
femaleSelector.addEventListener("click", femaleClicked);

function maleClicked(e) {
    isGenderEntered = true;
    if (e.target.checked == true) {
        femaleSelector.checked = false;
    }
}

function femaleClicked(e) {
    isGenderEntered = true;
    if (e.target.checked = true) {
        maleSelector.checked = false;
    }
}