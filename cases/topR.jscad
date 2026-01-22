function _leftSubstitution_extrude_100_outline_fn(){
    return new CSG.Path2D([[1.75,-249.105],[192.25,-249.105]]).appendPoint([192.25,-58.605]).appendPoint([1.75,-58.605]).appendPoint([1.75,-249.105]).close().innerToCAG()
.extrude({ offset: [0, 0, 100] });
}


function _plates_extrude_1_3_outline_fn(){
    return new CSG.Path2D([[293.5109773,-206.74],[357.2946633,-206.74]]).appendArc([363.7946566,-200.249319],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([363.9303197,-105.624319]).appendArc([357.4303264,-99.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-99.115]).appendArc([237.1169571,-105.6207882],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([237.1985952,-197.296213]).appendArc([236.8696055,-197.7665046],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([222.14196,-203.1269292]).appendArc([221.2454513,-205.0494983],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([227.7609351,-222.9506427]).appendArc([229.6835042,-223.8471514],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([247.502593,-217.3615334]).appendArc([247.5441936,-217.3484168],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([274.9285343,-210.0108048]).appendArc([274.9711197,-210.0013638],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([293.4241532,-206.7475961]).appendArc([293.5109773,-206.74],{"radius":0.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[277.1159942,-205.5360724],[289.9184949,-203.2786461]]).appendArc([290.3240747,-202.6994181],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([288.0666484,-189.8969174]).appendArc([287.4874204,-189.4913376],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([274.6849197,-191.7487639]).appendArc([274.2793399,-192.3279919],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([276.5367662,-205.1304926]).appendArc([277.1159942,-205.5360724],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[231.1494433,-219.0302776],[243.3654473,-214.5840158]]).appendArc([243.6642835,-213.9431594],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([239.2180217,-201.7271554]).appendArc([238.5771653,-201.4283192],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([226.3611613,-205.874581]).appendArc([226.0623251,-206.5154374],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([230.5085869,-218.7314414]).appendArc([231.1494433,-219.0302776],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.5,-128.57],[259.5,-128.57]]).appendArc([260,-128.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([260,-115.07]).appendArc([259.5,-114.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.5,-114.57]).appendArc([246,-115.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246,-128.07]).appendArc([246.5,-128.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.5,-147.57],[259.5,-147.57]]).appendArc([260,-147.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([260,-134.07]).appendArc([259.5,-133.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.5,-133.57]).appendArc([246,-134.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246,-147.07]).appendArc([246.5,-147.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.5,-166.57],[259.5,-166.57]]).appendArc([260,-166.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([260,-153.07]).appendArc([259.5,-152.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.5,-152.57]).appendArc([246,-153.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246,-166.07]).appendArc([246.5,-166.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[246.5,-185.57],[259.5,-185.57]]).appendArc([260,-185.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([260,-172.07]).appendArc([259.5,-171.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246.5,-171.57]).appendArc([246,-172.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([246,-185.07]).appendArc([246.5,-185.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.5,-126.665],[278.5,-126.665]]).appendArc([279,-126.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([279,-113.165]).appendArc([278.5,-112.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.5,-112.665]).appendArc([265,-113.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265,-126.165]).appendArc([265.5,-126.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.5,-145.665],[278.5,-145.665]]).appendArc([279,-145.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([279,-132.165]).appendArc([278.5,-131.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.5,-131.665]).appendArc([265,-132.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265,-145.165]).appendArc([265.5,-145.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.5,-164.665],[278.5,-164.665]]).appendArc([279,-164.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([279,-151.165]).appendArc([278.5,-150.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.5,-150.665]).appendArc([265,-151.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265,-164.165]).appendArc([265.5,-164.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[265.5,-183.665],[278.5,-183.665]]).appendArc([279,-183.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([279,-170.165]).appendArc([278.5,-169.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265.5,-169.665]).appendArc([265,-170.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([265,-183.165]).appendArc([265.5,-183.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.5,-122.855],[297.5,-122.855]]).appendArc([298,-122.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([298,-109.355]).appendArc([297.5,-108.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.5,-108.855]).appendArc([284,-109.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284,-122.355]).appendArc([284.5,-122.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.5,-141.855],[297.5,-141.855]]).appendArc([298,-141.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([298,-128.355]).appendArc([297.5,-127.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.5,-127.855]).appendArc([284,-128.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284,-141.355]).appendArc([284.5,-141.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.5,-160.855],[297.5,-160.855]]).appendArc([298,-160.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([298,-147.355]).appendArc([297.5,-146.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.5,-146.855]).appendArc([284,-147.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284,-160.355]).appendArc([284.5,-160.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[284.5,-179.855],[297.5,-179.855]]).appendArc([298,-179.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([298,-166.355]).appendArc([297.5,-165.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284.5,-165.855]).appendArc([284,-166.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([284,-179.355]).appendArc([284.5,-179.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[303.5,-126.665],[316.5,-126.665]]).appendArc([317,-126.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([317,-113.165]).appendArc([316.5,-112.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303.5,-112.665]).appendArc([303,-113.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303,-126.165]).appendArc([303.5,-126.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[303.5,-145.665],[316.5,-145.665]]).appendArc([317,-145.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([317,-132.165]).appendArc([316.5,-131.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303.5,-131.665]).appendArc([303,-132.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303,-145.165]).appendArc([303.5,-145.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[303.5,-164.665],[316.5,-164.665]]).appendArc([317,-164.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([317,-151.165]).appendArc([316.5,-150.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303.5,-150.665]).appendArc([303,-151.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303,-164.165]).appendArc([303.5,-164.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[303.5,-183.665],[316.5,-183.665]]).appendArc([317,-183.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([317,-170.165]).appendArc([316.5,-169.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303.5,-169.665]).appendArc([303,-170.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([303,-183.165]).appendArc([303.5,-183.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[322.5,-128.57],[335.5,-128.57]]).appendArc([336,-128.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([336,-115.07]).appendArc([335.5,-114.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322.5,-114.57]).appendArc([322,-115.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322,-128.07]).appendArc([322.5,-128.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[322.5,-147.57],[335.5,-147.57]]).appendArc([336,-147.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([336,-134.07]).appendArc([335.5,-133.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322.5,-133.57]).appendArc([322,-134.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322,-147.07]).appendArc([322.5,-147.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[322.5,-166.57],[335.5,-166.57]]).appendArc([336,-166.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([336,-153.07]).appendArc([335.5,-152.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322.5,-152.57]).appendArc([322,-153.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322,-166.07]).appendArc([322.5,-166.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[322.5,-185.57],[335.5,-185.57]]).appendArc([336,-185.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([336,-172.07]).appendArc([335.5,-171.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322.5,-171.57]).appendArc([322,-172.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([322,-185.07]).appendArc([322.5,-185.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[341.5,-140],[354.5,-140]]).appendArc([355,-139.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([355,-126.5]).appendArc([354.5,-126],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341.5,-126]).appendArc([341,-126.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341,-139.5]).appendArc([341.5,-140],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[341.5,-159],[354.5,-159]]).appendArc([355,-158.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([355,-145.5]).appendArc([354.5,-145],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341.5,-145]).appendArc([341,-145.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341,-158.5]).appendArc([341.5,-159],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[341.5,-178],[354.5,-178]]).appendArc([355,-177.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([355,-164.5]).appendArc([354.5,-164],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341.5,-164]).appendArc([341,-164.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341,-177.5]).appendArc([341.5,-178],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[341.5,-197],[354.5,-197]]).appendArc([355,-196.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([355,-183.5]).appendArc([354.5,-183],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341.5,-183]).appendArc([341,-183.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([341,-196.5]).appendArc([341.5,-197],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[253.8919515,-211.4805536],[266.4489873,-208.115906]]).appendArc([266.8025407,-207.5035336],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([263.4378931,-194.9464978]).appendArc([262.8255207,-194.5929444],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([250.2684849,-197.957592]).appendArc([249.9149315,-198.5699644],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([253.2795791,-211.1270002]).appendArc([253.8919515,-211.4805536],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
)).union(
    new CSG.Path2D([[94.4890227,-206.74],[30.7053367,-206.74]]).appendArc([24.2053434,-200.249319],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([24.0696803,-105.624319]).appendArc([30.5696736,-99.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-99.115]).appendArc([150.8830429,-105.6207883],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([150.8014048,-197.296213]).appendArc([151.1303945,-197.7665045],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([165.85804,-203.1269292]).appendArc([166.7545487,-205.0494983],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([160.2390649,-222.9506427]).appendArc([158.3164958,-223.8471514],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([140.497407,-217.3615334]).appendArc([140.4558064,-217.3484168],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([113.0714657,-210.0108048]).appendArc([113.0288803,-210.0013638],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([94.5758468,-206.7475961]).appendArc([94.4890227,-206.74],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[98.0815051,-203.2786461],[110.8840058,-205.5360724]]).appendArc([111.4632338,-205.1304926],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([113.7206601,-192.3279919]).appendArc([113.3150803,-191.7487639],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([100.5125796,-189.4913376]).appendArc([99.9333516,-189.8969174],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([97.6759253,-202.6994181]).appendArc([98.0815051,-203.2786461],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[144.6345527,-214.5840158],[156.8505567,-219.0302776]]).appendArc([157.4914131,-218.7314414],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([161.9376749,-206.5154374]).appendArc([161.6388387,-205.874581],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([149.4228347,-201.4283192]).appendArc([148.7819783,-201.7271554],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([144.3357165,-213.9431594]).appendArc([144.6345527,-214.5840158],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-128.57],[141.5,-128.57]]).appendArc([142,-128.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([142,-115.07]).appendArc([141.5,-114.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5,-114.57]).appendArc([128,-115.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128,-128.07]).appendArc([128.5,-128.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-147.57],[141.5,-147.57]]).appendArc([142,-147.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([142,-134.07]).appendArc([141.5,-133.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5,-133.57]).appendArc([128,-134.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128,-147.07]).appendArc([128.5,-147.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-166.57],[141.5,-166.57]]).appendArc([142,-166.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([142,-153.07]).appendArc([141.5,-152.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5,-152.57]).appendArc([128,-153.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128,-166.07]).appendArc([128.5,-166.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[128.5,-185.57],[141.5,-185.57]]).appendArc([142,-185.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([142,-172.07]).appendArc([141.5,-171.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.5,-171.57]).appendArc([128,-172.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128,-185.07]).appendArc([128.5,-185.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.5,-126.665],[122.5,-126.665]]).appendArc([123,-126.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123,-113.165]).appendArc([122.5,-112.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.5,-112.665]).appendArc([109,-113.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109,-126.165]).appendArc([109.5,-126.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.5,-145.665],[122.5,-145.665]]).appendArc([123,-145.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123,-132.165]).appendArc([122.5,-131.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.5,-131.665]).appendArc([109,-132.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109,-145.165]).appendArc([109.5,-145.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.5,-164.665],[122.5,-164.665]]).appendArc([123,-164.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123,-151.165]).appendArc([122.5,-150.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.5,-150.665]).appendArc([109,-151.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109,-164.165]).appendArc([109.5,-164.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.5,-183.665],[122.5,-183.665]]).appendArc([123,-183.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123,-170.165]).appendArc([122.5,-169.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.5,-169.665]).appendArc([109,-170.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109,-183.165]).appendArc([109.5,-183.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5,-122.855],[103.5,-122.855]]).appendArc([104,-122.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104,-109.355]).appendArc([103.5,-108.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.5,-108.855]).appendArc([90,-109.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90,-122.355]).appendArc([90.5,-122.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5,-141.855],[103.5,-141.855]]).appendArc([104,-141.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104,-128.355]).appendArc([103.5,-127.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.5,-127.855]).appendArc([90,-128.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90,-141.355]).appendArc([90.5,-141.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5,-160.855],[103.5,-160.855]]).appendArc([104,-160.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104,-147.355]).appendArc([103.5,-146.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.5,-146.855]).appendArc([90,-147.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90,-160.355]).appendArc([90.5,-160.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[90.5,-179.855],[103.5,-179.855]]).appendArc([104,-179.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([104,-166.355]).appendArc([103.5,-165.855],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.5,-165.855]).appendArc([90,-166.355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90,-179.355]).appendArc([90.5,-179.855],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.5,-126.665],[84.5,-126.665]]).appendArc([85,-126.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85,-113.165]).appendArc([84.5,-112.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.5,-112.665]).appendArc([71,-113.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71,-126.165]).appendArc([71.5,-126.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.5,-145.665],[84.5,-145.665]]).appendArc([85,-145.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85,-132.165]).appendArc([84.5,-131.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.5,-131.665]).appendArc([71,-132.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71,-145.165]).appendArc([71.5,-145.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.5,-164.665],[84.5,-164.665]]).appendArc([85,-164.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85,-151.165]).appendArc([84.5,-150.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.5,-150.665]).appendArc([71,-151.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71,-164.165]).appendArc([71.5,-164.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[71.5,-183.665],[84.5,-183.665]]).appendArc([85,-183.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85,-170.165]).appendArc([84.5,-169.665],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71.5,-169.665]).appendArc([71,-170.165],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([71,-183.165]).appendArc([71.5,-183.665],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.5,-128.57],[65.5,-128.57]]).appendArc([66,-128.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66,-115.07]).appendArc([65.5,-114.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.5,-114.57]).appendArc([52,-115.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52,-128.07]).appendArc([52.5,-128.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.5,-147.57],[65.5,-147.57]]).appendArc([66,-147.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66,-134.07]).appendArc([65.5,-133.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.5,-133.57]).appendArc([52,-134.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52,-147.07]).appendArc([52.5,-147.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.5,-166.57],[65.5,-166.57]]).appendArc([66,-166.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66,-153.07]).appendArc([65.5,-152.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.5,-152.57]).appendArc([52,-153.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52,-166.07]).appendArc([52.5,-166.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[52.5,-185.57],[65.5,-185.57]]).appendArc([66,-185.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([66,-172.07]).appendArc([65.5,-171.57],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52.5,-171.57]).appendArc([52,-172.07],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([52,-185.07]).appendArc([52.5,-185.57],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5,-140],[46.5,-140]]).appendArc([47,-139.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,-126.5]).appendArc([46.5,-126],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.5,-126]).appendArc([33,-126.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33,-139.5]).appendArc([33.5,-140],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5,-159],[46.5,-159]]).appendArc([47,-158.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,-145.5]).appendArc([46.5,-145],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.5,-145]).appendArc([33,-145.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33,-158.5]).appendArc([33.5,-159],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5,-178],[46.5,-178]]).appendArc([47,-177.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,-164.5]).appendArc([46.5,-164],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.5,-164]).appendArc([33,-164.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33,-177.5]).appendArc([33.5,-178],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[33.5,-197],[46.5,-197]]).appendArc([47,-196.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,-183.5]).appendArc([46.5,-183],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33.5,-183]).appendArc([33,-183.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([33,-196.5]).appendArc([33.5,-197],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[121.5510127,-208.115906],[134.1080485,-211.4805536]]).appendArc([134.7204209,-211.1270002],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([138.0850685,-198.5699644]).appendArc([137.7315151,-197.957592],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([125.1744793,-194.5929444]).appendArc([124.5621069,-194.9464978],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([121.1974593,-207.5035336]).appendArc([121.5510127,-208.115906],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
))).extrude({ offset: [0, 0, 1.3] });
}


function _wallAroundKeys_extrude_5_300000000000001_outline_fn(){
    return new CSG.Path2D([[339,-201.5],[357,-201.5]]).appendArc([359.5,-199],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([359.5,-181]).appendArc([359.4494897,-180.5],{"radius":2.5,"clockwise":false,"large":false}).appendArc([359.5,-180],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([359.5,-162]).appendArc([359.4494897,-161.5],{"radius":2.5,"clockwise":false,"large":false}).appendArc([359.5,-161],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([359.5,-143]).appendArc([359.4494897,-142.5],{"radius":2.5,"clockwise":false,"large":false}).appendArc([359.5,-142],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([359.5,-124]).appendArc([357,-121.5],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([340.5,-121.5]).appendPoint([340.5,-112.57]).appendArc([338,-110.07],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([321.4281629,-110.07]).appendArc([319,-108.165],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([302.5,-108.165]).appendPoint([302.5,-106.855]).appendArc([300,-104.355],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([282,-104.355]).appendArc([279.5,-106.855],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([279.5,-108.165]).appendPoint([263,-108.165]).appendArc([260.5718371,-110.07],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([244,-110.07]).appendArc([241.5,-112.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([241.5,-130.57]).appendArc([241.5505103,-131.07],{"radius":2.5,"clockwise":false,"large":false}).appendArc([241.5,-131.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([241.5,-149.57]).appendArc([241.5505103,-150.07],{"radius":2.5,"clockwise":false,"large":false}).appendArc([241.5,-150.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([241.5,-168.57]).appendArc([241.5505103,-169.07],{"radius":2.5,"clockwise":false,"large":false}).appendArc([241.5,-169.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([241.5,-187.57]).appendArc([244,-190.07],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([260.5,-190.07]).appendPoint([260.5,-190.5573231]).appendPoint([246.6889847,-194.2579734]).appendPoint([243.7917363,-195.0342889]).appendArc([243.7272939,-195.0524692],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([239.5313958,-196.2971076]).appendArc([239.3873062,-196.3446519],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([222.4728391,-202.5010146]).appendArc([220.9786578,-205.7052965],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([227.1350205,-222.6197636]).appendArc([230.3393024,-224.1139449],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([247.1532959,-217.9941516]).appendPoint([261.8927881,-214.0165525]).appendPoint([261.8944109,-214.0161205]).appendPoint([261.8960725,-214.0156721]).appendPoint([275.5408881,-210.3832259]).appendPoint([293.1619312,-207.2761606]).appendArc([295.1898301,-204.3800207],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([291.6588787,-184.355]).appendPoint([298.5,-184.355]).appendPoint([298.5,-185.665]).appendArc([301,-188.165],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([317.5718371,-188.165]).appendArc([320,-190.07],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([336.5,-190.07]).appendPoint([336.5,-199]).appendArc([339,-201.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[339,-200.5],[357,-200.5]]).appendArc([358.5,-199],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-181]).appendArc([358.4142136,-180.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-180],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-162]).appendArc([358.4142136,-161.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-161],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-143]).appendArc([358.4142136,-142.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-142],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-124]).appendArc([357,-122.5],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([339.5,-122.5]).appendPoint([339.5,-112.57]).appendArc([338,-111.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([320.5,-111.07]).appendPoint([320.5,-110.665]).appendArc([319,-109.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([301.5,-109.165]).appendPoint([301.5,-106.855]).appendArc([300,-105.355],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([282,-105.355]).appendArc([280.5,-106.855],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([280.5,-109.165]).appendPoint([263,-109.165]).appendArc([261.5,-110.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([261.5,-111.07]).appendPoint([244,-111.07]).appendArc([242.5,-112.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-130.57]).appendArc([242.5857864,-131.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-131.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-149.57]).appendArc([242.5857864,-150.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-150.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-168.57]).appendArc([242.5857864,-169.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-169.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-187.57]).appendArc([244,-189.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([261.5,-189.07]).appendPoint([261.5,-191.32465]).appendPoint([246.9478037,-195.2238993]).appendPoint([244.0505553,-196.0002147]).appendArc([244.0116783,-196.0111796],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([239.8157801,-197.255818]).appendArc([239.7293264,-197.2843446],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([222.8148592,-203.4407072]).appendArc([221.9183505,-205.3632763],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([228.0747131,-222.2777435]).appendArc([229.9972822,-223.1742522],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([246.8514653,-217.0398312]).appendPoint([261.6355331,-213.0502089]).appendPoint([275.3250418,-209.4058588]).appendPoint([292.988283,-206.2913528]).appendArc([294.2050223,-204.5536689],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([290.4671251,-183.355]).appendPoint([299.5,-183.355]).appendPoint([299.5,-185.665]).appendArc([301,-187.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([318.5,-187.165]).appendPoint([318.5,-187.57]).appendArc([320,-189.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([337.5,-189.07]).appendPoint([337.5,-199]).appendArc([339,-200.5],{"radius":1.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[31,-201.5],[49,-201.5]]).appendArc([51.5,-199],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([51.5,-190.07]).appendPoint([68,-190.07]).appendArc([70.4281629,-188.165],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([87,-188.165]).appendArc([89.5,-185.665],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([89.5,-184.355]).appendPoint([96.3411214,-184.355]).appendPoint([92.8101699,-204.3800207]).appendArc([94.8380689,-207.2761606],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([112.4591108,-210.3832256]).appendPoint([126.1039275,-214.0156721]).appendPoint([126.1055891,-214.0161205]).appendPoint([126.1072119,-214.0165525]).appendPoint([140.8467041,-217.9941516]).appendPoint([157.6606977,-224.1139448]).appendArc([160.8649796,-222.6197637],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([167.0213421,-205.7052964]).appendArc([165.527161,-202.5010145],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([148.6126937,-196.344652]).appendArc([148.4686043,-196.2971076],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([144.272706,-195.0524692]).appendArc([144.2087928,-195.0344305],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([141.3115443,-194.2581153]).appendPoint([127.5,-190.5573231]).appendPoint([127.5,-190.07]).appendPoint([144,-190.07]).appendArc([146.5,-187.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([146.5,-169.57]).appendArc([146.4494897,-169.07],{"radius":2.5,"clockwise":false,"large":false}).appendArc([146.5,-168.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([146.5,-150.57]).appendArc([146.4494897,-150.07],{"radius":2.5,"clockwise":false,"large":false}).appendArc([146.5,-149.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([146.5,-131.57]).appendArc([146.4494897,-131.07],{"radius":2.5,"clockwise":false,"large":false}).appendArc([146.5,-130.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([146.5,-112.57]).appendArc([144,-110.07],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([127.4281629,-110.07]).appendArc([125,-108.165],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([108.5,-108.165]).appendPoint([108.5,-106.855]).appendArc([106,-104.355],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([88,-104.355]).appendArc([85.5,-106.855],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([85.5,-108.165]).appendPoint([69,-108.165]).appendArc([66.5718371,-110.07],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([50,-110.07]).appendArc([47.5,-112.57],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([47.5,-121.5]).appendPoint([31,-121.5]).appendArc([28.5,-124],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([28.5,-142]).appendArc([28.5505103,-142.5],{"radius":2.5,"clockwise":false,"large":false}).appendArc([28.5,-143],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([28.5,-161]).appendArc([28.5505103,-161.5],{"radius":2.5,"clockwise":false,"large":false}).appendArc([28.5,-162],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([28.5,-180]).appendArc([28.5505103,-180.5],{"radius":2.5,"clockwise":false,"large":false}).appendArc([28.5,-181],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([28.5,-199]).appendArc([31,-201.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[31,-200.5],[49,-200.5]]).appendArc([50.5,-199],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([50.5,-189.07]).appendPoint([68,-189.07]).appendArc([69.5,-187.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([69.5,-187.165]).appendPoint([87,-187.165]).appendArc([88.5,-185.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([88.5,-183.355]).appendPoint([97.5328749,-183.355]).appendPoint([93.7949777,-204.5536689]).appendArc([95.011717,-206.2913528],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([112.6749582,-209.4058588]).appendPoint([126.3644669,-213.0502089]).appendPoint([141.1485347,-217.0398312]).appendPoint([158.0027178,-223.1742522]).appendArc([159.9252869,-222.2777435],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([166.0816495,-205.3632763]).appendArc([165.1851408,-203.4407072],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([148.2706736,-197.2843446]).appendArc([148.1842199,-197.255818],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([143.9883217,-196.0111796]).appendArc([143.9499737,-196.0003564],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([141.0527253,-195.2240411]).appendPoint([126.5,-191.32465]).appendPoint([126.5,-189.07]).appendPoint([144,-189.07]).appendArc([145.5,-187.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-169.57]).appendArc([145.4142136,-169.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-168.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-150.57]).appendArc([145.4142136,-150.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-149.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-131.57]).appendArc([145.4142136,-131.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-130.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-112.57]).appendArc([144,-111.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([126.5,-111.07]).appendPoint([126.5,-110.665]).appendArc([125,-109.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([107.5,-109.165]).appendPoint([107.5,-106.855]).appendArc([106,-105.355],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([88,-105.355]).appendArc([86.5,-106.855],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([86.5,-109.165]).appendPoint([69,-109.165]).appendArc([67.5,-110.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([67.5,-111.07]).appendPoint([50,-111.07]).appendArc([48.5,-112.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([48.5,-122.5]).appendPoint([31,-122.5]).appendArc([29.5,-124],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-142]).appendArc([29.5857864,-142.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-143],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-161]).appendArc([29.5857864,-161.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-162],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-180]).appendArc([29.5857864,-180.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-181],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-199]).appendArc([31,-200.5],{"radius":1.5,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 5.300000000000001] });
}


function _topOfCase_extrude_5_300000000000001_outline_fn(){
    return new CSG.Path2D([[293.4672329,-206.74],[357.2946633,-206.74]]).appendArc([363.7946566,-200.249319],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([363.9303197,-105.624319]).appendArc([357.4303264,-99.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-99.115]).appendArc([237.1169571,-105.6207882],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([237.1989072,-197.6466485]).appendPoint([222.14196,-203.1269292]).appendArc([221.2454513,-205.0494983],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([227.7609351,-222.9506427]).appendArc([229.6835042,-223.8471514],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([247.5231068,-217.354067]).appendPoint([274.9496213,-210.0051546]).appendPoint([293.4672329,-206.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[339,-200.5],[357,-200.5]]).appendArc([358.5,-199],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-181]).appendArc([358.4142136,-180.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-180],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-162]).appendArc([358.4142136,-161.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-161],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-143]).appendArc([358.4142136,-142.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([358.5,-142],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([358.5,-124]).appendArc([357,-122.5],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([339.5,-122.5]).appendPoint([339.5,-112.57]).appendArc([338,-111.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([320.5,-111.07]).appendPoint([320.5,-110.665]).appendArc([319,-109.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([301.5,-109.165]).appendPoint([301.5,-106.855]).appendArc([300,-105.355],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([282,-105.355]).appendArc([280.5,-106.855],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([280.5,-109.165]).appendPoint([263,-109.165]).appendArc([261.5,-110.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([261.5,-111.07]).appendPoint([244,-111.07]).appendArc([242.5,-112.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-130.57]).appendArc([242.5857864,-131.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-131.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-149.57]).appendArc([242.5857864,-150.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-150.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-168.57]).appendArc([242.5857864,-169.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([242.5,-169.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([242.5,-187.57]).appendArc([244,-189.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([261.5,-189.07]).appendPoint([261.5,-191.32465]).appendPoint([246.9478037,-195.2238993]).appendPoint([244.0505553,-196.0002147]).appendArc([244.0116783,-196.0111796],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([239.8157801,-197.255818]).appendArc([239.7293264,-197.2843446],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([222.8148592,-203.4407072]).appendArc([221.9183505,-205.3632763],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([228.0747131,-222.2777435]).appendArc([229.9972822,-223.1742522],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([246.8514653,-217.0398312]).appendPoint([261.6355331,-213.0502089]).appendPoint([275.3250418,-209.4058588]).appendPoint([292.988283,-206.2913528]).appendArc([294.2050223,-204.5536689],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([290.4671251,-183.355]).appendPoint([299.5,-183.355]).appendPoint([299.5,-185.665]).appendArc([301,-187.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([318.5,-187.165]).appendPoint([318.5,-187.57]).appendArc([320,-189.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([337.5,-189.07]).appendPoint([337.5,-199]).appendArc([339,-200.5],{"radius":1.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[94.5327671,-206.74],[30.7053367,-206.74]]).appendArc([24.2053434,-200.249319],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([24.0696803,-105.624319]).appendArc([30.5696736,-99.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-99.115]).appendArc([150.8830429,-105.6207883],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([150.8010928,-197.6466485]).appendPoint([165.85804,-203.1269292]).appendArc([166.7545487,-205.0494983],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([160.2390649,-222.9506427]).appendArc([158.3164958,-223.8471514],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([140.4768932,-217.354067]).appendPoint([113.0503787,-210.0051546]).appendPoint([94.5327671,-206.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[31,-200.5],[49,-200.5]]).appendArc([50.5,-199],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([50.5,-189.07]).appendPoint([68,-189.07]).appendArc([69.5,-187.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([69.5,-187.165]).appendPoint([87,-187.165]).appendArc([88.5,-185.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([88.5,-183.355]).appendPoint([97.5328749,-183.355]).appendPoint([93.7949777,-204.5536689]).appendArc([95.011717,-206.2913528],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([112.6749582,-209.4058588]).appendPoint([126.3644669,-213.0502089]).appendPoint([141.1485347,-217.0398312]).appendPoint([158.0027178,-223.1742522]).appendArc([159.9252869,-222.2777435],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([166.0816495,-205.3632763]).appendArc([165.1851408,-203.4407072],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([148.2706736,-197.2843446]).appendArc([148.1842199,-197.255818],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([143.9883217,-196.0111796]).appendArc([143.9499737,-196.0003564],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([141.0527253,-195.2240411]).appendPoint([126.5,-191.32465]).appendPoint([126.5,-189.07]).appendPoint([144,-189.07]).appendArc([145.5,-187.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-169.57]).appendArc([145.4142136,-169.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-168.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-150.57]).appendArc([145.4142136,-150.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-149.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-131.57]).appendArc([145.4142136,-131.07],{"radius":1.5,"clockwise":false,"large":false}).appendArc([145.5,-130.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([145.5,-112.57]).appendArc([144,-111.07],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([126.5,-111.07]).appendPoint([126.5,-110.665]).appendArc([125,-109.165],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([107.5,-109.165]).appendPoint([107.5,-106.855]).appendArc([106,-105.355],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([88,-105.355]).appendArc([86.5,-106.855],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([86.5,-109.165]).appendPoint([69,-109.165]).appendArc([67.5,-110.665],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([67.5,-111.07]).appendPoint([50,-111.07]).appendArc([48.5,-112.57],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([48.5,-122.5]).appendPoint([31,-122.5]).appendArc([29.5,-124],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-142]).appendArc([29.5857864,-142.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-143],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-161]).appendArc([29.5857864,-161.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-162],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-180]).appendArc([29.5857864,-180.5],{"radius":1.5,"clockwise":false,"large":false}).appendArc([29.5,-181],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([29.5,-199]).appendArc([31,-200.5],{"radius":1.5,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 5.300000000000001] });
}


function _walls_extrude_9_9_outline_fn(){
    return new CSG.Path2D([[293.6422105,-208.74],[357.2946633,-208.74]]).appendArc([365.7946535,-200.2529096],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([365.9303176,-105.6271864]).appendArc([357.4303264,-97.115],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-97.115]).appendArc([235.1169579,-105.6225692],{"radius":8.5,"clockwise":false,"large":false}).appendPoint([235.1976598,-196.2466875]).appendPoint([221.4579197,-201.2475439]).appendArc([219.366066,-205.7335387],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([225.8815499,-223.634683]).appendArc([230.3675445,-225.7265367],{"radius":3.5,"clockwise":false,"large":false}).appendPoint([248.1250906,-219.2633183]).appendPoint([275.3829129,-211.9596068]).appendPoint([293.6422105,-208.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[293.4672329,-206.74],[357.2946633,-206.74]]).appendArc([363.7946566,-200.249319],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([363.9303197,-105.624319]).appendArc([357.4303264,-99.115],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-99.115]).appendArc([237.1169571,-105.6207882],{"radius":6.5,"clockwise":false,"large":false}).appendPoint([237.1989072,-197.6466485]).appendPoint([222.14196,-203.1269292]).appendArc([221.2454513,-205.0494983],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([227.7609351,-222.9506427]).appendArc([229.6835042,-223.8471514],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([247.5231068,-217.354067]).appendPoint([274.9496213,-210.0051546]).appendPoint([293.4672329,-206.74]).close().innerToCAG()
).union(
    new CSG.Path2D([[94.3577898,-208.74],[30.7053367,-208.74]]).appendArc([22.2053465,-200.2529096],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([22.0696824,-105.6271864]).appendArc([30.5696736,-97.115],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-97.115]).appendArc([152.8830421,-105.6225693],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([152.8023402,-196.2466874]).appendPoint([166.5420803,-201.247544]).appendArc([168.633934,-205.7335386],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([162.1184501,-223.634683]).appendArc([157.6324555,-225.7265367],{"radius":3.5,"clockwise":true,"large":false}).appendPoint([139.8749091,-219.2633182]).appendPoint([112.6170868,-211.9596068]).appendPoint([94.3577898,-208.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[94.5327671,-206.74],[30.7053367,-206.74]]).appendArc([24.2053434,-200.249319],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([24.0696803,-105.624319]).appendArc([30.5696736,-99.115],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-99.115]).appendArc([150.8830429,-105.6207883],{"radius":6.5,"clockwise":true,"large":false}).appendPoint([150.8010928,-197.6466485]).appendPoint([165.85804,-203.1269292]).appendArc([166.7545487,-205.0494983],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([160.2390649,-222.9506427]).appendArc([158.3164958,-223.8471514],{"radius":1.5,"clockwise":true,"large":false}).appendPoint([140.4768932,-217.354067]).appendPoint([113.0503787,-210.0051546]).appendPoint([94.5327671,-206.74]).close().innerToCAG()
)).extrude({ offset: [0, 0, 9.9] });
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


function _mcuCutoutCase_extrude_5_outline_fn(){
    return new CSG.Path2D([[342.3,-118.25],[354.3,-118.25]]).appendPoint([354.3,-93.75]).appendPoint([342.3,-93.75]).appendPoint([342.3,-118.25]).close().innerToCAG()
.union(
    new CSG.Path2D([[33.7,-118.25],[45.7,-118.25]]).appendPoint([45.7,-93.75]).appendPoint([33.7,-93.75]).appendPoint([33.7,-118.25]).close().innerToCAG()
).extrude({ offset: [0, 0, 5] });
}


function _trrsCutoutCase_extrude_6_outline_fn(){
    return new CSG.Path2D([[232.75,-111.07],[249.75,-111.07]]).appendPoint([249.75,-104.07]).appendPoint([232.75,-104.07]).appendPoint([232.75,-111.07]).close().innerToCAG()
.union(
    new CSG.Path2D([[138.25,-111.07],[155.25,-111.07]]).appendPoint([155.25,-104.07]).appendPoint([138.25,-104.07]).appendPoint([138.25,-111.07]).close().innerToCAG()
).extrude({ offset: [0, 0, 6] });
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

                top__part_0 = translate([0,0,0.9000000000000001], top__part_0);
                let result = top__part_0;
                
            

                // creating part 1 of case top
                let top__part_1 = _wallAroundKeys_extrude_5_300000000000001_outline_fn();

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
                let top__part_2 = _topOfCase_extrude_5_300000000000001_outline_fn();

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
                let top__part_3 = _walls_extrude_9_9_outline_fn();

                // make sure that rotations are relative
                let top__part_3_bounds = top__part_3.getBounds();
                let top__part_3_x = top__part_3_bounds[0].x + (top__part_3_bounds[1].x - top__part_3_bounds[0].x) / 2
                let top__part_3_y = top__part_3_bounds[0].y + (top__part_3_bounds[1].y - top__part_3_bounds[0].y) / 2
                top__part_3 = translate([-top__part_3_x, -top__part_3_y, 0], top__part_3);
                top__part_3 = rotate([0,0,0], top__part_3);
                top__part_3 = translate([top__part_3_x, top__part_3_y, 0], top__part_3);

                top__part_3 = translate([0,0,-4.6], top__part_3);
                result = result.union(top__part_3);
                
            

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
                let top__part_5 = _mcuCutoutCase_extrude_5_outline_fn();

                // make sure that rotations are relative
                let top__part_5_bounds = top__part_5.getBounds();
                let top__part_5_x = top__part_5_bounds[0].x + (top__part_5_bounds[1].x - top__part_5_bounds[0].x) / 2
                let top__part_5_y = top__part_5_bounds[0].y + (top__part_5_bounds[1].y - top__part_5_bounds[0].y) / 2
                top__part_5 = translate([-top__part_5_x, -top__part_5_y, 0], top__part_5);
                top__part_5 = rotate([0,0,0], top__part_5);
                top__part_5 = translate([top__part_5_x, top__part_5_y, 0], top__part_5);

                top__part_5 = translate([0,0,-1.6], top__part_5);
                result = result.subtract(top__part_5);
                
            

                // creating part 6 of case top
                let top__part_6 = _trrsCutoutCase_extrude_6_outline_fn();

                // make sure that rotations are relative
                let top__part_6_bounds = top__part_6.getBounds();
                let top__part_6_x = top__part_6_bounds[0].x + (top__part_6_bounds[1].x - top__part_6_bounds[0].x) / 2
                let top__part_6_y = top__part_6_bounds[0].y + (top__part_6_bounds[1].y - top__part_6_bounds[0].y) / 2
                top__part_6 = translate([-top__part_6_x, -top__part_6_y, 0], top__part_6);
                top__part_6 = rotate([0,0,0], top__part_6);
                top__part_6 = translate([top__part_6_x, top__part_6_y, 0], top__part_6);

                top__part_6 = translate([0,0,0], top__part_6);
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

        