const user = [
  { id: 1, firstName: "Bataa", lastName: "3" },
  { id: 2, firstName: "Dulmaa", lastName: "2.5" },
];

exports.getUsers = (request, response, next) => {
  response.status(200).json({
    users: user,
  });
};

exports.createUser = (request, response, next) => {
  user.push({ id: user.length + 1, ...request.body });
  response.status(400).json({ message: `New user is created.` });
};

exports.getUser = (request, response, next) => {
  const { id } = request.params;
  if (id > user.length) {
    response
      .status(400)
      .json({ message: `${request.params.id} id is not exist` });
  } else {
    response.status(200).json(users[parseInt(id) - 1]);
  }
};

exports.updateUser = (request, response, next) => {
  const { id } = request.params;
  if (id > user.length) {
    response
      .status(400)
      .json({ message: `${request.params.id} id is not exist` });
  } else {
    response
      .status(200)
      .json({ message: `${request.params.id} id is not updated` });
  }
};

exports.deleteUser = (request, response, next) => {
  const { id } = request.params;
  if (id > user.length) {
    response
      .status(400)
      .json({ message: `${request.params.id} id is not exist` });
  } else {
    response
      .status(200)
      .json({ message: `User with ${request.params.id} is deleted` });
  }
};
