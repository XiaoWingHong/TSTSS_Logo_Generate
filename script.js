

document.getElementById('btn').onclick = function(){
    var imgs = [];
    imgs.push('source/bg/' + document.getElementById('year').value + '.png');
    imgs.push('source/group/' + document.getElementById('group').value + '.png');
    document.getElementById('output').src = '';
    mergeImages(imgs).then(b64 => document.getElementById('output').src = b64);
}
