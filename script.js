function getFormvalue() {
    // Prevent the form from actually submitting and refreshing the page
    event.preventDefault();

    // Access the first name and last name input elements using their name attributes
    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

    // Combine the first name and last name and display them in an alert
    alert(firstName + ' ' + lastName);
}

