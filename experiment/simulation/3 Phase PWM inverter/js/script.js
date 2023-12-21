var correct_connections = [
  ["DC1B", "M4RB"],
  ["M4RB", "M6RB"],
  ["M6RB", "M2RB"],
  ["M4L", "S2T"],
  ["M1L", "S1T"],
  ["M1RB", "M4RT"],
  ["DC1T", "M1RT"],
  ["M1RT", "M3RT"],
  ["M3RT", "M5RT"],
  ["M5RB", "M2RT"],
  ["M3RB", "M6RT"],
  ["M5RB", "VM2L"],
  ["VM2R", "R1L"],
  ["R1L", "VM1T"],
  ["VM1B", "R2L"],
  ["R2L", "VM3T"],
  ["VM3B", "R3L"],
  ["R1R", "I1L"],
  ["I1R", "I2R"],
  ["I2R", "I3R"],
  ["R2R", "I2L"],
  ["R3R", "I3L"],
  ["R3L", "M2RT"],
  ["M6RT", "R2L"],
  ["M4RT", "R1L"],
  ["M6L", "S4T"],
  ["M3L", "S3T"],
  ["M5L", "S5T"],
  ["M2L", "S6T"],
  ["S2B", "G1T"],
  ["S4B", "G2T"],
  ["S6B", "G3T"],
  ["S1B", "opamp1T"],
  ["G1B", "opamp1T"],
  ["S3B", "opamp2T"],
  ["G2B", "opamp2T"],
  ["S5B", "opamp3T"],
  ["G3B", "opamp3T"],
  ["AC1L", "VM4R"],
  ["AC1L", "opamp1LB"],
  ["opamp1RB", "opamp2RB"],
  ["VM4L", "GND1T"],
  ["AC1R", "GND1T"],
  ["VM5L", "GND2T"],
  ["VM5R", "AC2L"],
  ["opamp2LB", "AC2L"],
  ["opamp2RB", "opamp3RB"],
  ["AC2R", "GND2T"],
  ["VM6L", "GND3T"],
  ["AC3R", "GND3T"],
  ["VM6R", "AC3L"],
  ["AC3L", "opamp3LB"],
  ["opamp3RB", "AC4L"],
  ["VM7R", "GND4T"],
  ["VM7L", "AC4L"],
  ["AC4R", "GND4T"],
];
var resistorids = ["R3-back", "R2-back", "R1-back"];
var inductorids = ["I3-back", "I2-back", "I1-back"];
var acsourceids = ["AC1-back", "AC2-back", "AC3-back"].reverse();
var triids = ["AC4-back"];
var groundids = ["GND1-back", "GND2-back", "GND3-back", "GND4-back"].reverse();
var voltagemids = [
  "VM7-back",
  "VM6-back",
  "VM5-back",
  "VM4-back",
  "VM3-back",
  "VM2-back",
  "VM1-back",
];
var mosfetids = [
  "M6-back",
  "M5-back",
  "M4-back",
  "M3-back",
  "M2-back",
  "M1-back",
];
var opampids = ["opamp3-back", "opamp2-back", "opamp1-back"];
var switchids = [
  "S6-back",
  "S5-back",
  "S4-back",
  "S3-back",
  "S2-back",
  "S1-back",
];
var notgateids = ["G3-back", "G2-back", "G1-back"];
var dcsourceids = ["DC1-back"];
var values = {
  R1: {
    name: "Resistor A",
    value: 0,
    type: "Resistance: ",
    unit: " Ω",
  },
  R2: {
    name: "Resistor B",
    value: 0,
    type: "Resistance: ",
    unit: " Ω",
  },
  R3: {
    name: "Resistor C",
    value: 0,
    type: "Resistance: ",
    unit: " Ω",
  },
  I1: {
    name: "Inductor A",
    value: 0,
    type: "Inductance: ",
    unit: " mH",
  },
  I2: {
    name: "Inductor B",
    value: 0,
    type: "Inductance: ",
    unit: " mH",
  },
  I3: {
    name: "Inductor C",
    value: 0,
    type: "Inductance: ",
    unit: " mH",
  },
  DC1: { name: "DC", value: 0, type: "Voltage: ", unit: " V" },
  AC1: {
    name: "Sine1",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type2: "Frequency: ",
    unitfreq: " Hz",
    unit: " V",
  },
  AC2: {
    name: "Sine2",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type2: "Frequency: ",
    unitfreq: " Hz",
    unit: " V",
  },
  AC3: {
    name: "Sine3",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type2: "Frequency: ",
    unitfreq: " Hz",
    unit: " V",
  },
  AC4: {
    name: "TRI",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type: "Frequency: ",
    unitfreq: " Hz",
    unit: " V",
  },

  VM1: { name: "VAB" },
  VM2: { name: "VCA" },
  VM3: { name: "VBC" },
  VM4: { name: "VSINE1" },
  VM5: { name: "VSINE2" },
  VM6: { name: "VSINE3" },
  VM7: { name: "VTRI" },
  GND1: { name: "GND1" },
  GND2: { name: "GND2" },
  GND3: { name: "GND3" },
  GND4: { name: "GND4" },
  GND5: { name: "GND5" },
  GND6: { name: "GND6" },
  GND7: { name: "GND7" },
  M1: { name: "M1" },
  M2: { name: "M2" },
  M3: { name: "M3" },
  M4: { name: "M4" },
  M5: { name: "M5" },
  M6: { name: "M6" },
  S1: { name: "S1" },
  S2: { name: "S2" },
  S3: { name: "S3" },
  S4: { name: "S4" },
  S5: { name: "S5" },
  S6: { name: "S6" },
  G1: { name: "G1" },
  G2: { name: "G2" },
  G3: { name: "G3" },
  opamp1: { name: "Comparator1" },
  opamp2: { name: "Comparator2" },
  opamp3: { name: "Comparator3" },
  vabrms: 0,
  vbcrms: 0,
  vacrms: 0,
};
var endpoints = {};
var user_connection = [];
var wrong_connection = [];
var endpoints_display = [];
var correct_connections_flag = false;
var new_reading = true;

