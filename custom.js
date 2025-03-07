function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == null || y == "") {
        alert("Email must be filled out");
        return false;
    }
}