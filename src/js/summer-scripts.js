const summerCanvas = document.querySelector('#summerChart');

const summerChart=new Chart(summerCanvas, {
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


// Define an array of Spotify track URIs for each bar
const spotifyUris = [
	'spotify:track:48Qes8IUekSZpcNDQgYzUX',
	'spotify:track:1khA4hwhZD4HMecyE1e9U1',
	'spotify:track:0FUGzUqkqRktGBvIeM3p2X',
	'spotify:track:3x9BHDNsyg50xSEzmLMyUd',
	'spotify:track:4QEsxFZRA3RnjQAPYS3UXa'
];

// Add click event listener to the chart
summerCanvas.onclick = function(event) {
	const activeElement = summerChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true)[0];
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
