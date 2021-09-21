module.exports = {
  putController: {
    put: async (req, res) => {
      try {
        await res.json({ message: 'welcome to s\'ipa PUT ROUTER' });
        res.status(200);
      } catch (err) {
        res.json({ erro: err });
        res.status(500);
      }
    },
  },
};
