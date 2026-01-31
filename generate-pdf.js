const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const htmlPath = path.join(__dirname, 'folder.html');
    const fileUrl = `file://${htmlPath}`;
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    const pdfPath = path.join(__dirname, 'Villa-Kroloekke-Folder.pdf');
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

generatePDF().catch(console.error);





