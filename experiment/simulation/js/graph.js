function plotData() {
  var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    graph.style.height = "0px";
  if (
    values["DC1"]["value"] != 0 &&
    values["G1"]["fire2"] != 0 &&
    values["G2"]["fire1"] != 0 &&
    values["G2"]["fire2"] != 0 &&
    values["G3"]["fire1"] != 0 &&
    values["G3"]["fire2"] != 0 &&
    values["G4"]["fire1"] != 0 &&
    values["G4"]["fire2"] != 0 &&
    values["G5"]["fire1"] != 0 &&
    values["G5"]["fire2"] != 0 &&
    values["G6"]["fire1"] != 0 &&
    values["G6"]["fire2"] != 0 &&
    values["freq"] != 0&&
    values['R1']['value']!=0
  ) {
    if (combination == 120) {
      var wave_forms = generateGraph120();
    } else {
      var wave_forms = generateGraph180();
    }

    
    graph.style.height = "900px";
    var graph_element = document.createElement("div");
    graph_element.id = "VR";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "VR",
      [
        {
          x: wave_forms[1][1],
          y: wave_forms[1][0],
          mode: "lines",
          name: "V<sub>R </sub>",
          marker: {
            color: "Red",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM4"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.081], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1),
            parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1,
          ],
          title: "<b>Phase Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "VY";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "VY",
      [
        {
          x: wave_forms[2][1],
          y: wave_forms[2][0],
          mode: "lines",
          name: "V<sub>Y</sub> ",
          marker: {
            color: "Orange",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: " ",
          marker: {
            color: "white",
          },
        },
      ],
      {
        title: "<b>" + values["VM5"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.081], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1),
            parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1,
          ],
          title: "<b>Phase Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "VB";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "VB",
      [
        {
          x: wave_forms[3][1],
          y: wave_forms[3][0],
          mode: "lines",
          name: "V<sub>B</sub> ",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: " ",
          marker: {
            color: "white",
          },
        },
      ],
      {
        title: "<b>" + values["VM6"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.081], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1),
            parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1,
          ],
          title: "<b>Phase Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "VRY";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "VRY",
      [
        {
          x: wave_forms[5][1],
          y: wave_forms[5][0],
          mode: "lines",
          name: "V<sub>RY</sub>",
          marker: {
            color: "red",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM2"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.081], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0])+(((1/10)*parseInt(wave_forms[0][0])))+1),
            parseInt(wave_forms[0][0])+(((1/10)*parseInt(wave_forms[0][0])))+1,
          ],
          title: "<b>Line Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );

    graph_element = document.createElement("div");
    graph_element.id = "VYB";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "VYB",
      [
        {
          x: wave_forms[6][1],
          y: wave_forms[6][0],
          mode: "lines",
          name: "V<sub>YB</sub>",
          marker: {
            color: "#ff7000",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "   ",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM3"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.081], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0])+(((1/10)*parseInt(wave_forms[0][0])))+1),
            parseInt(wave_forms[0][0])+(((1/10)*parseInt(wave_forms[0][0])))+1,
          ],
          title: "<b>Line Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "VRB";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "VRB",
      [
        {
          x: wave_forms[4][1],
          y: wave_forms[4][0],
          mode: "lines",
          name: "V<sub>RB</sub>",
          marker: {
            color: "Green",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM1"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.081], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0])+(((1/10)*parseInt(wave_forms[0][0])))+1),
            parseInt(wave_forms[0][0])+(((1/10)*parseInt(wave_forms[0][0])))+1,
          ],
          title: "<b>Line Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
  }
}
function generateGraph120() {
  const freq = values["freq"];
  const dc_value = parseInt(values["DC1"]["value"]);
  const time_stamp = 1 / freq;
  var time = time_stamp;
  const top = dc_value / 2;
  const bottom = -1 * (dc_value / 2);
  var angle_60 = (time_stamp / 360) * 60;
  var angle_120 = (time_stamp / 360) * 120;
  var angle_180 = (time_stamp / 360) * 180;
  var angle_240 = (time_stamp / 360) * 240;
  var angle_300 = (time_stamp / 360) * 300;
  var angle_360 = time_stamp;
  var angle_420 = (time_stamp / 360) * 420;

  var vr = [],
    vy = [],
    vb = [];
  var vrb = [],
    vry = [],
    vyb = [];
  var xval = [];

  for (let x = 0; x <= 0.08; x = x + 0.00001) {
    if (x >= angle_420) {
      angle_120 = angle_120 + time_stamp;
      angle_180 = angle_180 + time_stamp;
      angle_240 = angle_240 + time_stamp;
      angle_300 = angle_300 + time_stamp;
      angle_360 = angle_360 + time_stamp;
      angle_420 = angle_420 + time_stamp;
    }
    if (x >= angle_60) {
      if (x < angle_120) {
        vr.push(top);
        vy.push(0);
        vb.push(bottom);
        vrb.push(top - bottom);
        vry.push(top - 0);
        vyb.push(0 - bottom);
        xval.push(x);
      } else if (x < angle_180) {
        vr.push(0);
        vy.push(top);
        vb.push(bottom);
        vrb.push(0 - bottom);
        vry.push(0 - top);
        vyb.push(top - bottom);
        xval.push(x);
      } else if (x < angle_240) {
        vr.push(bottom);
        vy.push(top);
        vb.push(0);
        vrb.push(bottom - 0);
        vry.push(bottom - top);
        vyb.push(top - 0);
        xval.push(x);
      } else if (x < angle_300) {
        vr.push(bottom);
        vy.push(0);
        vb.push(top);
        vrb.push(bottom - top);
        vry.push(bottom - 0);
        vyb.push(0 - top);
        xval.push(x);
      } else if (x < angle_360) {
        vr.push(0);
        vy.push(bottom);
        vb.push(top);
        vrb.push(0 - top);
        vry.push(0 - bottom);
        vyb.push(bottom - top);
        xval.push(x);
      } else if (x < angle_420) {
        vr.push(top);
        vy.push(bottom);
        vb.push(0);
        vrb.push(top - 0);
        vry.push(top - bottom);
        vyb.push(bottom - 0);
        xval.push(x);
      }
    } else {
      vr.push(0);
      vy.push(0);
      vb.push(0);
      vrb.push(0);
      vry.push(0);
      vyb.push(0);
      xval.push(x);
    }
  }
  var rms=0.4082*dc_value;
  rms=rms*100;
  rms=parseInt(rms);
  values['rms']=rms/100;
  var line=0.7071*dc_value;
  line=line*100;
  line=parseInt(line);
  values['line']=line/100;

  return [
    [dc_value, top],
    [vr, xval],
    [vy, xval],
    [vb, xval],
    [vrb, xval],
    [vry, xval],
    [vyb, xval],
  ];
}
function generateGraph180() {
  const freq = values["freq"];
  const dc_value = parseInt(values["DC1"]["value"]);
  const time_stamp = 1 / freq;
  const upper_top = dc_value * (2 / 3);
  const lower_top = dc_value * (1 / 3);
  var vr = [],
    vy = [],
    vb = [];
  var vrb = [],
    vry = [],
    vyb = [];
  var xval = [];
  var angle_60 = (time_stamp / 360) * 60;
  var angle_120 = (time_stamp / 360) * 120;
  var angle_180 = (time_stamp / 360) * 180;
  var angle_240 = (time_stamp / 360) * 240;
  var angle_300 = (time_stamp / 360) * 300;
  var angle_360 = time_stamp;
  var angle_420 = (time_stamp / 360) * 420;
  var angle_480 = (time_stamp / 360) * 480;
  for (let x = 0; x <= 0.08; x = x + 0.00001) {
    if (x >= angle_480) {
      angle_180 = angle_180 + time_stamp;
      angle_240 = angle_240 + time_stamp;
      angle_300 = angle_300 + time_stamp;
      angle_360 = angle_360 + time_stamp;
      angle_420 = angle_420 + time_stamp;
      angle_480 = angle_480 + time_stamp;
    }
    if (x >= angle_60) {
      if (x < angle_120) {
        vr.push(dc_value / 2);
        vy.push(0);
        vb.push(-1 * (dc_value / 2));
        vrb.push(dc_value);
        vry.push(dc_value / 2);
        vyb.push(dc_value / 2);
        xval.push(x);
      } else if (x < angle_180) {
        vr.push(lower_top);
        vy.push(lower_top);
        vb.push(-1 * upper_top);
        vrb.push(lower_top + upper_top);
        vry.push(0);
        vyb.push(lower_top + upper_top);
        xval.push(x);
      } else if (x < angle_240) {
        vr.push(-1 * lower_top);
        vy.push(upper_top);
        vb.push(-1 * lower_top);
        vrb.push(0);
        vry.push(-1 * (upper_top + lower_top));
        vyb.push(upper_top + lower_top);
        xval.push(x);
      } else if (x < angle_300) {
        vr.push(-1 * upper_top);
        vy.push(lower_top);
        vb.push(lower_top);
        vrb.push(-1 * (upper_top + lower_top));
        vry.push(-1 * (upper_top + lower_top));
        vyb.push(0);
        xval.push(x);
      } else if (x < angle_360) {
        vr.push(-1 * lower_top);
        vy.push(-1 * lower_top);
        vb.push(upper_top);
        vrb.push(-1 * (lower_top + upper_top));
        vry.push(0);
        vyb.push(-1 * (upper_top + lower_top));
        xval.push(x);
      } else if (x < angle_420) {
        vr.push(lower_top);
        vy.push(-1 * upper_top);
        vb.push(lower_top);
        vrb.push(0);
        vry.push(upper_top + lower_top);
        vyb.push(-1 * (upper_top + lower_top));
        xval.push(x);
      } else if (x < angle_480) {
        vr.push(upper_top);
        vy.push(-1 * lower_top);
        vb.push(-1 * lower_top);
        vrb.push(upper_top + lower_top);
        vry.push(upper_top + lower_top);
        vyb.push(0);
        xval.push(x);
      }
    } else {
      vr.push(0);
      vy.push(0);
      vb.push(0);
      vrb.push(0);
      vry.push(0);
      vyb.push(0);
      xval.push(x);
    }
  }
  var rms=0.4714*dc_value
  rms=rms*100;
  rms=parseInt(rms);
  values['rms']=rms/100;
  var line=0.8165 *dc_value;
  line=line*100;
  line=parseInt(line);
  values['line']=line/100;
  return [
    [dc_value, upper_top],
    [vr, xval],
    [vy, xval],
    [vb, xval],
    [vrb, xval],
    [vry, xval],
    [vyb, xval],
  ];
}

