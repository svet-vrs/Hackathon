//pdfUtils.js
import { PDFDocument, rgb } from 'pdf-lib';

export const insertCustomerDataIntoPdf = async (setPdfUrl, setShowPdf) => {
  const customerData = {
    name: 'Max Mustermann',
    geburtsdatum: '01.01.1958',
    plz: '10115',
    ort: 'Berlin',
    strasse: 'Musterstraße 123',
    telefon: '030 123456',
    versichertennr: 'AOK123456789',
  };

  const url = '/pflege-antrag-leistungen.pdf'; // Ensure the PDF is in the public folder
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  const fontSize = 10;
  firstPage.drawText(customerData.name, { x: 100, y: 600, size: fontSize, color: rgb(0, 0, 0) });
  firstPage.drawText(customerData.geburtsdatum, { x: 100, y: 580, size: fontSize, color: rgb(0, 0, 0) });
  firstPage.drawText(customerData.plz, { x: 100, y: 560, size: fontSize, color: rgb(0, 0, 0) });
  firstPage.drawText(customerData.ort, { x: 100, y: 540, size: fontSize, color: rgb(0, 0, 0) });
  firstPage.drawText(customerData.strasse, { x: 100, y: 520, size: fontSize, color: rgb(0, 0, 0) });
  firstPage.drawText(customerData.telefon, { x: 100, y: 500, size: fontSize, color: rgb(0, 0, 0) });
  firstPage.drawText(customerData.versichertennr, { x: 100, y: 480, size: fontSize, color: rgb(0, 0, 0) });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const pdfUrl = URL.createObjectURL(blob);
  setPdfUrl(pdfUrl); // Store the modified PDF URL for viewing
  setShowPdf(true); // Show the modified PDF in the viewer
};
