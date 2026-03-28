const CAT_API_BASE_URL = 'https://api.thecatapi.com/v1';
const CAT_FACT_URL = 'https://catfact.ninja/fact';

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  },
  body: JSON.stringify(body),
});

const getRoute = (path = '') => {
  const markers = ['/api/cat/', '/.netlify/functions/cat-api/'];
  for (const marker of markers) {
    const idx = path.indexOf(marker);
    if (idx !== -1) {
      return path
        .slice(idx + marker.length)
        .replace(/^\/+/, '')
        .replace(/\/+$/, '');
    }
  }
  return '';
};

const parseQuery = (rawQuery = '') => {
  if (!rawQuery) return new URLSearchParams();
  return new URLSearchParams(rawQuery);
};

export const handler = async (event) => {
  try {
    const route = getRoute(event.path);
    const query = parseQuery(
      event.rawQuery ||
        (event.queryStringParameters
          ? new URLSearchParams(event.queryStringParameters).toString()
          : '')
    );

    if (route === 'fact') {
      const response = await fetch(CAT_FACT_URL);
      if (!response.ok) {
        return json(502, { error: 'Failed to fetch cat fact.' });
      }

      const data = await response.json();
      return json(200, data);
    }

    const apiKey = process.env.CAT_API_KEY;
    if (!apiKey && (route === 'breeds' || route === 'images')) {
      return json(500, { error: 'Missing CAT_API_KEY on server.' });
    }

    if (route === 'breeds') {
      const response = await fetch(`${CAT_API_BASE_URL}/breeds`, {
        headers: apiKey ? { 'x-api-key': apiKey } : {},
      });

      if (!response.ok) {
        return json(502, { error: 'Failed to fetch cat breeds.' });
      }

      const data = await response.json();
      return json(200, data);
    }

    if (route === 'images') {
      const limit = query.get('limit') || '1';
      const breedIds = query.get('breed_ids');

      const url = new URL(`${CAT_API_BASE_URL}/images/search`);
      url.searchParams.set('limit', limit);

      if (breedIds) {
        url.searchParams.set('breed_ids', breedIds);
      }

      const response = await fetch(url.toString(), {
        headers: apiKey ? { 'x-api-key': apiKey } : {},
      });

      if (!response.ok) {
        return json(502, { error: 'Failed to fetch cat images.' });
      }

      const data = await response.json();
      return json(200, data);
    }

    return json(404, { error: 'Unknown cat API route.' });
  } catch (error) {
    console.error('Netlify cat-api function error:', error);
    return json(500, { error: 'Unexpected server error.' });
  }
};
