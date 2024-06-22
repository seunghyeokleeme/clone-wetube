export const trending = (req, res) => res.send('Home');

export const see = (req, res) => {
  return res.send(`Watch Video #${req.params.id}`);
};

export const upload = (req, res) => res.send('Upload Video');

export const edit = (req, res) => {
  return res.send('Edit Video');
}

export const remove = (req, res) => {
  return res.send('Remove Video');
}

export const search = (req, res) => res.send('Search');