Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
 function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;
  
    const chatBox = document.getElementById("chat-box");
  
    // Display user message
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userInput;
    userMessage.style.textAlign = "right";
    chatBox.appendChild(userMessage);
  
    // Simulate AI response
    const aiMessage = document.createElement("p");
    aiMessage.textContent = "AI: Sorry, I'm a simple bot.";
    chatBox.appendChild(aiMessage);
  
    // Clear input
    document.getElementById("user-input").value = "";
  }
  