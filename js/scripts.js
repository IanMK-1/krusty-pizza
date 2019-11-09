$(document).ready(function(){
    $("button").click(function(event){
        event.preventDefault();

        var size = $("input[name='size']:checked").val();
        var toppings = $("input[name='toppings']:checked").val();
        var krust = $("input[name='krust']:checked").val();

        alert(size+" sized, "+toppings+" topping, "+krust+" pizza");
    });
    
});