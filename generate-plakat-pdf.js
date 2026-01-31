const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePlakatPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const htmlPath = path.join(__dirname, 'brugsen-plakat.html');
    const fileUrl = `file://${htmlPath}`;
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    const pdfPath = path.join(__dirname, 'Villa-Kroloekke-Plakat.pdf');
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '1.5cm',
            right: '1.5cm',
            bottom: '1.5cm',
            left: '1.5cm'
        }
    });
    
    await browser.close();
    console.log(`PDF genereret: ${pdfPath}`);
}

generatePlakatPDF().catch(console.error);



