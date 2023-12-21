function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["AC2"]["volt"] != 0 &&
    values["AC2"]["freq"] != 0 &&
    values["AC3"]["volt"] != 0 &&
    values["AC3"]["freq"] != 0 &&
    values["AC4"]["volt"] != 0 &&
    values["AC4"]["freq"] != 0 &&
    values["DC1"]["value"] != 0 &&
    values["R1"]["value"] != 0 &&
    values["I1"]["value"] != 0 &&
    values["R2"]["value"] != 0 &&
    values["I2"]["value"] != 0 &&
    values["R3"]["value"] != 0 &&
    values["I3"]["value"] != 0 
  ) {
    var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    a = generateGraph();
    var mine = document.createElement("div");
    mine.id = "input-waves";
    mine.classList.add("graph-style");
    graph.append(mine);
    Plotly.newPlot(
      "input-waves",
      [
        
        {
          x: a[2][1],
          y: a[2][0],
          mode: "lines",
          name: "V<sub>Sin1</sub>",
          marker: {
            color: "Red",
          },
        },

        {
          x: a[3][1],
          y: a[3][0],
          mode: "lines",
          name: "V<sub>Sin2</sub>",
          marker: {
            color: "Green",
          },
        },
        {
          x: a[4][1],
          y: a[4][0],
          mode: "lines",
          name: "V<sub>Sin3</sub>",
          marker: {
            color: "Purple",
          },
        },{
          x: a[1][1],
          y: a[1][0],
          mode: "lines",
          name: "V<sub>Tri</sub>",
          marker: {
            color: "#2886bb",
          },
        },
      ],
      {
        title:
          "<b>" +
         
          
          values["VM4"]["name"] +
          "/" +
          values["VM5"]["name"] +
          "/" +
          values["VM6"]["name"] +"/" + values["VM7"]["name"] +
          "</b>",
        xaxis: { range: [0, 0.041], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1 * (a[0][0] + 1), a[0][0] + 1],
          title: "<b>Amplitude(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );

    mine = document.createElement("div");
    mine.id = "vmab";
    mine.classList.add("graph-style");
    graph.append(mine);

    Plotly.newPlot(
      "vmab",
      [
        {
          x: a[5][1],
          y: a[5][0],
          mode: "lines",
          name: "V<sub>AB</sub>  ",
          marker: {
            color: "red",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "    ",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM1"]["name"] + "</b>",
        xaxis: { range: [0, 0.041], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1 * (a[0][1] + 1), a[0][1] + 1],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 30 },
      },
      { displayModeBar: false }
    );

    mine = document.createElement("div");
    mine.id = "vmbc";
    mine.classList.add("graph-style");
    graph.append(mine);
    Plotly.newPlot(
      "vmbc",
      [
        {
          x: a[6][1],
          y: a[6][0],
          mode: "lines",
          name: "V<sub>BC</sub>  ",
          marker: {
            color: "#2886bb",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "    ",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM3"]["name"] + "</b>",
        xaxis: { range: [0, 0.041], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1 * (a[0][1] + 1), a[0][1] + 1],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 30 },
      },
      { displayModeBar: false }
    );

    mine = document.createElement("div");
    mine.id = "vmac";
    mine.classList.add("graph-style");
    graph.append(mine);
    Plotly.newPlot(
      "vmac",
      [
        {
          x: a[7][1],
          y: a[7][0],
          mode: "lines",
          name: "V<sub>CA</sub>  ",
          marker: {
            color: "Green",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "    ",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM2"]["name"] + "</b>",
        xaxis: { range: [0, 0.041], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1 * (a[0][1] + 1), a[0][1] + 1],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 30 },
      },
      { displayModeBar: false }
    );
  }
}


function Reset() {
  window.location.reload();
}

function showtable() {
  var r = document.getElementById("readings");
  if ((r.style.display = "none")) {
    r.style.display = "block";
  } else {
    r.style.display.toggle();
  }
}

function generateGraph() {
  const ac1app = parseInt(values["AC1"]["volt"]);
  const ac1freq = parseInt(values["AC1"]["freq"]);
  const ac2app = parseInt(values["AC2"]["volt"]);
  const ac2freq = parseInt(values["AC2"]["freq"]);
  const ac3app = parseInt(values["AC3"]["volt"]);
  const ac3freq = parseInt(values["AC3"]["freq"]);
  const ac4app = parseInt(values["AC4"]["volt"]);
  const ac4freq = parseInt(values["AC4"]["freq"]);
  const dc_value = parseInt(values["DC1"]["value"]);
  var xval = [],
    ac1 = [],
    ac2 = [],
    ac3 = [],
    ac4 = [];
  var vm1 = [],
    vm2 = [],
    vm3 = [];
  var sine1, sine2, sine3, tri_wave;
  var tri_value_flag = true;
  var ab_avg = 0,
    bc_avg = 0,
    ac_avg = 0,
    ab_rms = 0,
    bc_rms = 0,
    ac_rms = 0,
    zzz = 0;
  if (ac1app > ac4app) {
    difference1 = (1 / 1000) * ac1app;
  } else {
    difference1 = (1 / 1000) * ac4app;
  }
  if (ac2app > ac4app) {
    difference2 = (1 / 1000) * ac2app;
  } else {
    difference2 = (1 / 1000) * ac4app;
  }
  if (ac3app > ac4app) {
    difference3 = (1 / 1000) * ac3app;
  } else {
    difference3 = (1 / 1000) * ac4app;
  }
  const distance = 1 / ac4freq;
  var slop1 = 4 * (ac4app / distance);
  var slop2 = -1 * slop1;
  var dist = 0;
  console.log(slop1, slop2);
  for (let x = 0; x <= 0.04; x += 0.000001) {
    sine1 = ac1app * Math.sin(2 * Math.PI * ac1freq * x);
    sine2 = ac2app * Math.sin(2 * Math.PI * ac2freq * x - (2 * Math.PI) / 3);
    sine3 = ac3app * Math.sin(2 * Math.PI * ac3freq * x + 2 * (Math.PI / 3));
    if (tri_value_flag) {
      tri_wave = slop1 * x - slop1 * dist - ac4app;
      if (tri_wave > ac4app) {
        dist = dist + distance;
        tri_value_flag = false;
        tri_wave = slop2 * x - slop2 * dist - ac4app;
      }
    } else {
      tri_wave = slop2 * x - slop2 * dist - ac4app;
      if (tri_wave < -1 * ac4app) {
        tri_value_flag = true;
        tri_wave = slop1 * x - slop1 * dist - ac4app;
      }
    }
    ac4.push(tri_wave);
    if (sine1 > tri_wave && sine2 > tri_wave) {
      vm1.push(0);
      ab_avg = ab_avg + 0;
      ab_rms = ab_rms + 0;
    } else if (sine1 > tri_wave && sine2 < tri_wave) {
      vm1.push(dc_value);
      ab_avg = ab_avg + dc_value;
      ab_rms = ab_rms + dc_value * dc_value;
    } else if (sine1 < tri_wave && sine2 > tri_wave) {
      vm1.push(-1 * dc_value);
      ab_avg = ab_avg -dc_value;
      ab_rms = ab_rms + dc_value * dc_value;
    } else {
      vm1.push(0);
      ab_avg = ab_avg + 0;
      ab_rms = ab_rms + 0;
    }
    if (sine1 > tri_wave && sine3 > tri_wave) {
      vm3.push(0);
      ac_avg = ac_avg + 0;
      ac_rms = ac_rms + 0;
    } else if (sine1 > tri_wave && sine3 < tri_wave) {
      vm3.push(dc_value);
      ac_avg = ac_avg + dc_value;
      ac_rms = ac_rms + dc_value * dc_value;
    } else if (sine1 < tri_wave && sine3 > tri_wave) {
      vm3.push(-1 * dc_value);
      ac_avg = ac_avg -dc_value;
      ac_rms = ac_rms + dc_value * dc_value;
    } else {
      vm3.push(0);
      ac_avg = ac_avg + 0;
      ac_rms = ac_rms + 0;
    }
    if (sine3 > tri_wave && sine2 > tri_wave) {
      vm2.push(0);
      bc_avg = bc_avg + 0;
      bc_rms = bc_rms + 0;
    } else if (sine3 > tri_wave && sine2 < tri_wave) {
      vm2.push(-1 * dc_value);
      bc_avg = bc_avg -dc_value;
      bc_rms = bc_rms + dc_value * dc_value;
    } else if (sine3 < tri_wave && sine2 > tri_wave) {
      vm2.push(dc_value);
      bc_avg = bc_avg + dc_value;
      bc_rms = bc_rms + dc_value * dc_value;
    } else {
      vm2.push(0);
      bc_avg = bc_avg + 0;
      bc_rms = bc_rms + 0;
    }

    ac1.push(sine1);
    ac2.push(sine2);
    ac3.push(sine3);
    xval.push(x);
    zzz=zzz+1
  }
  console.log(ab_avg/zzz,ac_avg/zzz,bc_avg/zzz);

  ab_rms= parseInt((Math.sqrt(ab_rms/zzz))*100);
  bc_rms= parseInt((Math.sqrt(bc_rms/zzz))*100);
  ac_rms= parseInt((Math.sqrt(ac_rms/zzz))*100);
  values['vabrms']=ab_rms/100;
  values['vbcrms']=bc_rms/100;
  values['vacrms']=ac_rms/100;

  var large = Math.max([ac1app, ac2app, ac3app, ac4app]);
  return [
    [large, dc_value],
    [ac4, xval],
    [ac1, xval],
    [ac2, xval],
    [ac3, xval],
    [vm1, xval],
    [vm2, xval],
    [vm3, xval],
  ];
}
