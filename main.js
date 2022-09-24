
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zKe7uKRGY/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}

var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

   

        document.getElementById("Animals").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
         document.getElementById("Animals").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("number_of_sounds").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        

        img = document.getElementById("listen");

        if(results[0].label == "Barking"){
            img.src = "dog.gif";
            dog = dog+1;
            document.getElementById("number_of_sounds").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "cat.gif";
            cat = cat+1;
            document.getElementById("number_of_sounds").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "simba-walk.gif";
            lion = lion+1;
            document.getElementById("number_of_sounds").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "giphy.gif";
            cow = cow+1;
            document.getElementById("number_of_sounds").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "listen.gif";
            background_noise = background_noise+1;
            document.getElementById("number_of_sounds").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}