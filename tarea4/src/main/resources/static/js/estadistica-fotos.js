Highcharts.setOptions({
  colors: ['#B91C1C', '#1F2937', '#6B7280', '#991B1B', '#E5E7EB'],
  chart: {
    style: {
      fontFamily: 'Inter, sans-serif'
    }
  },
  title: {
    style: {
      fontFamily: 'Source Serif 4, serif',
      color: '#1F2937'
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('/api/estadisticas-fotos')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      Highcharts.chart('grafico-fotos', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Estado de las fotos'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y}'
            }
          }
        },
        series: [{
          name: 'Cantidad',
          colorByPoint: true,
          data: [
            { name: 'Vigentes', y: data.vigentes },
            { name: 'Eliminadas', y: data.eliminadas }
          ]
        }]
      });
    })
    .catch(function(err) {
      document.getElementById('grafico-fotos').textContent = 'Error al cargar las estadísticas.';
      console.error('Error:', err);
    });
});
