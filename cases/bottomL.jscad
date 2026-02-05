function _rightSubstitution_extrude_100_outline_fn(){
    return new CSG.Path2D([[195.75,-239.105],[386.25,-239.105]]).appendPoint([386.25,-48.605]).appendPoint([195.75,-48.605]).appendPoint([195.75,-239.105]).close().innerToCAG()
.extrude({ offset: [0, 0, 100] });
}


function _bigOutlineForBottom_extrude_2_outline_fn(){
    return new CSG.Path2D([[293.6422105,-198.74],[357.2946633,-198.74]]).appendArc([365.7946535,-190.2529096],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([365.9303176,-95.6271864]).appendArc([357.4303264,-87.115],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-87.115]).appendArc([235.1169579,-95.6225692],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([235.1976598,-186.2466875]).appendPoint([221.4579197,-191.2475439]).appendArc([219.366066,-195.7335387],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([225.8815499,-213.634683]).appendArc([230.3675445,-215.7265367],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([248.1250906,-209.2633183]).appendPoint([275.3829129,-201.9596068]).appendPoint([293.6422105,-198.74]).close().innerToCAG()
.union(
    new CSG.Path2D([[94.3577898,-198.74],[30.7053367,-198.74]]).appendArc([22.2053465,-190.2529096],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([22.0696824,-95.6271864]).appendArc([30.5696736,-87.115],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-87.115]).appendArc([152.8830421,-95.6225693],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([152.8023402,-186.2466874]).appendPoint([166.5420803,-191.247544]).appendArc([168.633934,-195.7335386],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([162.1184501,-213.634683]).appendArc([157.6324555,-215.7265367],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([139.8749091,-209.2633182]).appendPoint([112.6170868,-201.9596068]).appendPoint([94.3577898,-198.74]).close().innerToCAG()
).extrude({ offset: [0, 0, 2] });
}


function _pcbSupport_extrude_5_outline_fn(){
    return new CSG.Path2D([[338.8,-91.115],[243.6169546,-91.115]]).appendArc([239.3904932,-94.07],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([237.3032412,-94.07]).appendArc([243.6169545,-89.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([338.8,-89.115]).appendPoint([338.8,-91.115]).close().innerToCAG()
.union(
    new CSG.Path2D([[49.2,-91.115],[144.3830455,-91.115]]).appendArc([148.6095068,-94.07],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([150.6967588,-94.07]).appendArc([144.3830455,-89.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([49.2,-89.115]).appendPoint([49.2,-91.115]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.5327671,-194.74],[30.7053367,-194.74]]).appendArc([26.2053413,-190.2464516],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([26.0696782,-95.6214516]).appendArc([30.2,-91.13021],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([30.2,-89.1255207]).appendArc([24.0696794,-95.6236946],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([24.2053433,-190.249319]).appendArc([30.7053367,-196.74],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([94.5327671,-196.74]).appendPoint([113.0503787,-200.0051546]).appendPoint([140.4768932,-207.354067]).appendPoint([158.3164958,-213.8471514]).appendArc([160.2390649,-212.9506427],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([166.7545487,-195.0494983]).appendArc([165.85804,-193.1269292],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([150.8010928,-187.6466485]).appendPoint([150.8781903,-101.07]).appendPoint([148.8781895,-101.07]).appendPoint([148.8010936,-187.6448674]).appendArc([150.1170525,-189.5260337],{"radius":2,"clockwise":false,"large":false}).appendPoint([164.7041534,-194.8353043]).appendPoint([163.4985324,-198.1477208]).appendPoint([164.438225,-198.4897409]).appendPoint([163.0701444,-202.2485114]).appendPoint([162.1304518,-201.9064913]).appendPoint([158.5306898,-211.7967561]).appendPoint([141.1615279,-205.4748982]).appendArc([140.9945313,-205.4222154],{"radius":2,"clockwise":false,"large":false}).appendPoint([113.5680168,-198.0733029]).appendArc([113.3976751,-198.0355391],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.8800635,-194.7703845]).appendArc([94.5327671,-194.74],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[293.4672329,-194.74],[357.2946633,-194.74]]).appendArc([361.7946587,-190.2464516],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([361.9303218,-95.6214516]).appendArc([357.8,-91.13021],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([357.8,-89.1255207]).appendArc([363.9303206,-95.6236946],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([363.7946567,-190.249319]).appendArc([357.2946633,-196.74],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([293.4672329,-196.74]).appendPoint([274.9496213,-200.0051546]).appendPoint([247.5231068,-207.354067]).appendPoint([229.6835042,-213.8471514]).appendArc([227.7609351,-212.9506427],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([221.2454513,-195.0494983]).appendArc([222.14196,-193.1269292],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([237.1989072,-187.6466485]).appendPoint([237.1218097,-101.07]).appendPoint([239.1218105,-101.07]).appendPoint([239.1989064,-187.6448675]).appendArc([237.8829475,-189.5260337],{"radius":2,"clockwise":true,"large":false}).appendPoint([223.2958466,-194.8353043]).appendPoint([224.5014676,-198.1477208]).appendPoint([223.561775,-198.4897409]).appendPoint([224.9298556,-202.2485114]).appendPoint([225.8695482,-201.9064913]).appendPoint([229.4693102,-211.7967561]).appendPoint([246.8390665,-205.4746818]).appendArc([247.0054687,-205.4222154],{"radius":2,"clockwise":true,"large":false}).appendPoint([274.4319833,-198.0733029]).appendArc([274.602325,-198.0355391],{"radius":2,"clockwise":true,"large":false}).appendPoint([293.1199365,-194.7703845]).appendArc([293.4672329,-194.74],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}


function _walls_extrude_8_5_outline_fn(){
    return new CSG.Path2D([[293.6422105,-198.74],[357.2946633,-198.74]]).appendArc([365.7946535,-190.2529096],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([365.9303176,-95.6271864]).appendArc([357.4303264,-87.115],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-87.115]).appendArc([235.1169579,-95.6225692],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([235.1976598,-186.2466875]).appendPoint([221.4579197,-191.2475439]).appendArc([219.366066,-195.7335387],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([225.8815499,-213.634683]).appendArc([230.3675445,-215.7265367],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([248.1250906,-209.2633183]).appendPoint([275.3829129,-201.9596068]).appendPoint([293.6422105,-198.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[293.4672329,-196.74],[357.2946633,-196.74]]).appendArc([363.7946566,-190.249319],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([363.9303197,-95.624319]).appendArc([357.4303264,-89.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-89.115]).appendArc([237.1169571,-95.6207882],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([237.1989072,-187.6466485]).appendPoint([222.14196,-193.1269292]).appendArc([221.2454513,-195.0494983],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([227.7609351,-212.9506427]).appendArc([229.6835042,-213.8471514],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([247.5231068,-207.354067]).appendPoint([274.9496213,-200.0051546]).appendPoint([293.4672329,-196.74]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.3577898,-198.74],[30.7053367,-198.74]]).appendArc([22.2053465,-190.2529096],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([22.0696824,-95.6271864]).appendArc([30.5696736,-87.115],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-87.115]).appendArc([152.8830421,-95.6225693],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([152.8023402,-186.2466874]).appendPoint([166.5420803,-191.247544]).appendArc([168.633934,-195.7335386],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([162.1184501,-213.634683]).appendArc([157.6324555,-215.7265367],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([139.8749091,-209.2633182]).appendPoint([112.6170868,-201.9596068]).appendPoint([94.3577898,-198.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[94.5327671,-196.74],[30.7053367,-196.74]]).appendArc([24.2053434,-190.249319],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([24.0696803,-95.624319]).appendArc([30.5696736,-89.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-89.115]).appendArc([150.8830429,-95.6207883],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([150.8010928,-187.6466485]).appendPoint([165.85804,-193.1269292]).appendArc([166.7545487,-195.0494983],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([160.2390649,-212.9506427]).appendArc([158.3164958,-213.8471514],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([140.4768932,-207.354067]).appendPoint([113.0503787,-200.0051546]).appendPoint([94.5327671,-196.74]).close().innerToCAG()
)).extrude({ offset: [0, 0, 8.5] });
}


function _holes_extrude_50_outline_fn(){
    return CAG.circle({"center":[355.5,-132.5],"radius":1.05})
.union(
    CAG.circle({"center":[355.5,-170.5],"radius":1.05})
).union(
    CAG.circle({"center":[32.5,-132.5],"radius":1.05})
).union(
    CAG.circle({"center":[32.5,-170.5],"radius":1.05})
).union(
    CAG.circle({"center":[245.5,-121.07],"radius":1.05})
).union(
    CAG.circle({"center":[245.5,-159.07],"radius":1.05})
).union(
    CAG.circle({"center":[142.5,-121.07],"radius":1.05})
).union(
    CAG.circle({"center":[142.5,-159.07],"radius":1.05})
).union(
    CAG.circle({"center":[248.7047668,-203.1727513],"radius":1.05})
).union(
    CAG.circle({"center":[139.2952332,-203.1727513],"radius":1.05})
).extrude({ offset: [0, 0, 50] });
}


function _mcuCutoutCase_extrude_7_outline_fn(){
    return new CSG.Path2D([[342.3,-108.25],[354.3,-108.25]]).appendPoint([354.3,-83.75]).appendPoint([342.3,-83.75]).appendPoint([342.3,-108.25]).close().innerToCAG()
.union(
    new CSG.Path2D([[33.7,-108.25],[45.7,-108.25]]).appendPoint([45.7,-83.75]).appendPoint([33.7,-83.75]).appendPoint([33.7,-108.25]).close().innerToCAG()
).extrude({ offset: [0, 0, 7] });
}


function _trrsCutoutCase_extrude_6_outline_fn(){
    return new CSG.Path2D([[232.75,-101.07],[249.75,-101.07]]).appendPoint([249.75,-94.07]).appendPoint([232.75,-94.07]).appendPoint([232.75,-101.07]).close().innerToCAG()
.union(
    new CSG.Path2D([[138.25,-101.07],[155.25,-101.07]]).appendPoint([155.25,-94.07]).appendPoint([138.25,-94.07]).appendPoint([138.25,-101.07]).close().innerToCAG()
).extrude({ offset: [0, 0, 6] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = _bigOutlineForBottom_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            

                // creating part 1 of case bottom
                let bottom__part_1 = _pcbSupport_extrude_5_outline_fn();

                // make sure that rotations are relative
                let bottom__part_1_bounds = bottom__part_1.getBounds();
                let bottom__part_1_x = bottom__part_1_bounds[0].x + (bottom__part_1_bounds[1].x - bottom__part_1_bounds[0].x) / 2
                let bottom__part_1_y = bottom__part_1_bounds[0].y + (bottom__part_1_bounds[1].y - bottom__part_1_bounds[0].y) / 2
                bottom__part_1 = translate([-bottom__part_1_x, -bottom__part_1_y, 0], bottom__part_1);
                bottom__part_1 = rotate([0,0,0], bottom__part_1);
                bottom__part_1 = translate([bottom__part_1_x, bottom__part_1_y, 0], bottom__part_1);

                bottom__part_1 = translate([0,0,0], bottom__part_1);
                result = result.union(bottom__part_1);
                
            

                // creating part 2 of case bottom
                let bottom__part_2 = _walls_extrude_8_5_outline_fn();

                // make sure that rotations are relative
                let bottom__part_2_bounds = bottom__part_2.getBounds();
                let bottom__part_2_x = bottom__part_2_bounds[0].x + (bottom__part_2_bounds[1].x - bottom__part_2_bounds[0].x) / 2
                let bottom__part_2_y = bottom__part_2_bounds[0].y + (bottom__part_2_bounds[1].y - bottom__part_2_bounds[0].y) / 2
                bottom__part_2 = translate([-bottom__part_2_x, -bottom__part_2_y, 0], bottom__part_2);
                bottom__part_2 = rotate([0,0,0], bottom__part_2);
                bottom__part_2 = translate([bottom__part_2_x, bottom__part_2_y, 0], bottom__part_2);

                bottom__part_2 = translate([0,0,0], bottom__part_2);
                result = result.union(bottom__part_2);
                
            

                // creating part 3 of case bottom
                let bottom__part_3 = _holes_extrude_50_outline_fn();

                // make sure that rotations are relative
                let bottom__part_3_bounds = bottom__part_3.getBounds();
                let bottom__part_3_x = bottom__part_3_bounds[0].x + (bottom__part_3_bounds[1].x - bottom__part_3_bounds[0].x) / 2
                let bottom__part_3_y = bottom__part_3_bounds[0].y + (bottom__part_3_bounds[1].y - bottom__part_3_bounds[0].y) / 2
                bottom__part_3 = translate([-bottom__part_3_x, -bottom__part_3_y, 0], bottom__part_3);
                bottom__part_3 = rotate([0,0,0], bottom__part_3);
                bottom__part_3 = translate([bottom__part_3_x, bottom__part_3_y, 0], bottom__part_3);

                bottom__part_3 = translate([0,0,0], bottom__part_3);
                result = result.subtract(bottom__part_3);
                
            

                // creating part 4 of case bottom
                let bottom__part_4 = _mcuCutoutCase_extrude_7_outline_fn();

                // make sure that rotations are relative
                let bottom__part_4_bounds = bottom__part_4.getBounds();
                let bottom__part_4_x = bottom__part_4_bounds[0].x + (bottom__part_4_bounds[1].x - bottom__part_4_bounds[0].x) / 2
                let bottom__part_4_y = bottom__part_4_bounds[0].y + (bottom__part_4_bounds[1].y - bottom__part_4_bounds[0].y) / 2
                bottom__part_4 = translate([-bottom__part_4_x, -bottom__part_4_y, 0], bottom__part_4);
                bottom__part_4 = rotate([0,0,0], bottom__part_4);
                bottom__part_4 = translate([bottom__part_4_x, bottom__part_4_y, 0], bottom__part_4);

                bottom__part_4 = translate([0,0,2], bottom__part_4);
                result = result.subtract(bottom__part_4);
                
            

                // creating part 5 of case bottom
                let bottom__part_5 = _trrsCutoutCase_extrude_6_outline_fn();

                // make sure that rotations are relative
                let bottom__part_5_bounds = bottom__part_5.getBounds();
                let bottom__part_5_x = bottom__part_5_bounds[0].x + (bottom__part_5_bounds[1].x - bottom__part_5_bounds[0].x) / 2
                let bottom__part_5_y = bottom__part_5_bounds[0].y + (bottom__part_5_bounds[1].y - bottom__part_5_bounds[0].y) / 2
                bottom__part_5 = translate([-bottom__part_5_x, -bottom__part_5_y, 0], bottom__part_5);
                bottom__part_5 = rotate([0,0,0], bottom__part_5);
                bottom__part_5 = translate([bottom__part_5_x, bottom__part_5_y, 0], bottom__part_5);

                bottom__part_5 = translate([0,0,6.6], bottom__part_5);
                result = result.subtract(bottom__part_5);
                
            
                    return result;
                }
            
            

                function bottomL_case_fn() {
                    

                // creating part 0 of case bottomL
                let bottomL__part_0 = bottom_case_fn();

                // make sure that rotations are relative
                let bottomL__part_0_bounds = bottomL__part_0.getBounds();
                let bottomL__part_0_x = bottomL__part_0_bounds[0].x + (bottomL__part_0_bounds[1].x - bottomL__part_0_bounds[0].x) / 2
                let bottomL__part_0_y = bottomL__part_0_bounds[0].y + (bottomL__part_0_bounds[1].y - bottomL__part_0_bounds[0].y) / 2
                bottomL__part_0 = translate([-bottomL__part_0_x, -bottomL__part_0_y, 0], bottomL__part_0);
                bottomL__part_0 = rotate([0,0,0], bottomL__part_0);
                bottomL__part_0 = translate([bottomL__part_0_x, bottomL__part_0_y, 0], bottomL__part_0);

                bottomL__part_0 = translate([0,0,0], bottomL__part_0);
                let result = bottomL__part_0;
                
            

                // creating part 1 of case bottomL
                let bottomL__part_1 = _rightSubstitution_extrude_100_outline_fn();

                // make sure that rotations are relative
                let bottomL__part_1_bounds = bottomL__part_1.getBounds();
                let bottomL__part_1_x = bottomL__part_1_bounds[0].x + (bottomL__part_1_bounds[1].x - bottomL__part_1_bounds[0].x) / 2
                let bottomL__part_1_y = bottomL__part_1_bounds[0].y + (bottomL__part_1_bounds[1].y - bottomL__part_1_bounds[0].y) / 2
                bottomL__part_1 = translate([-bottomL__part_1_x, -bottomL__part_1_y, 0], bottomL__part_1);
                bottomL__part_1 = rotate([0,0,0], bottomL__part_1);
                bottomL__part_1 = translate([bottomL__part_1_x, bottomL__part_1_y, 0], bottomL__part_1);

                bottomL__part_1 = translate([0,0,-50], bottomL__part_1);
                result = result.subtract(bottomL__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottomL_case_fn();
            }

        