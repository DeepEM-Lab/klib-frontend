close all;
filename = 'FeO.txt';
data = readmatrix(filename);
i = length(Fe2_data)+1;
[xa,ya] = align_spec(709.12,data);
Fe2_data(i).x = xa;
Fe2_data(i).y = ya-min(ya);
plot(Fe2_data(i).x,Fe2_data(i).y);
Fe2_data(i).tech = 'X-ray';
Fe2_data(i).group = 'X-ray-4';
currentdirectory = pwd;

name = split(currentdirectory,'\');
name = name{length(name)};
Fe2_data(i).filename = filename;
Fe2_data(i).paper = name;