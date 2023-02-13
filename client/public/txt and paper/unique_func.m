function [a,yedge1] = unique_func(xedge,yedge)
yedge1 = [];
a = unique(xedge);
for i = 1:length(unique(xedge))
    b = find(xedge == a(i));
    yedge1(i) = yedge(b(1));
end
end