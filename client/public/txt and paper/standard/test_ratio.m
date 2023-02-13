close all;
data = readmatrix('YBaFe4O7.txt');
x1 = data(:,1);
y1 = data(:,2);

x2 = Fe2_normalize(1).x;
y2 = Fe2_normalize(1).y;

x3 = Fe3_normalize(1).x;
y3 = Fe3_normalize(1).y;

x = intersect(x2,x3);
y1 = interp1(x1,y1,x,'linear','extrap');
x1 = x;
y1 = y1 - min(y1);

x_1 = [x1;y1];
x_2 = [x2;y2];
x_3 = [x3;y3];

writematrix(x_1','YBaFe4O7_2.25.txt');
writematrix(x_2','Fe2+.txt');
writematrix(x_3','Fe3+.txt');




