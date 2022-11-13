const csvToJson = (/** @type string*/ csv) => {
    let lines = csv.split('\n')
    let data = []
    for (let i = 0; i < lines.length; i++) {
        if (lines[i]) {
            /**@type{{x: number, y: number}} */
            let lineObj = {}
            let line = lines[i].split(',')
            lineObj['x'] = Number(line[0])
            lineObj['y'] = Number(line[1])
            data.push(lineObj)
        }
    }
    return data
}

export default csvToJson