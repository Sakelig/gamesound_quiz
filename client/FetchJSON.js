class HttpError extends Error {
  constructor(status, statusText) {
    super(statusText);
  }
}

export async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new HttpError(res.status, res.statusText);
  }
  return await res.json();
}
