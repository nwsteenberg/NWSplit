module.exports = {
  params: {
    designator: 'Pin Header 2.54 1x6',
    side: 'F',
    P1: { type: 'net', value: "P1" },
    P2: { type: 'net', value: "P2" },
    P3: { type: 'net', value: "P3" },
    P4: { type: 'net', value: "P4" },
    P5: { type: 'net', value: "P5" },
    P6: { type: 'net', value: "P6" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "PinHeader_1x06_P2.54mm_Vertical"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Through hole straight pin header, 1x06, 2.54mm pitch, single row")`);
fp.push(`(tags "Through hole pin header THT 1x06 2.54mm single row")`);
fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(duplicate_pad_numbers_are_jumpers no)`);
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole circle (at 0 ${flipN(flip, -6.35)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (thermal_bridge_angle 90)  ${p.GND})`);
fp.push(`(pad "2" thru_hole rect (at 0 ${flipN(flip, -3.81)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (thermal_bridge_angle 45)  ${p.VCC})`);
fp.push(`(pad "3" thru_hole circle (at 0 ${flipN(flip, -1.27)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.CC1})`);
fp.push(`(pad "4" thru_hole circle (at 0 ${flipN(flip, 1.27)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.CC2})`);
fp.push(`(pad "5" thru_hole circle (at 0 ${flipN(flip, 3.81)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VCC})`);
fp.push(`(pad "6" thru_hole circle (at 0 ${flipN(flip, 6.35)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})`);

// Drawings on F.Fab
fp.push(`(fp_line (start -1.27 ${flipN(flip, -6.985)}) (end -0.635 ${flipN(flip, -7.62)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -1.27 ${flipN(flip, 7.62)}) (end -1.27 ${flipN(flip, -6.985)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -0.635 ${flipN(flip, -7.62)}) (end 1.27 ${flipN(flip, -7.62)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 1.27 ${flipN(flip, -7.62)}) (end 1.27 ${flipN(flip, 7.62)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 1.27 ${flipN(flip, 7.62)}) (end -1.27 ${flipN(flip, 7.62)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -1.38 ${flipN(flip, -7.73)}) (end 0 ${flipN(flip, -7.73)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.38 ${flipN(flip, -6.35)}) (end -1.38 ${flipN(flip, -7.73)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.38 ${flipN(flip, -5.08)}) (end -1.38 ${flipN(flip, 7.73)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.38 ${flipN(flip, -5.08)}) (end 1.38 ${flipN(flip, -5.08)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.38 ${flipN(flip, 7.73)}) (end 1.38 ${flipN(flip, 7.73)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.38 ${flipN(flip, -5.08)}) (end 1.38 ${flipN(flip, 7.73)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${KICAD10_3DMODEL_DIR}/Connector_PinHeader_2.54mm.3dshapes/PinHeader_1x06_P2.54mm_Vertical.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "Pin Header 2.54 1x61" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

