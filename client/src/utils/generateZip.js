import JSZip from  'jszip';
import axios from "axios"
import { saveAs } from 'file-saver';


const generateZip = async (/**@type string[]*/ fileNames) => {
    var zip = new JSZip();
    for(let i = 0; i < fileNames.length; i++){
        let res = await axios.get(`${process.env.PUBLIC_URL}/data/${fileNames[i]}`)
        zip.file(fileNames[i], res.data);
    }
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "data.zip");
    });
    
}
    

export default generateZip