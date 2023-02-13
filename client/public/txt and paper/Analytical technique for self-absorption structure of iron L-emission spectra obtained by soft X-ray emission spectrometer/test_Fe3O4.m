close all;
data = readmatrix('Fe3O4.txt');
x1 = data(:,1);
y1 = data(:,2);
y1 = interp1(x1,y1,701:0.02:730,'linear','extrap');
x1 = 701:0.02:730;
figure;
plot(x1,y1);
title('Fe^2^.^6^7^+');

x2 = Fe2_normalize(2).x;
y2 = Fe2_normalize(2).y;

x3 = Fe3_normalize(4).x;
y3 = Fe3_normalize(4).y;
figure;
plot(x2,y2,x3,y3)
sse = zeros(1,100);
for i = 1:100
    w = i/100;
    %add 2+ and 3+ up
    x = intersect(x2,x3);
    c2 = ismember(x2,x);
    c3 = ismember(x3,x);
    y = w * y2(c2) + (1-w)* y3(c3);
    a = (y - y1);
    a = a.^2;
    sse(i) = sum(a);
end

w = find(a == min(a))/100;
x = intersect(x2,x3);
c2 = ismember(x2,x);
c3 = ismember(x3,x);
y = w * y2(c2) + (1-w)* y3(c3);
figure;
plot(x,y)



