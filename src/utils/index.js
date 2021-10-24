import html2canvas from 'html2canvas';

export const capture = (selector) => {
    html2canvas(document.querySelector(selector)).then(canvas => {
        var a = document.createElement('a');

        // a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.href = canvas.toDataURL();
        a.download = 'resume.png';
        a.click();
    });
}

export const stringToHTML = (str) => {
    // const text = `<p>Some text</p><br /><a href="https://daily-dev-tips.com/">My website</a><hr /><a href="https://google.com">Another link</a>`;
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');

    console.log(doc.body.children);
}