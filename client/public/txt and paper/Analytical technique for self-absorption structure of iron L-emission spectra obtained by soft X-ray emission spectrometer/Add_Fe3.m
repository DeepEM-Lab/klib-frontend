close all;
filename = 'Beta-Fe2O3';
data = readmatrix(filename);
i = length(Fe3_data)+1;
name = split(currentdirectory,'\');
name = name{length(name)};
for j = 1:length(Fe_data)
    if length(Fe_data(j).Name) == length(name)
        break;
    end
end
xa = data(:,1);
ya = data(:,2);
Fe3_data(i).x = xa;
Fe3_data(i).y = ya-min(ya);
plot(xa,Fe3_data(i).y);
Fe3_data(i).tech = 'X-Ray';
Fe3_data(i).group = 'X-Ray-5';
currentdirectory = pwd;

Fe3_data(i).filename = filename; 
Fe3_data(i).paper = name;