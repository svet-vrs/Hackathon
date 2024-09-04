// PDFViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer = ({ showPdf }) => {
  return (
    <div className="pdf-viewer">
      {showPdf && (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/pflege-antrag-leistungen.pdf" />
        </Worker>
      )}
    </div>
  );
};

export default PDFViewer;
