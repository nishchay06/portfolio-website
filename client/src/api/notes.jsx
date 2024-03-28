const API_BASE_URL = import.meta.env.VITE_API_HOME_URL
const HOME_URL = import.meta.env.VITE_API_ROOT

const defaultHeaders = {
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
}

export const getAllNotesAPI = () => {
  const res = fetch(`${API_BASE_URL}/api/notes`, {
    ...defaultHeaders,
    method: "GET",
  })
  return res.then(parseJSON)
}

export const createNoteAPI = (note) => {
  return fetch(`${API_BASE_URL}/api/createNotes`, {
    ...defaultHeaders,
    method: "POST",
    body: JSON.stringify(note),
  }).then(parseJSON)
}

function parseJSON(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 0 && response.status < 300) {
    return response
  } else {
    const error = new Error(`${response.statusText}`)
    error.status = response.statusText
    error.response = response
    throw error
  }
}
