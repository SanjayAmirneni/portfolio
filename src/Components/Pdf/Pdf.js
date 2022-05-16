import ResumePdf from "../../../src/resume.pdf"
import {Document,Page,pdfjs} from 'react-pdf'
import "./Pdf.css"


function PDF(){
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

 

    return(
        <div className="resume__pdf">
            <Document className = "pdf" file={ResumePdf}>
            <Page pageNumber={1}   />
            </Document>
            </div>
    )
}

export default PDF;