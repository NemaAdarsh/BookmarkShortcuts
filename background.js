chrome.commands.onCommand.addListener(function (command) {
    if (command.startsWith('open-bookmark-')) {
      const bookmarkIndex = parseInt(command.split('-')[2]) - 1;
      openBookmark(bookmarkIndex);
    }
  });
  
  function openBookmark(index) {
    chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
      const bookmarks = extractBookmarks(bookmarkTreeNodes);
      if (bookmarks.length > index) {
        const bookmark = bookmarks[index];
        chrome.tabs.create({ url: bookmark.url });
      }
    });
  }
  
  function extractBookmarks(bookmarkTreeNodes) {
    let bookmarks = [];
    bookmarkTreeNodes.forEach(function (node) {
      if (node.url) {
        bookmarks.push(node);
      }
      if (node.children) {
        bookmarks = bookmarks.concat(extractBookmarks(node.children));
      }
    });
    return bookmarks;
  }
  