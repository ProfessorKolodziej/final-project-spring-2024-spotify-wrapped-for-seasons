// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const springCanvas = document.querySelector('#springChart');

new Chart(springCanvas, {
  type: 'bar',
  data: {
	 labels: ['', '', '', '', ''],
	 datasets: [{
		label: '',
		data: [119, 113, 105, 94, 83],
		borderWidth: 1,
		backgroundColor: ["#A94064", "#E75480", "#FF69B4", "#FFB7C5", "#FFD1DC"]
	 }]
  },
  options: {
	scales: {
	y: {
		title: {
			display: true,
				align: 'center',
				text: "Total minutes streamed",
				font: "Cabin",
				 },
					beginAtZero: true
		}
				},
				plugins: {
				legend: {
				display: false,
			},
		}
	}
});
