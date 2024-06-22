export const trending = (req, res) => res.render('home');

export const see = (req, res) => res.render('watch');

export const upload = (req, res) => res.render('edit');

export const edit = (req, res) => {
  return res.send('Edit Video');
}

export const remove = (req, res) => {
  return res.send('Remove Video');
}

export const search = (req, res) => res.send('Search');