var facts = [
    `The official name of the USA is The United States of America. It is also referred to as the US, USA, the States, or just America.`,
    `The US is made up of 50 states and a national government in Washington, DC.`,
    `Washington DC is not a state! There is a small movement to make DC a state, but it has not happened yet.`, 
    `The United States has no official language or religion.`,
    `The US holds several territories: Puerto Rico, Guam, U.S. Virgin Islands, American Samoa, and the Northern Mariana Islands.`,
    `The US is known as a melting pot culture. Different cultures, ethnicities, religions, and people groups all live together and melt into one society. Americans are proud of their diversity and opportunity`, 
    `The US celebrates Independence Day from the British Empire on July 4. July 4th/Independence Day is celebrated with barbecues, garden parties, parades, and fireworks. However, the Declaration of Independence was passed on July 2. It was only officially ratified on July 4.`, 
    `Americans use the Fahrenheit temperature system instead of Celsius.`,
    `Americans write the date as Month/Day/Year instead of Day/Month/Year. This is because Americans say the date June First, 2022 out loud the same way that they write it: 6/1/2022.`,
    `America was first used on a map in 1507 to refer to what is today South America.`, 
    `The first humans migrated into North America at least 12,000 years ago, or even earlier! These were the ancestors of the Native Americans.`,
    `Alaska is the largest state in the US, and used to belong to the Russian Empire before the US purchased it.`, 
    `California is the number 1 dairy producer in the US`,
    `Lollipops were invented in New Haven, Connecticut, in 1908 by George Smith. `,
    `Big cities and regions have their own style of pizza: Chicago Deep-Dish, New York Style, Detroit Pizza, St Louis-Style, and New England Beach Pizza are just a few different varieties`,
    `Kentucky Fried Chicken (KFC) was invented in Sanders Cafe in Corbin, Kentucky by Colonel Harland Sanders in 1957.`,
    `Denali in Alaska is the tallest mountain in North America. It is 20,310 feet (6,190 m) high.`,
    `Harvard was founded in 1636 as the first university in the US.`,
    `Oberlin College in Ohio was the first university to give degrees to women in 1841. `,
    `There are over 5,300 universities in the US`,
    `The first traffic light in the US was built in Cleveland, Ohio in 1914.`,
    `The US is the only country to have all five major climate zones: tropical, dry, temperate, continental, and polar.`,
    `Lake Superior in the Midwest is the largest freshwater lake in the world`,
    `Americans are the first and only people to walk on the moon`,
    `The US has 423 national parks`,
    `Alcohol is not legal to drink in the US until age 21`,
    `Americans cannot legally rent a car until age 25`,
        `Before New York was, well, New York – it was called New Amsterdam as a settlement by the Dutch that chose to settle in Manhattan.`,
    `the Statue of Liberty was actually a gift from the people of France to the United States in 1886.`,
    `Back in the earlier parts of the 19th Century, Alaska wasn’t part of the USA. In fact, it was a part of Russia.`,
    `The Liberty Bell in Philadelphia was actually made in the same place as Big Ben in London: The Whitechapel Bell Foundry`,
    `The Mammoth Cave National Park actually has the longest cave system in the world and a place that’s great to visit.`,
    `Hawaii is an incredibly beautiful volcanic archipelago. Consisting of numerous islands; it’s the only US state that’s solely made up of islands.`,
    `You can get a unicorn hunting license from Michigan's Lake Superior State University`,
    `It would take you more than 400 years to spend a night in all of Las Vegas's hotel rooms`,
    `There’s an island full of wild monkeys off the coast of South Carolina called Morgan Island, and it's not open to humans`,
    `Arizona and Hawaii are now the only states that don't observe daylight savings time`,
    `Boston has the worst drivers out of the nation's 200 largest cities. Kansas City has the best drivers`,
    `There’s a Darth Vader "gargoyle" on the National Cathedral in D.C.`,
    `Of more than 2,500 National Historical Landmarks, only two can (willfully) move: San Francisco's cable cars and New Orleans’s St. Charles streetcar line`,
    `The Library of Congress contains approximately 838 miles of bookshelves—long enough to stretch from Houston to Chicago`


]

function newFact() {
  var randomNumber = Math.floor(Math.random() * (facts.length));
  document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}

newFact() 
