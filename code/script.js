/*-- https://github.com/zouraiz523 --*/
// Get references to the profile picture element and file input
let profilePic = document.getElementById("profile-pic");
let fileInput = document.getElementById("fileInput");
let imageURL; // To store the processed image URL
/*-- https://github.com/zouraiz523 --*/
// Event listener for file input change
fileInput.onchange = function () {
    // Update the profile picture source to the selected file
    profilePic.src = URL.createObjectURL(fileInput.files[0]);
}
/*-- https://github.com/zouraiz523 --*/
/**
 * Handles the submission of the file to the Remove.bg API
 */
function submitHandler() {
    // Retrieve the file from the file input
    const fileInput = document.getElementById('fileInput');
    const image = fileInput.files[0]; // Get the uploaded image
/*-- https://github.com/zouraiz523 --*/
    // Create a FormData object to send the file and parameters
    const formData = new FormData();
    formData.append('image_file', image); // Add the image file
    formData.append('size', 'auto'); // Specify the size parameter for the API
/*-- https://github.com/zouraiz523 --*/
    const apiKey = "Your API Keys"; // Replace with your actual API key
/*-- https://github.com/zouraiz523 --*/
    // Make a POST request to the Remove.bg API
    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': apiKey // API authentication
        },
        body: formData // Attach the FormData with the request
    })
        .then(function (response) {
            return response.blob(); // Convert the response to a Blob
        })
        .then(function (blob) {
            // Create a URL for the returned image and update the profile picture
            const url = URL.createObjectURL(blob);
            imageURL = url; // Store the URL for download functionality
            profilePic.src = url; // Update the profile picture
        })
        .catch(function (error) {
            console.error(error); // Handle and log errors
        });
}
/*-- https://github.com/zouraiz523 --*/
/**
 * Allows the user to download the processed image
 */
function downloadFile() {
    // Create a temporary anchor element
    var a = document.createElement('a');
    a.href = imageURL; // Set the href to the processed image URL
    a.download = 'naciasv.png'; // Specify the default download filename
/*-- https://github.com/zouraiz523 --*/
    // Programmatically trigger the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // Clean up by removing the anchor element
}
/*-- https://github.com/zouraiz523 --*/