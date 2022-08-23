const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bangus")
    .setDescription(`Let me prepare a bangus dish for ya'!`),
  async execute(interaction) {
    await interaction.reply({ content: serveBangus(interaction.user.id) });
  },
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function serveBangus(usermentionID) {
  var servedBangus = "",
    userID = usermentionID,
    masterID = "568376638199431171",
    botID = "1005488664173891584";

  switch (getRandomInt(11)) {
    case  0: servedBangus = `Fried bangus was prepared for <@${userID}>!`; break;
    case  1: servedBangus = `Mechadong Bangus was cooked for you <@${userID}>! LAMON WELL :joy:`; break;
    case  2: servedBangus = `<@${masterID}> has made an Adobong Bangus specially for you <@${userID}>! Mahal na mahal ka ni master eh! :heart:`; break;
    case  3: servedBangus = `Grilled Bangus was prepared by <@${botID}>! Sorry <@${userID}> pero busy kase si master <@${masterID}>. :cry: Ako na lang muna nag luto ng Bangus mo! :joy:`; break;
    case  4: servedBangus = `A wild bangus appeared! <@${botID}> prepared a Bangus Carbonara for you <@${userID}>!`; break;
    case  5: servedBangus = `Enjoy your chocobangus <@${userID}>! Choco na, BANGUS PA! :joy:`; break;
    case  6: servedBangus = `Dinakdakan na bangus with :bangus: brains are now on your table to enjoy <@${userID}>!`; break;
    case  7: servedBangus = `The chef <@${masterID}> has prepared pinakbet ft. bangus for you <@${userID}>. Bon Apetit!`; break;
    case  8: servedBangus = `Tinolang Bangus was cooked by <@${botID}>! Sorry <@${userID}> but master <@${masterID}> is busy right now. :cry: Ako na lang muna nag luto ng Bangus mo! :joy:`; break;
    case  9: servedBangus = `<@${masterID}> has made an Dinuguang Bangus specially for you <@${userID}>! Mahal na mahal ka ni master eh! :heart:`; break;
    case 10: servedBangus = `Ginataang Bangus was prepared for <@${userID}>!`; break;
    case 11: servedBangus = `Enjoy your Kilaweng Bangus <@${userID}>! :joy:`; break;
  }

  return servedBangus;
}