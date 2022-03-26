const postProspect = async (datosUser) => {
    return await fetch("http://localhost:3001/post-user", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(datosUser),
    })
    .then(res => res.json())
    .catch(error => console.error(error))
  };

  const getProspect = async () => {
    return await fetch("http://localhost:3001/get-user", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .catch(error => console.error(error))
  };

  export {
      postProspect,
      getProspect
  }