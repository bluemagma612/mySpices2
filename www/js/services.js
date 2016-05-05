angular.module('myspices.services', [])

.factory('cuisineService', function(){
	var cuisines = [
				    { title: 'Mexican', img: "img/cuisine/taco-1018962_960_720.jpg", description: "Coriander, Cumin, Oregano", id: 0 },
				    { title: 'Indian', id: 1 },
				    { title: 'Caribbean', id: 2 },
				    { title: 'French', id: 3 },
				    { title: 'Thai', id: 4 },
				    { title: 'North African', id: 5 },
				    { title: 'Cajun', id: 6 },
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
				  description: "Coriander is native to regions spanning from southern Europe and northern Africa to southwestern Asia. It is a soft plant growing to 50 cm (20 in) tall. The leaves are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. The flowers are borne in small umbels, white or very pale pink, asymmetrical, with the petals pointing away from the center of the umbel longer (5–6 mm or 0.20–0.24 in) than those pointing toward it (only 1–3 mm or 0.039–0.118 in long). The fruit is a globular, dry schizocarp 3–5 mm (0.12–0.20 in) in diameter. The seeds are generally used as a spice or an added ingredient in foods or recipes, although sometimes they are eaten alone.", 
				  dishes: "Tacos",
				  id: 0},
				  {title: "Chili Powder", 
				  cuisine: "Mexican", 
				  img: "img/spice/coriander-960_720.jpg", 
				  description: "Coriander is native to regions spanning from southern Europe and northern Africa to southwestern Asia. It is a soft plant growing to 50 cm (20 in) tall. The leaves are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. The flowers are borne in small umbels, white or very pale pink, asymmetrical, with the petals pointing away from the center of the umbel longer (5–6 mm or 0.20–0.24 in) than those pointing toward it (only 1–3 mm or 0.039–0.118 in long). The fruit is a globular, dry schizocarp 3–5 mm (0.12–0.20 in) in diameter. The seeds are generally used as a spice or an added ingredient in foods or recipes, although sometimes they are eaten alone.", 
				  dishes: "Tacos",
				  id: 0},
				  {title: "Garlic Powder", 
				  cuisine: "Mexican", 
				  img: "img/spice/coriander-960_720.jpg", 
				  description: "Coriander is native to regions spanning from southern Europe and northern Africa to southwestern Asia. It is a soft plant growing to 50 cm (20 in) tall. The leaves are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. The flowers are borne in small umbels, white or very pale pink, asymmetrical, with the petals pointing away from the center of the umbel longer (5–6 mm or 0.20–0.24 in) than those pointing toward it (only 1–3 mm or 0.039–0.118 in long). The fruit is a globular, dry schizocarp 3–5 mm (0.12–0.20 in) in diameter. The seeds are generally used as a spice or an added ingredient in foods or recipes, although sometimes they are eaten alone.", 
				  dishes: "Tacos",
				  id: 0},
				  {title: "Cinnamon", 
				  cuisine: "Mexican", 
				  img: "img/spice/coriander-960_720.jpg", 
				  description: "Coriander is native to regions spanning from southern Europe and northern Africa to southwestern Asia. It is a soft plant growing to 50 cm (20 in) tall. The leaves are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. The flowers are borne in small umbels, white or very pale pink, asymmetrical, with the petals pointing away from the center of the umbel longer (5–6 mm or 0.20–0.24 in) than those pointing toward it (only 1–3 mm or 0.039–0.118 in long). The fruit is a globular, dry schizocarp 3–5 mm (0.12–0.20 in) in diameter. The seeds are generally used as a spice or an added ingredient in foods or recipes, although sometimes they are eaten alone.", 
				  dishes: "Tacos",
				  id: 0}
				 ];
	return {
			getSpices: function(){
				return spices;
			},
			getSpice: function(id){
				return spices[id];
			}
	}
})
;