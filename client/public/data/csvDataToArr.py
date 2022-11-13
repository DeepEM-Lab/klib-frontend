import re

#scipt to transfer csv data to x-axis and y-axis arrays
with open("./LaMnO3.csv") as f:
    a = []
    b = []
    for line in f:
        str1 = re.split("[,\n]", line)
        a.append(float(str1[0]))
        b.append(float(str1[1]))

    print(a, len(a))
    print(b, len(b))
