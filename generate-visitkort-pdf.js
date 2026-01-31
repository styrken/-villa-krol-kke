const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateVisitkortPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const htmlPath = path.join(__dirname, 'visitkort.html');
    const fileUrl = `file://${htmlPath}`;
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    const pdfPath = path.join(__dirname, 'Villa-Kroloekke-Visitkort.pdf');
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.8cm',
            right: '0.8cm',
            bottom: '0.8cm',
            left: '0.8cm'
        }
    });
    
    await browser.close();
    console.log(`PDF genereret: ${pdfPath}`);
}

generateVisitkortPDF().catch(console.error);
