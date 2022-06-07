import { useState } from "react";
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.webpack";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./carta.css";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

const Carta = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <header>
        <h1>Carta</h1>
      </header>
      <div className="Example__container">
        <div className="Example__container__document">
          <Document
            file={"./carta.pdf"}
            onLoadError={(error) => console.log(error)}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Carta;
