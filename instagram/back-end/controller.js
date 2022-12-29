let posts = [
  { id: "1", title: "Bi nuurs hulgailaagui", message: "Erkhem hulgailsan" },
  {
    id: "2",
    title: "Hervee namaig songvol",
    message: "Mongol uls bayan bolno",
  },
  {
    id: "3",
    title: "Hervee namaig songvol",
    message: "Mongol uls bayan bolno",
  },
  {
    id: "4",
    title: "Hervee namaig songvol",
    message: "Mongol uls bayan bolno",
  },
];

exports.getPosts = (req, res) => {
  res.status("200").json(posts);
};

exports.createPost = (req, res) => {
  const { title, message } = req.body;

  posts.push({
    id: posts.length + 1 + "",
    title: title,
    message: message,
  });
  res.status("200").json(posts);
};

exports.getPost = (req, res) => {
  const { id } = req.params;
  const post = posts.filter((cur) => cur.id === id);

  if (post.length === 0) res.status(400).json({ message: "post not found" });
  else res.status(200).json(post[0]);
};

exports.deletePost = (req, res) => {
  const { id } = req.params;
  const otherPost = posts.filter((cur) => cur.id !== id);

  posts = otherPost;

  res.status(200).json(posts);
};

exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { title, message } = req.body;

  const post = posts.filter((cur) => cur.id === id);

  if (post.length === 0) res.status(400).json({ message: "post not found" });

  const otherPost = posts.filter((cur) => cur.id !== id);

  const result = [...otherPost, { ...post[0], title, message }];

  posts = result;

  res.status(200).json(result);
};

// 'mongodb+srv://bilguun:<password>@mongo.ywtcnkw.mongodb.net/todoApp?retryWrites=true&w=majority'
