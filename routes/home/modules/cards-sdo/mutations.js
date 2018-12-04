const mutations = {
  init(payload) {
    return Object.assign(
      {
        allCards: [],
        cards: [],
        messageText: '',
        numberOfSetsFound: 0,
        numberOfSetsToFind: 10
      },
      payload
    );
  },
  findValidSet(subState) {
    return Object.assign({}, subState, {
      messageText: 'You found a valid set!',
      numberOfSetsFound: subState.numberOfSetsFound + 1
    });
  },
  findInvalidSet(subState) {
    return Object.assign({}, subState, {
      messageText: 'That set is not valid'
    });
  },
  updateCards(subState, cards) {
    return Object.assign({}, subState, {cards});
  },
  updateAllCards(subState, allCards) {
    return Object.assign({}, subState, {allCards});
  },
  updateMessageText(subState, text) {
    return Object.assign({}, subState, {
      messageText: text
    });
  },
  clearMessageText(subState) {
    return Object.assign({}, subState, {
      messageText: ''
    });
  }
};

export default mutations;
