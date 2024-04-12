import React from 'react';
import resume from "../static/Asad's Resume  .pdf"
const PDFDownloadButton = () => {

    const downloadPDF = () => {
        // Replace 'path_to_your_pdf_file.pdf' with the path to your PDF file
        const pdfUrl = resume;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume_Asad.pdf'; // Optional: set the file name for the downloaded PDF
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className='nav-link resume' onClick={downloadPDF}>Resume</button>
    );
};

export default PDFDownloadButton;
