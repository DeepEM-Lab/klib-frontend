const csvToJson = (/** @type string*/name, /** @type string*/ csv) => {
    let lines = csv.split('\n')
    let data = []
    for (let i = 0; i < lines.length; i++) {
        if (lines[i]) {
            /**@type{{x: number, y: number, name: string}} */
            let lineObj = {}
            let line = lines[i].split(',')
            lineObj['x'] = Number(line[0])
            lineObj['y'] = Number(line[1])
            lineObj['name'] = name
            data.push(lineObj)
        }
    }
    return data
}


const txtToJson = (/** @type string*/name, /** @type string*/ csv) => {
    
};


export default csvToJson