module.exports = {
  deleteController: {
    delete: async (req, res) => {
      try {
        await res.json({ message: 'welcome to s\'ipa DELETE ROUTER' });
        res.status(200);
      } catch (err) {
        res.json({ erro: err });
        res.status(500);
      }
    },
  },
};
