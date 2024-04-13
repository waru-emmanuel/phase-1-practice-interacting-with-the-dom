document.addEventListener("DOMContentLoaded", () => {
    // Variables to hold elements
    const counter = document.getElementById("counter");
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const likesList = document.querySelector(".likes");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const submitButton = document.getElementById("submit");
    
    let count = 0;
    let timer = setInterval(incrementCounter, 1000);
  
    // Event listener for the minus button
    minusButton.addEventListener("click", () => {
      count--;
      updateCounter();
    });
  
    // Event listener for the plus button
    plusButton.addEventListener("click", () => {
      count++;
      updateCounter();
    });
  
    // Event listener for the heart button
    heartButton.addEventListener("click", () => {
      const like = document.createElement("li");
      like.textContent = `${count} likes`;
      likesList.appendChild(like);
    });
  
    // Event listener for the pause button
    pauseButton.addEventListener("click", () => {
      if (pauseButton.textContent === "pause") {
        clearInterval(timer);
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = "resume";
      } else {
        timer = setInterval(incrementCounter, 1500);
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = "pause";
      }
    });
  
    // Event listener for the  'comment form submission'
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const comment = commentInput.value;
      if (comment) {
        const commentDiv = document.createElement("div");
        commentDiv.textContent = comment;
        document.getElementById("list").appendChild(commentDiv);
        commentInput.value = ""; // for clearing the input field after submission
      }
    });
  
    // For updating the counter display
    function updateCounter() {
      counter.textContent = count;
    }
  
    // For incrementing the counter
    function incrementCounter() {
      count++;
      updateCounter();
    }
  });
  