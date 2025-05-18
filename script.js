const timeSlider = document.getElementById("timeSlider");
const brightnessSlider = document.getElementById("brightnessSlider");
const autoToggle = document.getElementById("autoBrightnessToggle");

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

updateImage();
handleAutoBrightness();  
updateColorTheme(); 