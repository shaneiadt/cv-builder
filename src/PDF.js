import React from 'react';
// import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Resume } from './Resume';

export const PDF = () => (
    <>
        {/* <PDFViewer width="1000" height="1000">
            <Quixote />
        </PDFViewer>
        <br/> */}
        <div style={{ textAlign: 'center' }}>
            <PDFDownloadLink document={<Resume />} fileName={"Resume"}>
                <button style={{ width: '200px', padding: '10px' }}>Download PDF</button>
            </PDFDownloadLink>
        </div>
    </>
);