module.exports = {
  controller: {
    post: async (req, res) => {
      try {
        await res.json({ message: 'welcome to s\'ipa POST ROUTER' });
        res.status(200);
      } catch (err) {
        res.json({ erro: err });
        res.status(500);
      }
    },
  },
};
