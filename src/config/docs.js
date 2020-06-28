export const apiDocs = `
<pre>
  Elen síla lúmenn’ omentielvo!

  This is a Middle-Earth API, made to suport Web Development classes. It fits the backend tier to your React, Vue, Angular or any SPA project.

  As a Ring Bearer, you also must provide an Authorization header, to work with your own data:
  
  fetch(url, { headers: { 'Authorization': 'Bearer your-personal-token' }})

  If you need one token, get yours at https://the-one-api.herokuapp.com/sign-up

  The following endpoints are available:

  GET /characters?page=<page_number>&limit=<page_size>
    - Get a paginated list of characters. If params are not provided, it defaults to page 0 and a limit of 5 records.
  
  GET /characters/:id
    - Get a character's details by ID

  
</pre>
`;
