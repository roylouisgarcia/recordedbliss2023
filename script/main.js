audioPlayer();
function audioPlayer(){

	const lyrics = [`<h3>Kilig</h3>		ayan ka na naman at akoy iyung binati ng Hello <br>
        Muntik mahulog sa hagdan, nalunod at walang sagwan <br> <br>
        
        Kailan maibubuka ang mahiyain kong bibig <br>
        at mapigilan na magsuka "oh shet naman" <br>
        sasabog ang dibdib <br> <br>
        
        Kay ganda mong prinsesa <br>
        Forever na lang bang akong aasaha.. <br>
        at akoy kikiligin... <br> <br>`, `   <h3>Jax Teller</h3>   Ill be your John Lennon,<br>
To your Yoko Ono<br>
Just like Jax Teller<br>
To your Tara<br>
Ill be Shrek and green<br>
To you My Fiona<br><br>

Gotta, gotta love me now<br>
and don't you wonder<br>
why I want to be closer and closer and closer<br><br>

Let's wait till the morning sun<br>
and afternoon's delight<br>
Baby let's ride through the night<br><br>

Ill be your John Lennon,<br>
To your Yoko Ono<br>
Just like Jax Teller<br>
To your Tara<br>
Ill be Shrek and green<br>
To you My Fiona<br><br>

Money, honey and golden promises<br>
aint what I need to get by<br>
As long as your here, please be near, please be near<br>

Cause I love you so.. and don't you worry.. baby<br><br>`, `<h3>Gabing Walang Gising</h3>

Mga gabing walang gising</br>
tinig mo'y dala ng hangin</br>
ang iyung mata'y nasa bituin</br>
titig mo'y kay lambot sa damdamin</br>
</br>
Sa iyo'y ako'y lumalapit</br>
tawirin ko man ang manipis na hangin</br>
sa iyo'y ako'y umaawit</br>
abutin ko man ang tono ng langit</br>
</br>
gumising ka, dumungaw ka</br>
at ika'y maniwala pag-ibig ko'y nasa tala</br>
ngumiti ka, at ipikit ang yung mata</br>
at sa panalangin tayo'y magkita</br>
</br>
at kung ika'y napagod na</br>
sa pagbuo ng mundong buhangin</br>
hawakan mo ang puso ko</br>
dalawin mo ang lungkot na tinunaw mo</br>
</br>
Sa iyo'y ako'y lumalapit</br>
tawirin ko man ang manipis na hangin</br>
sa iyo'y ako'y umaawit</br>
abutin ko man ang tono ng langit</br>
</br>
gumising ka, dumungaw ka</br>
at ika'y maniwala pag-ibig ko'y nasa tala</br>
ngumiti ka, at ipikit ang yung mata;</br>
at sa panalangin tayo'y magkita</br>
`,
`  <h3>Pen</h3>    Pen pen de sarapen, <br>
de kutsilyo de almasen<br>
Haw, haw de karabaw <br>
Batutin.<br><br>

Sipit namimilipit, ginto't pilak<br>
Namumulaklak sa tabi ng dagat.<br>`, ` <h3>Pikitmata</h3> Nakilala ka<br>
Puso ko'y natulala<br>
Nalasap ko na<br>
Ngiti mong kay ganda<br><br>
hinde na nagtagal<br>
akoy laging tulala<br>
Hinahanap kita<br>
nagtatanung kahit sa buwan<br><br>
Nasaan ka<br>
at ang hiwaga mong dala<br>
may kasalanan ba?<br>
at umiiwas ka sinta<br>
wag naman<br>
gusto ko lang makilala<br>
asan ka na?<br><br>
At nakausap ka<br>
nalaman kong huli na<br>
may mahal ka ng iba<br>
akoy di na makahinga<br><br>
Nasaan na<br>
ang alak na sinungaling<br>
dadamayan ka<br>
pusoy aking lalasunin<br>
sige lang<br>
di na kailangan pansinin<br>
nasaktan lang<br><br>
pilit kang lilimutin<br>
pilit na di pansinin<br>
ngunit eto nagaantay<br>
..sa iyong mga ngiti <br><br>
Nasaan na<br>
ang luha sa king mata<br>
may hiwaga ba <br>
pag nakita ka tuwina<br>
lika na<br>
tayo na lamang dalawa<br>
mahal kita<br>
mahal mo ba...?<br><br>
Akong naglalambing<br>
sa umaga ay puyat at gising<br>
napansin mo ba?<br>
akoy na pa praning<br><br>
pinilit ba kita<br>
iwan ang iyong ligaya<br>
binawi ko di ba?<br>
wag ka lang maabala<br><br>
ok lang<br>
kahit akoy masaktan<br>
lalayu na lang<br>
pusoy di na pakikinggan<br>
basta lang<br>
basta sanay tatandaan<br>
mahal kita<br><br>
Sa iyo lang puso ko<br>
walang ibang sinasamo<br>
wag kanang mangamba<br>
ikaw lang nag iisa<br>`, ` <h3>I Love You</h3>     I know that it's wrong<br>
      to even write you this song<br>
      You know, yeah it shows<br>
      I love you all along<br><br>
      You wanted to go<br>
      Look for love a piece of your soul<br>
      And here I am, <br>
      pretending to be ok<br><br>
      But, I know I'll hear the songs you like<br>
      and I know I'll see the stars shining up above<br>
      Yeah, I know that tears may break apart<br>
      event hough I won't listen to my heart singing...<br><br>
      I know that it is wrong <br>
      to even love you....I love you <br>`

	]

	var currentSong = 0;
	$("#audioPlayer")[0].src = $("#playlist li a")[0];
	// This will initialize the lyrics div to contain the lyrics of the first song
	$("#lyrics").html(lyrics[0])
	$("#audioPlayer")[0].play();
	
	// This lets the user click on the title of the song they want to play and the lyrics will be displayed accordingly also
	$("#playlist li a").click(function(e){
		e.preventDefault();
		$("#audioPlayer")[0].src = this; 
		$("#audioPlayer")[0].play();
		$("#playlist li").removeClass("current-song");
		currentSong = $(this).parent().index();
		$(this).parent().addClass("current-song");
		$("#lyrics").html(lyrics[currentSong])
		

	});

	$("#audioPlayer")[0].addEventListener("ended", function(){
		currentSong++;
		if(currentSong == $("#playlist li a").length)
			currentSong = 0;
		$("#playlist li").removeClass("current-song");
		$("#playlist li:eq("+currentSong+")").addClass("current-song");
		$("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
		$("#audioPlayer")[0].play();
		$("#lyrics").html(lyrics[currentSong]);
	});

	

	
}