import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class Chart {
  constructor(ref, data, labelColor, gridColor, line) {
    this.ref = ref;
    this.data = data;
    this.labelColor = labelColor || "#ffcca2";
    this.gridColor = gridColor || "#4e4999";
    this.line = line || "#ffcca2";
  }

  start() {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create(this.ref, am4charts.XYChart);
    // chart.background.fill = 'rgba(87, 82, 160, 1)';
    // Peoples
    chart.padding(30, 20, 0, 0);
    // Schools
    chart.padding(0, 20, 0, 0);

    // Create axes
    const refactoredData = this.data.map(i => {
      const iDate = i.rating.data;
      const iValue = i.rating.point;
      const ibulletToolipeImg = i.image;
      const name = i.name.firstName + " " + i.name.lastName;

      return {
        date: iDate,
        value: iValue,
        image: ibulletToolipeImg,
        name: name
      };
    });

    chart.data = refactoredData;

    // X - Grid Axis formats and start/end location
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormats.setKey("day", "dd.MM.yy");
    dateAxis.periodChangeDateFormats.setKey("day", "dd.MM.yy");
    dateAxis.startLocation = 0.3;
    dateAxis.endLocation = 0.7;
    // X - Grid settings
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.renderer.labels.template.location = 0.5;
    // X - Grid Color
    dateAxis.renderer.grid.template.stroke = am4core.color(this.gridColor);
    dateAxis.renderer.grid.template.strokeOpacity = 1;
    // X - Grid label
    dateAxis.renderer.labels.template.stroke = am4core.color(this.labelColor);
    dateAxis.renderer.labels.template.fontSize = 10;
    // X - Grid tooltip
    dateAxis.tooltip.disabled = true;

    // Y - Grid Axis Settings
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = false;
    valueAxis.renderer.minWidth = 0;
    valueAxis.renderer.maxLabelPosition = 0.99;
    valueAxis.renderer.minGridDistance = 25;
    valueAxis.min = 0;
    valueAxis.max = 1000;
    valueAxis.togglable = false;
    // valueAxis.step = 250;
    valueAxis.strictMinMax = true;
    // valueAxis.logarithmic = true;
    // Y - Grid grid
    valueAxis.renderer.grid.template.stroke = am4core.color(this.gridColor);
    valueAxis.renderer.grid.template.strokeOpacity = 1;
    // Y - Grid label
    valueAxis.renderer.labels.template.stroke = am4core.color(this.labelColor);
    valueAxis.renderer.labels.template.fontSize = 10;
    valueAxis.renderer.baseGrid.disabled = true;
    // Y - Grid tooltip
    // valueAxis.tooltip.disabled = true;

    // Create series
    const lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.stroke = am4core.color("#FFCCA2");
    lineSeries.strokeWidth = 3;
    // set chart values
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.dataFields.name = "name";
    // Tooltipe
    // lineSeries.tooltipText = "{name}";
    lineSeries.tooltip.getFillFromObject = false;
    lineSeries.tooltip.background.fill = am4core.color("rgba(0,0,0,1)");
    // lineSeries.tooltip.background.strokeWidth = 0;
    // lineSeries.tooltip.pointerOrientation  = "up"
    chart.cursor = new am4charts.XYCursor();

    lineSeries.tooltipHTML = `
        <div>
          <center>
          <img src="{image}" width=24 height=24>
          </center>
          <hr />
          <table>
          <tr>
            <td>{name}</td>
          </tr>
          <tr>
            <td align="center"><center>Очки: {value}</center></td>
          </tr>
          </table>
        </div>
        <hr />`;
    // Add simple bullet to each chart point
    const bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.fill = am4core.color("#FFCCA2");
    bullet.valign = "bottom";
    bullet.align = "center";
    bullet.isMeasured = true;
    bullet.mouseEnabled = false;
    bullet.verticalCenter = "bottom";

    this.chart = chart;

    // Responsive
    chart.responsive.useDefault = false;
    chart.responsive.enabled = true;

    let i = 0;
    chart.responsive.rules.push({
      relevant: function(target) {
        if (target.pixelWidth <= 560 && i === 0) {
          return true;
        }

        return false;
      },
      state: function(target, stateId) {
        if (target instanceof am4charts.AxisRendererX) {
          console.log("DASDA");

          var state = target.states.create(stateId);
          // console.log(state);

          state.properties.minGridDistance = 75;
          return state;
        }
        return null;
      }
    });
  }
  removeData() {
    this.chart.data.pop();
    this.chart.invalidateData();
  }
  addData() {
    const obj = {
      date: new Date(2020, 4, 1),
      value: 1000,
      name: "Артём Грачёвский",
      bulletToolipeImg:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo"
    };
    this.chart.data.push(obj);
    this.chart.invalidateData();
  }
  setDefaultData() {
    const data = [
      {
        image:
          "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo",
        name: {
          firstName: "Артём",
          lastName: "Грачёвский"
        },
        rating: {
          point: 150,
          data: new Date(2020, 4, 1)
        },
        place: 1
      },
      {
        image:
          "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo",
        name: {
          firstName: "Артём",
          lastName: "Грачёвский"
        },
        rating: {
          point: 300,
          data: new Date(2020, 4, 2)
        },
        place: 1
      },
      {
        image:
          "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo",
        name: {
          firstName: "Артём",
          lastName: "Грачёвский"
        },
        rating: {
          point: 200,
          data: new Date(2020, 4, 3)
        },
        place: 1
      },
      {
        image:
          "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo",
        name: {
          firstName: "Артём",
          lastName: "Грачёвский"
        },
        rating: {
          point: 500,
          data: new Date(2020, 4, 4)
        },
        place: 1
      },
      {
        image:
          "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo",
        name: {
          firstName: "Артём",
          lastName: "Грачёвский"
        },
        rating: {
          point: 400,
          data: new Date(2020, 4, 5)
        },
        place: 1
      },
      {
        image:
          "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo",
        name: {
          firstName: "Артём",
          lastName: "Грачёвский"
        },
        rating: {
          point: 480,
          data: new Date(2020, 4, 6)
        },
        place: 1
      },
      {
        image:
          "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo",
        name: {
          firstName: "Артём",
          lastName: "Грачёвский"
        },
        rating: {
          point: 200,
          data: new Date(2020, 4, 7)
        },
        place: 1
      },
      {
        image:
          "https://lh3.googleusercontent.com/ogw/ADGmqu9mZEEwtpoBXAEKZix-Jv6phMmdyN-eNI0MghNe=s83-c-mo",
        name: {
          firstName: "Артём",
          lastName: "Грачёвский"
        },
        rating: {
          point: Math.random() * (750 + 1 - 0),
          data: new Date(2020, 4, 10)
        },
        place: 1
      }
    ];
    const refactoredData = data.map(i => {
      const iDate = i.rating.data;
      const iValue = i.rating.point;
      const ibulletToolipeImg = i.image;

      return {
        date: iDate,
        value: iValue,
        bulletToolipeImg: ibulletToolipeImg
      };
    });

    this.chart.data = refactoredData;
    this.chart.invalidateData();
  }
}

export default Chart;