var instance = jsPlumb.getInstance({
  ConnectionsDetachable: false,
  Container: "body",
});
instance.bind("ready", () => {
  $("#symbolpalette .ele-img").draggable({
    helper: "clone",
    containment: "body",
    appendTo: "#diagram",
  });
  $("#diagram").droppable({
    drop: (event, ui) => {
      if ($(ui.helper).hasClass("resistor-sym")) {
        var a = resistorids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("inductor-sym")) {
        var a = inductorids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("ac-sym")) {
        var a = acsourceids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("nom-sym")) {
        var a = mosfetids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("dc-sym")) {
        var a = dcsourceids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("swi-sym")) {
        var a = switchids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("not-sym")) {
        var a = notgateids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("volt-sym")) {
        var a = voltagemids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("gnd-sym")) {
        var a = groundids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("op-sym")) {
        var a = opampids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      }
      if ($(ui.helper).hasClass("tri-sym")) {
        var a = triids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      }
    },
  });
  //if (component.hasClass("jtk-connector"))
  function createParticularEnd(element_name) {
    var stokwid = "3.5";
    if (element_name == "M1") {
      var M1RT = instance.addEndpoint("M1RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M1RT"] = M1RT;
      var M1RB = instance.addEndpoint("M1RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M1RB"] = M1RB;
      var M1L = instance.addEndpoint("M1L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M1L"] = M1L;
    }
    if (element_name == "M2") {
      var M2RT = instance.addEndpoint("M2RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M2RT"] = M2RT;
      var M2RB = instance.addEndpoint("M2RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M2RB"] = M2RB;
      var M2L = instance.addEndpoint("M2L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M2L"] = M2L;
    }
    if (element_name == "M3") {
      var M3RT = instance.addEndpoint("M3RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M3RB = instance.addEndpoint("M3RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var M3L = instance.addEndpoint("M3L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M3L"] = M3L;
      endpoints["M3RT"] = M3RT;
      endpoints["M3RB"] = M3RB;
    }
    if (element_name == "M4") {
      var M4RT = instance.addEndpoint("M4RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M4RB = instance.addEndpoint("M4RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M4L = instance.addEndpoint("M4L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M4L"] = M4L;
      endpoints["M4RT"] = M4RT;
      endpoints["M4RB"] = M4RB;
    }
    if (element_name == "M5") {
      var M5RT = instance.addEndpoint("M5RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M5RB = instance.addEndpoint("M5RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M5L = instance.addEndpoint("M5L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M5L"] = M5L;
      endpoints["M5RT"] = M5RT;
      endpoints["M5RB"] = M5RB;
    }
    if (element_name == "M6") {
      var M6RT = instance.addEndpoint("M6RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M6RB = instance.addEndpoint("M6RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M6L = instance.addEndpoint("M6L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M6L"] = M6L;
      endpoints["M6RT"] = M6RT;
      endpoints["M6RB"] = M6RB;
    }
    if (element_name == "VM1") {
      var VM1T = instance.addEndpoint("VM1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM1B = instance.addEndpoint("VM1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1T"] = VM1T;
      endpoints["VM1B"] = VM1B;
    }
    if (element_name == "VM2") {
      var VM2L = instance.addEndpoint("VM2L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM2R = instance.addEndpoint("VM2R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2L"] = VM2L;
      endpoints["VM2R"] = VM2R;
    }
    if (element_name == "VM3") {
      var VM3T = instance.addEndpoint("VM3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM3B = instance.addEndpoint("VM3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3T"] = VM3T;
      endpoints["VM3B"] = VM3B;
    }
    if (element_name == "VM4") {
      var VM4L = instance.addEndpoint("VM4L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM4R = instance.addEndpoint("VM4R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4L"] = VM4L;
      endpoints["VM4R"] = VM4R;
    }
    if (element_name == "VM5") {
      var VM5L = instance.addEndpoint("VM5L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM5R = instance.addEndpoint("VM5R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM5L"] = VM5L;
      endpoints["VM5R"] = VM5R;
    }
    if (element_name == "VM6") {
      var VM6L = instance.addEndpoint("VM6L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM6R = instance.addEndpoint("VM6R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM6L"] = VM6L;
      endpoints["VM6R"] = VM6R;
    }
    if (element_name == "VM7") {
      var VM7L = instance.addEndpoint("VM7L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM7R = instance.addEndpoint("VM7R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM7L"] = VM7L;
      endpoints["VM7R"] = VM7R;
    }
    if (element_name == "GND1") {
      var GND1 = instance.addEndpoint("GND1T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 70], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND1T"] = GND1;
    }
    if (element_name == "GND2") {
      var GND2 = instance.addEndpoint("GND2T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 70], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND2T"] = GND2;
    }
    if (element_name == "GND3") {
      var GND3 = instance.addEndpoint("GND3T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 70], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND3T"] = GND3;
    }
    if (element_name == "GND4") {
      var GND4 = instance.addEndpoint("GND4T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND4T"] = GND4;
    }
    if (element_name == "AC1") {
      var AC1L = instance.addEndpoint("AC1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        endpoint: "Dot",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var AC1R = instance.addEndpoint("AC1R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC1L"] = AC1L;
      endpoints["AC1R"] = AC1R;
    }
    if (element_name == "AC2") {
      var AC2L = instance.addEndpoint("AC2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        hoverPaintStyle: { fillStyle: "black" },
      });
      var AC2R = instance.addEndpoint("AC2R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC2L"] = AC2L;
      endpoints["AC2R"] = AC2R;
    }
    if (element_name == "AC3") {
      var AC3L = instance.addEndpoint("AC3L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        hoverPaintStyle: { fillStyle: "black" },
      });
      var AC3R = instance.addEndpoint("AC3R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC3L"] = AC3L;
      endpoints["AC3R"] = AC3R;
    }
    if (element_name == "AC4") {
      var AC4L = instance.addEndpoint("AC4L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        hoverPaintStyle: { fillStyle: "black" },
      });
      var AC4R = instance.addEndpoint("AC4R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC4L"] = AC4L;
      endpoints["AC4R"] = AC4R;
    }
    if (element_name == "S1") {
      var SW1T = instance.addEndpoint("S1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW1B = instance.addEndpoint("S1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S1T"] = SW1T;
      endpoints["S1B"] = SW1B;
    }
    if (element_name == "S2") {
      var SW2T = instance.addEndpoint("S2T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW2B = instance.addEndpoint("S2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S2T"] = SW2T;
      endpoints["S2B"] = SW2B;
    }
    if (element_name == "S3") {
      var SW3T = instance.addEndpoint("S3T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW3B = instance.addEndpoint("S3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S3T"] = SW3T;
      endpoints["S3B"] = SW3B;
    }
    if (element_name == "S4") {
      var SW4T = instance.addEndpoint("S4T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW4B = instance.addEndpoint("S4B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S4T"] = SW4T;
      endpoints["S4B"] = SW4B;
    }
    if (element_name == "S5") {
      var SW5T = instance.addEndpoint("S5T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW5B = instance.addEndpoint("S5B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S5T"] = SW5T;
      endpoints["S5B"] = SW5B;
    }
    if (element_name == "S6") {
      var SW6T = instance.addEndpoint("S6T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW6B = instance.addEndpoint("S6B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S6T"] = SW6T;
      endpoints["S6B"] = SW6B;
    }
    if (element_name == "G1") {
      var G1T = instance.addEndpoint("G1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var G1B = instance.addEndpoint("G1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G1T"] = G1T;
      endpoints["G1B"] = G1B;
    }
    if (element_name == "G2") {
      var G2T = instance.addEndpoint("G2T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var G2B = instance.addEndpoint("G2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G2T"] = G2T;
      endpoints["G2B"] = G2B;
    }
    if (element_name == "G3") {
      var G3T = instance.addEndpoint("G3T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var G3B = instance.addEndpoint("G3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G3T"] = G3T;
      endpoints["G3B"] = G3B;
    }
    if (element_name == "DC1") {
      var DC1T = instance.addEndpoint("DC1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var DC1B = instance.addEndpoint("DC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["DC1T"] = DC1T;
      endpoints["DC1B"] = DC1B;
    }
    if (element_name == "R1") {
      var R1T = instance.addEndpoint("R1L", {
        endpoint: "Dot",
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });

      var R1B = instance.addEndpoint("R1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1L"] = R1T;
      endpoints["R1R"] = R1B;
    }
    if (element_name == "R2") {
      var R2T = instance.addEndpoint("R2L", {
        endpoint: "Dot",
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });

      var R2B = instance.addEndpoint("R2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R2L"] = R2T;
      endpoints["R2R"] = R2B;
    }
    if (element_name == "R3") {
      var R3T = instance.addEndpoint("R3L", {
        endpoint: "Dot",
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });

      var R3B = instance.addEndpoint("R3R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R3L"] = R3T;
      endpoints["R3R"] = R3B;
    }
    if (element_name == "I1") {
      var I1T = instance.addEndpoint("I1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var I1B = instance.addEndpoint("I1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I1L"] = I1T;
      endpoints["I1R"] = I1B;
    }
    if (element_name == "I2") {
      var I2T = instance.addEndpoint("I2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var I2B = instance.addEndpoint("I2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I2L"] = I2T;
      endpoints["I2R"] = I2B;
    }
    if (element_name == "I3") {
      var I3T = instance.addEndpoint("I3L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var I3B = instance.addEndpoint("I3R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I3L"] = I3T;
      endpoints["I3R"] = I3B;
    }
    if (element_name == "opamp1") {
      var OPLT = instance.addEndpoint("opamp1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OPLB = instance.addEndpoint("opamp1LB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OPR = instance.addEndpoint("opamp1RB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["opamp1T"] = OPLT;
      endpoints["opamp1LB"] = OPLB;
      endpoints["opamp1RB"] = OPR;
    }
    if (element_name == "opamp2") {
      var OPL2T = instance.addEndpoint("opamp2T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OPL2B = instance.addEndpoint("opamp2LB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OP2R = instance.addEndpoint("opamp2RB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["opamp2T"] = OPL2T;
      endpoints["opamp2LB"] = OPL2B;
      endpoints["opamp2RB"] = OP2R;
    }
    if (element_name == "opamp3") {
      var OPL3T = instance.addEndpoint("opamp3T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OPL3B = instance.addEndpoint("opamp3LB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OP3R = instance.addEndpoint("opamp3RB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: 10, gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["opamp3T"] = OPL3T;
      endpoints["opamp3LB"] = OPL3B;
      endpoints["opamp3RB"] = OP3R;
    }
  }
  function createEnd() {
    var stokwid = "3.5";
    if (endpoints_display.indexOf("M1") !== -1) {
      var M1RT = instance.addEndpoint("M1RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M1RT"] = M1RT;
      var M1RB = instance.addEndpoint("M1RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M1RB"] = M1RB;
      var M1L = instance.addEndpoint("M1L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M1L"] = M1L;
    }
    if (endpoints_display.indexOf("M2") !== -1) {
      var M2RT = instance.addEndpoint("M2RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M2RT"] = M2RT;
      var M2RB = instance.addEndpoint("M2RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M2RB"] = M2RB;
      var M2L = instance.addEndpoint("M2L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M2L"] = M2L;
    }
    if (endpoints_display.indexOf("M3") !== -1) {
      var M3RT = instance.addEndpoint("M3RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M3RB = instance.addEndpoint("M3RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var M3L = instance.addEndpoint("M3L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M3L"] = M3L;
      endpoints["M3RT"] = M3RT;
      endpoints["M3RB"] = M3RB;
    }
    if (endpoints_display.indexOf("M4") !== -1) {
      var M4RT = instance.addEndpoint("M4RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M4RB = instance.addEndpoint("M4RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M4L = instance.addEndpoint("M4L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M4L"] = M4L;
      endpoints["M4RT"] = M4RT;
      endpoints["M4RB"] = M4RB;
    }
    if (endpoints_display.indexOf("M5") !== -1) {
      var M5RT = instance.addEndpoint("M5RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M5RB = instance.addEndpoint("M5RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M5L = instance.addEndpoint("M5L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M5L"] = M5L;
      endpoints["M5RT"] = M5RT;
      endpoints["M5RB"] = M5RB;
    }
    if (endpoints_display.indexOf("M6") !== -1) {
      var M6RT = instance.addEndpoint("M6RT", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M6RB = instance.addEndpoint("M6RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var M6L = instance.addEndpoint("M6L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["M6L"] = M6L;
      endpoints["M6RT"] = M6RT;
      endpoints["M6RB"] = M6RB;
    }
    if (endpoints_display.indexOf("VM1") !== -1) {
      var VM1T = instance.addEndpoint("VM1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM1B = instance.addEndpoint("VM1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1T"] = VM1T;
      endpoints["VM1B"] = VM1B;
    }
    if (endpoints_display.indexOf("VM2") !== -1) {
      var VM2L = instance.addEndpoint("VM2L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM2R = instance.addEndpoint("VM2R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2L"] = VM2L;
      endpoints["VM2R"] = VM2R;
    }
    if (endpoints_display.indexOf("VM3") !== -1) {
      var VM3T = instance.addEndpoint("VM3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM3B = instance.addEndpoint("VM3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3T"] = VM3T;
      endpoints["VM3B"] = VM3B;
    }
    if (endpoints_display.indexOf("VM4") !== -1) {
      var VM4L = instance.addEndpoint("VM4L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM4R = instance.addEndpoint("VM4R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4L"] = VM4L;
      endpoints["VM4R"] = VM4R;
    }
    if (endpoints_display.indexOf("VM5") !== -1) {
      var VM5L = instance.addEndpoint("VM5L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM5R = instance.addEndpoint("VM5R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM5L"] = VM5L;
      endpoints["VM5R"] = VM5R;
    }
    if (endpoints_display.indexOf("VM6") !== -1) {
      var VM6L = instance.addEndpoint("VM6L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM6R = instance.addEndpoint("VM6R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM6L"] = VM6L;
      endpoints["VM6R"] = VM6R;
    }
    if (endpoints_display.indexOf("VM7") !== -1) {
      var VM7L = instance.addEndpoint("VM7L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var VM7R = instance.addEndpoint("VM7R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM7L"] = VM7L;
      endpoints["VM7R"] = VM7R;
    }
    if (endpoints_display.indexOf("GND1") !== -1) {
      var GND1 = instance.addEndpoint("GND1T", {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 70], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND1T"] = GND1;
    }
    if (endpoints_display.indexOf("GND2") !== -1) {
      var GND2 = instance.addEndpoint("GND2T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 70], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND2T"] = GND2;
    }
    if (endpoints_display.indexOf("GND3") !== -1) {
      var GND3 = instance.addEndpoint("GND3T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 70], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND3T"] = GND3;
    }
    if (endpoints_display.indexOf("GND4") !== -1) {
      var GND4 = instance.addEndpoint("GND4T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND4T"] = GND4;
    }
    if (endpoints_display.indexOf("AC1") !== -1) {
      var AC1L = instance.addEndpoint("AC1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        endpoint: "Dot",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var AC1R = instance.addEndpoint("AC1R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC1L"] = AC1L;
      endpoints["AC1R"] = AC1R;
    }
    if (endpoints_display.indexOf("AC2") !== -1) {
      var AC2L = instance.addEndpoint("AC2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        hoverPaintStyle: { fillStyle: "black" },
      });
      var AC2R = instance.addEndpoint("AC2R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC2L"] = AC2L;
      endpoints["AC2R"] = AC2R;
    }
    if (endpoints_display.indexOf("AC3") !== -1) {
      var AC3L = instance.addEndpoint("AC3L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        hoverPaintStyle: { fillStyle: "black" },
      });
      var AC3R = instance.addEndpoint("AC3R", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [70, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC3L"] = AC3L;
      endpoints["AC3R"] = AC3R;
    }
    if (endpoints_display.indexOf("AC4") !== -1) {
      var AC4L = instance.addEndpoint("AC4L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        hoverPaintStyle: { fillStyle: "black" },
      });
      var AC4R = instance.addEndpoint("AC4R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC4L"] = AC4L;
      endpoints["AC4R"] = AC4R;
    }
    if (endpoints_display.indexOf("S1") !== -1) {
      var SW1T = instance.addEndpoint("S1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW1B = instance.addEndpoint("S1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S1T"] = SW1T;
      endpoints["S1B"] = SW1B;
    }
    if (endpoints_display.indexOf("S2") !== -1) {
      var SW2T = instance.addEndpoint("S2T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW2B = instance.addEndpoint("S2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S2T"] = SW2T;
      endpoints["S2B"] = SW2B;
    }
    if (endpoints_display.indexOf("S3") !== -1) {
      var SW3T = instance.addEndpoint("S3T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW3B = instance.addEndpoint("S3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S3T"] = SW3T;
      endpoints["S3B"] = SW3B;
    }
    if (endpoints_display.indexOf("S4") !== -1) {
      var SW4T = instance.addEndpoint("S4T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW4B = instance.addEndpoint("S4B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S4T"] = SW4T;
      endpoints["S4B"] = SW4B;
    }
    if (endpoints_display.indexOf("S5") !== -1) {
      var SW5T = instance.addEndpoint("S5T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW5B = instance.addEndpoint("S5B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S5T"] = SW5T;
      endpoints["S5B"] = SW5B;
    }
    if (endpoints_display.indexOf("S6") !== -1) {
      var SW6T = instance.addEndpoint("S6T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var SW6B = instance.addEndpoint("S6B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["S6T"] = SW6T;
      endpoints["S6B"] = SW6B;
    }
    if (endpoints_display.indexOf("G1") !== -1) {
      var G1T = instance.addEndpoint("G1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var G1B = instance.addEndpoint("G1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G1T"] = G1T;
      endpoints["G1B"] = G1B;
    }
    if (endpoints_display.indexOf("G2") !== -1) {
      var G2T = instance.addEndpoint("G2T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var G2B = instance.addEndpoint("G2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G2T"] = G2T;
      endpoints["G2B"] = G2B;
    }
    if (endpoints_display.indexOf("G3") !== -1) {
      var G3T = instance.addEndpoint("G3T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var G3B = instance.addEndpoint("G3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G3T"] = G3T;
      endpoints["G3B"] = G3B;
    }
    if (endpoints_display.indexOf("DC1") !== -1) {
      var DC1T = instance.addEndpoint("DC1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });
      var DC1B = instance.addEndpoint("DC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["DC1T"] = DC1T;
      endpoints["DC1B"] = DC1B;
    }
    if (endpoints_display.indexOf("R1") !== -1) {
      var R1T = instance.addEndpoint("R1L", {
        endpoint: "Dot",
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });

      var R1B = instance.addEndpoint("R1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1L"] = R1T;
      endpoints["R1R"] = R1B;
    }
    if (endpoints_display.indexOf("R2") !== -1) {
      var R2T = instance.addEndpoint("R2L", {
        endpoint: "Dot",
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });

      var R2B = instance.addEndpoint("R2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R2L"] = R2T;
      endpoints["R2R"] = R2B;
    }
    if (endpoints_display.indexOf("R3") !== -1) {
      var R3T = instance.addEndpoint("R3L", {
        endpoint: "Dot",
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
        radius: 2,
      });

      var R3B = instance.addEndpoint("R3R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R3L"] = R3T;
      endpoints["R3R"] = R3B;
    }
    if (endpoints_display.indexOf("I1") !== -1) {
      var I1T = instance.addEndpoint("I1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var I1B = instance.addEndpoint("I1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I1L"] = I1T;
      endpoints["I1R"] = I1B;
    }
    if (endpoints_display.indexOf("I2") !== -1) {
      var I2T = instance.addEndpoint("I2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var I2B = instance.addEndpoint("I2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I2L"] = I2T;
      endpoints["I2R"] = I2B;
    }
    if (endpoints_display.indexOf("I3") !== -1) {
      var I3T = instance.addEndpoint("I3L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      var I3B = instance.addEndpoint("I3R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I3L"] = I3T;
      endpoints["I3R"] = I3B;
    }
    if (endpoints_display.indexOf("opamp1") !== -1) {
      var OPLT = instance.addEndpoint("opamp1T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OPLB = instance.addEndpoint("opamp1LB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OPR = instance.addEndpoint("opamp1RB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["opamp1T"] = OPLT;
      endpoints["opamp1LB"] = OPLB;
      endpoints["opamp1RB"] = OPR;
    }
    if (endpoints_display.indexOf("opamp2") !== -1) {
      var OPL2T = instance.addEndpoint("opamp2T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OPL2B = instance.addEndpoint("opamp2LB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OP2R = instance.addEndpoint("opamp2RB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10], gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["opamp2T"] = OPL2T;
      endpoints["opamp2LB"] = OPL2B;
      endpoints["opamp2RB"] = OP2R;
    }
    if (endpoints_display.indexOf("opamp3") !== -1) {
      var OPL3T = instance.addEndpoint("opamp3T", {
        endpoint: "Dot",
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OPL3B = instance.addEndpoint("opamp3LB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [0, 0], gap: 0 }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });

      var OP3R = instance.addEndpoint("opamp3RB", {
        endpoint: "Dot",
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: 10, gap: 0 }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["opamp3T"] = OPL3T;
      endpoints["opamp3LB"] = OPL3B;
      endpoints["opamp3RB"] = OP3R;
    }
  }

  async function window_resize() {
    await instance.deleteEveryEndpoint();
    return true;
  }

  window.addEventListener("resize", () => {
    instance.repaintEverything();
    if (correct_connections_flag) {
      plotData();
    }
  });

  instance.bind("connection", (conn, event) => {
    var flag = true;
    let eg1 = [String(conn.sourceId), String(conn.targetId)];

    for (var ele of correct_connections) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        flag = false;

        user_connection.push(eg1);

        break;
      }
    }
    if (flag) {
      conn.connection._jsPlumb.paintStyleInUse.stroke = "red";
      wrong_connection.push(eg1);
      openPopup("new-img/404-error.png", "Wrong Connection", "28px");
    }
  });

  instance.bind("click", function (conn) {
    let eg1 = [String(conn.sourceId), String(conn.targetId)];
    if (!correct_connections_flag) {
      for (var ele of correct_connections) {
        if (
          (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
          (ele[0] == eg1[1] && ele[1] == eg1[0])
        ) {
          user_connection.pop(eg1);
          break;
        }
      }
      for (var ele of wrong_connection) {
        if (
          (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
          (ele[0] == eg1[1] && ele[1] == eg1[0])
        ) {
          wrong_connection.pop(eg1);
          break;
        }
      }
      instance.deleteConnection(conn);
    }
    return false;
  });
  $("body").on("contextmenu", "#components", (event) => {
    event.preventDefault();
  });

  // context menu for resistor
  $("body").on("contextmenu", "#diagram .resistor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="resisSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 125px;"  maxlength="4" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center;"><label for="value-' +
          window.selectedControl +
          '">Resistance:</label><input type="number" class="set-input" placeholder=" ' +
          values[window.selectedControl]["value"] +
          ' ohm" min="1" max="100"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 17px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="resisSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 125px;" maxlength="4"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Resistance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' ohm" min="1" max="100"  disabled id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 17px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }

    //context menu for capacitor

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  // contextmenu for inductor
  $("body").on("contextmenu", "#diagram .inductor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="inductorSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="4" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 125px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Inductance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' mH" min="1" max="20"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="inductorSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="4" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 125px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Inductance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' mH" min="1" max="20" disabled  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  //AC Source
  $("body").on("contextmenu", "#diagram .acsource", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label style="color:white;" for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text"  maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 122px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="100"  id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="100" max="1000"  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 17px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 122px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="100" disabled id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="100" max="900" disabled id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 17px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
  $("body").on("contextmenu", "#diagram .acsource1", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");
    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 122px;" maxlength="5" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="100"  id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="1" max="60"  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 17px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 122px;     height: 24px;" maxlength="5" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input"  placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="50" disabled id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="1" max="60" disabled  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 17px"><button type="submit" class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  //dc source
  $("body").on("contextmenu", "#diagram .dcsource", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");
    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="javascript:void(0);" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px;  padding:2px;width: 125px;" maxlength="4"  placeholder="   ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Voltage:</label><input type="number" class="set-input" style="width: 100px;" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' Volt" min="1" max="300"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 17px"><button type="submit" class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="javascript:void(0);" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 125px;" maxlength="4"  placeholder="   ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Voltage:</label><input type="number" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' Volt" min="1" max="300" disabled style="width: 100px;" class="set-input" id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 17px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
  $("body").on("contextmenu", "#diagram .other", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    $(
      '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input type="text"  id="name-' +
        window.selectedControl +
        '" class="set-input-name" style="width: 125px;" maxlength="6" placeholder="   ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
  $("body").on("contextmenu", "#diagram .vload", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    $(
      '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input type="text"  id="name-' +
        window.selectedControl +
        '" class="set-input-name" style="width: 125px;" maxlength="6" placeholder="   ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
  $("body").on("contextmenu", "#diagram .ground1", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    $(
      '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input type="text" maxlength="4" id="name-' +
        window.selectedControl +
        '" class="set-input-name" style="width: 125px;" placeholder="   ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
});

function changeName(name, value) {
  values[name]["name"] = value.toUpperCase();
  var ele = name + "-name";
  $("#" + ele).text(values[name]["name"]);
  if (correct_connections_flag) {
    plotData();
  }
}

function acSubmited(name) {
  var volt = document.getElementById("value-volt-" + name).value;
  var ele;
  if (volt != "") {
    new_reading = true;
    values[name]["volt"] = volt;
    ele = name + "-volt";
    $("#" + ele).text(values[name]["volt"] + values[name]["unit"]);
  }
  var freq = document.getElementById("value-freq-" + name).value;
  if (freq != "") {
    new_reading = true;
    values[name]["freq"] = freq;
    ele = name + "-freq";
    $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);
  }
  document.getElementById("submit-" + name).click();
  if (correct_connections_flag) {
    plotData();
  }
}
function autoFillInduc(value) {
  values["I1"]["value"] = value;
  values["I2"]["value"] = value;
  values["I3"]["value"] = value;
  $("#" + "I1-value").text(values["I1"]["value"] + values["I1"]["unit"]);
  $("#" + "I2-value").text(values["I2"]["value"] + values["I2"]["unit"]);
  $("#" + "I3-value").text(values["I3"]["value"] + values["I3"]["unit"]);
}
function inductorSubmited(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    autoFillInduc(a);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function autoFillResis(value) {
  values["R1"]["value"] = value;
  values["R2"]["value"] = value;
  values["R3"]["value"] = value;
  $("#" + "R1-value").text(values["R1"]["value"] + values["R1"]["unit"]);
  $("#" + "R2-value").text(values["R2"]["value"] + values["R2"]["unit"]);
  $("#" + "R3-value").text(values["R3"]["value"] + values["R3"]["unit"]);
}
function resisSubmited(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    autoFillResis(a);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function dcSubmited(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    new_reading = true;
    values[name]["value"] = a;
    var ele = name + "-value";
    $("#" + ele).text(values[name]["value"] + values[name]["unit"]);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function instchange() {
  document.getElementById("inst").classList.toggle("inst-display");
}

$(document).ready(function () {
  $("#data").on("click", function () {
    $("#readings").show();
  });
});
document.getElementById("check1").addEventListener("click", () => {
  if (wrong_connection.length == 0) {
    if (user_connection.length < 56) {
      openPopup(
        "new-img/404-warning.png",
        "Please make all the connections",
        "28px"
      );
    } else {
      openPopup(
        "new-img/404-tick.png",
        "Well Done! All Connections are Connected",
        "23px"
      );

      correct_connections_flag = true;
    }
  } else {
    openPopup(
      "new-img/404-warning.png",
      "Wrong connection present in the circuit",
      "23px"
    );
  }
});
var count = 1;
function showreadings() {
  if (correct_connections_flag) {
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
      if (count < 11) {
        if (new_reading) {
          document.getElementById("Taken_reading").style.display = "block";
          var a = document.getElementById("tab");
          var b = a.innerHTML;
          str = `<tr><td>${count}</td><td>${values["vabrms"]}</td><td>${values["vbcrms"]}</td><td>${values["vacrms"]}</td></tr>`;
          a.innerHTML = b + str;
          count = count + 1;
          new_reading = false;
        }
      } else {
        openPopup(
          "new-img/404-warning.png",
          "You can only add 10 readings in the table",
          "22px"
        );
      }
    }
  }
}
