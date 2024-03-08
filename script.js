const form = document.getElementById('myForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    errorMessages.innerHTML = '';

    const firstName = form.elements['firstName'].value.trim();
    const lastName = form.elements['lastName'].value.trim();
    const address = form.elements['address'].value.trim();
    const pincode = form.elements['pincode'].value.trim();
    const gender = form.elements['gender'].value.trim();
    const food = form.elements['food'].value.trim();
    const state = form.elements['state'].value.trim();
    const country = form.elements['country'].value.trim();

    if (!firstName || !lastName || !address || !pincode || !gender || !food || !state || !country) {
        errorMessages.innerHTML = 'Please fill out all fields.';
        return;
    }

    // Additional validation can be added here

    // If all fields are filled and validated
    console.log('Form submitted successfully!');
    // Here you can submit the form data to the server or perform any other actions
});

  