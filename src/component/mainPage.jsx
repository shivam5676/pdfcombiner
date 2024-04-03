import React from "react";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "purple",
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
        }}
      >
        hello
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "80px",
          height: "80vh",
          position: "relative",
        }}
      >
        <div
          style={{
            border: "3px solid black",
            width: "300px",
            margin: "5px",
            overflowY: "scroll",
            position: "relative", // Set position to relative
          }}
        >
          <div
            style={{ height: "100px", backgroundColor: "white", margin: "5px" }}
          >
            112
          </div>
          <div
            style={{ height: "100px", backgroundColor: "white", margin: "5px" }}
          >
            112
          </div>{" "}
          <div
            style={{ height: "100px", backgroundColor: "white", margin: "5px" }}
          >
            112
          </div>
          <div
            style={{ position: "absolute", bottom: 0, marginBottom: "10px" }}
          >
            44
          </div>
        </div>
        <div
          style={{ border: "3px solid black", width: "100%", margin: "5px" }}
        ></div>
      </div>
    </div>
  );
};

export default MainPage;

// export default MainPage;
