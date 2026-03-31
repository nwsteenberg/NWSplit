function _plates_extrude_1_3_outline_fn(){
    return new CSG.Path2D([[94.4015337,-197.74],[30.7053367,-197.74]]).appendArc([23.2053451,-190.2512331],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([23.0696813,-95.6257527]).appendArc([30.5696736,-88.115],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-88.115]).appendArc([151.8830425,-95.6216788],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([151.8020286,-186.5962324]).appendArc([152.1310183,-187.066524],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.2000602,-192.1872366]).appendArc([167.6942413,-195.3915185],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([161.1787575,-213.2926628]).appendArc([157.9744756,-214.786844],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([140.1964155,-208.3161592]).appendArc([140.1548149,-208.3030426],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([112.8548203,-200.988031]).appendArc([112.8122349,-200.97859],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([94.4883578,-197.7475961]).appendArc([94.4015337,-197.74],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
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
)).union(
    new CSG.Path2D([[293.598466,-197.74],[357.2946633,-197.74]]).appendArc([364.7946549,-190.2512331],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([364.9303187,-95.6257527]).appendArc([357.4303264,-88.115],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-88.115]).appendArc([236.1169575,-95.6216787],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([236.1979714,-186.5962325]).appendArc([235.8689817,-187.0665241],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([221.7999399,-192.1872365]).appendArc([220.3057587,-195.3915185],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([226.8212425,-213.2926628]).appendArc([230.0255244,-214.786844],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([247.8035855,-208.3161588]).appendArc([247.8451861,-208.3030423],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([275.1451796,-200.9880311]).appendArc([275.187765,-200.9785901],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([293.5116419,-197.7475961]).appendArc([293.598466,-197.74],{"radius":0.5,"clockwise":true,"large":false}).close().innerToCAG()
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
))).extrude({ offset: [0, 0, 1.3] });
}


function _walls_extrude_1_3_outline_fn(){
    return new CSG.Path2D([[94.2703009,-199.74],[30.7053368,-199.74]]).appendArc([21.2053475,-190.2543319],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([21.0696834,-95.6286201]).appendArc([30.5696736,-86.115],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-86.115]).appendArc([153.8830417,-95.6234598],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([153.8029639,-185.5467069]).appendPoint([166.8835062,-190.307635]).appendArc([169.5736266,-196.0755588],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([163.0584486,-213.9758626]).appendArc([157.2904353,-216.6662293],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([139.5739175,-210.217944]).appendPoint([112.4004407,-202.9368327]).appendPoint([94.2703009,-199.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[94.4452782,-197.74],[30.7053367,-197.74]]).appendArc([23.2053451,-190.2512331],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([23.0696813,-95.6257527]).appendArc([30.5696736,-88.115],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-88.115]).appendArc([151.8830425,-95.6216788],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([151.8017165,-186.9466679]).appendPoint([166.2000602,-192.1872366]).appendArc([167.6942413,-195.3915185],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([161.1787575,-213.2926628]).appendArc([157.9744756,-214.786844],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([140.1759018,-208.3086928]).appendPoint([112.8337333,-200.9823807]).appendPoint([94.4452782,-197.74]).close().innerToCAG()
).union(
    new CSG.Path2D([[293.7296988,-199.74],[357.2946633,-199.74]]).appendArc([366.7946525,-190.2543319],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([366.9303166,-95.6286201]).appendArc([357.4303264,-86.115],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-86.115]).appendArc([234.1169583,-95.6234597],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([234.1970361,-185.546707]).appendPoint([221.1158996,-190.3078512]).appendArc([218.4263734,-196.0755588],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([224.9415514,-213.9758626]).appendArc([230.7095647,-216.6662293],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([248.4260833,-210.2179437]).appendPoint([275.5995585,-202.936833]).appendPoint([293.7296988,-199.74]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[293.5547215,-197.74],[357.2946633,-197.74]]).appendArc([364.7946549,-190.2512331],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([364.9303187,-95.6257527]).appendArc([357.4303264,-88.115],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-88.115]).appendArc([236.1169575,-95.6216787],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([236.1982835,-186.946668]).appendPoint([221.7999399,-192.1872365]).appendArc([220.3057587,-195.3915185],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([226.8212425,-213.2926628]).appendArc([230.0255244,-214.786844],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([247.8240992,-208.3086925]).appendPoint([275.1662667,-200.9823808]).appendPoint([293.5547215,-197.74]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.3] });
}


function _topOfCase_extrude_4_4_outline_fn(){
    return new CSG.Path2D([[294.2591451,-197.74],[357.2946633,-197.74]]).appendArc([364.7946549,-190.2512331],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([364.9303187,-95.6257527]).appendArc([357.4303264,-88.115],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-88.115]).appendArc([236.1169575,-95.6216787],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([236.1982835,-186.946668]).appendPoint([221.7999399,-192.1872365]).appendArc([220.1860925,-194.929589],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([231.4431029,-190.8323722]).appendArc([231.9355067,-190.9191962],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([239.9858415,-187.989114]).appendArc([240.0290683,-187.9748507],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([244.2249665,-186.7302123]).appendArc([244.2441405,-186.7248007],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([262.2848039,-181.8908196]).appendArc([262.25,-181.665],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([262.25,-178.2771068]).appendArc([262,-178.32],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([244,-178.32]).appendArc([243.25,-177.57],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([243.25,-159.57]).appendArc([243.440983,-159.07],{"radius":0.75,"clockwise":true,"large":false}).appendArc([243.25,-158.57],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([243.25,-140.57]).appendArc([243.440983,-140.07],{"radius":0.75,"clockwise":true,"large":false}).appendArc([243.25,-139.57],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([243.25,-121.57]).appendArc([243.440983,-121.07],{"radius":0.75,"clockwise":true,"large":false}).appendArc([243.25,-120.57],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([243.25,-102.57]).appendArc([244,-101.82],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([262,-101.82]).appendArc([262.25,-101.8628932],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([262.25,-100.665]).appendArc([263,-99.915],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([281,-99.915]).appendArc([281.25,-99.9578932],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([281.25,-96.855]).appendArc([282,-96.105],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([300,-96.105]).appendArc([300.75,-96.855],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([300.75,-99.9578932]).appendArc([301,-99.915],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([319,-99.915]).appendArc([319.75,-100.665],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([319.75,-101.8628932]).appendArc([320,-101.82],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([338,-101.82]).appendArc([338.75,-102.57],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([338.75,-113.2928932]).appendArc([339,-113.25],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([357,-113.25]).appendArc([357.75,-114],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([357.75,-132]).appendArc([357.559017,-132.5],{"radius":0.75,"clockwise":true,"large":false}).appendArc([357.75,-133],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([357.75,-151]).appendArc([357.559017,-151.5],{"radius":0.75,"clockwise":true,"large":false}).appendArc([357.75,-152],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([357.75,-170]).appendArc([357.559017,-170.5],{"radius":0.75,"clockwise":true,"large":false}).appendArc([357.75,-171],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([357.75,-189]).appendArc([357,-189.75],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([339,-189.75]).appendArc([338.25,-189],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([338.25,-178.2771068]).appendArc([338,-178.32],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([320,-178.32]).appendArc([319.25,-177.57],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([319.25,-176.3721068]).appendArc([319,-176.415],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([301,-176.415]).appendArc([300.25,-175.665],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([300.25,-172.5621068]).appendArc([300,-172.605],{"radius":0.75,"clockwise":true,"large":false}).appendPoint([290.7650634,-172.605]).appendArc([289.7802556,-173.7786482],{"radius":1,"clockwise":false,"large":false}).appendPoint([291.828391,-185.394201]).appendArc([292.1497848,-185.7772232],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([294.2591451,-197.74]).close().innerToCAG()
.union(
    new CSG.Path2D([[93.7408549,-197.74],[30.7053367,-197.74]]).appendArc([23.2053451,-190.2512331],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([23.0696813,-95.6257527]).appendArc([30.5696736,-88.115],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-88.115]).appendArc([151.8830425,-95.6216788],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([151.8017165,-186.9466679]).appendPoint([166.2000602,-192.1872366]).appendArc([167.8139075,-194.929589],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([156.5568971,-190.8323722]).appendArc([156.0644933,-190.9191962],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([148.0141585,-187.989114]).appendArc([147.9709317,-187.9748507],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([143.7750335,-186.7302123]).appendArc([143.7558595,-186.7248007],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([125.7151961,-181.8908196]).appendArc([125.75,-181.665],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([125.75,-178.2771068]).appendArc([126,-178.32],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([144,-178.32]).appendArc([144.75,-177.57],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([144.75,-159.57]).appendArc([144.559017,-159.07],{"radius":0.75,"clockwise":false,"large":false}).appendArc([144.75,-158.57],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([144.75,-140.57]).appendArc([144.559017,-140.07],{"radius":0.75,"clockwise":false,"large":false}).appendArc([144.75,-139.57],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([144.75,-121.57]).appendArc([144.559017,-121.07],{"radius":0.75,"clockwise":false,"large":false}).appendArc([144.75,-120.57],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([144.75,-102.57]).appendArc([144,-101.82],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([126,-101.82]).appendArc([125.75,-101.8628932],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([125.75,-100.665]).appendArc([125,-99.915],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([107,-99.915]).appendArc([106.75,-99.9578932],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([106.75,-96.855]).appendArc([106,-96.105],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([88,-96.105]).appendArc([87.25,-96.855],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([87.25,-99.9578932]).appendArc([87,-99.915],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([69,-99.915]).appendArc([68.25,-100.665],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([68.25,-101.8628932]).appendArc([68,-101.82],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([50,-101.82]).appendArc([49.25,-102.57],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([49.25,-113.2928932]).appendArc([49,-113.25],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([31,-113.25]).appendArc([30.25,-114],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([30.25,-132]).appendArc([30.440983,-132.5],{"radius":0.75,"clockwise":false,"large":false}).appendArc([30.25,-133],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([30.25,-151]).appendArc([30.440983,-151.5],{"radius":0.75,"clockwise":false,"large":false}).appendArc([30.25,-152],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([30.25,-170]).appendArc([30.440983,-170.5],{"radius":0.75,"clockwise":false,"large":false}).appendArc([30.25,-171],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([30.25,-189]).appendArc([31,-189.75],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([49,-189.75]).appendArc([49.75,-189],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([49.75,-178.2771068]).appendArc([50,-178.32],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([68,-178.32]).appendArc([68.75,-177.57],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([68.75,-176.3721068]).appendArc([69,-176.415],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([87,-176.415]).appendArc([87.75,-175.665],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([87.75,-172.5621068]).appendArc([88,-172.605],{"radius":0.75,"clockwise":false,"large":false}).appendPoint([97.2349366,-172.605]).appendArc([98.2197444,-173.7786482],{"radius":1,"clockwise":true,"large":false}).appendPoint([96.171609,-185.394201]).appendArc([95.8502152,-185.7772232],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([93.7408549,-197.74]).close().innerToCAG()
).extrude({ offset: [0, 0, 4.4] });
}


function _wallsTop_extrude_4_4_outline_fn(){
    return new CSG.Path2D([[93.3882009,-199.74],[30.7053368,-199.74]]).appendArc([21.2053475,-190.2543319],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([21.0696834,-95.6286201]).appendArc([30.5696736,-86.115],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([144.3830455,-86.115]).appendArc([153.8830417,-95.6234598],{"radius":9.5,"clockwise":true,"large":false}).appendPoint([153.8029639,-185.5467069]).appendPoint([166.8835062,-190.307635]).appendArc([169.7124626,-195.6206065],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([167.8139075,-194.929589]).appendArc([166.2000602,-192.1872365],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([151.8017165,-186.9466679]).appendPoint([151.8830425,-95.6216788]).appendArc([144.3830455,-88.115],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([30.5696736,-88.115]).appendArc([23.0696803,-95.6250322],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([23.2053443,-190.2507527]).appendArc([30.7053367,-197.74],{"radius":7.5,"clockwise":false,"large":false}).appendPoint([93.7408549,-197.74]).appendPoint([93.3882009,-199.74]).close().innerToCAG()
.union(
    new CSG.Path2D([[294.6117991,-199.74],[357.2946633,-199.74]]).appendArc([366.7946525,-190.2543319],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([366.9303166,-95.6286201]).appendArc([357.4303264,-86.115],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([243.6169546,-86.115]).appendArc([234.1169583,-95.6234597],{"radius":9.5,"clockwise":false,"large":false}).appendPoint([234.1970361,-185.546707]).appendPoint([221.1158996,-190.3078512]).appendArc([218.2875374,-195.6206065],{"radius":4.5,"clockwise":false,"large":false}).appendPoint([220.1860925,-194.929589]).appendArc([221.7999398,-192.1872366],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([236.1982835,-186.946668]).appendPoint([236.1169575,-95.6216788]).appendArc([243.6169545,-88.115],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([357.4303264,-88.115]).appendArc([364.9303197,-95.6250322],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([364.7946557,-190.2507527]).appendArc([357.2946633,-197.74],{"radius":7.5,"clockwise":true,"large":false}).appendPoint([294.2591451,-197.74]).appendPoint([294.6117991,-199.74]).close().innerToCAG()
).extrude({ offset: [0, 0, 4.4] });
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
                let top__part_1 = _walls_extrude_1_3_outline_fn();

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
                let top__part_2 = _topOfCase_extrude_4_4_outline_fn();

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
                let top__part_3 = _wallsTop_extrude_4_4_outline_fn();

                // make sure that rotations are relative
                let top__part_3_bounds = top__part_3.getBounds();
                let top__part_3_x = top__part_3_bounds[0].x + (top__part_3_bounds[1].x - top__part_3_bounds[0].x) / 2
                let top__part_3_y = top__part_3_bounds[0].y + (top__part_3_bounds[1].y - top__part_3_bounds[0].y) / 2
                top__part_3 = translate([-top__part_3_x, -top__part_3_y, 0], top__part_3);
                top__part_3 = rotate([0,0,0], top__part_3);
                top__part_3 = translate([top__part_3_x, top__part_3_y, 0], top__part_3);

                top__part_3 = translate([0,0,0], top__part_3);
                result = result.union(top__part_3);
                
            

                // creating part 4 of case top
                let top__part_4 = _screwHoles_extrude_50_outline_fn();

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
            
            
        
            function main() {
                return top_case_fn();
            }

        