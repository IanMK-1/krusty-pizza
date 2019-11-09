$(document).ready(function(){
    
    var size = $("input[name='size']:checked").val();
    var toppings = $("input[name='toppings']:checked").val();
    

    $("button").click(function(event){
        event.preventDefault();

        alert(size+" "+toppings);
    })
    
});