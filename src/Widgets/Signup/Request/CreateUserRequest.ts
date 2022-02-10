import axios from '../../../Services/axios';

const createUserRequest = async (
  email: string,
  password: string,
  cpf: string,
  name: string,
  birthday: string,
): Promise<void> => {
  const response = await axios.post('/users/signup', {
    email: email,
    password: password,
    cpf: cpf,
    name: name,
    birthday: birthday,
  });
  console.log(response)
};

export { createUserRequest }
