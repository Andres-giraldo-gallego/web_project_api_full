export const signin = async (email, password) => {
  try {
    const response = await fetch(
      ' https://se-register-api.en.tripleten-services.com/v1/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error('=== error ===', error);
  }
};

export const signup = async (email, password) => {
  try {
    const response = await fetch(
      ' https://se-register-api.en.tripleten-services.com/v1/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const responseJson = await response.json();

    return responseJson.data;
  } catch (error) {
    console.error('=== error ===', error);
  }
};

export const getUserInfo = async () => {
  try {
    const response = await fetch(
      'https://se-register-api.en.tripleten-services.com/v1/users/me',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error('=== error ===', error);
  }
};
