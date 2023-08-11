let imgs = ['images/bg.png', 'images/top-left.png', 'images/top-right.png', 'images/bottom.png']

document.getElementById('btn').onclick = function(){
    mergeImages(imgs).then(b64 => document.getElementById('output').src = b64);
}