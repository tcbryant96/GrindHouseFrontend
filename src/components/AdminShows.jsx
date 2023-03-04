import React from "react";
import AdminNav from "./AdminNav";

export default function AdminShows() {
  return (
    <>
      <div className="row">
        <div className="col">
          <AdminNav />
        </div>
        <div className="col-10">
            <div className="row">
        <h1 className="text-center" style={{textDecoration:"underline"}}>Manage Shows</h1>
</div>
<div className="row d-flex justify-content-center p-5">

        <button className="w-50">+Add Show</button>
</div>
        </div>
      </div>
    </>
  );
}
