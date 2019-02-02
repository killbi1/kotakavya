const api = "https://my-json-server.typicode.com/killbi1/JSON_Server/"


const headers = {
  'Accept': 'application/json',

}

export const get = (Id) =>
  fetch(`${api}/projects/${Id}`, { headers })
    .then(res => res.json())
    .then(data => data)

    export const getAll = () =>
      fetch(`${api}/db`, { headers })
        .then(res => res.json())
        .then(data => data)
