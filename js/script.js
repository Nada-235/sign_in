function validateForm(event) {
    event.preventDefault();
    let name_ = document.getElementById("user_name");
    let email_ = document.getElementById("user_email");
    let subject_ = document.getElementById("subject");
    let message_ = document.getElementById("message");
    let error_ = document.getElementById("err_msg");
    let success_ = document.getElementById("success_msg")

    if (name_.value == "") {
        // alert("Please enter your name");
        name_.focus();
        error_.style.display = "block";
        error_.innerText = "ERROR: Enter your name";
        setTimeout(() => { error_.style.display = "none"; }, 2000);
        return false;
    }

    else if (email_.value == "" || ValidateEmail(email_)) {
        // alert("Please enter your email");
        email_.focus();
        error_.style.display = "block";
        error_.innerText = "ERROR: Enter a valid email";
        setTimeout(() => { error_.style.display = "none"; }, 2000);
        return false;
    }

    else if (subject_.value == "") {
        // alert("Please enter a subject");
        subject_.focus();
        error_.style.display = "block";
        error_.innerText = "ERROR: Enter your Subject";
        setTimeout(() => { error_.style.display = "none"; }, 2000);
        return false;
    }

    else if (message_.value == "") {
        // alert("Please enter your message");
        message_.focus();
        error_.style.display = "block";
        error_.innerText = "ERROR: Enter your Message";
        setTimeout(() => { error_.style.display = "none"; }, 2000);
        return false;
    }

    if ((name_.value != "") && (email_.value != "") && (subject_.value != "") && (message_.value != "")) {
        success_.style.display = "block";
        setTimeout(() => { success_.style.display = "none"; }, 2000);

    }
}

function ValidateEmail(mail) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
        return (true);
    else return (false);
}
