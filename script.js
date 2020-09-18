document.getElementById('copyButton')
  .addEventListener('click', function() {
      const input = document.getElementById('myInput');
      input.value = script;
      input.focus();
      input.select();
      document.execCommand("Copy");
      input.value = '';
      window.close();
    },
    false);

const script =
`function removeAdds() {
    const options = {
      id: 'player',
      default_quality: localStorage.getItem('pljsquality') || '480p',
      vast: 0
    };

    if (window.CDNPlayer) {
      options.file = CDNPlayerInfo.streams;
      CDNPlayer = new Playerjs(options);
      window.player.style.minHeight = '300px';
    } else {
      const postId = $(this).closest('.player-item').find('.players').attr('data-player') || $('.players').attr('data-player');
      if (postId) {
        const translationsName = localStorage.getItem('s_' + postId + '_translations_name');
        options.file = window.videoLinks[translationsName];
        window.player = new Playerjs(options);
      } else {
        alert('video links are not found for this site :/');
      }
    }
  };
removeAdds();`;
