export function getHeader() {
  let auth
  // const token = localStorage.getItem('token')
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg0MzJkMjNmOTU4YjllNDRjZDA2OWQiLCJ1c2VybmFtZSI6InN5YXJpZiIsImVtYWlsIjoic3lhcmlmQGdtYWlsLmNvbSIsImlhdCI6MTY5MTMxODEyNywiZXhwIjoxNjkxNDA0NTI3fQ.fOrAE_4L7HE4XhE5dnN6gD41eYS3Z6cQEo35mVej6Do"

  if (token === undefined || token === '') {
    auth = ''
  } else {
    auth = `Bearer ${token}`
  }
  return {
    Authorization: auth,
    'Content-Type': 'application/json; charset=UTF-8',
  }
}

export function getHeaderWoAuth(params) {
  return {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
    ...params,
  }
}

export function getHeaderMultipart() {
  let auth
  const token = localStorage.getItem('token')
  if (token === undefined || token === '') {
    auth = ''
  } else {
    auth = `Bearer ${token}`
  }
  return {
    Authorization: auth,
    'Content-Type': 'multipart/form-data',
  }
}

export const headers = {
  getHeader,
  getHeaderWoAuth,
  getHeaderMultipart,
}
