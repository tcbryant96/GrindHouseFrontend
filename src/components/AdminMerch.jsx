import React from "react";
import AdminNav from "./AdminNav";

export default function AdminMerch() {
  return (
    <>
      <div className="row">
        <div className="col">
          <AdminNav />
        </div>
        <div className="col-10">
          <div className="row">
            <h1 className="text-center" style={{ textDecoration: "underline" }}>
              Manage Shows
            </h1>
          </div>
          <div className="row d-flex justify-content-center p-5">
      <form
        action="http://localhost:5000/api/upload"
        enctype="multipart/form-data"
        method="POST"
      >
        <input type="file" name="pic" />
        <input type="submit" value="Upload a file" />
      </form>
           
          </div>
        </div>
      </div>

    </>
  );
}
