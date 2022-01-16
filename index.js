const container = document.querySelector('.liquid');

function hslColors () {
  let colors = [];
  let hue = Math.floor(Math.random() * (320 - 153) + 153);
  let saturation = Math.floor(Math.random() * (100 - 90) + 90);
  let lightness = Math.floor(Math.random() * (80 - 70) + 70);
  
  colors.push(`hsl(${hue},${saturation}%, ${lightness}%)`);
  return colors;
};


function colors() {
  let template = `
  <div class="color" style="background: ${hslColors()};">       </div>
  `;
  
  container.insertAdjacentHTML('beforeend', template);
};

for(i = 0; i < 30; i++) {
  colors();
};
