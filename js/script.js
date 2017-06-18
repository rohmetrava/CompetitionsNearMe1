$(".title-rename-form1").on("submit", function(evt) {
	evt.preventDefault()
	
	var newTitle = $(".title-rename").val()
	$(".title-1").text(newTitle)
	//alert(newTitle)

})
$(".title-rename-form2").on("submit", function(evt) {
	evt.preventDefault()
	
	var newTitle = $(".title-rename").val()
	$(".title-2").text(newTitle)
	//alert(newTitle)

})
$(".title-rename-form3").on("submit", function(evt) {
	evt.preventDefault()
	
	var newTitle = $(".title-rename").val()
	$(".title-3").text(newTitle)
	//alert(newTitle)

})
$(".search-button").onClick( function(evt){
	console.log("hi");

	evt.preventDefault()
	
}
