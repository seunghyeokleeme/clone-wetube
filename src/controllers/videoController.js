export const trending = (req, res) => res.render('home', { pageTitle: 'Home' });

export const see = (req, res) => res.render('watch', { pageTitle: req.params.id });

export const upload = (req, res) => {
  return res.send('Upload Video');
};

export const edit = (req, res) => res.render('edit', { pageTitle: 'Edit'});

export const remove = (req, res) => {
  return res.send('Remove Video');
};

export const search = (req, res) => res.send('Search');