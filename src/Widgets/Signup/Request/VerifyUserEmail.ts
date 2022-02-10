import axios from '../../../Services/axios';

const verifyUserEmail = async (
  email: string,
  password: string,
): Promise<boolean> => {
  const { data } = await axios.post('/users/signin', {
    email,
    password,
  });  
  return data.emailVerified;
};

export { verifyUserEmail };
