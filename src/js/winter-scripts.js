const winterCanvas = document.querySelector('#winterChart');

const winterChart=new Chart(winterCanvas, {
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


// Define an array of Spotify track URIs for each bar
const spotifyUris = [
	'spotify:track:2wxYlJe8kjAjQI4FSj2qNF',
	'spotify:track:6sycT6FiSI1YSERI9279qY',
	'spotify:track:5ijSUALHfNot7KSafyLI4E',
	'spotify:track:5nW4z3pfZgJAJ2QTCz9AIE',
	'spotify:track:6OKmGZASRCmiKQKz4hCNrs'
];

// Add click event listener to the chart
winterCanvas.onclick = function(event) {
	const activeElement = winterChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true)[0];
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
