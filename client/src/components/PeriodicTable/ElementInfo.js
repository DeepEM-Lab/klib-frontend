

export const ElementTypes = {
    metal: "metal",
    metalloid: "metalloid",
    nonmetal: "nonmetal"
}

// Source from https://www.angelo.edu/faculty/kboudrea/periodic/structure_numbers.htm
export const ElementInfo = {
    hydrogen: {
        atomicNumber: 1,
        atomicMass: 1.008,
        elementName: "Hydrogen",
        elementSymbol: "H",
        elementType: ElementTypes.nonmetal
    },
    helium: {
        atomicNumber: 2,
        atomicMass: 4.0026,
        elementName: "Helium",
        elementSymbol: "He",
        elementType: ElementTypes.nonmetal
    },
    lithium: {
        atomicNumber: 3,
        atomicMass: 6.94,
        elementName: "Lithium",
        elementSymbol: "Li",
        elementType: ElementTypes.metal
    },
    //TODO: fill in all element infos.
}

//TODO arrange elements based on periodic table
export const allElements = [
    ElementInfo.hydrogen, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, ElementInfo.helium,//Row 1
    ElementInfo.lithium, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, //Row 2
    null, //Row 3
    null, //Row 4
    null, //Row 5
    null, //Row 6
    null, //Row 7
    null, //Row 8
    null  //Row 9
]