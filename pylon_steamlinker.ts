discord.on('MESSAGE_CREATE', async (message) => {
  var msg = message.content.toLowerCase();

  if (
    msg.includes('store.steampowered.com') ||
    msg.includes('steamcommunity.com')
  ) {
    var urls = msg.match(
      /https?:\/\/(store\.steampowered\.com|(www\.)?steamcommunity\.com)(\/([-a-zA-Z0-9()@:%_\+.~#?&//=]*))?/g
    );
    if (urls != null && urls.length > 0) {
      var reply = '';
      urls.forEach((element) => (reply = reply + element + '\n'));
      const richEmbed = new discord.Embed();
      richEmbed.setColor(0x00ff00);
      richEmbed.addField({
        name: 'Links',
        value: reply,
        inline: false,
      });

      console.debug('urls:' + urls);

      console.debug('content:' + Object.keys(message));

      console.debug('reply:' + reply);
      await message.reply(richEmbed);
    }
  }
});
