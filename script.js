// ❌ Pehle — page load hote hi chal jaata tha
downloadImages();

// ✅ Ab — sirf button click pe chalegaa
document.getElementById('download-images-button').onclick = downloadImages;