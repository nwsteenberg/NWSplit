module.exports = {
  params: {
    designator: 'USB-C 16 Pin Receptacle',
    side: 'F',
    CC1: { type: 'net', value: "CC1" },
    CC2: { type: 'net', value: "CC2" },
    DN: { type: 'net', value: "DN" },
    DP: { type: 'net', value: "DP" },
    GND: { type: 'net', value: "GND" },
    SBU1: { type: 'net', value: "SBU1" },
    SBU2: { type: 'net', value: "SBU2" },
    VBUS: { type: 'net', value: "VBUS" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "USB_C_Receptacle_XKB_U262-16XN-4BVC11"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "USB Type C, right-angle, SMT, https://datasheet.lcsc.com/szlcsc/1811141824_XKB-Enterprise-U262-161N-4BVC11_C319148.pdf")`);
fp.push(`(tags "USB C Type-C Receptacle SMD")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(duplicate_pad_numbers_are_jumpers no)`);
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" thru_hole oval (at -4.32 ${flipN(flip, -3.105)} ${flipR(flip, p.r + 0)}) (size 1 2.1) (drill oval 0.6 1.7) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )`);
fp.push(`(pad "" thru_hole oval (at -4.32 ${flipN(flip, 1.075)} ${flipR(flip, p.r + 0)}) (size 1 1.6) (drill oval 0.6 1.2) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )`);
fp.push(`(pad "" np_thru_hole circle (at -2.89 ${flipN(flip, -2.605)} ${flipR(flip, p.r + 0)}) (size 0.65 0.65) (drill 0.65) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 2.89 ${flipN(flip, -2.605)} ${flipR(flip, p.r + 0)}) (size 0.65 0.65) (drill 0.65) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" thru_hole oval (at 4.32 ${flipN(flip, -3.105)} ${flipR(flip, p.r + 0)}) (size 1 2.1) (drill oval 0.6 1.7) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )`);
fp.push(`(pad "" thru_hole oval (at 4.32 ${flipN(flip, 1.075)} ${flipR(flip, p.r + 0)}) (size 1 1.6) (drill oval 0.6 1.2) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )`);
fp.push(`(pad "CC1" smd roundrect (at -1.25 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.3 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.CC1})`);
fp.push(`(pad "CC2" smd roundrect (at 1.75 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.3 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.CC2})`);
fp.push(`(pad "DN" smd roundrect (at -0.75 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.3 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.DN})`);
fp.push(`(pad "DN" smd roundrect (at 0.25 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.3 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.DN})`);
fp.push(`(pad "DP" smd roundrect (at -0.25 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.3 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.DP})`);
fp.push(`(pad "DP" smd roundrect (at 0.75 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.3 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.DP})`);
fp.push(`(pad "GND" smd roundrect (at -3.2 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.6 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.GND})`);
fp.push(`(pad "GND" smd roundrect (at 3.2 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.6 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.GND})`);
fp.push(`(pad "SBU1" smd roundrect (at 1.25 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.3 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.SBU1})`);
fp.push(`(pad "SBU2" smd roundrect (at -1.75 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.3 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.SBU2})`);
fp.push(`(pad "VBUS" smd roundrect (at -2.4 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.6 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.VBUS})`);
fp.push(`(pad "VBUS" smd roundrect (at 2.4 ${flipN(flip, -3.67)} ${flipR(flip, p.r + 0)}) (size 0.6 1.15) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.VBUS})`);

// Drawings on F.Fab
fp.push(`(fp_line (start -4.47 ${flipN(flip, -3.675)}) (end -4.47 ${flipN(flip, 3.675)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, -3.675)}) (end 4.47 ${flipN(flip, -3.675)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, 3.675)}) (end 4.47 ${flipN(flip, 3.675)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 4.47 ${flipN(flip, 3.675)}) (end 4.47 ${flipN(flip, -3.675)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// 3D Models
fp.push(`(model "\${KICAD10_3DMODEL_DIR}/Connector_USB.3dshapes/USB_C_Receptacle_XKB_U262-16XN-4BVC11.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "USB-C 16 Pin Receptacle1" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

