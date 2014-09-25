

$(window).load(function() {
	$('#myCarousel').carousel({
		interval: 3000
	})
});
/*$(document).ready( function() {
    $('[data-toggle="tooltip"]').tooltip();
});
*/$(document).on('click', '.panel-heading span.clickable', function (e) {
	var $this = $(this);
	if (!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	}
});
$(document).on('click', '.panel div.clickable', function (e) {
	var $this = $(this);
	if (!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	}
});
$(document).ready(function () {
	
	$('.panel-heading span.clickable').click();
	$('.panel div.clickable').click();
	/*For Events*/
	$('#DaawatListItem').click(function(){
		var para1="Diwali is popularly known as the \"festival of lights\". Imagine- the spectacle of the innumerable earthenware oil lamps lighting every corner of every house, every street and spiritual light in hearts of all involved.  Diwali certainly is one of the most spectacular festivals in India.";
		var para2="To keep this tradition we, ICC celebrate DAAWAT,  an evening well spent with Cultural Performances like Dance, Songs, Instrumental Performances, Skits, Games and more with the venue decorated to give you the feel of India and the charm of Diwali. This fun is followed by scrumptious Indian feast to activate your taste buds and a Jam Session";

		$('#callout').css('display','block');
		$("#BadgeHeader").text('Daawat');
		$("#BadgeContent").text(para1);
		document.getElementById('BadgeContent').innerHTML = para1 + "<br><br>"+para2;
		
		$("#BadgeTop").text('3');
		/*$('.offer').css('background',"url('./images/Diwali.jpg')");*/
	});

	$("#restaurant").click(function(){
		
		/*$('#restaurant').children().toggleClass('fa fa-arrow-circle-up fa-2x');*/
		var t = $('#restaurant').children().attr('class');
			if(t=="fa fa-arrow-circle-down fa-2x")
		$('#restaurant').children().removeClass('fa fa-arrow-circle-down fa-2x').addClass('fa fa-arrow-circle-up fa-2x');
	else
		$('#restaurant').children().removeClass('fa fa-arrow-circle-up fa-2x').addClass('fa fa-arrow-circle-down fa-2x');
	});
	$("#restaurant2").click(function(){
		
		/*$('#restaurant').children().toggleClass('fa fa-arrow-circle-up fa-2x');*/
		var t = $('#restaurant2').children().attr('class');
			if(t=="fa fa-arrow-circle-down fa-2x")
		$('#restaurant2').children().removeClass('fa fa-arrow-circle-down fa-2x').addClass('fa fa-arrow-circle-up fa-2x');
	else
		$('#restaurant2').children().removeClass('fa fa-arrow-circle-up fa-2x').addClass('fa fa-arrow-circle-down fa-2x');
	});
	$("#restaurant3").click(function(){
		
		/*$('#restaurant').children().toggleClass('fa fa-arrow-circle-up fa-2x');*/
		var t = $('#restaurant3').children().attr('class');
			if(t=="fa fa-arrow-circle-down fa-2x")
		$('#restaurant3').children().removeClass('fa fa-arrow-circle-down fa-2x').addClass('fa fa-arrow-circle-up fa-2x');
	else
		$('#restaurant3').children().removeClass('fa fa-arrow-circle-up fa-2x').addClass('fa fa-arrow-circle-down fa-2x');
	});

	$('#contactUs').click(function() {
		
		window.open($(this).find("a").attr("href"));

		return false;
	});


	$('#GarbaListItem').click(function(){
		var para1="\“GARBA\”, is a traditional devotional dance form performed with the Wooden Sticks called as\“Dandiya’s\” during the nine days of NAVRATI. It lays its foothold from Gujarat, a western state of India. People dance on the beats of traditional as well as Bollywood songs. A dance form raising the spirits and enthusiasm is widely celebrated and enjoyed during Navaratri.";
		var para2="The Indian Cultural Council with collaboration of other students’ organization hosts an event called Rass Garba and Dandiya Night @ UTA with the view to seek the Divine blessings of Goddess in studies and work ahead. This event gives the opportunity for students to learn about the Indian culture and its various dance techniques. This is a fun event in which hundreds of students will dress up in traditional clothing (The girls usually deck up with Chaniya Choli and guys with Kurta Payjama) and dance the evening away. It is a great way to celebrate our culture and bring the community together. It has always been a crowd favorite for our members because it brings them back to their heritage.";

		$('#callout').css('display','block');
		$("#BadgeHeader").text('Garba');
		$("#BadgeContent").text(para1);
		document.getElementById('BadgeContent').innerHTML = para1 + "<br><br>"+para2;
		
		$("#BadgeTop").text('2');
		/*$('.offer').css('background',"url('./images/Diwali.jpg')");*/
	});
$('#RepublicDayListItem').click(function(){
	var para1="Republic Day honors the day (26th January 1950) the new Constitution of India was approved replacing the Government of India act of 1935 as the governing document of India. Democratic Republic of India attained her freedom from Great Britain in August 15, 1947. The first government of India under Pandit Jawaharlal Nehru had the gigantic task of building a new constitution for the country. The task was assigned to a Constitution Drafting Committee and Pandit Nehru searched for the best man to head the committee. With strong recommendations from various economists and political scientists of the United States and Great Britain, Dr. Ambedkar was given the fascinating opportunity to lead the Constitution Committee.Since independence, India has played a crucial role in spreading the ideas of democracy and liberty. We at ICC also believe in such principles and try to spread feeling of unity in diversity by celebrating this day and bringing all our Indian friends from various parts of India together by enjoying a small cultural event with its theme on patriotism and nationalism.";
	var para2="";

	$('#callout').css('display','block');
	$("#BadgeHeader").text('Republic Day');
	$("#BadgeContent").text(para1);
	document.getElementById('BadgeContent').innerHTML = para1 + "<br><br>"+para2;

	$("#BadgeTop").text('4');
	/*$('.offer').css('background',"url('./images/Diwali.jpg')");*/
});



$('#IndependenceListItem').click(function(){
	var para1 = "Traditionally in India, the Independence Day celebration includes a flag-raising ceremony, singing of the national anthem and a speech from the Prime Minister at Red Fort, New Delhi. ";
	var para2 = "These traditions are mirrored at UTA with cultural events and Indian Snacks.Being the First major event of FALL Semester, this event allows Indian students to celebrate their heritage and meet others students who share a similar culture.  We witness around 200 new students every year who are very new to the foreign land. The Independence Day event gives students born in India the opportunity to celebrate their patriotism while away from home.";
	$('#callout').css('display','block');
	$("#BadgeHeader").text('Independence Day');
	document.getElementById('BadgeContent').innerHTML = para1 + "<br><br>"+para2;
	$("#BadgeTop").text('1');
	/*$('.offer').css('background',"url('./images/Iday.jpg')");*/
});
$('#JanmastamiListItem').click(function(){

	var para1 = "Holi, also known as the festival of colors. Holi is an annual Hindu festival celebrated on the day after the full moon in early March. It celebrates spring, commemorates various events in Hindu mythology and is a time of disregarding social norms and indulging in general merrymaking.It is known alternatively as Dolyatra in West Bengal, and Phagwa in Bhojpur. The festival usually consists of three separate events: Holi, Dhuleti and Rangapanchami.";
	var para2 = "The first, Holi, celebrates a common theme in Hindu festivals - the triumph of good over evil.According to the Vaishnava story, there once was an asura (demon), Hiranyakashipu, who, through boons of near-immortality granted by Brahma, began to terrorize the three worlds. He openly threatened the god Vishnu, who had earlier vanquished Hiranyakashipu's brother, Hiranyaksha, that he would seek revenge for his brother. Curiously, Hiranyakashipu's son, Prahlad, was a staunch devotee of Vishnu, and claimed to his father that Vishnu resided in all things. Furious, Hiranyakashipu asked his sister, Holika, who was protected from fire, to sit with Prahlad inside a fire, challenging his son's belief that Vishnu would protect him always. When Holika sat with Prahlad, indeed Vishnu protected him from the fire, and in his place, Holika burned. Vishnu later incarnated as the man-lion Narasimha, to kill Hiranyakashipu. Holi, deriving its name from Holika, celebrates the burning of the asura's sister.";
	var para3 = "During Dhuleti, the second day, people take to the streets, throwing powdered color and scented water at each other. The colors are usually made from ayurvedic herbs, including neem, kumkum, haldi and bilva. The herbs are supposed to counteract colds and viral illnesses common with the spring. The third and final day, Rangapanchami, marks the end of the color festival, and usually falls on the day of Pooranmashi, or the full moon.";
	var para4 = "At University of Texas, Arlington this festival of colors is celebrated with great pomp and show every year. The colors, the water guns, the Samosas (Indian Snack) are the main attractions of the event. It is organized by Indian Cultural Council along with other students’ organizations like Fine Arts Society of India, Indian Students’ Association and International Students’ Association.";
	$('#callout').css('display','block');
	$("#BadgeHeader").text('Holi');
	document.getElementById('BadgeContent').innerHTML = para1 + "<br><br>"+para2+ "<br><br>"+para3 + "<br><br>"+para4;
	$("#BadgeTop").text(5);
	/*$('.offer').css('background',"url('./images/janm.jpg')");*/
});

$('#SwaagatListItem').click(function(){

	var para1 = "The word Swaagat - स्वागत is used in India meaning \“Welcome\”. Indian Cultural Council celebrates Swaagat usually in the month of March to mark the beginning of the Indian New Year.";
	var para2 = "New Year has many names in India depending on the place it is celebrated; but all having the same reason behind its celebrations – welcome the new. The Hindus of Kashmir start their new year - Navreh - in mid-March. At the same time, the southern Indian states of Karnataka and Andhra Pradesh begin their new year - Ugadi. The Marathas celebrate their new year Gudi Padwa, and the Sindhis observe Cheti Chand. Usually, the Telugu, Kannada, Marathi, Kashmiri and Sindhi New Year falls on the same day - the first day of the month of Chaitra, heralding the advent of spring. In mid-April, the Bengalis usher in the new year with the Poila Baishakh celebrations, the Assamese in the northeast with Bihu festivals, and the Tamils in the South with Puthandu. Around this time, Hindus in Punjab get agog with Baisakhi, the springtime harvest festival marking the beginning of their new year, and the people of Kerala in the south of India welcome their new year - Vishu.";
	$('#callout').css('display','block');
	$("#BadgeHeader").text('Swaagat');
	document.getElementById('BadgeContent').innerHTML = para1 + "<br><br>"+para2;
	$("#BadgeTop").text('6');
});

$("#ShowSuccess").click(function(e){
	e.preventDefault();
	$("#Success-Modal").modal('show');
});

$("#Objective").click(function(e){
	e.preventDefault()
	var para1 = "The Indian Cultural Council (ICC) at University of Texas at Arlington is a Registered Student Organization. ICC is a non-sectarian international, social and cultural organization for the education and promotion of the Indian cultural and spiritual heritage. This does NOT mean that you have to be of Indian descent to enjoy the culture, festivals, music, and events. We welcome everyone; Students, faculty members, staff and all other academicians to join ICC.  ICC also provides opportunities for non-academic individuals to work and identify closely with the objectives and programs’ of ICC who wishes to attend our events, and participate in the rich Indian traditions.";
	var para2 = "We strongly believe in unity while appreciating diversity, different opinion and views. The sole idea is to bring everyone together, and sharing the warmth of friendship and compassion. We also do service to the community by volunteering work and various programs.";
	var para3 = "We have continued to uphold the tradition of excellence ever since it was started. ICC has seen consistent enrollment of students from Indian origin and we represent thousands of Indian Students on campus. We strives to";
	var para4 = "1. Support students of Indian origin in their efforts to adapt to student life at The University of Texas at Arlington";
	var para5 = "2. Foster inter-cultural ties with other relevant community organizations";
	var para6 = "3. Project and promote the heritage and traditions of India and";
	var para7 = "4. Facilitate an awareness and appreciation for all ethical values with universal appeal.";
	$("#modal-example .col-sm-9").css('display','block');
	$(".about-us-content").css('display','block');
	document.getElementById('about-us-content-heading').innerHTML = "Objective";
	document.getElementById('about-us-content-text').innerHTML = para1 + "<br><br>"+para2+ "<br><br>"+para3+ "<br><br>"+para4+ "<br><br>"+para5+ "<br><br>"+para6+ "<br><br>"+para7;

});

$("#Vision").click(function(e){
	var para1 = "Quoting the Rig-Veda some visions of HSC are:-";
	var para2 = "Vasudhaiva Kutumbakam (वसुधैव  कुटुम्बकम) : The entire creation is one family.";
	var para3 = "\"Ekam Sat Viprah Bahudha Vadanti\"(एकं सैट विप्रः बहुधा वदन्ति): Truth is one; sages call it by various names.";
	var para4 = "Sarve Api Sukhina Santu Sarve Santu Niramayah(सर्वे अपि सुखिन सन्तु सर्वे सन्तु निरामयः): Let everybody be happy, healthy, and blessed.";
	$("#modal-example .col-sm-9").css('display','block');
	$(".about-us-content").css('display','block');
	document.getElementById('about-us-content-heading').innerHTML = "Vision";
	document.getElementById('about-us-content-text').innerHTML = para1 + "<br><br>"+para2+ "<br><br>"+para3+ "<br><br>"+para4;
});

$("#Volunteering").click(function(e){
	var para1 = "Indian Cultural Council has always been involved in philanthropy activities and volunteering.";
	var para2 = "Free Walmart Rides to the new students.";
	var para3 = "Volunteering at various activities and celebrations at DFW Hindu Temple, DFW Gujrati Samaj Events, DFW Diwali Mela, events organized by Telugu Association and many more.";
	$("#modal-example .col-sm-9").css('display','block');
	$(".about-us-content").css('display','block');
	document.getElementById('about-us-content-heading').innerHTML = "Volunteering";
	document.getElementById('about-us-content-text').innerHTML = para1 + "<br><br>"+para2+ "<br><br>"+para3;
});

$("#closeButtonModal-modal-example").click(function(e){
	e.preventDefault();
	$(".about-us-content").css('display','none');
});
$("#eventButton").click(function(){
	$("#eventButton").prop('href',"#space-Events");
});

/*newStudentsButton" href="#space-NewStudents"*/
$("#newStudentsButton").click(function(){
	$("#newStudentsButton").prop('href','#space-NewStudents');
});

$("#teamButton").click(function(){
	$("#teamButton").prop('href','#space-Team');
});

/*Event Button made toggle between red and grey*/
$(".box4ParaEvents").mouseenter(function(){
	
	$("#eventButton").css('background-color','#666');
	$("#eventButton").css('border-color','#666');
});

$(".box4ParaEvents").mouseleave(function(){
	
	$("#eventButton").css('background-color','#5F1814');
	$("#eventButton").css('border-color','#5F1814');
});

/*New Student*/
$(".box4ParaNewStudents").mouseenter(function(){
	
	$("#newStudentsButton").css('background-color','#666');
	$("#newStudentsButton").css('border-color','#666');
});

$(".box4ParaNewStudents").mouseleave(function(){
	
	$("#newStudentsButton").css('background-color','#5F1814');
	$("#newStudentsButton").css('border-color','#5F1814');
});

/*Contact us*/
$(".box4ParaContactUs").mouseenter(function(){
	
	$("#Contact").css('background-color','#666');
	$("#Contact").css('border-color','#666');
});

$(".box4ParaContactUs").mouseleave(function(){
	
	$("#Contact").css('background-color','#5F1814');
	$("#Contact").css('border-color','#5F1814');
});

/*Team*/
$(".box4ParaTeam").mouseenter(function(){
	
	$("#teamButton").css('background-color','#666');
	$("#teamButton").css('border-color','#666');
});

$(".box4ParaTeam").mouseleave(function(){

	$("#teamButton").css('background-color','#5F1814');
	$("#teamButton").css('border-color','#5F1814');
});

$(".glyphicon-remove").click(function(){
	$("#modal-example .col-sm-9").css('display','none');
});
$("#modalClose").click(function(){
	$("#modal-example .col-sm-9").css('display','none');
});

$("#announcement-list").click(function(){
	window.open($(this).find("a").attr("href"));
	return false;
});

$("#submitButton").click(function(){

	var a=$('#myForm').serialize();
	$.ajax({
		type:'get',
		url:'/hsc',
		data:a,
		success:function(){
				//close the modal
				console.log("succ");
				$("#contact").modal('hide');
				$("#Success-Modal").modal('show');
			},
			error:function(){
				console.log("err");
			}
		});
});

$(".btn-show-modal").click(function(e){
	e.preventDefault();
	$("#modal-example").modal('show');
});

$("#test").click(function(){
	var a=$('#testForm').serialize();
	$.ajax({
		type:'get',
		url:'/hsc',
		data: a,
		success:function(){
			
				//close the modal
				console.log("succ");
				$("#contact").modal('hide');
				$("#Success-Modal").modal('show');
			},
			error:function(){
				console.log("err");
			}

		});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
        	$('#back-to-top').tooltip('hide');
        	$('body,html').animate({
        		scrollTop: 0
        	}, 800);
        	return false;
        });
        
        $('#back-to-top').tooltip('show');


    });


