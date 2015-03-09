function googleView(item){

    console.log('search results for: ', item)

    console.log(item.woeid)

        
    var repo = item

    $.get("/git-jquery/templates/countryView.jade", function(template) {

        var html = jade.render(template, {item: repo})
        
        $("#details").html(html)

    })


}