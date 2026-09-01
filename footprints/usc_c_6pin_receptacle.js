module.exports = {
  params: {
    designator: 'USB-C Receptacle 6Pin',
    side: 'F',
    CC1: { type: 'net', value: "CC1" },
    CC2: { type: 'net', value: "CC2" },
    GND: { type: 'net', value: "GND" },
    VCC: { type: 'net', value: "VCC" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "USB_C_Receptacle_HRO_TYPE-C-31-M-17"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "USB Type-C receptacle for USB 2.0, 6 pin, https://omo-oss-file.thefastfile.com/portal-saas/new2023011311465142457/cms/file/134891b2-9b01-4104-89d3-96207243f692.pdf")`);
fp.push(`(tags "usb usb-c 2.0 pd")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(duplicate_pad_numbers_are_jumpers no)`);
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "A5" smd roundrect (at -0.5 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 0)}) (size 0.7 1.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.CC1})`);
fp.push(`(pad "A5" smd roundrect (at 0.5 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 180)}) (size 0.7 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.25)  ${p.CC1})`);
fp.push(`(pad "A9" smd roundrect (at -1.52 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 180)}) (size 0.8 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.25)  ${p.VCC})`);
fp.push(`(pad "A9" smd roundrect (at 1.52 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 0)}) (size 0.8 1.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.VCC})`);
fp.push(`(pad "A12" smd roundrect (at -2.75 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 180)}) (size 0.9 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.25)  ${p.GND})`);
fp.push(`(pad "A12" smd roundrect (at 2.75 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 0)}) (size 0.9 1.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.GND})`);
fp.push(`(pad "B5" smd roundrect (at -0.5 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 180)}) (size 0.7 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.25)  ${p.CC2})`);
fp.push(`(pad "B5" smd roundrect (at 0.5 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 0)}) (size 0.7 1.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.CC2})`);
fp.push(`(pad "B9" smd roundrect (at -1.52 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 0)}) (size 0.8 1.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.VCC})`);
fp.push(`(pad "B9" smd roundrect (at 1.52 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 180)}) (size 0.8 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.25)  ${p.VCC})`);
fp.push(`(pad "B12" smd roundrect (at -2.75 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 0)}) (size 0.9 1.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25)  ${p.GND})`);
fp.push(`(pad "B12" smd roundrect (at 2.75 ${flipN(flip, -3.18)} ${flipR(flip, p.r + 180)}) (size 0.9 1.6) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (roundrect_rratio 0.25)  ${p.GND})`);
fp.push(`(pad "SH" thru_hole oval (at -4.32 ${flipN(flip, -3)} ${flipR(flip, p.r + 0)}) (size 1 1.7) (drill oval 0.5 1.2) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SH})`);
fp.push(`(pad "SH" thru_hole oval (at -4.32 ${flipN(flip, 0.8)} ${flipR(flip, p.r + 0)}) (size 1 1.7) (drill oval 0.5 1.2) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SH})`);
fp.push(`(pad "SH" thru_hole oval (at 4.32 ${flipN(flip, -3)} ${flipR(flip, p.r + 0)}) (size 1 1.7) (drill oval 0.5 1.2) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SH})`);
fp.push(`(pad "SH" thru_hole oval (at 4.32 ${flipN(flip, 0.8)} ${flipR(flip, p.r + 0)}) (size 1 1.7) (drill oval 0.5 1.2) (property pad_prop_mechanical) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SH})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -5.32 ${flipN(flip, -4.48)}) (end -5.32 ${flipN(flip, 3.9)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -5.32 ${flipN(flip, -4.48)}) (end 5.32 ${flipN(flip, -4.48)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -5.32 ${flipN(flip, 3.9)}) (end 5.32 ${flipN(flip, 3.9)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 5.32 ${flipN(flip, -4.48)}) (end 5.32 ${flipN(flip, 3.9)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start -4.47 ${flipN(flip, -3.4)}) (end -4.47 ${flipN(flip, 3.4)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, -3.4)}) (end 4.47 ${flipN(flip, -3.4)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -4.47 ${flipN(flip, 3.4)}) (end 4.47 ${flipN(flip, 3.4)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 4.47 ${flipN(flip, -3.4)}) (end 4.47 ${flipN(flip, 3.4)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// 3D Models
fp.push(`(model "\${KICAD10_3DMODEL_DIR}/Connector_USB.3dshapes/USB_C_Receptacle_HRO_TYPE-C-31-M-17.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "USB-C 6 Pin Recepticle1" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
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


