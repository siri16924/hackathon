const timeSlider = document.getElementById("timeSlider");
const brightnessSlider = document.getElementById("brightnessSlider");
const autoToggle = document.getElementById("autoBrightnessToggle");

const themeSwitch = document.getElementById("themeSwitch");

const timeImage = document.getElementById("timeImage");
const autoImage = document.getElementById("autoImage");
const themeDisplay = document.getElementById("themeDisplay");

const imagePaths = [
  "images/dawn.jpeg",        
  "images/morning.jpeg",    
  "images/noon.jpeg",    
  "images/evening.jpeg",     
  "images/night.jpeg",       
  "images/late_night.jpeg"  
];

const autoBrightnessValues = [100, 90, 100, 90, 80, 70];

function updateImage() {
  const index = parseInt(timeSlider.value);
  const imageSrc = imagePaths[index];
  timeImage.src = imageSrc;
  autoImage.src = imageSrc; 
}

function updateBrightness() {
  const brightness = brightnessSlider.value;
  timeImage.style.filter = `brightness(${brightness}%)`;
  autoImage.style.filter = `brightness(${autoBrightnessValues}%)`;
  themeDisplay.style.filter = `brightness(${brightness}%)`;

}

function handleAutoBrightness() {
  const index = parseInt(timeSlider.value);
  const autoValue = autoBrightnessValues[index];

  if (autoToggle.checked) {
    brightnessSlider.disabled = true;
    timeImage.style.filter = `brightness(${autoValue}%)`;
    autoImage.style.filter = `brightness(${autoValue}%)`;
  } else {
    brightnessSlider.disabled = false;
    updateBrightness();
  }
}

function updateColorTheme() {
  const index = parseInt(timeSlider.value);
  const colors = [
    "#FFCC99", // Dawn
    "#FFCC66", // Morning
    "#FFFFCC", // Noon
    "#FF9966", // Evening
    "#666699", // Night
    "#333333"  // Late Night
  ];
  const currentColor = colors[index];
  themeDisplay.style.backgroundColor = currentColor;
  themeDisplay.style.color = "#ffffff"; 
}           

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
});

timeSlider.addEventListener("input", () => {
  updateImage();
  handleAutoBrightness();
  updateColorTheme();
});

brightnessSlider.addEventListener("input", updateBrightness);
autoToggle.addEventListener("change", handleAutoBrightness);
autoToggle.addEventListener("change", () => {
  handleAutoBrightness();
  updateColorTheme(); 
});


document.body.classList.add("dark-mode");
updateImage();
handleAutoBrightness();  
updateColorTheme(); 