import React from "react";

export default function LoadingOverlay() {

  return (
    <div>
      {" "}
      <div
        className=" position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-95"
        style={{ zIndex: 1050 }}
      >
        <div className="text-center">
          <div
            className="spinner-border text-light mb-3"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="text-light">Loading...</h5>
        </div>
      </div>
    </div>
  );
}
