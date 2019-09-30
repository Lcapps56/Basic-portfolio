$("#submit").on("click", function(event){
    event.preventDefault()
    
    var person = {
        Name: $("#name").val(),
        Company: $("#company").val(),
        Email: $("#email").val()
    }
    console.log(person.Name)

    $("#name").empty()
    $("#company").empty()
    $("#email").empty()
})