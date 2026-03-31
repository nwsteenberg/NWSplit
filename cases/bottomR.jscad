function _leftSubstitution_extrude_100_outline_fn(){
    return new CSG.Path2D([[1.75,-239.105],[192.25,-239.105]]).appendPoint([192.25,-48.605]).appendPoint([1.75,-48.605]).appendPoint([1.75,-239.105]).close().innerToCAG()
.extrude({ offset: [0, 0, 100] });
}


function _bigOutlineForBottom_extrude_1_outline_fn(){
    return new CSG.Path2D([[94.2703009,-199.74],[30.7053368,-199.74]]).appendArc([21.2053475,-190.2543319],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([21.0696834,-95.6286201]).appendArc([30.5696736,-86.115],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-86.115]).appendArc([153.8830417,-95.6234598],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([153.8029639,-185.5467069]).appendPoint([166.8835062,-190.307635]).appendArc([169.5736266,-196.0755588],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([163.0584486,-213.9758626]).appendArc([157.2904353,-216.6662293],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([139.5739175,-210.217944]).appendPoint([112.4004407,-202.9368327]).appendPoint([94.2703009,-199.74]).close().innerToCAG()
.union(
    new CSG.Path2D([[293.7296988,-199.74],[357.2946633,-199.74]]).appendArc([366.7946525,-190.2543319],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([366.9303166,-95.6286201]).appendArc([357.4303264,-86.115],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-86.115]).appendArc([234.1169583,-95.6234597],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([234.1970361,-185.546707]).appendPoint([221.1158996,-190.3078512]).appendArc([218.4263734,-196.0755588],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([224.9415514,-213.9758626]).appendArc([230.7095647,-216.6662293],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([248.4260833,-210.2179437]).appendPoint([275.5995585,-202.936833]).appendPoint([293.7296988,-199.74]).close().innerToCAG()
).extrude({ offset: [0, 0, 1] });
}


function _standoffsBottom_extrude_3_5_outline_fn(){
    return CAG.circle({"center":[355.5,-132.5],"radius":2.4})
.subtract(
    CAG.circle({"center":[355.5,-132.5],"radius":1.6})
).union(
    CAG.circle({"center":[355.5,-170.5],"radius":2.4})
.subtract(
    CAG.circle({"center":[355.5,-170.5],"radius":1.6})
)).union(
    CAG.circle({"center":[32.5,-132.5],"radius":2.4})
.subtract(
    CAG.circle({"center":[32.5,-132.5],"radius":1.6})
)).union(
    CAG.circle({"center":[32.5,-170.5],"radius":2.4})
.subtract(
    CAG.circle({"center":[32.5,-170.5],"radius":1.6})
)).union(
    CAG.circle({"center":[245.5,-121.07],"radius":2.4})
.subtract(
    CAG.circle({"center":[245.5,-121.07],"radius":1.6})
)).union(
    CAG.circle({"center":[245.5,-159.07],"radius":2.4})
.subtract(
    CAG.circle({"center":[245.5,-159.07],"radius":1.6})
)).union(
    CAG.circle({"center":[142.5,-121.07],"radius":2.4})
.subtract(
    CAG.circle({"center":[142.5,-121.07],"radius":1.6})
)).union(
    CAG.circle({"center":[142.5,-159.07],"radius":2.4})
.subtract(
    CAG.circle({"center":[142.5,-159.07],"radius":1.6})
)).union(
    CAG.circle({"center":[248.7047668,-203.1727513],"radius":2.4})
.subtract(
    CAG.circle({"center":[248.7047668,-203.1727513],"radius":1.6})
)).union(
    CAG.circle({"center":[139.2952332,-203.1727513],"radius":2.4})
.subtract(
    CAG.circle({"center":[139.2952332,-203.1727513],"radius":1.6})
)).extrude({ offset: [0, 0, 3.5] });
}


function _pcbSupport_extrude_3_5_outline_fn(){
    return new CSG.Path2D([[338.8,-91.115],[243.6169546,-91.115]]).appendArc([239.3904932,-94.07],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([236.2778146,-94.07]).appendArc([243.6169545,-88.115],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([338.8,-88.115]).appendPoint([338.8,-91.115]).close().innerToCAG()
.union(
    new CSG.Path2D([[49.2,-91.115],[144.3830455,-91.115]]).appendArc([148.6095068,-94.07],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([151.7221854,-94.07]).appendArc([144.3830455,-88.115],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([49.2,-88.115]).appendPoint([49.2,-91.115]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.5327671,-194.74],[30.7053367,-194.74]]).appendArc([26.2053413,-190.2464516],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([26.0696782,-95.6214516]).appendArc([30.2,-91.13021],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([30.2,-88.1241161]).appendArc([23.0696803,-95.6250322],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([23.2053443,-190.2507527]).appendArc([30.7053367,-197.74],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([94.4452782,-197.74]).appendPoint([112.8337333,-200.9823807]).appendPoint([140.1759018,-208.3086928]).appendPoint([157.9744756,-214.786844]).appendArc([161.1787576,-213.2926629],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([167.6942413,-195.3915184]).appendArc([166.2000602,-192.1872365],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([151.8017165,-186.9466679]).appendPoint([151.8781907,-101.07]).appendPoint([148.8781895,-101.07]).appendPoint([148.8010936,-187.6448674]).appendArc([150.1170525,-189.5260337],{"radius":2,"clockwise":false,"large":false}).appendPoint([164.7041534,-194.8353043]).appendPoint([163.4985324,-198.1477208]).appendPoint([164.438225,-198.4897409]).appendPoint([163.0701444,-202.2485114]).appendPoint([162.1304518,-201.9064913]).appendPoint([158.5306898,-211.7967561]).appendPoint([141.1615279,-205.4748982]).appendArc([140.9945313,-205.4222154],{"radius":2,"clockwise":false,"large":false}).appendPoint([113.5680168,-198.0733029]).appendArc([113.3976751,-198.0355391],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.8800635,-194.7703845]).appendArc([94.5327671,-194.74],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[293.4672329,-194.74],[357.2946633,-194.74]]).appendArc([361.7946587,-190.2464516],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([361.9303218,-95.6214516]).appendArc([357.8,-91.13021],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([357.8,-88.1241161]).appendArc([364.9303197,-95.6250322],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([364.7946557,-190.2507527]).appendArc([357.2946633,-197.74],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([293.5547215,-197.74]).appendPoint([275.1662667,-200.9823808]).appendPoint([247.8240992,-208.3086925]).appendPoint([230.0255243,-214.786844]).appendArc([226.8212424,-213.2926629],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([220.3057587,-195.3915184]).appendArc([221.7999398,-192.1872366],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([236.1982835,-186.946668]).appendPoint([236.1218093,-101.07]).appendPoint([239.1218105,-101.07]).appendPoint([239.1989064,-187.6448675]).appendArc([237.8829475,-189.5260337],{"radius":2,"clockwise":true,"large":false}).appendPoint([223.2958466,-194.8353043]).appendPoint([224.5014676,-198.1477208]).appendPoint([223.561775,-198.4897409]).appendPoint([224.9298556,-202.2485114]).appendPoint([225.8695482,-201.9064913]).appendPoint([229.4693102,-211.7967561]).appendPoint([246.8390665,-205.4746818]).appendArc([247.0054687,-205.4222154],{"radius":2,"clockwise":true,"large":false}).appendPoint([274.4319833,-198.0733029]).appendArc([274.602325,-198.0355391],{"radius":2,"clockwise":true,"large":false}).appendPoint([293.1199365,-194.7703845]).appendArc([293.4672329,-194.74],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 3.5] });
}


function _walls_extrude_6_outline_fn(){
    return new CSG.Path2D([[94.2703009,-199.74],[30.7053368,-199.74]]).appendArc([21.2053475,-190.2543319],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([21.0696834,-95.6286201]).appendArc([30.5696736,-86.115],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-86.115]).appendArc([153.8830417,-95.6234598],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([153.8029639,-185.5467069]).appendPoint([166.8835062,-190.307635]).appendArc([169.5736266,-196.0755588],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([163.0584486,-213.9758626]).appendArc([157.2904353,-216.6662293],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([139.5739175,-210.217944]).appendPoint([112.4004407,-202.9368327]).appendPoint([94.2703009,-199.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[94.4452782,-197.74],[30.7053367,-197.74]]).appendArc([23.2053451,-190.2512331],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([23.0696813,-95.6257527]).appendArc([30.5696736,-88.115],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-88.115]).appendArc([151.8830425,-95.6216788],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([151.8017165,-186.9466679]).appendPoint([166.2000602,-192.1872366]).appendArc([167.6942413,-195.3915185],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([161.1787575,-213.2926628]).appendArc([157.9744756,-214.786844],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([140.1759018,-208.3086928]).appendPoint([112.8337333,-200.9823807]).appendPoint([94.4452782,-197.74]).close().innerToCAG()
).union(
    new CSG.Path2D([[293.7296988,-199.74],[357.2946633,-199.74]]).appendArc([366.7946525,-190.2543319],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([366.9303166,-95.6286201]).appendArc([357.4303264,-86.115],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-86.115]).appendArc([234.1169583,-95.6234597],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([234.1970361,-185.546707]).appendPoint([221.1158996,-190.3078512]).appendArc([218.4263734,-196.0755588],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([224.9415514,-213.9758626]).appendArc([230.7095647,-216.6662293],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([248.4260833,-210.2179437]).appendPoint([275.5995585,-202.936833]).appendPoint([293.7296988,-199.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[293.5547215,-197.74],[357.2946633,-197.74]]).appendArc([364.7946549,-190.2512331],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([364.9303187,-95.6257527]).appendArc([357.4303264,-88.115],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-88.115]).appendArc([236.1169575,-95.6216787],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([236.1982835,-186.946668]).appendPoint([221.7999399,-192.1872365]).appendArc([220.3057587,-195.3915185],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([226.8212425,-213.2926628]).appendArc([230.0255244,-214.786844],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([247.8240992,-208.3086925]).appendPoint([275.1662667,-200.9823808]).appendPoint([293.5547215,-197.74]).close().innerToCAG()
)).extrude({ offset: [0, 0, 6] });
}


function _screwHoles_extrude_50_outline_fn(){
    return CAG.circle({"center":[355.5,-132.5],"radius":1.1})
.union(
    CAG.circle({"center":[355.5,-170.5],"radius":1.1})
).union(
    CAG.circle({"center":[32.5,-132.5],"radius":1.1})
).union(
    CAG.circle({"center":[32.5,-170.5],"radius":1.1})
).union(
    CAG.circle({"center":[245.5,-121.07],"radius":1.1})
).union(
    CAG.circle({"center":[245.5,-159.07],"radius":1.1})
).union(
    CAG.circle({"center":[142.5,-121.07],"radius":1.1})
).union(
    CAG.circle({"center":[142.5,-159.07],"radius":1.1})
).union(
    CAG.circle({"center":[248.7047668,-203.1727513],"radius":1.1})
).union(
    CAG.circle({"center":[139.2952332,-203.1727513],"radius":1.1})
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
                let bottom__part_0 = _bigOutlineForBottom_extrude_1_outline_fn();

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
                let bottom__part_1 = _standoffsBottom_extrude_3_5_outline_fn();

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
                let bottom__part_2 = _pcbSupport_extrude_3_5_outline_fn();

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
                let bottom__part_3 = _walls_extrude_6_outline_fn();

                // make sure that rotations are relative
                let bottom__part_3_bounds = bottom__part_3.getBounds();
                let bottom__part_3_x = bottom__part_3_bounds[0].x + (bottom__part_3_bounds[1].x - bottom__part_3_bounds[0].x) / 2
                let bottom__part_3_y = bottom__part_3_bounds[0].y + (bottom__part_3_bounds[1].y - bottom__part_3_bounds[0].y) / 2
                bottom__part_3 = translate([-bottom__part_3_x, -bottom__part_3_y, 0], bottom__part_3);
                bottom__part_3 = rotate([0,0,0], bottom__part_3);
                bottom__part_3 = translate([bottom__part_3_x, bottom__part_3_y, 0], bottom__part_3);

                bottom__part_3 = translate([0,0,0], bottom__part_3);
                result = result.union(bottom__part_3);
                
            

                // creating part 4 of case bottom
                let bottom__part_4 = _screwHoles_extrude_50_outline_fn();

                // make sure that rotations are relative
                let bottom__part_4_bounds = bottom__part_4.getBounds();
                let bottom__part_4_x = bottom__part_4_bounds[0].x + (bottom__part_4_bounds[1].x - bottom__part_4_bounds[0].x) / 2
                let bottom__part_4_y = bottom__part_4_bounds[0].y + (bottom__part_4_bounds[1].y - bottom__part_4_bounds[0].y) / 2
                bottom__part_4 = translate([-bottom__part_4_x, -bottom__part_4_y, 0], bottom__part_4);
                bottom__part_4 = rotate([0,0,0], bottom__part_4);
                bottom__part_4 = translate([bottom__part_4_x, bottom__part_4_y, 0], bottom__part_4);

                bottom__part_4 = translate([0,0,0], bottom__part_4);
                result = result.subtract(bottom__part_4);
                
            

                // creating part 5 of case bottom
                let bottom__part_5 = _mcuCutoutCase_extrude_7_outline_fn();

                // make sure that rotations are relative
                let bottom__part_5_bounds = bottom__part_5.getBounds();
                let bottom__part_5_x = bottom__part_5_bounds[0].x + (bottom__part_5_bounds[1].x - bottom__part_5_bounds[0].x) / 2
                let bottom__part_5_y = bottom__part_5_bounds[0].y + (bottom__part_5_bounds[1].y - bottom__part_5_bounds[0].y) / 2
                bottom__part_5 = translate([-bottom__part_5_x, -bottom__part_5_y, 0], bottom__part_5);
                bottom__part_5 = rotate([0,0,0], bottom__part_5);
                bottom__part_5 = translate([bottom__part_5_x, bottom__part_5_y, 0], bottom__part_5);

                bottom__part_5 = translate([0,0,1], bottom__part_5);
                result = result.subtract(bottom__part_5);
                
            

                // creating part 6 of case bottom
                let bottom__part_6 = _trrsCutoutCase_extrude_6_outline_fn();

                // make sure that rotations are relative
                let bottom__part_6_bounds = bottom__part_6.getBounds();
                let bottom__part_6_x = bottom__part_6_bounds[0].x + (bottom__part_6_bounds[1].x - bottom__part_6_bounds[0].x) / 2
                let bottom__part_6_y = bottom__part_6_bounds[0].y + (bottom__part_6_bounds[1].y - bottom__part_6_bounds[0].y) / 2
                bottom__part_6 = translate([-bottom__part_6_x, -bottom__part_6_y, 0], bottom__part_6);
                bottom__part_6 = rotate([0,0,0], bottom__part_6);
                bottom__part_6 = translate([bottom__part_6_x, bottom__part_6_y, 0], bottom__part_6);

                bottom__part_6 = translate([0,0,5.1], bottom__part_6);
                result = result.subtract(bottom__part_6);
                
            
                    return result;
                }
            
            

                function bottomR_case_fn() {
                    

                // creating part 0 of case bottomR
                let bottomR__part_0 = bottom_case_fn();

                // make sure that rotations are relative
                let bottomR__part_0_bounds = bottomR__part_0.getBounds();
                let bottomR__part_0_x = bottomR__part_0_bounds[0].x + (bottomR__part_0_bounds[1].x - bottomR__part_0_bounds[0].x) / 2
                let bottomR__part_0_y = bottomR__part_0_bounds[0].y + (bottomR__part_0_bounds[1].y - bottomR__part_0_bounds[0].y) / 2
                bottomR__part_0 = translate([-bottomR__part_0_x, -bottomR__part_0_y, 0], bottomR__part_0);
                bottomR__part_0 = rotate([0,0,0], bottomR__part_0);
                bottomR__part_0 = translate([bottomR__part_0_x, bottomR__part_0_y, 0], bottomR__part_0);

                bottomR__part_0 = translate([0,0,0], bottomR__part_0);
                let result = bottomR__part_0;
                
            

                // creating part 1 of case bottomR
                let bottomR__part_1 = _leftSubstitution_extrude_100_outline_fn();

                // make sure that rotations are relative
                let bottomR__part_1_bounds = bottomR__part_1.getBounds();
                let bottomR__part_1_x = bottomR__part_1_bounds[0].x + (bottomR__part_1_bounds[1].x - bottomR__part_1_bounds[0].x) / 2
                let bottomR__part_1_y = bottomR__part_1_bounds[0].y + (bottomR__part_1_bounds[1].y - bottomR__part_1_bounds[0].y) / 2
                bottomR__part_1 = translate([-bottomR__part_1_x, -bottomR__part_1_y, 0], bottomR__part_1);
                bottomR__part_1 = rotate([0,0,0], bottomR__part_1);
                bottomR__part_1 = translate([bottomR__part_1_x, bottomR__part_1_y, 0], bottomR__part_1);

                bottomR__part_1 = translate([0,0,-50], bottomR__part_1);
                result = result.subtract(bottomR__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottomR_case_fn();
            }

        