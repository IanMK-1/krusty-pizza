function pizza(the_size,the_toppings,the_krust){
    this.pizza_size = the_size;
    this.pizza_toppings = the_toppings;
    this.pizza_krust = the_krust;
}

$(document).ready(function(){
    $("button").click(function(event){
        event.preventDefault();

        pizzaPrices();
        
    });
    
});

function pizzaPrices(){
    var size = $("input[name='size']:checked").val();
    var toppings = $("input[name='toppings']:checked").val();
    var krust = $("input[name='krust']:checked").val();

    var newPizza = new pizza(size,toppings,krust);

    newPizza.prototype.order = function() {
        return this.pizza_size+" sized, "+this.pizza_toppings+" topping, "+this.pizza_krust+" pizza";
    } 

    alert(newPizza.pizza_size+" sized, "+newPizza.pizza_toppings+" topping, "+newPizza.pizza_krust+" pizza");

    var prices = [500,600,700,800,900,1000,650,750,850,550,650,750,850,950,1050,1000,1100,1200,950,1050,1150,450,550,650,1150,1250,1350];
    
    var price;

    if(size==="small" && toppings==="mushrooms" && krust==="crispy"){
        price = prices[0];
    }
    else if(size==="small" && toppings==="mushrooms" && krust==="stuffed"){
        price = prices[1];
    }
    else if(size==="small" && toppings==="mushrooms" && krust==="gluten free"){
        price = prices[2];
    }
    else if(size==="small" && toppings==="pineapple" && krust==="crispy"){
        price = prices[3];
    }
    else if(size==="small" && toppings==="pineapple" && krust==="stuffed"){
        price = prices[4];
    }
    else if(size==="small" && toppings==="pineapple" && krust==="gluten free"){
        price = prices[5];
    }
    else if(size==="small" && toppings==="bacon" && krust==="crispy"){
        price = prices[6];
    }
    else if(size==="small" && toppings==="bacon" && krust==="stuffed"){
        price = prices[7];
    }
    else if(size==="small" && toppings==="bacon" && krust==="gluten free"){
        price = prices[8];
    }

    else if(size==="medium" && toppings==="mushrooms" && krust==="crispy"){
        price = prices[9];
    }
    else if(size==="medium" && toppings==="mushrooms" && krust==="stuffed"){
        price = prices[10];
    }
    else if(size==="medium" && toppings==="mushrooms" && krust==="gluten free"){
        price = prices[11];
    }
    else if(size==="medium" && toppings==="pineapple" && krust==="crispy"){
        price = prices[12];
    }
    else if(size==="medium" && toppings==="pineapple" && krust==="stuffed"){
        price = prices[13];
    }
    else if(size==="medium" && toppings==="pineapple" && krust==="gluten free"){
        price = prices[14];
    }
    else if(size==="medium" && toppings==="bacon" && krust==="crispy"){
        price = prices[15];
    }
    else if(size==="medium" && toppings==="bacon" && krust==="stuffed"){
        price = prices[16];
    }
    else if(size==="medium" && toppings==="bacon" && krust==="gluten free"){
        price = prices[17];
    }

    else if(size==="large" && toppings==="mushrooms" && krust==="crispy"){
        price = prices[9];
    }
    else if(size==="large" && toppings==="mushrooms" && krust==="stuffed"){
        price = prices[10];
    }
    else if(size==="large" && toppings==="mushrooms" && krust==="gluten free"){
        price = prices[11];
    }
    else if(size==="large" && toppings==="pineapple" && krust==="crispy"){
        price = prices[12];
    }
    else if(size==="large" && toppings==="pineapple" && krust==="stuffed"){
        price = prices[13];
    }
    else if(size==="large" && toppings==="pineapple" && krust==="gluten free"){
        price = prices[14];
    }
    else if(size==="large" && toppings==="bacon" && krust==="crispy"){
        price = prices[15];
    }
    else if(size==="large" && toppings==="bacon" && krust==="stuffed"){
        price = prices[16];
    }
    else if(size==="large" && toppings==="bacon" && krust==="gluten free"){
        price = prices[17];
    }

    alert(price);
}