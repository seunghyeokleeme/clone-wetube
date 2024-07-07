export const trending = (req, res) => {
  const videos = [
    {
      title: 'video 1',
    },
    {
      title: 'video 2',
    },
    {
      title: 'video 3',
    },
    {
      title: 'video 4',
    },
    {
      title: 'video 5',
    },
  ];
  res.render('home', { pageTitle: 'Home', videos });
};

export const see = (req, res) =>
  res.render('watch', { pageTitle: req.params.id });

export const upload = (req, res) => {
  return res.send('Upload Video');
};

export const edit = (req, res) => res.render('edit', { pageTitle: 'Edit' });

export const remove = (req, res) => {
  return res.send('Remove Video');
};

export const search = (req, res) => res.send('Search');
