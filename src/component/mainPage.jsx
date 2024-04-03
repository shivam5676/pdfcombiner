import React, { useContext, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
import PdfContext from "../store/pdfContext";
// import PdfMerge from './pdfmerge';

const MainPage = () => {
  const ctx = useContext(PdfContext);

  const selectedFile = ctx.allPdf;

  const handleFileChange = (event) => {
    ctx.addPdf(event.target.files[0]);
  };
  const combinePdfHandler=()=>{
    
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",

        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "fixed",
          backgroundColor: "white",
          width: "100vw",
          padding: "20px",
          justifyContent: "center",
          backgroundColor: "goldenrod",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <h1>PDF Combiner</h1>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "80px",
          minHeight: "80vh",
          position: "relative",
        }}
      >
        {selectedFile.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                border: "2px solid black",

                width: "30vw",
                height: "68vh",
                margin: "5px",
                overflowY: "scroll",
                overflowX: "hidden",
                position: "relative",
              }}
            >
              {selectedFile.map((current) => {
                return (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        minHeight: "60px",
                        backgroundColor: "white",
                        margin: "5px",
                        border: "2px solid black",

                        width: "100%",

                        display: "flex",
                        alignItems: "center",
                        padding: "5px",

                        backgroundColor: "lightseagreen",
                        borderRadius: "10px",
                      }}
                    >
                      <FaFilePdf
                        style={{
                          height: "35px",
                          width: "35px",
                          color: "goldenrod",
                        }}
                      ></FaFilePdf>
                      <p
                        style={{
                          display: "flex",
                          margin: "0px 10px",
                          wordWrap: "break-word",
                          textWrap: "wrap",
                          fontWeight: "bolder",
                          width: "150px",
                          overflow: "hidden",
                          flexWrap: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {current.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: "8px",
              }}
            >
              <button
                style={{
                  height: "40px",

                  backgroundColor: "goldenrod",
                  color: "white",
                  fontWeight: "bolder",
                  padding: "0px 10px",
                }}
                onClick={combinePdfHandler}
              >
                combine pdf
              </button>
            </div>
          </div>
        )}

        <div
          style={{
            border: "1px solid grey",
            width: "100%",
            margin: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <label
            htmlFor="fileUpload"
            style={{
              border: "2px dashed goldenrod",
              width: "50%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <MdAdsClick
                style={{ width: "50px", height: "50px", color: "goldenrod" }}
              ></MdAdsClick>
            </div>
            <div style={{ fontWeight: "bolder", marginTop: "10px" }}>
              Click here to upload PDF
            </div>
          </label>
          <input
            id="fileUpload"
            type="file"
            accept=".pdf"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
