const winterCanvas = document.querySelector('#winterChart');

new Chart(winterCanvas, {
  type: 'bar',
  data: {
	 labels: ['', '', '', '', ''],
	 datasets: [{
		label: '',
		data: [123, 80, 64, 62, 59],
		borderWidth: 1,
		backgroundColor: ['#002147', '#003E7C', '#0047AB', '#4169E1', '#ADD8E6']
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
