const summerCanvas = document.querySelector('#summerChart');

new Chart(summerCanvas, {
  type: 'bar',
  data: {
	 labels: ['', '', '', '', ''],
	 datasets: [{
		label: '',
		data: [134, 118, 116, 109, 98],
		borderWidth: 1,
		backgroundColor: ['#013220', '#355E3B', '#87A96B', '#77DD77', '#93E9BE']
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
