angular.module('myspices.services', [])

.factory('cuisineService', function(){
	var cuisines = [
				    { title: 'Mexican', 
				    img: "img/cuisine/taco-1018962_960_720.jpg", 
				    description: "Mexican cuisine is primarily a fusion of indigenous Mesoamerican cooking with European, especially Spanish, elements added after the Spanish conquest of the Aztec Empire in the 16th century. The staples are native foods, such as corn, beans, avocados, tomatoes, and chili peppers, along with rice which was brought by the Spanish. Europeans introduced a large number of other foods, the most important of which were meats from domesticated animals (beef, pork, chicken, goat, and sheep), dairy products (especially cheese), and various herbs and spices.", 
				    id: 0 },
				    { title: 'Indian', 
				    description: "Indian cuisine encompasses a wide variety of regional and traditional cuisines native to India. Given the range of diversity in soil type, climate, culture, ethnic group and occupations, these cuisines vary significantly from each other and use locally available spices, herbs, vegetables and fruits. ", 
				    id: 1 },
				    { title: 'Caribbean', description: "Caribbean cuisine is a fusion of African, Amerindian, European, East Indian, Arab and Chinese cuisine. These traditions were brought from many different countries when they came to the Caribbean. In addition, the population has created styles that are unique to the region.", 
				    id: 2 },
				    { title: 'French', description: "French cuisine consists of the cooking traditions and practices from France.",
				    id: 3 },
				    { title: 'Thai', descrition: "Thai cuisine is the national cuisine of Thailand. Balance, detail, and variety are of paramount significance to Thai chefs.",
				    id: 4 },
				    { title: 'North African', description: "The Maghreb, the northernmost part of Africa along the Mediterranean Sea is composed of the countries of Algeria, Libya, Morocco, and Tunisia. The region has a high degree of geographic, political, social, economic and cultural diversity which influences the region's cuisine and the culinary style.",
				    id: 5 },
				    { title: 'Cajun', description: "Cajun cuisine is a style of cooking named for the French-speaking Acadian people deported by the British from Acadia in Canada to the Acadiana region of Louisiana. It is what could be called a rustic cuisine; locally available ingredients predominate and preparation is simple.",
				    id: 6 },
				    { title: 'Mediterranean', id: 7 },
				    { title: 'Middle Eastern', id: 8 }
				  ];
	return {
			getCuisines: function(){
				return cuisines;
			},
			getCuisine: function(id){
				return cuisines[id];
			}
	}
})
.factory('spiceService', function(){
	var spices = [
				  {title: "Corriander", 
				  cuisine: "Mexican", 
				  img: "img/spice/coriander-960_720.jpg", 
				  description: "Coriander is native to regions spanning from southern Europe and northern Africa to southwestern Asia. It is a soft plant growing to 50 cm (20 in) tall. The leaves are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. The flowers are borne in small umbels, white or very pale pink, asymmetrical, with the petals pointing away from the center of the umbel longer (5–6 mm or 0.20–0.24 in) than those pointing toward it (only 1–3 mm or 0.039–0.118 in long). The fruit is a globular, dry schizocarp 3–5 mm (0.12–0.20 in) in diameter. The seeds are generally used as a spice or an added ingredient in foods or recipes, although sometimes they are eaten alone.", 
				  dishes: "Tacos",
				  id: 0},
				  {title: "Oregano", 
				  cuisine: "Mexican", 
				  img: "img/spice/coriander-960_720.jpg", 
				  description: "", 
				  dishes: "Tacos",
				  id: 1},
				  {title: "Chili Powder", 
				  cuisine: "Mexican", 
				  img: "img/spice/coriander-960_720.jpg", 
				  description: "", 
				  dishes: "Tacos",
				  id: 2},
				  {title: "Garlic Powder", 
				  cuisine: "Mexican", 
				  img: "img/spice/coriander-960_720.jpg", 
				  description: "Coriander is native to regions spanning from southern Europe and northern Africa to southwestern Asia. It is a soft plant growing to 50 cm (20 in) tall. The leaves are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. The flowers are borne in small umbels, white or very pale pink, asymmetrical, with the petals pointing away from the center of the umbel longer (5–6 mm or 0.20–0.24 in) than those pointing toward it (only 1–3 mm or 0.039–0.118 in long). The fruit is a globular, dry schizocarp 3–5 mm (0.12–0.20 in) in diameter. The seeds are generally used as a spice or an added ingredient in foods or recipes, although sometimes they are eaten alone.", 
				  dishes: "Tacos",
				  id: 3},
				  {title: "Cinnamon", 
				  cuisine: "Mexican", 
				  img: "img/spice/coriander-960_720.jpg", 
				  description: "Coriander is native to regions spanning from southern Europe and northern Africa to southwestern Asia. It is a soft plant growing to 50 cm (20 in) tall. The leaves are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. The flowers are borne in small umbels, white or very pale pink, asymmetrical, with the petals pointing away from the center of the umbel longer (5–6 mm or 0.20–0.24 in) than those pointing toward it (only 1–3 mm or 0.039–0.118 in long). The fruit is a globular, dry schizocarp 3–5 mm (0.12–0.20 in) in diameter. The seeds are generally used as a spice or an added ingredient in foods or recipes, although sometimes they are eaten alone.", 
				  dishes: "Tacos",
				  id: 4}
				 ];
	return {
			getSpices: function(){
				return spices;
			},
			getSpice: function(id){
				return spices[id];
			},
			addSpice: function(spice){
				spices.push(spice);
				console.log("spice added");
			}
	}
})
;