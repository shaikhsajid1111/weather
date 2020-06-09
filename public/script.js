function change_background(){
    var backgrounds = ['3.svg','2.svg','1.jpg'];
    var random_number = Math.floor(Math.random()*3);
    var body_element = document.body.style;
    body_element.backgroundImage = 'url(images/'+ backgrounds[random_number] +')';
    body_element.backgroundSize = "cover";
    body_element.backgroundRepeat = 'no-repeat';
}
change_background();



