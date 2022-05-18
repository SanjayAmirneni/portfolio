import ResumePdf from "../../../src/resume.pdf"
import {Document,Page,pdfjs} from 'react-pdf'
// import {View, StyleSheet} from 're'
import "./Pdf.css"


function PDF(){
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



    // const styles = StyleSheet.create({
    //     section: {
    //       width: 200,
    //       '@media max-width: 500': {
    //         width: 350,
    //       },
    //     }
    //   });

 

    return(
        <div className="resume__pdf">
            <Document className = "pdf" file={ResumePdf}>
            <Page  pageNumber={1}   />
            </Document>
            </div>
    )
}

export default PDF;