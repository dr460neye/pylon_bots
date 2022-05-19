discord.on('MESSAGE_CREATE', async (message) => {
  if (
    message.content.toLowerCase().includes('store.steampowered.com') ||
    message.content.toLowerCase().includes('steamcommunity.com')
  ) {
    var reply = message.content.toLowerCase();

    reply = reply
      .replaceAll(
        'https://store.steampowered.com',
        'steam://openurl/https://store.steampowered.com'
      )
      .replaceAll(
        'https://steamcommunity.com',
        'steam://openurl/https://steamcommunity.com'
      );
    console.debug('reply:' + reply);

    await message.reply(reply);
  }
});
