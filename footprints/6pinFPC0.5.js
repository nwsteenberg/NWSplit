module.exports = {
  params: {
    designator: 'C',
    side: 'F',
    P1: { type: 'net', value: "" },
    P2: { type: 'net', value: "" },
    P3: { type: 'net', value: "" },
    P4: { type: 'net', value: "" },
    P5: { type: 'net', value: "" },
    P6: { type: 'net', value: "" },
    P7: { type: 'net', value: "" },
    P8: { type: 'net', value: "" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint easyeda2kicad:FPC-SMD_FPC05006-09200`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" smd rect (at -1.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0.00)}) (size 0.300 1.600) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P1})`);
fp.push(`(pad "2" smd rect (at -0.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0.00)}) (size 0.300 1.600) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P2})`);
fp.push(`(pad "3" smd rect (at -0.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0.00)}) (size 0.300 1.600) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P3})`);
fp.push(`(pad "4" smd rect (at 0.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0.00)}) (size 0.300 1.600) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P4})`);
fp.push(`(pad "5" smd rect (at 0.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0.00)}) (size 0.300 1.600) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P5})`);
fp.push(`(pad "6" smd rect (at 1.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0.00)}) (size 0.300 1.600) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P6})`);
fp.push(`(pad "7" smd rect (at 3.05 ${flipN(flip, 1.25)} ${flipR(flip, p.r + 0.00)}) (size 1.800 2.000) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P7})`);
fp.push(`(pad "8" smd rect (at -3.05 ${flipN(flip, 1.25)} ${flipR(flip, p.r + 0.00)}) (size 1.800 2.000) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") ${p.P8})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -3.72 ${flipN(flip, 4.40)}) (end -3.72 ${flipN(flip, -0.80)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start -3.72 ${flipN(flip, -0.80)}) (end 3.72 ${flipN(flip, -0.80)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.72 ${flipN(flip, -0.80)}) (end 3.72 ${flipN(flip, 4.40)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
fp.push(`(fp_line (start 3.72 ${flipN(flip, 4.40)}) (end -3.72 ${flipN(flip, 4.40)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);

// Drawings on F.Fab
fp.push(`(fp_text value FPC-SMD_FPC05006-09200 (at 0.000 ${flipN(flip, 5.248)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "${p.ref}" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start 3.70 ${flipN(flip, 2.48)}) (end 3.70 ${flipN(flip, 3.10)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 1.63 ${flipN(flip, -0.79)}) (end 3.70 ${flipN(flip, -0.79)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 3.70 ${flipN(flip, -0.79)}) (end 3.70 ${flipN(flip, 0.02)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -3.70 ${flipN(flip, 0.02)}) (end -3.70 ${flipN(flip, -0.79)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -3.70 ${flipN(flip, -0.79)}) (end -1.63 ${flipN(flip, -0.79)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -3.70 ${flipN(flip, 3.11)}) (end -3.70 ${flipN(flip, 2.48)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start -3.70 ${flipN(flip, 4.40)}) (end -3.70 ${flipN(flip, 3.10)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 3.70 ${flipN(flip, 3.10)}) (end 3.70 ${flipN(flip, 4.40)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_line (start 3.70 ${flipN(flip, 4.40)}) (end -3.70 ${flipN(flip, 4.40)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);
fp.push(`(fp_circle (center -3.95 ${flipN(flip, -1.55)}) (end -3.92 ${flipN(flip, -1.55)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.06))`);
fp.push(`(fp_circle (center -1.90 ${flipN(flip, -1.50)}) (end -1.80 ${flipN(flip, -1.50)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.25))`);

// Drawings on Cmts.User
fp.push(`(fp_circle (center -1.30 ${flipN(flip, -1.90)}) (end -1.20 ${flipN(flip, -1.90)}) (layer "Cmts.User") (width 0.20))`);

// 3D Models
fp.push(`(model "\${EASYEDA2KICAD}/easyeda2kicad.3dshapes/FPC-SMD_FPC05006-09200.wrl" (offset (xyz 0.000 0.000 0.000)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "LCSC Part" "C479749")`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

