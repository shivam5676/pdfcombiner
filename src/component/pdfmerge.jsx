import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import classes from "./pdfmerge.module.css";

function PdfMerge() {
  const [mergedPdf, setMergedPdf] = useState(null);

  const handleMerge = async (files) => {
    const mergedDoc = await PDFDocument.create();

    for (const file of files) {
      const pdfBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedDoc.copyPages(
        pdfDoc,
        pdfDoc.getPageIndices()
      );

      copiedPages.forEach((page) => {
        mergedDoc.addPage(page);
      });
    }

    const mergedPdfBytes = await mergedDoc.save();
    setMergedPdf(new Blob([mergedPdfBytes], { type: "application/pdf" }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    handleMerge(files);
  };

  return (
    <div className={classes.pdf_image}>
      {!mergedPdf && <input type="file" multiple onChange={handleFileUpload} />}
      {mergedPdf && (
        <div className={classes.pdfmerge_container}>
          <embed
            src={URL.createObjectURL(mergedPdf)}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ margin: 0 }}
          />
        </div>
      )}
    </div>
  );
}

export default PdfMerge;
