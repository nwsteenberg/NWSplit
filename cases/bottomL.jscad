function _leftSubstitution_extrude_100_outline_fn(){
    return new CSG.Path2D([[1.75,-249.105],[192.25,-249.105]]).appendPoint([192.25,-58.605]).appendPoint([1.75,-58.605]).appendPoint([1.75,-249.105]).close().innerToCAG()
.extrude({ offset: [0, 0, 100] });
}


function _bigOutlineForBottom_extrude_2_outline_fn(){
    return new CSG.Path2D([[293.6422105,-208.74],[357.2946633,-208.74]]).appendArc([365.7946535,-200.2529096],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([365.9303176,-105.6271864]).appendArc([357.4303264,-97.115],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-97.115]).appendArc([235.1169579,-105.6225692],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([235.1976598,-196.2466875]).appendPoint([221.4579197,-201.2475439]).appendArc([219.366066,-205.7335387],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([225.8815499,-223.634683]).appendArc([230.3675445,-225.7265367],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([248.1250906,-219.2633183]).appendPoint([275.3829129,-211.9596068]).appendPoint([293.6422105,-208.74]).close().innerToCAG()
.union(
    new CSG.Path2D([[94.3577898,-208.74],[30.7053367,-208.74]]).appendArc([22.2053465,-200.2529096],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([22.0696824,-105.6271864]).appendArc([30.5696736,-97.115],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-97.115]).appendArc([152.8830421,-105.6225693],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([152.8023402,-196.2466874]).appendPoint([166.5420803,-201.247544]).appendArc([168.633934,-205.7335386],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([162.1184501,-223.634683]).appendArc([157.6324555,-225.7265367],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([139.8749091,-219.2633182]).appendPoint([112.6170868,-211.9596068]).appendPoint([94.3577898,-208.74]).close().innerToCAG()
).extrude({ offset: [0, 0, 2] });
}


function _pcbSupport_extrude_5_outline_fn(){
    return new CSG.Path2D([[342.3,-101.115],[243.6169546,-101.115]]).appendArc([239.3904932,-104.07],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([237.3032412,-104.07]).appendArc([243.6169545,-99.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([342.3,-99.115]).appendPoint([342.3,-101.115]).close().innerToCAG()
.union(
    new CSG.Path2D([[45.7,-101.115],[144.3830455,-101.115]]).appendArc([148.6095068,-104.07],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([150.6967588,-104.07]).appendArc([144.3830455,-99.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([45.7,-99.115]).appendPoint([45.7,-101.115]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.5327671,-204.74],[30.7053367,-204.74]]).appendArc([26.2053413,-200.2464516],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([26.0696782,-105.6214516]).appendArc([30.5696736,-101.115],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([33.7,-101.115]).appendPoint([33.7,-99.115]).appendPoint([30.5696736,-99.115]).appendArc([24.0696794,-105.6236946],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([24.2053433,-200.249319]).appendArc([30.7053367,-206.74],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([94.5327671,-206.74]).appendPoint([113.0503787,-210.0051546]).appendPoint([140.4768932,-217.354067]).appendPoint([158.3164958,-223.8471514]).appendArc([160.2390649,-222.9506427],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([166.7545487,-205.0494983]).appendArc([165.85804,-203.1269292],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([150.8010928,-197.6466485]).appendPoint([150.8781903,-111.07]).appendPoint([148.8781895,-111.07]).appendPoint([148.8010936,-197.6448674]).appendArc([150.1170525,-199.5260337],{"radius":2,"clockwise":false,"large":false}).appendPoint([164.7041534,-204.8353043]).appendPoint([163.4985324,-208.1477208]).appendPoint([164.438225,-208.4897409]).appendPoint([163.0701444,-212.2485114]).appendPoint([162.1304518,-211.9064913]).appendPoint([158.5306898,-221.7967561]).appendPoint([141.1615279,-215.4748982]).appendArc([140.9945313,-215.4222154],{"radius":2,"clockwise":false,"large":false}).appendPoint([113.5680168,-208.0733029]).appendArc([113.3976751,-208.0355391],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.8800635,-204.7703845]).appendArc([94.5327671,-204.74],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[293.4672329,-204.74],[357.2946633,-204.74]]).appendArc([361.7946587,-200.2464516],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([361.9303218,-105.6214516]).appendArc([357.4303264,-101.115],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([354.3,-101.115]).appendPoint([354.3,-99.115]).appendPoint([357.4303264,-99.115]).appendArc([363.9303206,-105.6236946],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([363.7946567,-200.249319]).appendArc([357.2946633,-206.74],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([293.4672329,-206.74]).appendPoint([274.9496213,-210.0051546]).appendPoint([247.5231068,-217.354067]).appendPoint([229.6835042,-223.8471514]).appendArc([227.7609351,-222.9506427],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([221.2454513,-205.0494983]).appendArc([222.14196,-203.1269292],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([237.1989072,-197.6466485]).appendPoint([237.1218097,-111.07]).appendPoint([239.1218105,-111.07]).appendPoint([239.1989064,-197.6448675]).appendArc([237.8829475,-199.5260337],{"radius":2,"clockwise":true,"large":false}).appendPoint([223.2958466,-204.8353043]).appendPoint([224.5014676,-208.1477208]).appendPoint([223.561775,-208.4897409]).appendPoint([224.9298556,-212.2485114]).appendPoint([225.8695482,-211.9064913]).appendPoint([229.4693102,-221.7967561]).appendPoint([246.8390665,-215.4746818]).appendArc([247.0054687,-215.4222154],{"radius":2,"clockwise":true,"large":false}).appendPoint([274.4319833,-208.0733029]).appendArc([274.602325,-208.0355391],{"radius":2,"clockwise":true,"large":false}).appendPoint([293.1199365,-204.7703845]).appendArc([293.4672329,-204.74],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}


function _holes_extrude_50_outline_fn(){
    return CAG.circle({"center":[355.5,-142.5],"radius":1.05})
.union(
    CAG.circle({"center":[355.5,-180.5],"radius":1.05})
).union(
    CAG.circle({"center":[32.5,-142.5],"radius":1.05})
).union(
    CAG.circle({"center":[32.5,-180.5],"radius":1.05})
).union(
    CAG.circle({"center":[245.5,-131.07],"radius":1.05})
).union(
    CAG.circle({"center":[245.5,-169.07],"radius":1.05})
).union(
    CAG.circle({"center":[142.5,-131.07],"radius":1.05})
).union(
    CAG.circle({"center":[142.5,-169.07],"radius":1.05})
).union(
    CAG.circle({"center":[248.7047668,-213.1727513],"radius":1.05})
).union(
    CAG.circle({"center":[139.2952332,-213.1727513],"radius":1.05})
).extrude({ offset: [0, 0, 50] });
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
                let bottom__part_2 = _holes_extrude_50_outline_fn();

                // make sure that rotations are relative
                let bottom__part_2_bounds = bottom__part_2.getBounds();
                let bottom__part_2_x = bottom__part_2_bounds[0].x + (bottom__part_2_bounds[1].x - bottom__part_2_bounds[0].x) / 2
                let bottom__part_2_y = bottom__part_2_bounds[0].y + (bottom__part_2_bounds[1].y - bottom__part_2_bounds[0].y) / 2
                bottom__part_2 = translate([-bottom__part_2_x, -bottom__part_2_y, 0], bottom__part_2);
                bottom__part_2 = rotate([0,0,0], bottom__part_2);
                bottom__part_2 = translate([bottom__part_2_x, bottom__part_2_y, 0], bottom__part_2);

                bottom__part_2 = translate([0,0,0], bottom__part_2);
                result = result.subtract(bottom__part_2);
                
            
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
                let bottomL__part_1 = _leftSubstitution_extrude_100_outline_fn();

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

        