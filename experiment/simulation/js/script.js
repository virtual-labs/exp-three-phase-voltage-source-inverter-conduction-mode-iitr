var correct_connections = [
  ["DC1T", "IGBT1T"],
  ["G1L", "IGBT1L"],
  ["IGBT1B", "IGBT4T"],
  ["G4L", "IGBT4L"],
  ["IGBT1T", "IGBT3T"],
  ["IGBT3T", "IGBT5T"],
  ["G3L", "IGBT3L"],
  ["G5L", "IGBT5L"],
  ["IGBT3B", "IGBT6T"],
  ["IGBT5B", "IGBT2T"],
  ["IGBT4B", "IGBT6B"],
  ["IGBT6B", "IGBT2B"],
  ["G6L", "IGBT6L"],
  ["G2L", "IGBT2L"],
  ["IGBT4T", "R1T"],
  ["R1T", "VM4T"],
  ["VM4B", "GND1T"],
  ["R1B", "GND1T"],
  ["VM5B", "GND1T"],
  ["R2B", "GND1T"],
  ["IGBT2T", "R3T"],
  ["VM5T", "R2T"],
  ["R2T", "VM2R"],
  ["VM2L", "R1T"],
  ["R2T", "VM3L"],
  ["VM3R", "R3T"],
  ["VM6T", "R3T"],
  ["VM6B", "GND1T"],
  ["R3B", "GND1T"],
  ["R1T", "VM1L"],
  ["VM1R", "R3T"],
  ["DC1B", "IGBT4B"],
  ["IGBT6T", "R2T"],
];
var resistorids = ["R3-back", "R2-back", "R1-back"];

var dcids = ["DC1-back"];
var groundids = ["GND1-back"];
var voltagemids = [
  "VM6-back",
  "VM5-back",
  "VM4-back",
  "VM3-back",
  "VM2-back",
  "VM1-back",
];
var gatepluseids = [
  "G6-back",
  "G5-back",
  "G4-back",
  "G3-back",
  "G2-back",
  "G1-back",
];
var igbtids = [
  "IGBT6-back",
  "IGBT5-back",
  "IGBT4-back",
  "IGBT3-back",
  "IGBT2-back",
  "IGBT1-back",
];
var values = {
  G1: { name: "Gate Pulse 1", fire1: 0, fire2: 0, unit: "\u00B0" },
  G2: { name: "Gate Pulse 2", fire1: 0, fire2: 0, unit: "\u00B0" },
  G3: { name: "Gate Pulse 3", fire1: 0, fire2: 0, unit: "\u00B0" },
  G4: { name: "Gate Pulse 4", fire1: 0, fire2: 0, unit: "\u00B0" },
  G5: { name: "Gate Pulse 5", fire1: 0, fire2: 0, unit: "\u00B0" },
  G6: { name: "Gate Pulse 6", fire1: 0, fire2: 0, unit: "\u00B0" },
  IGBT1: { name: "IGBT1" },
  IGBT2: { name: "IGBT2" },
  IGBT3: { name: "IGBT3" },
  IGBT4: { name: "IGBT4" },
  IGBT5: { name: "IGBT5" },
  IGBT6: { name: "IGBT6" },
  DC1: { name: "DC", value: 0, unit: " V" },
  VM1: { name: "VRB" },
  VM2: { name: "VRY" },
  VM3: { name: "VYB" },
  VM4: { name: "VR" },
  VM5: { name: "VY" },
  VM6: { name: "VB" },
  R1: { name: "RR", value: 100, unit: " Ω" },
  R2: { name: "RY", value: 100, unit: " Ω" },
  R3: { name: "RB", value: 100, unit: " Ω" },
  GND1: { name: "GND" },
  freq: 0,
  unit: " Hz",
};
var endpoints = {};
var user_connection = [];
var endpoints_display = [];
var wrong_connection = [];
const values120 = {
  G1: { fire1: 0, fire2: 120 },
  G3: { fire1: 120, fire2: 240 },
  G5: { fire1: 240, fire2: 360 },
  G4: { fire1: 180, fire2: 300 },
  G6: { fire1: 300, fire2: 420 },
  G2: { fire1: 60, fire2: 180 },
};

