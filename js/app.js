// Get the resume button and dropdown content
const resumeBtn = document.getElementById('resumeBtn');
const resumeDropdown = document.getElementById('resumeDropdown');

// Add event listener to the resume button
resumeBtn.addEventListener('click', function(event) {
  // Toggle the 'show' class on the dropdown content
  resumeDropdown.classList.toggle('show');
  // Stop the event from propagating to prevent the dropdown from closing immediately
  event.stopPropagation();
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', function(event) {
  // Check if the clicked element is outside the resume section
  if (!event.target.closest('.resume')) {
    // Close the dropdown
    resumeDropdown.classList.remove('show');
  }
});

// Handle option 1: View resume (Placeholder action)
document.getElementById('viewResume').addEventListener('click', function(event) {
  // Replace this with the action to view the resume
  console.log('Viewing resume...');
  // Close the dropdown after the option is clicked
  resumeDropdown.classList.remove('show');
  // Stop the event from propagating
  event.stopPropagation();
});

// Handle option 2: Download resume (Placeholder action)
document.getElementById('downloadResume').addEventListener('click', function(event) {
  // Replace this with the action to download the resume
  console.log('Downloading resume...');
  // Close the dropdown after the option is clicked
  resumeDropdown.classList.remove('show');
  // Stop the event from propagating
  event.stopPropagation();
});
function toggleRotation(image) {
    image.classList.toggle('rotate');
}
