let closeNewTabs = (tab) => {
	let newTabs = chrome.tabs.query({url: 'chrome://newtab/'}, (tabs) => {
		chrome.tabs.remove(tabs.map(tab => tab.id));	
	});
}

chrome.browserAction.onClicked.addListener(closeNewTabs);
