i = 16;
close all
try
    data_Fe2 = readmatrix('11.txt');
    
    x1 = data_Fe2(:,1);
    y1 = data_Fe2(:,2);
    [x1,y1] = unique_func(x1,y1);
    x11 = floor(x1(1)):0.02:ceil(x1(end));
    y11 = interp1(x1,y1,x11,'linear','extrap');
    x12 = x11(x11 <= 709 & x11 >= 707);
    y12 = y11(x11 <= 709 & x11 >= 707);
    figure;
    hold on;
    plot(x11,y11)
    p = polyfit(x12,y12,3);
    plot(x12,polyval(p,x12));
    y13 = polyval(p,x12);
    standard_Fe2 = x12(y13 == max(y13));
catch
    data_Fe2 = nan;
    x11 = nan;
    y11 = nan;
    standard_Fe2 = nan;
end

try
    data_Fe3 = readmatrix('LaFeO3.txt');
    x2 = data_Fe3(:,1);
    y2 = data_Fe3(:,2);
    [x2,y2] = unique_func(x2,y2);
    x21 = floor(x2(1)):0.02:ceil(x2(end));
    y21 = interp1(x2,y2,x21,'linear','extrap');
    figure;
    hold on;
    plot(x21,y21);
    x22 = x21(x21 <= 710.3 & x21 >= 709.9);
    y22 = y21(x21 <= 710.3 & x21 >= 709.9);
    p = polyfit(x22,y22,3);
    plot(x22,polyval(p,x22));
    y23 = polyval(p,x22);
    standard_Fe3 = x22(y23 == max(y23));
catch
    data_Fe3 = nan;
    x21 = nan;
    y21 = nan;
    standard_Fe3 = nan;
end

try
    data_Fe0 = readmatrix('Fe.txt');
    x3 = data_Fe0(:,1);
    y3 = data_Fe0(:,2);
    x31 = floor(x3(1)):0.02:ceil(x3(end));
    y31 = interp1(x3,y3,x31,'linear','extrap');
    figure;
    hold on;
    plot(x31,y31);
    x32 = x31(x31 <= 709 & x31 >= 707);
    y32 = y31(x31 <= 709 & x31 >= 707);
    p = polyfit(x32,y32,3);
    plot(x32,polyval(p,x32));
    y33 = polyval(p,x32);
    standard_Fe0 = x32(y33 == max(y33));
catch
    data_Fe0 = nan;
    x31 = nan;
    y31 = nan;
    standard_Fe0 = nan;
end



Fe_data(i).Fe2_x = x11;
Fe_data(i).Fe2_y = y11;
Fe_data(i).Fe3_x = x21;
Fe_data(i).Fe3_y = y21;
Fe_data(i).Fe0_x = x31;
Fe_data(i).Fe0_y = y31;
Fe_data(i).x0 = standard_Fe0;
Fe_data(i).x2 = standard_Fe2;
Fe_data(i).x3 = standard_Fe3;
Fe_data(i).DeltaE_2 = standard_Fe3-standard_Fe2;
Fe_data(i).DeltaE_0 = standard_Fe3-standard_Fe0;
currentdirectory = pwd;
name = split(currentdirectory,'\');
name = name{length(name)};
Fe_data(i).Name = name;