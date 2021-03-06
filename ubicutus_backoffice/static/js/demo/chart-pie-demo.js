// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var $statusChart = $("#status-chart");
$.ajax ({
  url:$statusChart.data("url"),
  success: function (data) {
    if(data.empty == 1) {
      $('#tasksEmpty').show();
    } else {
      $('#tasksEmpty').hide();
      var ctx = $statusChart[0].getContext("2d");
      var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.labels,
          datasets: [{
            data: data.data,
            backgroundColor: ['#db6388', '#f6c23e', '#1cc88a','#e74a3b'],
            hoverBackgroundColor: ['#cf426d', '#d9ab38', '#17a673', '#ad271b'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });
    }
  }
})

