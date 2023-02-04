let content = '#content'


//get articles from json
function loadArticles(atrs) {
	$.getJSON("articles.json", function(json) {
		json.forEach(function(item) { addArticle(item); });
	});
}

//add individual article
function addArticle(article) {
	$(content).append(
		$('<article/>').attr("id", article.id).addClass("articlemain").append(
			$('<h1/>').addClass("articleheader").append($('<a/>').text(article.title).attr('href', article.link))
		).append(
			$('<p/>').addClass("articlemain").text(article.text)
		)
	);
}

window.onpaint = loadArticles();