$(".title-rename-form1").on("submit", function(evt) {
	evt.preventDefault()

	var newTitle = $(".title-rename-1").val()
	$(".title-1").text(newTitle)
	//alert(newTitle)

})
$(".title-rename-form2").on("submit", function(evt) {
	evt.preventDefault()

	var newTitle = $(".title-rename-2").val()
	$(".title-2").text(newTitle)
	//alert(newTitle)

})
$(".title-rename-form3").on("submit", function(evt) {
	evt.preventDefault()

	var newTitle = $(".title-rename-3").val()
	$(".title-3").text(newTitle)
	//alert(newTitle)

})
