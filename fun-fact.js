var facts = [
    `In addition to the real languages it teaches, Duolingo offers a class in High Valyrian to enhance your Game of Thrones-watching experience`,
    `Sophie Turner, who plays Sansa Stark, adopted Zunni, the Northern Inuit dog that played her pet direwolf on the series' first season`, 
    `The horse heart Daenerys had to eat in Season 1 was essentially a giant gummy candy-one that per Clarke, tasted a little bit like bleach. In total she ate 28 hearts.`,
    `Several of the show's luxurious-looking capes are made from IKEA rugs, including Jon Snow's.`,
    `In a Reddit AMA, Sean Bean recalled that, while on-set, he kicked the model of Ned Stark's decapitated head around like a football.`,
    `Many of the faces on the House of Black and White's Hall of Faces belonged to the show's production team`, 
    `The Black Dinner of 1440-a dinner/trap that ended in the murder of two children-and the Massacre of Glencoe of 1692, during which soldiers claiming to need shelter due to a full fort slayed their hosts. Martin used both events as inspiration for Game of Thrones's Red Wedding.`,
    `To create Season 6's Battle of the Bastards, director Miguel Sapochnik looked to real life conflicts, especially the Battle of Cannae in 216 BCE, in which the Carthaginians circled the Romans and won. The sequence required 65 stunt performers-which is more than some films use.`
]

function newFact() {
  var randomNumber = Math.floor(Math.random() * (facts.length));
  document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}

newFact() 
