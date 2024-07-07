export const trending = (req, res) => {
  const videos = [
    {
      title: 'video 1',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
    {
      title: 'Second Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 2,
    },
    {
      title: 'Third Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 3,
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
