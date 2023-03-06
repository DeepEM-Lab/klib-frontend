close all
data_Fe2 = readmatrix('FeTiO3.txt');
data_Fe3 = readmatrix('Fe2O3.txt');
data_Fe0 = readmatrix('Fe.txt');

x1 = data_Fe2(:,1);
y1 = data_Fe2(:,2);
x11 = floor(x1(1)):0.02:ceil(x1(end));
y11 = interp1(x1,y1,x11,'linear','extrap');
x12 = x11(x11 <= 710 & x11 >= 708);
y12 = y11(x11 <= 710 & x11 >= 708);
figure;
hold on;
plot(x11,y11)
p = polyfit(x12,y12,3);
plot(x12,polyval(p,x12));
y13 = polyval(p,x12);
standard_Fe2 = x12(y13 == max(y13));

x2 = data_Fe3(:,1);
y2 = data_Fe3(:,2);
x21 = floor(x2(1)):0.02:ceil(x2(end));
y21 = interp1(x2,y2,x21,'linear','extrap');
figure;
hold on;
plot(x21,y21);
x22 = x21(x21 <= 711 & x21 >= 709);
y22 = y21(x21 <= 711 & x21 >= 709);
p = polyfit(x22,y22,3);
plot(x22,polyval(p,x22));
y23 = polyval(p,x22);
standard_Fe3 = x22(y23 == max(y23));

x3 = data_Fe0(:,1);
y3 = data_Fe0(:,2);
x31 = floor(x3(1)):0.02:ceil(x3(end));
y31 = interp1(x3,y3,x31,'linear','extrap');
figure;
hold on;
plot(x31,y31);
x32 = x31(x31 <= 710 & x31 >= 708);
y32 = y31(x31 <= 710 & x31 >= 708);
p = polyfit(x32,y32,3);
plot(x32,polyval(p,x32));
y33 = polyval(p,x32);
standard_Fe0 = x32(y33 == max(y33));


Fe_data(1).Fe2_x = x11;
Fe_data(1).Fe2_y = y11;
Fe_data(1).Fe3_x = x21;
Fe_data(1).Fe3_y = y21;
Fe_data(1).Fe0_x = x31;
Fe_data(1).Fe0_y = y31;
Fe_data(1).x0 = standard_Fe0;
Fe_data(1).x2 = standard_Fe2;
Fe_data(1).x3 = standard_Fe3;
Fe_data(1).DeltaE_2 = standard_Fe3-standard_Fe2;
Fe_data(1).DeltaE_0 = standard_Fe3-standard_Fe0;
Fe_data(1).Name = 'Standard';
