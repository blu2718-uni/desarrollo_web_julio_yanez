document.addEventListener('DOMContentLoaded', function() {
  // Gráfico 1: Miembros registrados por día (líneas)
  fetch('/estadisticas/miembros-por-dia')
    .then(r => r.json())
    .then(datos => {
      const categorias = [];
      const valores = [];
      for (const d of datos) {
        categorias.push(d.dia);
        valores.push(d.cantidad);
      }

      Highcharts.chart('grafico-miembros-dia', {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Miembros registrados por día'
        },
        xAxis: {
          categories: categorias,
          title: {
            text: 'Día'
          }
        },
        yAxis: {
          title: {
            text: 'Cantidad de miembros'
          },
          allowDecimals: false
        },
        series: [{
          name: 'Miembros',
          data: valores
        }]
      });
    })
    .catch(() => {
      document.getElementById('grafico-miembros-dia').innerHTML =
        '<p style="color:red;">Error al cargar estadísticas de miembros por día.</p>';
    });
});
