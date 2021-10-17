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