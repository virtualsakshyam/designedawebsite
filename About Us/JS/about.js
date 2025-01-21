// script.js
document.addEventListener("DOMContentLoaded", () => {
    const btnStory = document.getElementById("btn-story");
    const btnTeam = document.getElementById("btn-team");
    const btnMission = document.getElementById("btn-mission");
  
    const storySection = document.getElementById("our-story");
    const teamSection = document.getElementById("team");
    const missionSection = document.getElementById("mission");
  
    // Helper function to show a section and hide others
    function showSection(sectionToShow) {
      [storySection, teamSection, missionSection].forEach((section) => {
        section.classList.add("hidden");
      });
      sectionToShow.classList.remove("hidden");
  
      // Reset active button
      [btnStory, btnTeam, btnMission].forEach((btn) => btn.classList.remove("active"));
    }
  
    // Add event listeners to buttons
    btnStory.addEventListener("click", () => {
      showSection(storySection);
      btnStory.classList.add("active");
    });
  
    btnTeam.addEventListener("click", () => {
      showSection(teamSection);
      btnTeam.classList.add("active");
    });
  
    btnMission.addEventListener("click", () => {
      showSection(missionSection);
      btnMission.classList.add("active");
    });
  
    // Show "Our Story" by default
    showSection(storySection);
  });
  