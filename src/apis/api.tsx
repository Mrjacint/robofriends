export const apiCall = (link: string) =>
  fetch(link).then((response) => {
      let data = response.json()
      return data
  });
