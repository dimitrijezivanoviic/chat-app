import React from "react";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
          alt="logo"
          height={200}
          style={{ marginBottom: 10 }}
        />
      </div>
    </center>
  );
}

export default Loading;
