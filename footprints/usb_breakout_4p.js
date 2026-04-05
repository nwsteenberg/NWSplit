module.exports = {
  params: {
    designator: 'USB 4p Breakout',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "PinHeader_1x04_P2.54mm_Vertical"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Through hole straight pin header, 1x04, 2.54mm pitch, single row")`);
fp.push(`(tags "Through hole pin header THT 1x04 2.54mm single row")`);
fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen
fp.push(`(duplicate_pad_numbers_are_jumpers no)`);
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole circle (at -3.83 ${flipN(flip, 6.2)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (thermal_bridge_angle 90)  ${p.P1})`);
fp.push(`(pad "2" thru_hole circle (at -1.29 ${flipN(flip, 6.2)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P2})`);
fp.push(`(pad "3" thru_hole circle (at 1.25 ${flipN(flip, 6.2)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P3})`);
fp.push(`(pad "4" thru_hole circle (at 3.79 ${flipN(flip, 6.2)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P4})`);

// Drawings on F.CrtYd
fp.push(`(fp_rect (start -5.6 ${flipN(flip, 4.43)}) (end 5.56 ${flipN(flip, 7.97)}) (stroke (width 0.05) (type solid)) (fill no) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start -5.1 ${flipN(flip, 4.93)}) (end 5.06 ${flipN(flip, 4.93)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -5.1 ${flipN(flip, 6.835)}) (end -5.1 ${flipN(flip, 4.93)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -4.465 ${flipN(flip, 7.47)}) (end -5.1 ${flipN(flip, 6.835)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 5.06 ${flipN(flip, 4.93)}) (end 5.06 ${flipN(flip, 7.47)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 5.06 ${flipN(flip, 7.47)}) (end -4.465 ${flipN(flip, 7.47)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -5.21 ${flipN(flip, 7.58)}) (end -5.21 ${flipN(flip, 6.2)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3.83 ${flipN(flip, 7.58)}) (end -5.21 ${flipN(flip, 7.58)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.56 ${flipN(flip, 4.82)}) (end 5.17 ${flipN(flip, 4.82)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.56 ${flipN(flip, 7.58)}) (end -2.56 ${flipN(flip, 4.82)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.56 ${flipN(flip, 7.58)}) (end 5.17 ${flipN(flip, 7.58)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.17 ${flipN(flip, 7.58)}) (end 5.17 ${flipN(flip, 4.82)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Dwgs.User
fp.push(`(fp_line (start -5.87 ${flipN(flip, -5.45)}) (end 5.83 ${flipN(flip, -5.45)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start -5.87 ${flipN(flip, 8.25)}) (end -5.87 ${flipN(flip, -5.45)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start -5.87 ${flipN(flip, 8.25)}) (end 5.83 ${flipN(flip, 8.25)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, -5.95)}) (end 4.43 ${flipN(flip, -5.95)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, -5.45)}) (end -4.47 ${flipN(flip, -5.95)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, 1.55)}) (end -4.47 ${flipN(flip, -5.95)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, 1.55)}) (end 4.43 ${flipN(flip, 1.55)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start 4.43 ${flipN(flip, -5.45)}) (end 4.43 ${flipN(flip, -5.95)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start 4.43 ${flipN(flip, 1.55)}) (end 4.43 ${flipN(flip, -5.95)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start 5.83 ${flipN(flip, 8.25)}) (end 5.83 ${flipN(flip, -5.45)}) (stroke (width 0.1) (type solid)) (layer "Dwgs.User") )`);

// 3D Models
fp.push(`(model "\${KICAD10_3DMODEL_DIR}/Connector_PinHeader_2.54mm.3dshapes/PinHeader_1x04_P2.54mm_Vertical.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -2.38)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "PinHeader_1x04_P2.54mm_Vertical" (at 0 ${flipN(flip, 10)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "KiLib_Generator" "connector/pin_header_socket" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

