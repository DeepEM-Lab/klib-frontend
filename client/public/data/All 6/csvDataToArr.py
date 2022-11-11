import re

#scipt to convert csv data to data arrays
with open("./LaMnO3.csv") as f:
    a = []
    for line in f:
        str1 = re.split("[,\n]", line)
        a.append({'x': float(str1[0]), 'y': float(str1[1])})

    print(a, len(a))
