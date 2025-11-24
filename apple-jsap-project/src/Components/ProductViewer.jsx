import React from "react";

export default function ProductViewer() {
  return (
    <section id="product-viewer">
      <h2>Tacke a closer look</h2>

      <div className="controls">
        <p className="info">MacBook Pro 16" in Space Black</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div className="bg-neutral-300" />
            <div className="bg-neutral-900" />
          </div>
          <div className="size-control">
            <div>
              <p>14"</p>
            </div>
            <div>
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <p>Render Canvas</p>
    </section>
  );
}