const values180 = {
  G1: { fire1: 0, fire2: 180 },
  G3: { fire1: 120, fire2: 300 },
  G5: { fire1: 240, fire2: 420 },
  G4: { fire1: 180, fire2: 360 },
  G6: { fire1: 300, fire2: 480 },
  G2: { fire1: 60, fire2: 240 },
};

var correct_connections_flag = false;
var new_reading = true;
var combination_flag = false;
var combination;

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
      } else if ($(ui.helper).hasClass("dc-sym")) {
        var a = dcids.pop();
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
      } else if ($(ui.helper).hasClass("gate-sym")) {
        var a = gatepluseids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      }
      if ($(ui.helper).hasClass("igbt-sym")) {
        var a = igbtids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      }
    },
  });
  function createParticularEnd(element_name) {
    var stokwid = 3.5;
    if (element_name == "G1") {
      var G1L = instance.addEndpoint("G1L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G1L"] = G1L;
    }
    if (element_name == "G2") {
      var G2L = instance.addEndpoint("G2L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G2L"] = G2L;
    }
    if (element_name == "G3") {
      var G3L = instance.addEndpoint("G3L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G3L"] = G3L;
    }
    if (element_name == "G4") {
      var G4L = instance.addEndpoint("G4L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G4L"] = G4L;
    }
    if (element_name == "G5") {
      var G5L = instance.addEndpoint("G5L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G5L"] = G5L;
    }
    if (element_name == "G6") {
      var G6L = instance.addEndpoint("G6L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G6L"] = G6L;
    }
    if (element_name == "IGBT1") {
      var IGBT1L = instance.addEndpoint("IGBT1L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT1L"] = IGBT1L;
    }
    if (element_name == "IGBT2") {
      var IGBT2L = instance.addEndpoint("IGBT2L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT2L"] = IGBT2L;
    }
    if (element_name == "IGBT3") {
      var IGBT3L = instance.addEndpoint("IGBT3L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT3L"] = IGBT3L;
    }
    if (element_name == "IGBT4") {
      var IGBT4L = instance.addEndpoint("IGBT4L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT4L"] = IGBT4L;
    }
    if (element_name == "IGBT5") {
      var IGBT5L = instance.addEndpoint("IGBT5L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT5L"] = IGBT5L;
    }
    if (element_name == "IGBT6") {
      var IGBT6L = instance.addEndpoint("IGBT6L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT6L"] = IGBT6L;
    }
    if (element_name == "IGBT1") {
      var IGBT1T = instance.addEndpoint("IGBT1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT1T"] = IGBT1T;
    }
    if (element_name == "IGBT2") {
      var IGBT2T = instance.addEndpoint("IGBT2T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT2T"] = IGBT2T;
    }
    if (element_name == "IGBT3") {
      var IGBT3T = instance.addEndpoint("IGBT3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT3T"] = IGBT3T;
    }
    if (element_name == "IGBT4") {
      var IGBT4T = instance.addEndpoint("IGBT4T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT4T"] = IGBT4T;
    }
    if (element_name == "IGBT5") {
      var IGBT5T = instance.addEndpoint("IGBT5T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT5T"] = IGBT5T;
    }
    if (element_name == "IGBT6") {
      var IGBT6T = instance.addEndpoint("IGBT6T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT6T"] = IGBT6T;
    }
    if (element_name == "IGBT1") {
      var IGBT1B = instance.addEndpoint("IGBT1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT1B"] = IGBT1B;
    }
    if (element_name == "IGBT2") {
      var IGBT2B = instance.addEndpoint("IGBT2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [50, 50] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT2B"] = IGBT2B;
    }
    if (element_name == "IGBT3") {
      var IGBT3B = instance.addEndpoint("IGBT3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT3B"] = IGBT3B;
    }
    if (element_name == "IGBT4") {
      var IGBT4B = instance.addEndpoint("IGBT4B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [50, 50] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT4B"] = IGBT4B;
    }
    if (element_name == "IGBT5") {
      var IGBT5B = instance.addEndpoint("IGBT5B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT5B"] = IGBT5B;
    }
    if (element_name == "IGBT6") {
      var IGBT6B = instance.addEndpoint("IGBT6B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [50, 50] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT6B"] = IGBT6B;
    }
    if (element_name == "VM1") {
      var VM1L = instance.addEndpoint("VM1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1L"] = VM1L;
    }
    if (element_name == "VM2") {
      var VM2L = instance.addEndpoint("VM2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2L"] = VM2L;
    }
    if (element_name == "VM3") {
      var VM3L = instance.addEndpoint("VM3L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3L"] = VM3L;
    }
    if (element_name == "VM1") {
      var VM1R = instance.addEndpoint("VM1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1R"] = VM1R;
    }
    if (element_name == "VM2") {
      var VM2R = instance.addEndpoint("VM2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2R"] = VM2R;
    }
    if (element_name == "VM3") {
      var VM3R = instance.addEndpoint("VM3R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3R"] = VM3R;
    }
    if (element_name == "VM4") {
      var VM4T = instance.addEndpoint("VM4T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4T"] = VM4T;
    }
    if (element_name == "VM5") {
      var VM5T = instance.addEndpoint("VM5T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM5T"] = VM5T;
    }
    if (element_name == "VM6") {
      var VM6T = instance.addEndpoint("VM6T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM6T"] = VM6T;
    }
    if (element_name == "VM4") {
      var VM4B = instance.addEndpoint("VM4B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4B"] = VM4B;
    }
    if (element_name == "VM5") {
      var VM5B = instance.addEndpoint("VM5B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM5B"] = VM5B;
    }
    if (element_name == "VM6") {
      var VM6B = instance.addEndpoint("VM6B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM6B"] = VM6B;
    }
    if (element_name == "R1") {
      var R1B = instance.addEndpoint("R1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1B"] = R1B;
    }
    if (element_name == "R2") {
      var R2B = instance.addEndpoint("R2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R2B"] = R2B;
    }
    if (element_name == "R3") {
      var R3B = instance.addEndpoint("R3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R3B"] = R3B;
    }
    if (element_name == "R1") {
      var R1T = instance.addEndpoint("R1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 4,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1T"] = R1T;
    }
    if (element_name == "R2") {
      var R2T = instance.addEndpoint("R2T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 4,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R2T"] = R2T;
    }
    if (element_name == "R3") {
      var R3T = instance.addEndpoint("R3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 4,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R3T"] = R3T;
    }
    if (element_name == "DC1") {
      var DC1T = instance.addEndpoint("DC1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["DC1T"] = DC1T;

      var DC1B = instance.addEndpoint("DC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [50, 50] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["DC1B"] = DC1B;
    }
    if (element_name == "GND1") {
      var GND1T = instance.addEndpoint("GND1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 6,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND1T"] = GND1T;
    }
  }
  //if (component.hasClass("jtk-connector"))
  function createEnd() {
    var stokwid = 3.5;
    if (endpoints_display.indexOf("G1") !== -1) {
      var G1L = instance.addEndpoint("G1L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G1L"] = G1L;
    }
    if (endpoints_display.indexOf("G2") !== -1) {
      var G2L = instance.addEndpoint("G2L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G2L"] = G2L;
    }
    if (endpoints_display.indexOf("G3") !== -1) {
      var G3L = instance.addEndpoint("G3L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G3L"] = G3L;
    }
    if (endpoints_display.indexOf("G4") !== -1) {
      var G4L = instance.addEndpoint("G4L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G4L"] = G4L;
    }
    if (endpoints_display.indexOf("G5") !== -1) {
      var G5L = instance.addEndpoint("G5L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G5L"] = G5L;
    }
    if (endpoints_display.indexOf("G6") !== -1) {
      var G6L = instance.addEndpoint("G6L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["G6L"] = G6L;
    }
    if (endpoints_display.indexOf("IGBT1") !== -1) {
      var IGBT1L = instance.addEndpoint("IGBT1L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT1L"] = IGBT1L;
    }
    if (endpoints_display.indexOf("IGBT2") !== -1) {
      var IGBT2L = instance.addEndpoint("IGBT2L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT2L"] = IGBT2L;
    }
    if (endpoints_display.indexOf("IGBT3") !== -1) {
      var IGBT3L = instance.addEndpoint("IGBT3L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT3L"] = IGBT3L;
    }
    if (endpoints_display.indexOf("IGBT4") !== -1) {
      var IGBT4L = instance.addEndpoint("IGBT4L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT4L"] = IGBT4L;
    }
    if (endpoints_display.indexOf("IGBT5") !== -1) {
      var IGBT5L = instance.addEndpoint("IGBT5L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT5L"] = IGBT5L;
    }
    if (endpoints_display.indexOf("IGBT6") !== -1) {
      var IGBT6L = instance.addEndpoint("IGBT6L", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Straight",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT6L"] = IGBT6L;
    }
    if (endpoints_display.indexOf("IGBT1") !== -1) {
      var IGBT1T = instance.addEndpoint("IGBT1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT1T"] = IGBT1T;
    }
    if (endpoints_display.indexOf("IGBT2") !== -1) {
      var IGBT2T = instance.addEndpoint("IGBT2T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT2T"] = IGBT2T;
    }
    if (endpoints_display.indexOf("IGBT3") !== -1) {
      var IGBT3T = instance.addEndpoint("IGBT3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT3T"] = IGBT3T;
    }
    if (endpoints_display.indexOf("IGBT4") !== -1) {
      var IGBT4T = instance.addEndpoint("IGBT4T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT4T"] = IGBT4T;
    }
    if (endpoints_display.indexOf("IGBT5") !== -1) {
      var IGBT5T = instance.addEndpoint("IGBT5T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT5T"] = IGBT5T;
    }
    if (endpoints_display.indexOf("IGBT6") !== -1) {
      var IGBT6T = instance.addEndpoint("IGBT6T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT6T"] = IGBT6T;
    }
    if (endpoints_display.indexOf("IGBT1") !== -1) {
      var IGBT1B = instance.addEndpoint("IGBT1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT1B"] = IGBT1B;
    }
    if (endpoints_display.indexOf("IGBT2") !== -1) {
      var IGBT2B = instance.addEndpoint("IGBT2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [50, 50] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT2B"] = IGBT2B;
    }
    if (endpoints_display.indexOf("IGBT3") !== -1) {
      var IGBT3B = instance.addEndpoint("IGBT3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT3B"] = IGBT3B;
    }
    if (endpoints_display.indexOf("IGBT4") !== -1) {
      var IGBT4B = instance.addEndpoint("IGBT4B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [50, 50] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT4B"] = IGBT4B;
    }
    if (endpoints_display.indexOf("IGBT5") !== -1) {
      var IGBT5B = instance.addEndpoint("IGBT5B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT5B"] = IGBT5B;
    }
    if (endpoints_display.indexOf("IGBT6") !== -1) {
      var IGBT6B = instance.addEndpoint("IGBT6B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [50, 50] }],
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["IGBT6B"] = IGBT6B;
    }
    if (endpoints_display.indexOf("VM1") !== -1) {
      var VM1L = instance.addEndpoint("VM1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1L"] = VM1L;
    }
    if (endpoints_display.indexOf("VM2") !== -1) {
      var VM2L = instance.addEndpoint("VM2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2L"] = VM2L;
    }
    if (endpoints_display.indexOf("VM3") !== -1) {
      var VM3L = instance.addEndpoint("VM3L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3L"] = VM3L;
    }
    if (endpoints_display.indexOf("VM1") !== -1) {
      var VM1R = instance.addEndpoint("VM1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1R"] = VM1R;
    }
    if (endpoints_display.indexOf("VM2") !== -1) {
      var VM2R = instance.addEndpoint("VM2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2R"] = VM2R;
    }
    if (endpoints_display.indexOf("VM3") !== -1) {
      var VM3R = instance.addEndpoint("VM3R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3R"] = VM3R;
    }
    if (endpoints_display.indexOf("VM4") !== -1) {
      var VM4T = instance.addEndpoint("VM4T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4T"] = VM4T;
    }
    if (endpoints_display.indexOf("VM5") !== -1) {
      var VM5T = instance.addEndpoint("VM5T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM5T"] = VM5T;
    }
    if (endpoints_display.indexOf("VM6") !== -1) {
      var VM6T = instance.addEndpoint("VM6T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM6T"] = VM6T;
    }
    if (endpoints_display.indexOf("VM4") !== -1) {
      var VM4B = instance.addEndpoint("VM4B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4B"] = VM4B;
    }
    if (endpoints_display.indexOf("VM5") !== -1) {
      var VM5B = instance.addEndpoint("VM5B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM5B"] = VM5B;
    }
    if (endpoints_display.indexOf("VM6") !== -1) {
      var VM6B = instance.addEndpoint("VM6B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM6B"] = VM6B;
    }
    if (endpoints_display.indexOf("R1") !== -1) {
      var R1B = instance.addEndpoint("R1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1B"] = R1B;
    }
    if (endpoints_display.indexOf("R2") !== -1) {
      var R2B = instance.addEndpoint("R2B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R2B"] = R2B;
    }
    if (endpoints_display.indexOf("R3") !== -1) {
      var R3B = instance.addEndpoint("R3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R3B"] = R3B;
    }
    if (endpoints_display.indexOf("R1") !== -1) {
      var R1T = instance.addEndpoint("R1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 4,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1T"] = R1T;
    }
    if (endpoints_display.indexOf("R2") !== -1) {
      var R2T = instance.addEndpoint("R2T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 4,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R2T"] = R2T;
    }
    if (endpoints_display.indexOf("R3") !== -1) {
      var R3T = instance.addEndpoint("R3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 4,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R3T"] = R3T;
    }
    if (endpoints_display.indexOf("DC1") !== -1) {
      var DC1T = instance.addEndpoint("DC1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [10, 10] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["DC1T"] = DC1T;

      var DC1B = instance.addEndpoint("DC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart", { stub: [50, 50] }],
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["DC1B"] = DC1B;
    }
    if (endpoints_display.indexOf("GND1") !== -1) {
      var GND1T = instance.addEndpoint("GND1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: ["Flowchart"],
        maxConnections: 6,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND1T"] = GND1T;
    }
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
          '"></button></div></div></div><form action="#" onsubmit="disableresistor(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 122px;"  maxlength="4" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><!--div    class="value-element" style="display: flex; align-items: center;"><label for="value-' +
          window.selectedControl +
          '">Resistance:</label><input type="number" class="set-input" placeholder=" ' +
          values[window.selectedControl]["value"] +
          ' Ω" min="1" max="100"  id="value-' +
          window.selectedControl +
          '" /> </div --><div style="display: flex; justify-content: end; padding-right: 18px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="disableresistor(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 122px;" maxlength="4"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><!--div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Resistance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' Ω" min="1" max="100"  disabled id="value-' +
          window.selectedControl +
          '" /> </div--><div style="display: flex; justify-content: end; padding-right: 18px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }

    //context menu for capacitor

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  $("body").on("contextmenu", "#diagram .gatepluse", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (combination_flag) {
      $(
        '<div class="custom-menu" style="width: 193px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label style="color:white;" for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 140px;" maxlength="7"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" min="5" max="100" style="width: 99px;" placeholder="  ' +
          values["freq"] +
          values["unit"] +
          '"id="value-freq-' +
          window.selectedControl +
          '" /> </div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Starting&nbsp;Angle:</label><input type="number" min="0" max="999" class="set-input" style="width: 74px;" placeholder="  ' +
          values[window.selectedControl]["fire1"] +
          values[window.selectedControl]["unit"] +
          '" id="value-fire1-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Ending&nbsp;Angle:</label><input type="number" min="0" max="999" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire2"] +
          values[window.selectedControl]["unit"] +
          '"  id="value-fire2-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu" style="width: 193px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 140px;" maxlength="7" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" disabled class="set-input" style="width: 99px;" placeholder="  ' +
          values["freq"] +
          values["unit"] +
          '"id="value-freq-' +
          window.selectedControl +
          '" /> </div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Starting&nbsp;Angle:</label><input type="number" class="set-input" style="width: 74px;" placeholder="  ' +
          values[window.selectedControl]["fire1"] +
          values[window.selectedControl]["unit"] +
          '" min="1" max="100" disabled id="value-fire1-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Ending&nbsp;Angle:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire2"] +
          values[window.selectedControl]["unit"] +
          '" min="100" max="900" disabled id="value-fire2-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  $("body").on("contextmenu", "#diagram .gatepluse1", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu" style="width: 193px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="firstGateSubmitted(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label style="color:white;" for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 140px;" maxlength="7" placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" min="5" max="100" style="width: 99px;" placeholder="  ' +
          values["freq"] +
          values["unit"] +
          '"id="value-freq-' +
          window.selectedControl +
          '" /> </div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire1-' +
          window.selectedControl +
          '">Starting&nbsp;Angle:</label><input type="number" min="0" max="999" class="set-input" style="width: 74px;" placeholder="  ' +
          values[window.selectedControl]["fire1"] +
          values[window.selectedControl]["unit"] +
          '" id="value-fire1-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-fire2-' +
          window.selectedControl +
          '">Ending&nbsp;Angle:</label><input type="number" min="0" max="999" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire2"] +
          values[window.selectedControl]["unit"] +
          '" id="value-fire2-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu" style="width: 193px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px;margin-bottom: 2px;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" ><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;width: 140px;" maxlength="7"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" disabled class="set-input" style="width: 99px;" placeholder="  ' +
          values["freq"] +
          values["unit"] +
          '"id="value-freq-' +
          window.selectedControl +
          '" /> </div></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Starting&nbsp;Angle:</label><input type="number" class="set-input" style="width: 74px;" placeholder="  ' +
          values[window.selectedControl]["fire1"] +
          values[window.selectedControl]["unit"] +
          '" min="1" max="100" disabled id="value-fire1-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Ending&nbsp;Angle:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire2"] +
          values[window.selectedControl]["unit"] +
          '" min="100" max="900" disabled id="value-fire2-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
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
          '" style="border-radius: 20px;  padding:2px;width: 125px;" maxlength="5"  placeholder="   ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Voltage:</label><input type="number" class="set-input" style="width: 104px;" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' Volt" min="1" max="300"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit" class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
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
          '" style="border-radius: 20px; padding:2px;width: 125px;" maxlength="5"  placeholder="   ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Voltage:</label><input type="number" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' Volt" min="1" max="300" disabled style="width: 104px;" class="set-input" id="value-' +
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
        '" class="set-input-name" style="width: 125px;" maxlength="5" placeholder="   ' +
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
function changeFrequency() {
  $("#" + "G1-freq").text(values["freq"] + values["unit"]);
  $("#" + "G2-freq").text(values["freq"] + values["unit"]);
  $("#" + "G3-freq").text(values["freq"] + values["unit"]);
  $("#" + "G4-freq").text(values["freq"] + values["unit"]);
  $("#" + "G5-freq").text(values["freq"] + values["unit"]);
  $("#" + "G6-freq").text(values["freq"] + values["unit"]);
}
function makeDefault() {
  $("#" + "G1-value").text("");
  $("#" + "G2-value").text("");
  $("#" + "G3-value").text("");
  $("#" + "G4-value").text("");
  $("#" + "G5-value").text("");
  $("#" + "G6-value").text("");
  values["G1"]["fire1"] = 0;
  values["G2"]["fire1"] = 0;
  values["G2"]["fire2"] = 0;
  values["G3"]["fire1"] = 0;
  values["G3"]["fire2"] = 0;
  values["G4"]["fire1"] = 0;
  values["G4"]["fire2"] = 0;
  values["G5"]["fire1"] = 0;
  values["G5"]["fire2"] = 0;
  values["G6"]["fire1"] = 0;
  values["G6"]["fire2"] = 0;
  new_reading=true;
}
function firstGateSubmitted(name) {
  var freq = parseInt(document.getElementById("value-freq-" + name).value);
  if (!Number.isNaN(freq)) {
    values["freq"] = freq;
    changeFrequency();
  }
  var ele;
  var fire1 = parseInt(document.getElementById("value-fire1-" + name).value);
  var fire2 = parseInt(document.getElementById("value-fire2-" + name).value);
  if (!Number.isNaN(fire1) && !Number.isNaN(fire2)) {
    if (fire1 == 0) {
      if (fire2 == 120) {
        combination_flag = true;
        values[name]["fire2"] = 120;
        combination = 120;
        makeDefault();
        var ele = name + "-value";
        $("#" + ele).text(
          values[name]["fire1"] +
            values[name]["unit"] +
            " " +
            values[name]["fire2"] +
            values[name]["unit"]
        );
      } else if (fire2 == 180) {
        combination_flag = true;
        values[name]["fire2"] = 180;
        combination = 180;
        makeDefault();
        var ele = name + "-value";
        $("#" + ele).text(
          values[name]["fire1"] +
            values[name]["unit"] +
            " " +
            values[name]["fire2"] +
            values[name]["unit"]
        );
      } else {
        openPopup(
          "new-img/404-warning.png",
          "Please follow the Instructions to enter the correct angle",
          "21px"
        );
      }
    } else {
      openPopup(
        "new-img/404-warning.png",
        "Please follow the Instructions to enter the correct angle",
        "21px"
      );
    }
  } else {
    if (!Number.isNaN(fire1)) {
      if (values[name]["fire2"] == 0) {
        openPopup("new-img/404-warning.png", "Ending angle is Empty", "28px");
      } else if (fire1 != 0) {
        openPopup(
          "new-img/404-warning.png",
          "Please follow the Instructions to enter the correct angle",
          "21px"
        );
      } else {
        values[name]["fire1"] = 0;
        var ele = name + "-value";
        $("#" + ele).text(
          values[name]["fire1"] +
            values[name]["unit"] +
            " " +
            values[name]["fire2"] +
            values[name]["unit"]
        );
      }
    }
    if (!Number.isNaN(fire2)) {
      if (fire2 == 120) {
        combination_flag = true;
        values[name]["fire2"] = 120;
        combination = 120;
        new_reading = true;
        makeDefault();

        var ele = name + "-value";
        $("#" + ele).text(
          values[name]["fire1"] +
            values[name]["unit"] +
            " " +
            values[name]["fire2"] +
            values[name]["unit"]
        );
      } else if (fire2 == 180) {
        combination_flag = true;
        values[name]["fire2"] = 180;
        combination = 180;
        new_reading = true;
        makeDefault();
        var ele = name + "-value";
        $("#" + ele).text(
          values[name]["fire1"] +
            values[name]["unit"] +
            " " +
            values[name]["fire2"] +
            values[name]["unit"]
        );
      } else {
        openPopup(
          "new-img/404-warning.png",
          "Please follow the Instructions to enter the correct angle",
          "21px"
        );
      }
    }
  }
  document.getElementById("submit-" + name).click();
  if (correct_connections_flag) {
    plotData();
  }
}
function acSubmited(name) {
  var freq = parseInt(document.getElementById("value-freq-" + name).value);
  if (!Number.isNaN(freq)) {
    values["freq"] = freq;
    changeFrequency();
  }
  var fire1 = parseInt(document.getElementById("value-fire1-" + name).value);
  var fire2 = parseInt(document.getElementById("value-fire2-" + name).value);
  if (!Number.isNaN(fire1) && !Number.isNaN(fire2)) {
    if (combination == 120) {
      if (values120[name]["fire1"] == fire1) {
        if (values120[name]["fire2"] == fire2) {
          values[name]["fire1"] = fire1;
          values[name]["fire2"] = fire2;
          var ele = name + "-value";
          $("#" + ele).text(
            values[name]["fire1"] +
              values[name]["unit"] +
              " " +
              values[name]["fire2"] +
              values[name]["unit"]
          );
        } else {
          openPopup(
            "new-img/404-warning.png",
            "Please follow step 4 to enter the correct angle",
            "21px"
          );
        }
      } else {
        openPopup(
          "new-img/404-warning.png",
          "Please follow step 4 to enter the correct angle",
          "21px"
        );
      }
    } else if (combination == 180) {
      if (values180[name]["fire1"] == fire1) {
        if (values180[name]["fire2"] == fire2) {
          values[name]["fire1"] = fire1;
          values[name]["fire2"] = fire2;

          var ele = name + "-value";
          $("#" + ele).text(
            values[name]["fire1"] +
              values[name]["unit"] +
              " " +
              values[name]["fire2"] +
              values[name]["unit"]
          );
        } else {
          openPopup(
            "new-img/404-warning.png",
            "Please follow step 8 to enter the correct angle",
            "21px"
          );
        }
      } else {
        openPopup(
          "new-img/404-warning.png",
          "Please follow step 8 to enter the correct angle",
          "21px"
        );
      }
    }
  } else {
    if (!Number.isNaN(freq)) {
    } else if (!Number.isNaN(fire1)) {
      openPopup("new-img/404-warning.png", "Ending angle is Empty", "28px");
    } else if (!Number.isNaN(fire2)) {
      openPopup("new-img/404-warning.png", "Starting angle is Empty", "28px");
    }
  }

  document.getElementById("submit-" + name).click();
  if (correct_connections_flag) {
    plotData();
  }
}
function resisSubmited(name) {
  var a = parseInt(document.getElementById("value-" + name).value);
  if (!Number.isNaN(a)) {
    new_reading = true;
    values["R1"]["value"] = a;
    values["R2"]["value"] = a;
    values["R3"]["value"] = a;
    $("#" + "R1-value").text(values[name]["value"] + values[name]["unit"]);
    $("#" + "R2-value").text(values[name]["value"] + values[name]["unit"]);
    $("#" + "R3-value").text(values[name]["value"] + values[name]["unit"]);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
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
    if (user_connection.length < 33) {
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
      $("#" + "R1-value").text(values["R1"]["value"] + values["R1"]["unit"]);
      $("#" + "R2-value").text(values["R1"]["value"] + values["R1"]["unit"]);
      $("#" + "R3-value").text(values["R1"]["value"] + values["R1"]["unit"]);
    }
  } else {
    openPopup(
      "new-img/404-warning.png",
      "Wrong connection present in the circuit",
      "23px"
    );
  }
});
var count_120 = 1;
var count_180 = 1;
function showreadings() {
  if (correct_connections_flag) {
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
      values["freq"] != 0 &&
      values["R1"]["value"] != 0
    ) {
      if (combination == 120) {
        if (count_120 < 7) {
          if (new_reading) {
            var a = document.getElementById("tab");
            var b = a.innerHTML;
            var str =
              "<tr><td>" +
              count_120 +
              "</td><td>" +
              values["rms"] +
              "</td><td>" +
              values["line"] +
              "</td></tr>";
            a.innerHTML = b + str;
            count_120 = count_120 + 1;
            new_reading = false;
          }
        } else {
          openPopup(
            "new-img/404-warning.png",
            "You can only add 6 readings in the table",
            "23px"
          );
        }
      } else if (combination == 180) {
        if (count_180 < 7) {
          if (new_reading) {
            var a = document.getElementById("tab_180");
            var b = a.innerHTML;
            var str =
              "<tr><td>" +
              count_180 +
              "</td><td>" +
              values["rms"] +
              "</td><td>" +
              values["line"] +
              "</td></tr>";
            a.innerHTML = b + str;
            count_180 = count_180 + 1;
            new_reading = false;
          }
        } else {
          openPopup(
            "new-img/404-warning.png",
            "You can only add 6 readings in the table",
            "23px"
          );
        }
      }
    }
  }
}
function disableresistor(name) {
  document.getElementById("submit-" + name).click();
}
