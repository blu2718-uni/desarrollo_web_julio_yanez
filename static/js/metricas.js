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

  // Gráfico 2: Actividades por tipo (torta)
  fetch('/estadisticas/actividades-por-tipo')
    .then(r => r.json())
    .then(datos => {
      const dataPie = [];
      for (const d of datos) {
        dataPie.push([d.tipo, d.cantidad]);
      }

      Highcharts.chart('grafico-tipos', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Actividades por tipo'
        },
        series: [{
          name: 'Actividades',
          data: dataPie
        }]
      });
    })
    .catch(() => {
      document.getElementById('grafico-tipos').innerHTML =
        '<p style="color:red;">Error al cargar estadísticas de actividades por tipo.</p>';
    });

  // Gráfico 3: Actividades por comuna (barras)
  fetch('/estadisticas/actividades-por-comuna')
    .then(r => r.json())
    .then(datos => {
      const comunas = [];
      const valores = [];
      for (const d of datos) {
        comunas.push(d.comuna);
        valores.push(d.cantidad);
      }

      Highcharts.chart('grafico-comunas', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Actividades por comuna'
        },
        xAxis: {
          categories: comunas,
          title: {
            text: 'Comuna'
          }
        },
        yAxis: {
          title: {
            text: 'Cantidad de actividades'
          },
          allowDecimals: false
        },
        series: [{
          name: 'Actividades',
          data: valores
        }]
      });
    })
    .catch(() => {
      document.getElementById('grafico-comunas').innerHTML =
        '<p style="color:red;">Error al cargar estadísticas de actividades por comuna.</p>';
    });
});
