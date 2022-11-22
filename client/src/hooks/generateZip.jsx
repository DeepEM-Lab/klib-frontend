import JSZip from  'jszip';
import axios from "axios"
import { saveAs } from 'file-saver';


const generateZip =  async (/**@type Map<number, boolean>*/ m) => {
    let fileNames = ["BaMnO3.csv", "CaMnO3.csv", "Cubic-SrMnO3.csv", "Hex-SMO.csv", "Hex-YMnO3.csv", "LaMnO3.csv"]
    var zip = new JSZip();
    for(let i = 0; i < fileNames.length; i++){
        if (m.get(i) === true){
            let res = await axios.get(`${process.env.PUBLIC_URL}/data/${fileNames[i]}`)
            zip.file(fileNames[i], res.data);
        }
    }
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "data.zip");
    });
}
    

export default generateZip