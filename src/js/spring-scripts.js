const springCanvas = document.querySelector('#springChart');

const springChart=new Chart(springCanvas, {
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


// Define an array of Spotify track URIs for each bar
const spotifyUris = [
	'spotify:track:30TCAxiC8zVb5NVdUoUuCS',
	'spotify:track:0KIpuVYhKUUUpjo6H5NvBY',
	'spotify:track:2Hh3ETdQKrmSI3QS0hme7g',
	'spotify:track:4lXbVIprNR0de0Rjjzj9Am',
	'spotify:track:6f4itfvWzS59Qu7JWorhxn'
];

// Add click event listener to the chart
springCanvas.onclick = function(event) {
	const activeElement = springChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true)[0];
	if (activeElement) {
		 const index = activeElement.index;
		 const uri = spotifyUris[index]; // Get the Spotify URI based on the index
		 const url = `https://open.spotify.com/embed/track/${uri.split(':')[2]}`; // Convert Spotify URI to URL
		 showIframe(url);
	}
};

// Function to show iframe
function showIframe(url) {
	const iframeContainer = document.getElementById('iframe-container');
	iframeContainer.innerHTML = `<iframe src="${url}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
};
