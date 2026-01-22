module.exports = {
  params: {
    designator: 'MX_Choc_SocketHotswap',
    side: 'B',
    from: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "switch_choc_mx"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "" thru_hole oval (at -5.3 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 2.45 2) (drill oval 2.15 1.7) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )`);
fp.push(`(pad "" np_thru_hole circle (at -2.54 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 180)}) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 5 5) (drill 5) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 5.95)} ${flipR(flip, p.r + 0)}) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 3.81 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 180)}) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 5 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 165)}) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") )`);
fp.push(`(pad "" thru_hole oval (at 5.3 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 2.45 2) (drill oval 2.15 1.7) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )`);
fp.push(`(pad "1" smd rect (at -3.275 ${flipN(flip, 5.95)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.from})`);
fp.push(`(pad "1" smd rect (at 7.085 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 180)}) (size 2.55 2.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.from})`);
fp.push(`(pad "2" smd rect (at -5.842 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 180)}) (size 2.55 2.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.to})`);
fp.push(`(pad "2" smd rect (at 8.275 ${flipN(flip, 3.75)} ${flipR(flip, p.r + 0)}) (size 2.6 2.6) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.to})`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -1.5 ${flipN(flip, 3.7)}) (end -2 ${flipN(flip, 4.2)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -1.5 ${flipN(flip, 8.2)}) (end -2 ${flipN(flip, 7.7)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 0.8 ${flipN(flip, 3.7)}) (end -1.5 ${flipN(flip, 3.7)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 1.5 ${flipN(flip, 8.2)}) (end -1.5 ${flipN(flip, 8.2)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2 ${flipN(flip, 7.7)}) (end 1.5 ${flipN(flip, 8.2)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2 ${flipN(flip, 7.7)}) (end 2 ${flipN(flip, 6.78)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2.5 ${flipN(flip, 1.5)}) (end 2.5 ${flipN(flip, 2.2)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 2.52 ${flipN(flip, 6.2)}) (end 7 ${flipN(flip, 6.2)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 7 ${flipN(flip, 1.5)}) (end 2.5 ${flipN(flip, 1.5)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 7 ${flipN(flip, 2)}) (end 7 ${flipN(flip, 1.5)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 7 ${flipN(flip, 6.2)}) (end 7 ${flipN(flip, 5.6)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 2 ${flipN(flip, 6.78)}) (mid 2.139878 ${flipN(flip, 6.382304)}) (end 2.52 ${flipN(flip, 6.2)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 2.5 ${flipN(flip, 2.22)}) (mid 1.956518 ${flipN(flip, 3.312082)}) (end 0.8 ${flipN(flip, 3.7)}) (stroke (width 0.15) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_poly (pts (xy 3.6 ${flipN(flip, -6.5)}) (xy 3.8 ${flipN(flip, -6.5)}) (xy 4.1 ${flipN(flip, -6.45)}) (xy 4.4 ${flipN(flip, -6.35)}) (xy 4.6 ${flipN(flip, -6.25)}) (xy 4.75 ${flipN(flip, -6.15)}) (xy 4.95 ${flipN(flip, -6)}) (xy 5.1 ${flipN(flip, -5.85)}) (xy 5.25 ${flipN(flip, -5.65)}) (xy 5.4 ${flipN(flip, -5.4)}) (xy 5.5 ${flipN(flip, -5)}) (xy 5.5 ${flipN(flip, -4.6)}) (xy 5.35 ${flipN(flip, -4.5)}) (xy 5.2 ${flipN(flip, -4.4)}) (xy 4.75 ${flipN(flip, -4.65)}) (xy 4.5 ${flipN(flip, -4.75)}) (xy 4.05 ${flipN(flip, -4.85)}) (xy 3.55 ${flipN(flip, -4.85)}) (xy 2.95 ${flipN(flip, -4.7)}) (xy 2.45 ${flipN(flip, -4.4)}) (xy 2.15 ${flipN(flip, -4.15)}) (xy 1.75 ${flipN(flip, -3.6)}) (xy 1.55 ${flipN(flip, -3.05)}) (xy 1.5 ${flipN(flip, -2.6)}) (xy 1.25 ${flipN(flip, -2.8)}) (xy 0.9 ${flipN(flip, -2.9)}) (xy 0.4 ${flipN(flip, -2.95)}) (xy -1.65 ${flipN(flip, -2.95)}) (xy -1.2 ${flipN(flip, -3.2)}) (xy -0.95 ${flipN(flip, -3.4)}) (xy -0.65 ${flipN(flip, -3.75)}) (xy -0.5 ${flipN(flip, -4)}) (xy -0.35 ${flipN(flip, -4.35)}) (xy -0.25 ${flipN(flip, -4.75)}) (xy -0.25 ${flipN(flip, -5.05)}) (xy -0.25 ${flipN(flip, -5.4)}) (xy -0.3 ${flipN(flip, -5.65)}) (xy -0.45 ${flipN(flip, -6.05)}) (xy -0.75 ${flipN(flip, -6.5)})) (stroke (width 0.4) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Dwgs.User
fp.push(`(fp_rect (start 9 ${flipN(flip, -9)}) (end -9 ${flipN(flip, 9)}) (stroke (width 0.15) (type solid)) (fill no) (layer "Dwgs.User") )`);

// Properties
// fp.push(`(property "Reference" "S42" (at 0 ${flipN(flip, 7.5)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);
// fp.push(`(property "Value" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + -180) % 180}) (layer "${(flip ? "F.Fab" : "B.Fab")}")  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? "" : " mirror"})))`);

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
function flipR(flip, r) { return normalizeAngle(flip ? r : r) }
function flipN(flip, n) { return flip ? -n : n }

