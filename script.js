// Function to download the content as PDF
function downloadPDF() {
    const element = document.querySelector(".stuff"); // Target the content area

    // Configure html2pdf options
    const options = {
        margin: [
            10, 10, 10, 10,
        ] /* Set uniform margins [top, left, bottom, right] */,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
            scale: 2,
            logging: true,
            dpi: 192,
            letterRendering: true,
            useCORS: true,
        } /* Added useCORS */,
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate and download the PDF
    html2pdf().from(element).set(options).save();
}

// Attach the download function to the button
document
    .getElementById("download-pdf-button")
    .addEventListener("click", downloadPDF);
