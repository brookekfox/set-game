const mutations = {
  init(payload) {
    return Object.assign(
      {
        cards: []
      },
      payload
    );
  }
};

export default mutations;
