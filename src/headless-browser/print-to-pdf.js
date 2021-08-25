/**
 * Download a document served as set of SVGZ files and print as PDF files.
 *
 * URLs are:
 *  - https://p.calameoassets.com/160510071259-1911de49973daf8e69f31f5005a55e18/p1.svgz
 *  - https://p.calameoassets.com/160510071259-1911de49973daf8e69f31f5005a55e18/p2.svgz
 *  - ...
 *  - https://p.calameoassets.com/160510071259-1911de49973daf8e69f31f5005a55e18/p207.svgz
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  for (let i = 1; i <= 207; i++) {
    await page.goto(
      'https://p.calameoassets.com/160510071259-1911de49973daf8e69f31f5005a55e18/p' + i + '.svgz',
      { waitUntil: 'networkidle2' }
    )

    await page.pdf({
      path: i + '.pdf',
      format: 'a4',
      landscape: true
    })
  }

  await browser.close()
})()
