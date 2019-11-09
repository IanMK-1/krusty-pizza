$(document).ready(function(){
    var size;
    if($("input:radio[name='size']").is(":checked")){
        size = $("input[name='size']:checked").val();
    }
    
    $("button").click(function(event){
        event.preventDefault();

        alert(size);
    })
    
});