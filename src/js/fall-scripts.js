const fallCanvas = document.querySelector('#fallChart');

new Chart(fallCanvas, {
  type: 'bar',
  data: {
	 labels: ['', '', '', '', ''],
	 datasets: [{
		label: '',
		data: [100, 86, 84, 82, 80],
		borderWidth: 1,
		backgroundColor: ['#8B4000', '#CC5500', '#D27D2D', '#F4BB44', '#FBCEB1']
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
	'spotify:track:4xdBrk0nFZaP54vvZj0yx7',
	'spotify:track:53IRnAWx13PYmoVYtemUBS',
	'spotify:track:7FOgcfdz9Nx5V9lCNXdBYv',
	'spotify:track:4rlQza35DE4Prh5yonxnCs',
	'spotify:track:4xdBrk0nFZaP54vvZj0yx7'
];

// Add click event listener to the chart
fallCanvas.onclick = function(event) {
	const activeElement = Chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true)[0];
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
