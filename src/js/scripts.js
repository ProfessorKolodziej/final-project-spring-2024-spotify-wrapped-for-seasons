// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const chartCanvas = document.querySelector('#springChart');

  new Chart(chartCanvas, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', ''],
      datasets: [{
        label: '# of Streams',
        data: [12, 19, 3, 5, 2],
        borderWidth: 1,
        backgroundColor: ["#A94064", "#E75480", "#FF69B4", "#FFB7C5", "#FFD1DC"]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
