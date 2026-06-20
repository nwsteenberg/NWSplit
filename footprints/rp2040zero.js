module.exports = {
  params: {
    designator: 'RP2040Zero',
    side: 'F',        // 'F' or 'B' controls module layer and pad layer
    flip: false,      // mirror horizontally around computed center when true

    P5V:  {type: 'net', value: 'P5V'},
    GND:  {type: 'net', value: 'GND'},
    P3V3: {type: 'net', value: 'P3V3'},
    GP29: {type: 'net', value: 'GP29'},
    GP28: {type: 'net', value: 'GP28'},
    GP27: {type: 'net', value: 'GP27'},
    GP26: {type: 'net', value: 'GP26'},
    GP15: {type: 'net', value: 'GP15'},
    GP14: {type: 'net', value: 'GP14'},
    GP13: {type: 'net', value: 'GP13'},
    GP12: {type: 'net', value: 'GP12'},
    GP11: {type: 'net', value: 'GP11'},
    GP10: {type: 'net', value: 'GP10'},
    GP9:  {type: 'net', value: 'GP9'},
    GP8:  {type: 'net', value: 'GP8'},
    GP7:  {type: 'net', value: 'GP7'},
    GP6:  {type: 'net', value: 'GP6'},
    GP5:  {type: 'net', value: 'GP5'},
    GP4:  {type: 'net', value: 'GP4'},
    GP3:  {type: 'net', value: 'GP3'},
    GP2:  {type: 'net', value: 'GP2'},
    GP1:  {type: 'net', value: 'GP1'},
    GP0:  {type: 'net', value: 'GP0'}
  },

  body: p => {
    // reference pad coordinates (local footprint coords)
    const padRefs = {
      1:  [17.78, -22.86], 2:  [17.78, -20.32], 3:  [17.78, -17.78],
      4:  [17.78, -15.24], 5:  [17.78, -12.7],  6:  [17.78, -10.16],
      7:  [17.78, -7.62],  8:  [17.78, -5.08],  9:  [17.78, -2.54],
      10: [15.24, -2.33], 11: [12.7,  -2.33], 12: [10.16, -2.33],
      13: [7.62,  -2.33], 14: [5.08,  -2.33], 15: [2.54,  -2.54],
      16: [2.54,  -5.08], 17: [2.54,  -7.62], 18: [2.54,  -10.16],
      19: [2.54,  -22.86],20: [2.54,  -20.32],21: [2.54,  -17.78],
      22: [2.54,  -12.7], 23: [2.54,  -15.24]
    };

    // original drill offsets from the thru_hole footprint (apply these as positional offsets)
    const offsets = {
      1:  {x:  0.6, y: 0},  2:  {x:  0.6, y: 0},  3:  {x:  0.6, y: 0},
      4:  {x:  0.6, y: 0},  5:  {x:  0.6, y: 0},  6:  {x:  0.6, y: 0},
      7:  {x:  0.6, y: 0},  8:  {x:  0.6, y: 0},  9:  {x:  0.6, y: 0},
      10: {x:  0,   y: 0.6},11: {x:  0,   y: 0.6},12: {x:  0,   y: 0.6},
      13: {x:  0,   y: 0.6},14: {x:  0,   y: 0.6},15: {x: -0.6, y: 0},
      16: {x: -0.6, y: 0},  17: {x: -0.6, y: 0},  18: {x: -0.6, y: 0},
      19: {x: -0.6, y: 0},  20: {x: -0.6, y: 0},  21: {x: -0.6, y: 0},
      22: {x: -0.6, y: 0},  23: {x: -0.6, y: 0}
    };

    // compute centerX from reference X extents (used for center-based mirroring)
    const xs = Object.values(padRefs).map(v => v[0]);
    const centerX = (Math.min(...xs) + Math.max(...xs)) / 2;

    // mirror function applied to the already-offset hole position
    const mirrorX = x => (p.flip ? (2 * centerX - x) : x);
    const mirrorY = y => y;

    // pad layer spec driven by p.side
    const primaryLayer = (p.side === 'B') ? 'B' : 'F';
    const padLayerSpec = `${primaryLayer}.Cu ${primaryLayer}.Mask`;
    const silkLayer = `${p.side}.SilkS`;
    const fabLayer = `${p.side}.Fab`;
    const crtydLayer = `${p.side}.CrtYd`;

    const standard = `
    (module RP2040-Zero (layer ${p.side}.Cu)
      ${p.at}
    `;

    // finalPos: apply original offset first, then mirror the resulting hole position if needed.
    // NOTE: do NOT invert offsets based on side; use the same absolute hole positions for F and B.
    function finalPos(n) {
      const ref = padRefs[n];
      const off = offsets[n] || {x:0,y:0};
      const holeX = ref[0] + off.x;
      const holeY = ref[1] + off.y;
      return [ mirrorX(holeX), mirrorY(holeY) ];
    }

    function emitPad(n, sizeX, sizeY, netStr) {
      const pos = finalPos(n);
      return `(pad ${n} smd roundrect (at ${pos[0]} ${pos[1]} ${p.rot}) (size ${sizeX} ${sizeY}) (layers ${padLayerSpec}) (roundrect_rratio 0.25) ${netStr})`;
    }

    const padBlock = [
      emitPad(1,  2.6, 1.6,    p.GP0.str),
      emitPad(2,  2.6, 1.6,    p.GP1.str),
      emitPad(3,  2.6, 1.6,    p.GP2.str),
      emitPad(4,  2.6, 1.6,    p.GP3.str),
      emitPad(5,  2.6, 1.6,    p.GP4.str),
      emitPad(6,  2.6, 1.6002, p.GP5.str),
      emitPad(7,  2.6, 1.6002, p.GP6.str),
      emitPad(8,  2.6, 1.6002, p.GP7.str),
      emitPad(9,  2.6, 1.6002, p.GP8.str),

      emitPad(10, 1.6, 2.6,    p.GP9.str),
      emitPad(11, 1.5748, 2.6, p.GP10.str),
      emitPad(12, 1.5748, 2.6, p.GP11.str),
      emitPad(13, 1.5748, 2.6, p.GP12.str),
      emitPad(14, 1.5748, 2.6, p.GP13.str),

      emitPad(15, 2.6, 1.6002, p.GP14.str),
      emitPad(16, 2.6, 1.6002, p.GP15.str),
      emitPad(17, 2.6, 1.6002, p.GP26.str),
      emitPad(18, 2.6, 1.6002, p.GP27.str),
      emitPad(19, 2.6, 1.6002, p.P5V.str),
      emitPad(20, 2.6, 1.6002, p.GND.str),
      emitPad(21, 2.6, 1.6002, p.P3V3.str),
      emitPad(22, 2.6, 1.6002, p.GP28.str),
      emitPad(23, 2.6, 1.6002, p.GP29.str)
    ].join('\n');

    // artwork (no RP2040 text, no pin labels)
    const artwork = `
      (fp_line (start 19.16 -24.45) (end 1.16 -24.45) (layer ${silkLayer}) (width 0.12))
      (fp_line (start 1.16 -24.45) (end 1.16 -0.95) (layer ${silkLayer}) (width 0.12))
      (fp_line (start 1.16 -0.95) (end 19.16 -0.95) (layer ${silkLayer}) (width 0.12))
      (fp_line (start 19.16 -0.95) (end 19.16 -24.45) (layer ${silkLayer}) (width 0.12))
      (fp_line (start 1.16 -24.45) (end 19.16 -24.45) (layer ${crtydLayer}) (width 0.05))
      (fp_line (start 19.16 -24.45) (end 19.16 -0.95) (layer ${crtydLayer}) (width 0.05))
      (fp_line (start 19.16 -0.95) (end 1.16 -0.95) (layer ${crtydLayer}) (width 0.05))
      (fp_line (start 1.16 -0.95) (end 1.16 -24.45) (layer ${crtydLayer}) (width 0.05))
      (fp_line (start 5.83 -25.45) (end 5.83 -24.45) (layer ${fabLayer}) (width 0.1))
      (fp_line (start 14.46 -25.45) (end 14.46 -24.45) (layer ${fabLayer}) (width 0.1))
      (fp_line (start 5.83 -25.45) (end 14.46 -25.45) (layer ${fabLayer}) (width 0.1))
    `;

    return `
      ${standard}
      ${artwork}
      ${padBlock}
    )
    `;
  }
};