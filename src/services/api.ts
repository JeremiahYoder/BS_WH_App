export async function getUsers() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
