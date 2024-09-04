import { PDFDocument } from 'pdf-lib';

export const insertCustomerDataIntoPdf = async (setPdfUrl, setShowPdf) => {
  const url = '/pflege-antrag-leistungen.pdf'; // Ensure the PDF is in the public folder
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  // Load the existing PDF but do not modify it
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
  // Save the unmodified PDF and display it
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const pdfUrl = URL.createObjectURL(blob);
  
  setPdfUrl(pdfUrl); // Store the unmodified PDF URL for viewing
  setShowPdf(true);  // Show the unmodified PDF in the viewer
};
