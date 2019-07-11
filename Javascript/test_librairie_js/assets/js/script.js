var svg = dimple.newSvg("#bodou", 800, 600);
    var data = [
      { "Word":"Hello", "Awesomeness":200 },
      { "Word":"World", "Awesomeness":300 },
      { "Word":"Less", "Awesomeness":400 },
      { "Word":"potato", "Awesomeness":500 },
      { "Word":"cuillere", "Awesomeness":500 },
      { "Word":"carte", "Awesomeness":300 },
      { "Word":"carton", "Awesomeness":580 },
      { "Word":"arbre", "Awesomeness":500 },
      { "Word":"albert", "Awesomeness":570 },
      { "Word":"cailloux", "Awesomeness":500 },
      
      ];



      // script p1
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Word");
    chart.addMeasureAxis("y", "Awesomeness");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();
      
    var granimInstance = new Granim({
      element: '#canvas-basic',
      direction: 'left-right',
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  ['#CE0E89', '#ff5e62'],
                  ['#00F260', '#0575E6'],
                  ['#e1eec3', '#f05053']
              ]
          }
      }
  });



  