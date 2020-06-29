var zwaartekracht = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(zwaartekracht, {
	type: 'line',
	data: {
		labels: ['15:00', '16:00', '17:00', '18:00', '19:00'],
		datasets: [
			{
				label: 'Zwaartekracht per uur ',
				data: [0, 3, 12, 15, 20],
				backgroundColor: ['rgba(153, 102, 255, 0.01)'],
				borderColor: ['#2F80ED'],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	},
});

var verbruik = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(verbruik, {
	type: 'bar',
	data: {
		labels: ['Eten', 'Drinken'],
		datasets: [
			{
				label: [''],
				data: [75, 58, 100],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	},
});

var oxy = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(oxy, {
	type: 'doughnut',
	data: {
		// labels: ["fuel", "used"],
		datasets: [
			{
				// label: 'brandstof niveau',
				data: [95, 5],
				backgroundColor: ['rgba(54, 162, 235, 0.2)', '#292E3C'],
			},
		],
	},
});
var snelheid = document.getElementById('myChart4').getContext('2d');
var myChart = new Chart(snelheid, {
	type: 'doughnut',
	data: {
		// labels: ["fuel", "used"],
		datasets: [
			{
				label: 'snelheid in km/h',
				data: [5000, 3000],
				backgroundColor: ['rgba(75, 192, 192, 0.2)', '#292E3C'],
			},
		],
	},
});
