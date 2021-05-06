//BLUR ÖZELLİGİ
//Blur elementini aktar
var blury = document.getElementById('blur');

//İmage elementini aktar
var myImage = document.getElementById('blurImg')

//Blur elementini event oluşturur
blury.addEventListener('change', slider);
blury.addEventListener('mousemove', slider);

//blur range değerini image blura aktarır
function slider(event){
    //rangeden gelen blur değerini atar
    var blurValue = blury.value;
    //string gelen blur değerini sayıya çevirir
    var num = parseInt(blurValue);
    //Img blur filtre değerini atar
    myImage.style.filter = "blur("+num+"px)";
}

//SPACİNG ÖZELLİGİ
//Spacing elementini alır
var spacing = document.getElementById('spacing');

spacing.addEventListener('change', imgSpacing);
spacing.addEventListener('mousemove', imgSpacing);

function imgSpacing(event){
    //spacing değerini numa aktarır
    var num = spacing.value;
    //string olarak gelen spacing değerini sayıya çevirir
    var numSpacingValue = parseInt(num);
    //rangeden aldığımız padding değerini resime aktarıyoruz
    myImage.style.padding = numSpacingValue+"px";
}

//BASE COLOR ÖZELlİGİ
//color elementini alır
var color = document.getElementById('color');

color.addEventListener('change', colorChange);
color.addEventListener('mousemove', colorChange);

function colorChange(event){
    console.log(color.value);
    myImage.style.background = color.value;


}


