import { useState } from "react";
import PdfContext from "./pdfContext";

const PdfContextProvider = (props) => {
    const [allPdfFiles,setPdfFiles]=useState([])
  const addPdfFileHandler = (pdfFile) => {
    console.log("adding started",pdfFile);
    setPdfFiles((prev) => [...prev, pdfFile])

  };
  const removePdfFileHandler = (index) => {
    console.log("removing started",index);
    const allPdfAfterRemoving=[...allPdfFiles]
    allPdfAfterRemoving.splice(index,1)
    // console.log(allPdfAfterRemoving)
    setPdfFiles(allPdfAfterRemoving)
  };
  const pdfContextvalue = {
    addPdf: addPdfFileHandler,
    removePdf: removePdfFileHandler,
    allPdf:allPdfFiles
  };
  return <PdfContext.Provider value={pdfContextvalue}>{props.children}</PdfContext.Provider>;
};
export default PdfContextProvider