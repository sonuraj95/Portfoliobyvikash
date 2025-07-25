// PDFViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './Resume.css';

const PDFViewer = () => {
  const layoutPlugin = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      defaultTabs[0], // Thumbnails tab
      defaultTabs[1], // Outline tab
    ],
  });

  return (
    <div className="pdf-viewer-wrapper">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer 
          fileUrl="/resume.pdf"
          plugins={[layoutPlugin]}
          theme="dark"
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;