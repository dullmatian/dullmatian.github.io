var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["6ヶ月前","5ヶ月前","4ヶ月前","3ヶ月前","2ヶ月前","1ヶ月前","今月"],
        datasets: [{
            label: '投げ銭の総量',
            data: graph_total,
            backgroundColor: [
                'rgba(255, 82, 52, 0.2)',
                'rgba(255, 82, 52, 0.2)',
                'rgba(255, 82, 52, 0.2)',
                'rgba(255, 82, 52, 0.2)',
                'rgba(255, 82, 52, 0.2)',
                'rgba(255, 82, 52, 0.2)',
                'rgba(255, 82, 52, 0.2)',
            ],
            borderColor: [
                'rgba(226, 66, 31, 1)',
                'rgba(226, 66, 31, 1)',
                'rgba(226, 66, 31, 1)',
                'rgba(226, 66, 31, 1)',
                'rgba(226, 66, 31, 1)',
                'rgba(226, 66, 31, 1)',
                'rgba(226, 66, 31, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
