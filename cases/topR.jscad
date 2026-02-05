function _leftSubstitution_extrude_100_outline_fn(){
    return new CSG.Path2D([[1.75,-239.105],[192.25,-239.105]]).appendPoint([192.25,-48.605]).appendPoint([1.75,-48.605]).appendPoint([1.75,-239.105]).close().innerToCAG()
.extrude({ offset: [0, 0, 100] });
}


function _plates_extrude_1_3_outline_fn(){
    return new CSG.Path2D([[293.5109773,-196.74],[357.2946633,-196.74]]).appendArc([363.7946566,-190.249319],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([363.9303197,-95.624319]).appendArc([357.4303264,-89.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-89.115]).appendArc([237.1169571,-95.6207882],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([237.1985952,-187.296213]).appendArc([236.8696055,-187.7665046],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([222.14196,-193.1269292]).appendArc([221.2454513,-195.0494983],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([227.7609351,-212.9506427]).appendArc([229.6835042,-213.8471514],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([247.502593,-207.3615334]).appendArc([247.5441936,-207.3484168],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([274.9285343,-200.0108048]).appendArc([274.9711197,-200.0013638],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([293.4241532,-196.7475961]).appendArc([293.5109773,-196.74],{"radius":0.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[277.1159942,-195.5360724],[289.9184949,-193.2786461]]).appendArc([290.3240747,-192.6994181],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([288.0666484,-179.8969174]).appendArc([287.4874204,-179.4913376],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274.6849197,-181.7487639]).appendArc([274.2793399,-182.3279919],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([276.5367662,-195.1304926]).appendArc([277.1159942,-195.5360724],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[231.1494433,-209.0302776],[243.3654473,-204.5840158]]).appendArc([243.6642835,-203.9431594],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([239.2180217,-191.7271554]).appendArc([238.5771653,-191.4283192],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([226.3611613,-195.874581]).appendArc([226.0623251,-196.5154374],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([230.5085869,-208.7314414]).appendArc([231.1494433,-209.0302776],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.5,-118.57],[259.5,-118.57]]).appendArc([260,-118.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([260,-105.07]).appendArc([259.5,-104.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.5,-104.57]).appendArc([246,-105.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246,-118.07]).appendArc([246.5,-118.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.5,-137.57],[259.5,-137.57]]).appendArc([260,-137.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([260,-124.07]).appendArc([259.5,-123.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.5,-123.57]).appendArc([246,-124.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246,-137.07]).appendArc([246.5,-137.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.5,-156.57],[259.5,-156.57]]).appendArc([260,-156.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([260,-143.07]).appendArc([259.5,-142.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.5,-142.57]).appendArc([246,-143.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246,-156.07]).appendArc([246.5,-156.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.5,-175.57],[259.5,-175.57]]).appendArc([260,-175.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([260,-162.07]).appendArc([259.5,-161.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.5,-161.57]).appendArc([246,-162.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246,-175.07]).appendArc([246.5,-175.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.5,-116.665],[278.5,-116.665]]).appendArc([279,-116.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([279,-103.165]).appendArc([278.5,-102.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.5,-102.665]).appendArc([265,-103.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265,-116.165]).appendArc([265.5,-116.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.5,-135.665],[278.5,-135.665]]).appendArc([279,-135.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([279,-122.165]).appendArc([278.5,-121.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.5,-121.665]).appendArc([265,-122.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265,-135.165]).appendArc([265.5,-135.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.5,-154.665],[278.5,-154.665]]).appendArc([279,-154.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([279,-141.165]).appendArc([278.5,-140.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.5,-140.665]).appendArc([265,-141.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265,-154.165]).appendArc([265.5,-154.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.5,-173.665],[278.5,-173.665]]).appendArc([279,-173.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([279,-160.165]).appendArc([278.5,-159.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.5,-159.665]).appendArc([265,-160.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265,-173.165]).appendArc([265.5,-173.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.5,-112.855],[297.5,-112.855]]).appendArc([298,-112.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([298,-99.355]).appendArc([297.5,-98.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.5,-98.855]).appendArc([284,-99.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284,-112.355]).appendArc([284.5,-112.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.5,-131.855],[297.5,-131.855]]).appendArc([298,-131.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([298,-118.355]).appendArc([297.5,-117.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.5,-117.855]).appendArc([284,-118.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284,-131.355]).appendArc([284.5,-131.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.5,-150.855],[297.5,-150.855]]).appendArc([298,-150.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([298,-137.355]).appendArc([297.5,-136.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.5,-136.855]).appendArc([284,-137.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284,-150.355]).appendArc([284.5,-150.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.5,-169.855],[297.5,-169.855]]).appendArc([298,-169.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([298,-156.355]).appendArc([297.5,-155.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.5,-155.855]).appendArc([284,-156.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284,-169.355]).appendArc([284.5,-169.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[303.5,-116.665],[316.5,-116.665]]).appendArc([317,-116.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([317,-103.165]).appendArc([316.5,-102.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303.5,-102.665]).appendArc([303,-103.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303,-116.165]).appendArc([303.5,-116.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[303.5,-135.665],[316.5,-135.665]]).appendArc([317,-135.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([317,-122.165]).appendArc([316.5,-121.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303.5,-121.665]).appendArc([303,-122.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303,-135.165]).appendArc([303.5,-135.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[303.5,-154.665],[316.5,-154.665]]).appendArc([317,-154.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([317,-141.165]).appendArc([316.5,-140.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303.5,-140.665]).appendArc([303,-141.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303,-154.165]).appendArc([303.5,-154.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[303.5,-173.665],[316.5,-173.665]]).appendArc([317,-173.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([317,-160.165]).appendArc([316.5,-159.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303.5,-159.665]).appendArc([303,-160.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303,-173.165]).appendArc([303.5,-173.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[322.5,-118.57],[335.5,-118.57]]).appendArc([336,-118.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([336,-105.07]).appendArc([335.5,-104.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322.5,-104.57]).appendArc([322,-105.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322,-118.07]).appendArc([322.5,-118.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[322.5,-137.57],[335.5,-137.57]]).appendArc([336,-137.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([336,-124.07]).appendArc([335.5,-123.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322.5,-123.57]).appendArc([322,-124.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322,-137.07]).appendArc([322.5,-137.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[322.5,-156.57],[335.5,-156.57]]).appendArc([336,-156.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([336,-143.07]).appendArc([335.5,-142.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322.5,-142.57]).appendArc([322,-143.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322,-156.07]).appendArc([322.5,-156.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[322.5,-175.57],[335.5,-175.57]]).appendArc([336,-175.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([336,-162.07]).appendArc([335.5,-161.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322.5,-161.57]).appendArc([322,-162.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322,-175.07]).appendArc([322.5,-175.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[341.5,-130],[354.5,-130]]).appendArc([355,-129.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([355,-116.5]).appendArc([354.5,-116],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341.5,-116]).appendArc([341,-116.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341,-129.5]).appendArc([341.5,-130],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[341.5,-149],[354.5,-149]]).appendArc([355,-148.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([355,-135.5]).appendArc([354.5,-135],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341.5,-135]).appendArc([341,-135.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341,-148.5]).appendArc([341.5,-149],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[341.5,-168],[354.5,-168]]).appendArc([355,-167.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([355,-154.5]).appendArc([354.5,-154],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341.5,-154]).appendArc([341,-154.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341,-167.5]).appendArc([341.5,-168],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[341.5,-187],[354.5,-187]]).appendArc([355,-186.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([355,-173.5]).appendArc([354.5,-173],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341.5,-173]).appendArc([341,-173.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341,-186.5]).appendArc([341.5,-187],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[253.8919515,-201.4805536],[266.4489873,-198.115906]]).appendArc([266.8025407,-197.5035336],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([263.4378931,-184.9464978]).appendArc([262.8255207,-184.5929444],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([250.2684849,-187.957592]).appendArc([249.9149315,-188.5699644],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([253.2795791,-201.1270002]).appendArc([253.8919515,-201.4805536],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
)).union(
    new CSG.Path2D([[94.4890227,-196.74],[30.7053367,-196.74]]).appendArc([24.2053434,-190.249319],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([24.0696803,-95.624319]).appendArc([30.5696736,-89.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-89.115]).appendArc([150.8830429,-95.6207883],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([150.8014048,-187.296213]).appendArc([151.1303945,-187.7665045],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([165.85804,-193.1269292]).appendArc([166.7545487,-195.0494983],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([160.2390649,-212.9506427]).appendArc([158.3164958,-213.8471514],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([140.497407,-207.3615334]).appendArc([140.4558064,-207.3484168],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([113.0714657,-200.0108048]).appendArc([113.0288803,-200.0013638],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([94.5758468,-196.7475961]).appendArc([94.4890227,-196.74],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[98.0815051,-193.2786461],[110.8840058,-195.5360724]]).appendArc([111.4632338,-195.1304926],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([113.7206601,-182.3279919]).appendArc([113.3150803,-181.7487639],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100.5125796,-179.4913376]).appendArc([99.9333516,-179.8969174],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([97.6759253,-192.6994181]).appendArc([98.0815051,-193.2786461],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[144.6345527,-204.5840158],[156.8505567,-209.0302776]]).appendArc([157.4914131,-208.7314414],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([161.9376749,-196.5154374]).appendArc([161.6388387,-195.874581],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([149.4228347,-191.4283192]).appendArc([148.7819783,-191.7271554],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([144.3357165,-203.9431594]).appendArc([144.6345527,-204.5840158],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-118.57],[141.5,-118.57]]).appendArc([142,-118.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([142,-105.07]).appendArc([141.5,-104.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5,-104.57]).appendArc([128,-105.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128,-118.07]).appendArc([128.5,-118.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-137.57],[141.5,-137.57]]).appendArc([142,-137.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([142,-124.07]).appendArc([141.5,-123.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5,-123.57]).appendArc([128,-124.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128,-137.07]).appendArc([128.5,-137.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-156.57],[141.5,-156.57]]).appendArc([142,-156.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([142,-143.07]).appendArc([141.5,-142.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5,-142.57]).appendArc([128,-143.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128,-156.07]).appendArc([128.5,-156.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-175.57],[141.5,-175.57]]).appendArc([142,-175.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([142,-162.07]).appendArc([141.5,-161.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5,-161.57]).appendArc([128,-162.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128,-175.07]).appendArc([128.5,-175.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.5,-116.665],[122.5,-116.665]]).appendArc([123,-116.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123,-103.165]).appendArc([122.5,-102.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.5,-102.665]).appendArc([109,-103.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109,-116.165]).appendArc([109.5,-116.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.5,-135.665],[122.5,-135.665]]).appendArc([123,-135.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123,-122.165]).appendArc([122.5,-121.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.5,-121.665]).appendArc([109,-122.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109,-135.165]).appendArc([109.5,-135.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.5,-154.665],[122.5,-154.665]]).appendArc([123,-154.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123,-141.165]).appendArc([122.5,-140.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.5,-140.665]).appendArc([109,-141.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109,-154.165]).appendArc([109.5,-154.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.5,-173.665],[122.5,-173.665]]).appendArc([123,-173.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123,-160.165]).appendArc([122.5,-159.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.5,-159.665]).appendArc([109,-160.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109,-173.165]).appendArc([109.5,-173.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5,-112.855],[103.5,-112.855]]).appendArc([104,-112.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104,-99.355]).appendArc([103.5,-98.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.5,-98.855]).appendArc([90,-99.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90,-112.355]).appendArc([90.5,-112.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5,-131.855],[103.5,-131.855]]).appendArc([104,-131.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104,-118.355]).appendArc([103.5,-117.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.5,-117.855]).appendArc([90,-118.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90,-131.355]).appendArc([90.5,-131.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5,-150.855],[103.5,-150.855]]).appendArc([104,-150.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104,-137.355]).appendArc([103.5,-136.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.5,-136.855]).appendArc([90,-137.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90,-150.355]).appendArc([90.5,-150.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5,-169.855],[103.5,-169.855]]).appendArc([104,-169.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104,-156.355]).appendArc([103.5,-155.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.5,-155.855]).appendArc([90,-156.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90,-169.355]).appendArc([90.5,-169.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.5,-116.665],[84.5,-116.665]]).appendArc([85,-116.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85,-103.165]).appendArc([84.5,-102.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.5,-102.665]).appendArc([71,-103.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71,-116.165]).appendArc([71.5,-116.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.5,-135.665],[84.5,-135.665]]).appendArc([85,-135.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85,-122.165]).appendArc([84.5,-121.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.5,-121.665]).appendArc([71,-122.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71,-135.165]).appendArc([71.5,-135.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.5,-154.665],[84.5,-154.665]]).appendArc([85,-154.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85,-141.165]).appendArc([84.5,-140.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.5,-140.665]).appendArc([71,-141.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71,-154.165]).appendArc([71.5,-154.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.5,-173.665],[84.5,-173.665]]).appendArc([85,-173.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85,-160.165]).appendArc([84.5,-159.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.5,-159.665]).appendArc([71,-160.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71,-173.165]).appendArc([71.5,-173.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.5,-118.57],[65.5,-118.57]]).appendArc([66,-118.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66,-105.07]).appendArc([65.5,-104.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.5,-104.57]).appendArc([52,-105.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52,-118.07]).appendArc([52.5,-118.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.5,-137.57],[65.5,-137.57]]).appendArc([66,-137.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66,-124.07]).appendArc([65.5,-123.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.5,-123.57]).appendArc([52,-124.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52,-137.07]).appendArc([52.5,-137.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.5,-156.57],[65.5,-156.57]]).appendArc([66,-156.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66,-143.07]).appendArc([65.5,-142.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.5,-142.57]).appendArc([52,-143.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52,-156.07]).appendArc([52.5,-156.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.5,-175.57],[65.5,-175.57]]).appendArc([66,-175.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66,-162.07]).appendArc([65.5,-161.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.5,-161.57]).appendArc([52,-162.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52,-175.07]).appendArc([52.5,-175.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5,-130],[46.5,-130]]).appendArc([47,-129.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,-116.5]).appendArc([46.5,-116],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.5,-116]).appendArc([33,-116.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33,-129.5]).appendArc([33.5,-130],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5,-149],[46.5,-149]]).appendArc([47,-148.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,-135.5]).appendArc([46.5,-135],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.5,-135]).appendArc([33,-135.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33,-148.5]).appendArc([33.5,-149],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5,-168],[46.5,-168]]).appendArc([47,-167.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,-154.5]).appendArc([46.5,-154],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.5,-154]).appendArc([33,-154.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33,-167.5]).appendArc([33.5,-168],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5,-187],[46.5,-187]]).appendArc([47,-186.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,-173.5]).appendArc([46.5,-173],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.5,-173]).appendArc([33,-173.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33,-186.5]).appendArc([33.5,-187],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[121.5510127,-198.115906],[134.1080485,-201.4805536]]).appendArc([134.7204209,-201.1270002],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.0850685,-188.5699644]).appendArc([137.7315151,-187.957592],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([125.1744793,-184.5929444]).appendArc([124.5621069,-184.9464978],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([121.1974593,-197.5035336]).appendArc([121.5510127,-198.115906],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
))).extrude({ offset: [0, 0, 1.3] });
}


function _topOfCase_extrude_4_4_outline_fn(){
    return new CSG.Path2D([[293.4672329,-196.74],[357.2946633,-196.74]]).appendArc([363.7946566,-190.249319],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([363.9303197,-95.624319]).appendArc([357.4303264,-89.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-89.115]).appendArc([237.1169571,-95.6207882],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([237.1989072,-187.6466485]).appendPoint([222.14196,-193.1269292]).appendArc([221.2454513,-195.0494983],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([227.7609351,-212.9506427]).appendArc([229.6835042,-213.8471514],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([247.5231068,-207.354067]).appendPoint([274.9496213,-200.0051546]).appendPoint([293.4672329,-196.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[339,-190.5],[357,-190.5]]).appendArc([358.5,-189],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-171]).appendArc([358.4142136,-170.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-170],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-152]).appendArc([358.4142136,-151.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-151],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-133]).appendArc([358.4142136,-132.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-132],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-114]).appendArc([357,-112.5],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([339.5,-112.5]).appendPoint([339.5,-102.57]).appendArc([338,-101.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([320.5,-101.07]).appendPoint([320.5,-100.665]).appendArc([319,-99.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([301.5,-99.165]).appendPoint([301.5,-96.855]).appendArc([300,-95.355],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([282,-95.355]).appendArc([280.5,-96.855],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([280.5,-99.165]).appendPoint([263,-99.165]).appendArc([261.5,-100.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([261.5,-101.07]).appendPoint([244,-101.07]).appendArc([242.5,-102.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-120.57]).appendArc([242.5857864,-121.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-121.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-139.57]).appendArc([242.5857864,-140.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-140.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-158.57]).appendArc([242.5857864,-159.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-159.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-177.57]).appendArc([244,-179.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([261.5,-179.07]).appendPoint([261.5,-181.32465]).appendPoint([246.9478037,-185.2238993]).appendPoint([244.0505553,-186.0002147]).appendArc([244.0116783,-186.0111796],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([239.8157801,-187.255818]).appendArc([239.7293264,-187.2843446],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([222.8148592,-193.4407072]).appendArc([221.9183505,-195.3632763],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([228.0747131,-212.2777435]).appendArc([229.9972822,-213.1742522],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([246.8514653,-207.0398312]).appendPoint([261.6355331,-203.0502089]).appendPoint([275.3250418,-199.4058588]).appendPoint([292.988283,-196.2913528]).appendArc([294.2050223,-194.5536689],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([290.4671251,-173.355]).appendPoint([299.5,-173.355]).appendPoint([299.5,-175.665]).appendArc([301,-177.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([318.5,-177.165]).appendPoint([318.5,-177.57]).appendArc([320,-179.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([337.5,-179.07]).appendPoint([337.5,-189]).appendArc([339,-190.5],{"radius":1.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[94.5327671,-196.74],[30.7053367,-196.74]]).appendArc([24.2053434,-190.249319],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([24.0696803,-95.624319]).appendArc([30.5696736,-89.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-89.115]).appendArc([150.8830429,-95.6207883],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([150.8010928,-187.6466485]).appendPoint([165.85804,-193.1269292]).appendArc([166.7545487,-195.0494983],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([160.2390649,-212.9506427]).appendArc([158.3164958,-213.8471514],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([140.4768932,-207.354067]).appendPoint([113.0503787,-200.0051546]).appendPoint([94.5327671,-196.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[31,-190.5],[49,-190.5]]).appendArc([50.5,-189],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([50.5,-179.07]).appendPoint([68,-179.07]).appendArc([69.5,-177.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([69.5,-177.165]).appendPoint([87,-177.165]).appendArc([88.5,-175.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([88.5,-173.355]).appendPoint([97.5328749,-173.355]).appendPoint([93.7949777,-194.5536689]).appendArc([95.011717,-196.2913528],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([112.6749582,-199.4058588]).appendPoint([126.3644669,-203.0502089]).appendPoint([141.1485347,-207.0398312]).appendPoint([158.0027178,-213.1742522]).appendArc([159.9252869,-212.2777435],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([166.0816495,-195.3632763]).appendArc([165.1851408,-193.4407072],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([148.2706736,-187.2843446]).appendArc([148.1842199,-187.255818],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([143.9883217,-186.0111796]).appendArc([143.9499737,-186.0003564],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([141.0527253,-185.2240411]).appendPoint([126.5,-181.32465]).appendPoint([126.5,-179.07]).appendPoint([144,-179.07]).appendArc([145.5,-177.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-159.57]).appendArc([145.4142136,-159.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-158.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-140.57]).appendArc([145.4142136,-140.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-139.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-121.57]).appendArc([145.4142136,-121.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-120.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-102.57]).appendArc([144,-101.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([126.5,-101.07]).appendPoint([126.5,-100.665]).appendArc([125,-99.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([107.5,-99.165]).appendPoint([107.5,-96.855]).appendArc([106,-95.355],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([88,-95.355]).appendArc([86.5,-96.855],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([86.5,-99.165]).appendPoint([69,-99.165]).appendArc([67.5,-100.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([67.5,-101.07]).appendPoint([50,-101.07]).appendArc([48.5,-102.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([48.5,-112.5]).appendPoint([31,-112.5]).appendArc([29.5,-114],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-132]).appendArc([29.5857864,-132.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-133],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-151]).appendArc([29.5857864,-151.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-152],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-170]).appendArc([29.5857864,-170.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-171],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-189]).appendArc([31,-190.5],{"radius":1.5,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 4.4] });
}


function _walls_extrude_4_4_outline_fn(){
    return new CSG.Path2D([[293.6422105,-198.74],[357.2946633,-198.74]]).appendArc([365.7946535,-190.2529096],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([365.9303176,-95.6271864]).appendArc([357.4303264,-87.115],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-87.115]).appendArc([235.1169579,-95.6225692],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([235.1976598,-186.2466875]).appendPoint([221.4579197,-191.2475439]).appendArc([219.366066,-195.7335387],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([225.8815499,-213.634683]).appendArc([230.3675445,-215.7265367],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([248.1250906,-209.2633183]).appendPoint([275.3829129,-201.9596068]).appendPoint([293.6422105,-198.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[293.4672329,-196.74],[357.2946633,-196.74]]).appendArc([363.7946566,-190.249319],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([363.9303197,-95.624319]).appendArc([357.4303264,-89.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-89.115]).appendArc([237.1169571,-95.6207882],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([237.1989072,-187.6466485]).appendPoint([222.14196,-193.1269292]).appendArc([221.2454513,-195.0494983],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([227.7609351,-212.9506427]).appendArc([229.6835042,-213.8471514],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([247.5231068,-207.354067]).appendPoint([274.9496213,-200.0051546]).appendPoint([293.4672329,-196.74]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.3577898,-198.74],[30.7053367,-198.74]]).appendArc([22.2053465,-190.2529096],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([22.0696824,-95.6271864]).appendArc([30.5696736,-87.115],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-87.115]).appendArc([152.8830421,-95.6225693],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([152.8023402,-186.2466874]).appendPoint([166.5420803,-191.247544]).appendArc([168.633934,-195.7335386],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([162.1184501,-213.634683]).appendArc([157.6324555,-215.7265367],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([139.8749091,-209.2633182]).appendPoint([112.6170868,-201.9596068]).appendPoint([94.3577898,-198.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[94.5327671,-196.74],[30.7053367,-196.74]]).appendArc([24.2053434,-190.249319],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([24.0696803,-95.624319]).appendArc([30.5696736,-89.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-89.115]).appendArc([150.8830429,-95.6207883],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([150.8010928,-187.6466485]).appendPoint([165.85804,-193.1269292]).appendArc([166.7545487,-195.0494983],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([160.2390649,-212.9506427]).appendArc([158.3164958,-213.8471514],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([140.4768932,-207.354067]).appendPoint([113.0503787,-200.0051546]).appendPoint([94.5327671,-196.74]).close().innerToCAG()
)).extrude({ offset: [0, 0, 4.4] });
}


function _walls_extrude_1_outline_fn(){
    return new CSG.Path2D([[293.6422105,-198.74],[357.2946633,-198.74]]).appendArc([365.7946535,-190.2529096],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([365.9303176,-95.6271864]).appendArc([357.4303264,-87.115],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-87.115]).appendArc([235.1169579,-95.6225692],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([235.1976598,-186.2466875]).appendPoint([221.4579197,-191.2475439]).appendArc([219.366066,-195.7335387],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([225.8815499,-213.634683]).appendArc([230.3675445,-215.7265367],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([248.1250906,-209.2633183]).appendPoint([275.3829129,-201.9596068]).appendPoint([293.6422105,-198.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[293.4672329,-196.74],[357.2946633,-196.74]]).appendArc([363.7946566,-190.249319],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([363.9303197,-95.624319]).appendArc([357.4303264,-89.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-89.115]).appendArc([237.1169571,-95.6207882],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([237.1989072,-187.6466485]).appendPoint([222.14196,-193.1269292]).appendArc([221.2454513,-195.0494983],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([227.7609351,-212.9506427]).appendArc([229.6835042,-213.8471514],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([247.5231068,-207.354067]).appendPoint([274.9496213,-200.0051546]).appendPoint([293.4672329,-196.74]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.3577898,-198.74],[30.7053367,-198.74]]).appendArc([22.2053465,-190.2529096],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([22.0696824,-95.6271864]).appendArc([30.5696736,-87.115],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-87.115]).appendArc([152.8830421,-95.6225693],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([152.8023402,-186.2466874]).appendPoint([166.5420803,-191.247544]).appendArc([168.633934,-195.7335386],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([162.1184501,-213.634683]).appendArc([157.6324555,-215.7265367],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([139.8749091,-209.2633182]).appendPoint([112.6170868,-201.9596068]).appendPoint([94.3577898,-198.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[94.5327671,-196.74],[30.7053367,-196.74]]).appendArc([24.2053434,-190.249319],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([24.0696803,-95.624319]).appendArc([30.5696736,-89.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-89.115]).appendArc([150.8830429,-95.6207883],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([150.8010928,-187.6466485]).appendPoint([165.85804,-193.1269292]).appendArc([166.7545487,-195.0494983],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([160.2390649,-212.9506427]).appendArc([158.3164958,-213.8471514],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([140.4768932,-207.354067]).appendPoint([113.0503787,-200.0051546]).appendPoint([94.5327671,-196.74]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
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


function _trrsCutoutCase_extrude_6_outline_fn(){
    return new CSG.Path2D([[232.75,-101.07],[249.75,-101.07]]).appendPoint([249.75,-94.07]).appendPoint([232.75,-94.07]).appendPoint([232.75,-101.07]).close().innerToCAG()
.union(
    new CSG.Path2D([[138.25,-101.07],[155.25,-101.07]]).appendPoint([155.25,-94.07]).appendPoint([138.25,-94.07]).appendPoint([138.25,-101.07]).close().innerToCAG()
).extrude({ offset: [0, 0, 6] });
}


function _mcuCutoutCase_extrude_7_outline_fn(){
    return new CSG.Path2D([[342.3,-108.25],[354.3,-108.25]]).appendPoint([354.3,-83.75]).appendPoint([342.3,-83.75]).appendPoint([342.3,-108.25]).close().innerToCAG()
.union(
    new CSG.Path2D([[33.7,-108.25],[45.7,-108.25]]).appendPoint([45.7,-83.75]).appendPoint([33.7,-83.75]).appendPoint([33.7,-108.25]).close().innerToCAG()
).extrude({ offset: [0, 0, 7] });
}




                function top_case_fn() {
                    

                // creating part 0 of case top
                let top__part_0 = _plates_extrude_1_3_outline_fn();

                // make sure that rotations are relative
                let top__part_0_bounds = top__part_0.getBounds();
                let top__part_0_x = top__part_0_bounds[0].x + (top__part_0_bounds[1].x - top__part_0_bounds[0].x) / 2
                let top__part_0_y = top__part_0_bounds[0].y + (top__part_0_bounds[1].y - top__part_0_bounds[0].y) / 2
                top__part_0 = translate([-top__part_0_x, -top__part_0_y, 0], top__part_0);
                top__part_0 = rotate([0,0,0], top__part_0);
                top__part_0 = translate([top__part_0_x, top__part_0_y, 0], top__part_0);

                top__part_0 = translate([0,0,0], top__part_0);
                let result = top__part_0;
                
            

                // creating part 1 of case top
                let top__part_1 = _topOfCase_extrude_4_4_outline_fn();

                // make sure that rotations are relative
                let top__part_1_bounds = top__part_1.getBounds();
                let top__part_1_x = top__part_1_bounds[0].x + (top__part_1_bounds[1].x - top__part_1_bounds[0].x) / 2
                let top__part_1_y = top__part_1_bounds[0].y + (top__part_1_bounds[1].y - top__part_1_bounds[0].y) / 2
                top__part_1 = translate([-top__part_1_x, -top__part_1_y, 0], top__part_1);
                top__part_1 = rotate([0,0,0], top__part_1);
                top__part_1 = translate([top__part_1_x, top__part_1_y, 0], top__part_1);

                top__part_1 = translate([0,0,0], top__part_1);
                result = result.union(top__part_1);
                
            

                // creating part 2 of case top
                let top__part_2 = _walls_extrude_4_4_outline_fn();

                // make sure that rotations are relative
                let top__part_2_bounds = top__part_2.getBounds();
                let top__part_2_x = top__part_2_bounds[0].x + (top__part_2_bounds[1].x - top__part_2_bounds[0].x) / 2
                let top__part_2_y = top__part_2_bounds[0].y + (top__part_2_bounds[1].y - top__part_2_bounds[0].y) / 2
                top__part_2 = translate([-top__part_2_x, -top__part_2_y, 0], top__part_2);
                top__part_2 = rotate([0,0,0], top__part_2);
                top__part_2 = translate([top__part_2_x, top__part_2_y, 0], top__part_2);

                top__part_2 = translate([0,0,0], top__part_2);
                result = result.union(top__part_2);
                
            

                // creating part 3 of case top
                let top__part_3 = _walls_extrude_1_outline_fn();

                // make sure that rotations are relative
                let top__part_3_bounds = top__part_3.getBounds();
                let top__part_3_x = top__part_3_bounds[0].x + (top__part_3_bounds[1].x - top__part_3_bounds[0].x) / 2
                let top__part_3_y = top__part_3_bounds[0].y + (top__part_3_bounds[1].y - top__part_3_bounds[0].y) / 2
                top__part_3 = translate([-top__part_3_x, -top__part_3_y, 0], top__part_3);
                top__part_3 = rotate([0,0,0], top__part_3);
                top__part_3 = translate([top__part_3_x, top__part_3_y, 0], top__part_3);

                top__part_3 = translate([0,0,0], top__part_3);
                result = result.subtract(top__part_3);
                
            

                // creating part 4 of case top
                let top__part_4 = _holes_extrude_50_outline_fn();

                // make sure that rotations are relative
                let top__part_4_bounds = top__part_4.getBounds();
                let top__part_4_x = top__part_4_bounds[0].x + (top__part_4_bounds[1].x - top__part_4_bounds[0].x) / 2
                let top__part_4_y = top__part_4_bounds[0].y + (top__part_4_bounds[1].y - top__part_4_bounds[0].y) / 2
                top__part_4 = translate([-top__part_4_x, -top__part_4_y, 0], top__part_4);
                top__part_4 = rotate([0,0,0], top__part_4);
                top__part_4 = translate([top__part_4_x, top__part_4_y, 0], top__part_4);

                top__part_4 = translate([0,0,0], top__part_4);
                result = result.subtract(top__part_4);
                
            

                // creating part 5 of case top
                let top__part_5 = _trrsCutoutCase_extrude_6_outline_fn();

                // make sure that rotations are relative
                let top__part_5_bounds = top__part_5.getBounds();
                let top__part_5_x = top__part_5_bounds[0].x + (top__part_5_bounds[1].x - top__part_5_bounds[0].x) / 2
                let top__part_5_y = top__part_5_bounds[0].y + (top__part_5_bounds[1].y - top__part_5_bounds[0].y) / 2
                top__part_5 = translate([-top__part_5_x, -top__part_5_y, 0], top__part_5);
                top__part_5 = rotate([0,0,0], top__part_5);
                top__part_5 = translate([top__part_5_x, top__part_5_y, 0], top__part_5);

                top__part_5 = translate([0,0,0], top__part_5);
                result = result.subtract(top__part_5);
                
            

                // creating part 6 of case top
                let top__part_6 = _mcuCutoutCase_extrude_7_outline_fn();

                // make sure that rotations are relative
                let top__part_6_bounds = top__part_6.getBounds();
                let top__part_6_x = top__part_6_bounds[0].x + (top__part_6_bounds[1].x - top__part_6_bounds[0].x) / 2
                let top__part_6_y = top__part_6_bounds[0].y + (top__part_6_bounds[1].y - top__part_6_bounds[0].y) / 2
                top__part_6 = translate([-top__part_6_x, -top__part_6_y, 0], top__part_6);
                top__part_6 = rotate([0,0,0], top__part_6);
                top__part_6 = translate([top__part_6_x, top__part_6_y, 0], top__part_6);

                top__part_6 = translate([0,0,-4.6], top__part_6);
                result = result.subtract(top__part_6);
                
            
                    return result;
                }
            
            

                function topR_case_fn() {
                    

                // creating part 0 of case topR
                let topR__part_0 = top_case_fn();

                // make sure that rotations are relative
                let topR__part_0_bounds = topR__part_0.getBounds();
                let topR__part_0_x = topR__part_0_bounds[0].x + (topR__part_0_bounds[1].x - topR__part_0_bounds[0].x) / 2
                let topR__part_0_y = topR__part_0_bounds[0].y + (topR__part_0_bounds[1].y - topR__part_0_bounds[0].y) / 2
                topR__part_0 = translate([-topR__part_0_x, -topR__part_0_y, 0], topR__part_0);
                topR__part_0 = rotate([0,0,0], topR__part_0);
                topR__part_0 = translate([topR__part_0_x, topR__part_0_y, 0], topR__part_0);

                topR__part_0 = translate([0,0,0], topR__part_0);
                let result = topR__part_0;
                
            

                // creating part 1 of case topR
                let topR__part_1 = _leftSubstitution_extrude_100_outline_fn();

                // make sure that rotations are relative
                let topR__part_1_bounds = topR__part_1.getBounds();
                let topR__part_1_x = topR__part_1_bounds[0].x + (topR__part_1_bounds[1].x - topR__part_1_bounds[0].x) / 2
                let topR__part_1_y = topR__part_1_bounds[0].y + (topR__part_1_bounds[1].y - topR__part_1_bounds[0].y) / 2
                topR__part_1 = translate([-topR__part_1_x, -topR__part_1_y, 0], topR__part_1);
                topR__part_1 = rotate([0,0,0], topR__part_1);
                topR__part_1 = translate([topR__part_1_x, topR__part_1_y, 0], topR__part_1);

                topR__part_1 = translate([0,0,-50], topR__part_1);
                result = result.subtract(topR__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return topR_case_fn();
            }

        