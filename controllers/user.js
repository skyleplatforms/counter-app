import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
}

export const createUser =  (req, res) => {
   const user = req.body;
   users.push({ ...user, id: uuidv4() });
   res.send(`User with ${user.firstName} entered`);
   console.log(user.id)
}

export const getuserId =  (req, res) => {
  const { id } = req.params;

  const userRequest = users.find((user) => user.id = id);
   res.send(userRequest);
   console.log(req.params);

   id = '';
} 

export const deleteUser = (req, res) => {
  const { id } = req.params;
  
  users = users.filter((user) => user.id !== id)

  res.send('User deleted')
}

export const updateUserDetails =  (req, res) => {
  const { id } = req.params;

  const userFind = users.find((user) => user.id = id);

  const { firstName, lastName, age } = req.body;

   if(firstName) userFind.firstName = firstName;
   if(lastName) userFind.lastName = lastName;
   if(age) userFind.age = age;

   res.send('User updated')
}
