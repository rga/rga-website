var quotes=[
"RPI's home for PC and console gamers.",
"The cake is a lie.",
"Finish him!",
"Thank you Mario! But our princess is in another castle!",
"All your base are belong to us.",
"You almost became a Jill Sandwich!",
"Hey dudes, thanks for rescuing me. Let's go for a burger.... Ha! Ha! Ha! Ha!",
"Hadouken!",
"It's a-me, Mario!",
"You are on the way to destruction.",
"What you say!!",
"A Winner is You!",
"You have no chance to survive make your time.",
"Can't let you do that, Starfox!",
"Somebody set us up the bomb.",
"That's the second biggest monkey head I've ever seen!",
"and then I was all ‘We pretended we were going to murder you’? That was great.",
"Prepare for unforseen consequences.",
"Would you kindly?",
"I am Error.",
"Hey! Listen!",
"Do a barrel roll!",
"It's time to kick ass and chew bubble gum, and I’m all out of gum.",
"Falcon Punch!",
"Snake? Snake! Snnnnaaaaaaakkkke!",
"THE GAME",
"You must construct additional pylons.",
"Kekekekekekeke! Zurg rush!",
"I'm in your base, killin' your doodz",
"Permab&",
"Boom! Get ripped into like pieces and stuff!",
"I'm not speedhacking, I swear!",
"Tagekedown!",
"Oops, I Ubered...",
"Haha, Meatshot 8)",
"Medic!",
"Yeah, why don't ya come over and say that to my face, tough guy? Bonk!",
"I rejected these answers, I chose the impossible. I chose, Rapture.",
"Ninja’s have kidnapped the president! Are you a bad enough dude to save him?",
"It’s dangerous to go alone. Take this.",
"It is pitch black. You are likely to be eaten by a grue.",
"DO NOT pass go. DO NOT collect $200",
"Boom headshot!",
"Now you’re thinking with portals.",
"You have died of dysentery",
"Pants-on-head retarded",
"Press (X) to not die",
"I'm an assassin (shhhhhhhhhhh)!",
"Oh, they're going to have to glue you back together - in hell!",
"Be polite.  Be efficient. Have a plan to kill everyone you meet.",
"No, not a crazed gunman Dad, I'm an assassin.",
"Grass grows, birds fly, sun shines, and brother? ...I hurt people.",
];

function changeQuote(node){
	$(node).text('"'+quotes[Math.floor(Math.random()*quotes.length)]+'"');
}

$(document).ready(function(){

	changeQuote('#subtitle');

  $('#header').click(function(){
    changeQuote('#subtitle');
  });
  
});
