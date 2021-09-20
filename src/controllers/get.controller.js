module.exports = {
  controller: {
    get: async (req, res) => {
      try {
        await res.send({ message: 'welcome to s\'ipa GET ROUTER' });
        res.status(200);
      } catch (err) {
        res.json({ erro: err });
        res.status(500);
      }
    },
  },
};
