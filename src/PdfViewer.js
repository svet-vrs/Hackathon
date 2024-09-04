//#PdfViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="pdf-viewer">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]}/>
      </Worker>
    </div>
  );
};

export default PdfViewer;
