// $(function(){
//     $('.selectpicker').selectpicker();
// });

var min_characters_list = 'abcdefghijklmnopqrstuvwxyz';
var maj_char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number_list = '0123456789';
var special_list = '~!@#$%^&*()-_=+[]{};:,.<>/?|';
var similar_list = '0OI1l';

// var chaactersLength = min_characters.length;


function generate_pwd(){
    // Init variables
    var number = document.getElementById("number").checked;
    var min_char = document.getElementById("min_char").checked;
    var maj_char = document.getElementById("maj_char").checked;
    var special_char = document.getElementById("special_char").checked;
    var similar_char = document.getElementById("similar_char").checked;
    var length = document.getElementById("length").value;
    // var number_char = document.getElementById("number_char").value;
    var number_pwd = document.getElementById("number_pwd").value;
    var list_pwd = [];
    for (var count_pwd = 0; count_pwd < number_pwd; count_pwd++){
        var chaactersLength = "";
        var result = "" ;
        if (number == true){
            var chaacters = chaacters + number_list;
        }
        if (min_char == true){
            var chaacters = chaacters + min_characters_list;
        }
        if (maj_char == true){
            var chaacters = chaacters + maj_char_list;
        }
        if (special_char == true){
            var chaacters = chaacters + special_list;
        }
        if (similar_char == true){
            var chaacters = chaacters + similar_list;
            ;
        }
        var chaactersLength = chaacters.length;
        for ( var i = 0; i < length ; i++ ) {
            result += chaacters.charAt(Math.floor(Math.random() * chaactersLength));
        }
        list_pwd.push(result);
        
    }
    alert(list_pwd);
}