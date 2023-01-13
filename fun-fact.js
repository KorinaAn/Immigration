var facts = [
    `The official name of the USA is The United States of America. It is also referred to as the US, USA, the States, or just America.`,
    `The US is made up of 50 states and a national government in Washington, DC.`,
    `Washington DC is not a state! There is a small movement to make DC a state, but it has not happened yet.`, 
    `The United States has no official language or religion.`,
    `The US holds several territories: Puerto Rico, Guam, U.S. Virgin Islands, American Samoa, and the Northern Mariana Islands.`,
    `The US is known as a melting pot culture. Different cultures, ethnicities, religions, and people groups all live together and melt into one society. Americans are proud of their country’s diversity and opportunity`, 
    `The US celebrates Independence Day from the British Empire on July 4. July 4th/Independence Day is celebrated with barbecues, garden parties, parades, and fireworks. However, the country’s Declaration of Independence was passed on July 2. It was only officially ratified on July 4.`, 
    `Americans use the Fahrenheit temperature system instead of Celsius.`,
    `Americans write the date as Month/Day/Year instead of Day/Month/Year. This is because Americans say the date June First, 2022 out loud the same way that they write it: 6/1/2022.`,
    `America was first used on a map in 1507 to refer to what is today South America.`, 
    `The first humans migrated into North America at least 12,000 years ago, or even earlier! These were the ancestors of the Native Americans.`,
    `Alaska is the largest state in the US, and used to belong to the Russian Empire before the US purchased it.`, 
    `California is the US's number 1 dairy producer`,
    `Lollipops were invented in New Haven, Connecticut, in 1908 by George Smith. `,
    `Big cities and regions have their own style of pizza: Chicago Deep-Dish, New York Style, Detroit Pizza, St Louis-Style, and New England Beach Pizza are just a few different varieties`,
    `Kentucky Fried Chicken (KFC) was invented in Sanders Cafe in Corbin, Kentucky by Colonel Harland Sanders in 1957.`,
    `Denali in Alaska is North America’s tallest mountain. It is 20,310 feet (6,190 m) high.`,
    `Harvard was founded in 1636 as the first university in the US.`,
    `Ohio’s Oberlin College was the first university to give degrees to women in 1841. `,
    `There are over 5,300 universities in the US`,
    `The first traffic light in the US was built in Cleveland, Ohio in 1914.`,
    `The US is the only country to have all five major climate zones: tropical, dry, temperate, continental, and polar.`,
    `Lake Superior in the Midwest is the largest freshwater lake in the world`,
    `Americans are the first and only people to walk on the moon`,
    `The US has 423 national parks`,
    `Alcohol is not legal to drink in the US until age 21`,
    `Americans cannot legally rent a car until age 25`


]

function newFact() {
  var randomNumber = Math.floor(Math.random() * (facts.length));
  document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}

newFact() 
