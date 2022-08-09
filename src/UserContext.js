import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [response, setResponse] = React.useState(null);
  const [repositories, setRepositories] = React.useState(null);

  async function getUserData() {
    const url = 'https://api.github.com/users/alan-junqueira';
    const response = await fetch(url);
    const json = await response.json();

    const { repos_url } = json;

    const fetchRepositories = await fetch(repos_url);
    const jsonRepositories = await fetchRepositories.json();

    setData(json);
    setResponse(response);
    setRepositories(jsonRepositories);
  }

  getUserData();

  if (data === null) return null;
  else
    return (
      <UserContext.Provider value={{ data, response, repositories }}>
        {children}
      </UserContext.Provider>
    );
};
