// https://www.youtube.com/watch?v=aVSf0b1jVKk&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=6
// Important 


// <div class="grandParent" style="
//     background-color: red;
//     height: 200px;
//     width: 200px;
//     z-index: 99999999999999999;"> Grand Parent 
    
//     <div class="parent"> Parent
//         <div class="child"> Child </div>
//     </div>
// </div>


// Event Bubbiling.
document.querySelector(".grandParent").addEventListener("click", () => console.log("grandParent..."));
document.querySelector(".parent").addEventListener("click", () => console.log("parent..."));
document.querySelector(".child").addEventListener("click", () => console.log("child..."));

// Event Capturing.
document.querySelector(".grandParent").addEventListener("click", () => console.log("grandParent..."), true);
document.querySelector(".parent").addEventListener("click", () => console.log("parent..."), true);
document.querySelector(".child").addEventListener("click", () => console.log("child..."), true);



