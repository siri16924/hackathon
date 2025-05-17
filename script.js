const timeSlider = document.getElementById("timeSlider");
const brightnessSlider = document.getElementById("brightnessSlider");
const autoBrightnessToggle = document.getElementById("autoBrightnessToggle");
const visualizer = document.getElementById("visualizer");

const times = ["morning_sunrise","morning", "afternoon", "evening","evening_sunset", "night"];

const autoBrightnessValues = [80, 100, 110, 80, 70, 40];

function updateTheme() {
  visualizer.className = "visualizer";

  const timeIndex = parseInt(timeSlider.value);
  const time = times[timeIndex];
  visualizer.classList.add(time);

  if (autoBrightnessToggle.checked) {
    const autoBrightness = autoBrightnessValues[timeIndex];
    brightnessSlider.value = autoBrightness;
  }

  const brightness = brightnessSlider.value;
  visualizer.style.filter = `brightness(${brightness}%)`;
}

timeSlider.addEventListener("input", updateTheme);
brightnessSlider.addEventListener("input", () => {
  if (!autoBrightnessToggle.checked) updateTheme();
});

autoBrightnessToggle.addEventListener("change", () => {
    brightnessSlider.disabled = autoBrightnessToggle.checked;
    updateTheme();
  });

updateTheme();


  

