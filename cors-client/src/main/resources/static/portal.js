GET: $(document).ready(function() {

	$("#accessportal").click(function(event) {
		event.preventDefault();
		ajaxGet();
	});

	function ajaxGet() {
		$.ajax({
			url : "http://localhost:8080/access",
			success : function(result) {
				$("#apiResponse").html(result);
			}
		});
	}

})