let pdfData = document.querySelector("#viewer"),
  getData = pdfData.dataset.pdf;

PDFObject.embed(getData, pdfData);
