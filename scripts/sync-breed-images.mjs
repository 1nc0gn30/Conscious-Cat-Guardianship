import { writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const CAT_API_BASE_URL = 'https://api.thecatapi.com/v1';
const OUTPUT_FILE = path.resolve(process.cwd(), 'src/data/breedImageOverrides.ts');
const SLEEP_MS = 120;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const loadEnvFromDotenvFile = () => {
  if (process.env.CAT_API_KEY) return;

  const envPath = path.resolve(process.cwd(), '.env');
  if (!existsSync(envPath)) return;

  const raw = readFileSync(envPath, 'utf8');
  const line = raw
    .split('\n')
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith('CAT_API_KEY='));

  if (!line) return;

  const value = line.slice('CAT_API_KEY='.length).trim();
  if (!value) return;

  process.env.CAT_API_KEY = value;
};

const getHeaders = () => {
  loadEnvFromDotenvFile();
  const apiKey = process.env.CAT_API_KEY;
  if (!apiKey) {
    throw new Error('Missing CAT_API_KEY. Set it in your environment before running this script.');
  }

  return {
    'x-api-key': apiKey,
  };
};

const fetchJson = async (url, headers) => {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed (${response.status}) for ${url}: ${text}`);
  }
  return response.json();
};

const getBreedImageFromSearch = async (breedId, headers) => {
  const candidates = [
    `${CAT_API_BASE_URL}/images/search?limit=1&breed_ids=${encodeURIComponent(breedId)}&has_breeds=1&order=RAND`,
    `${CAT_API_BASE_URL}/images/search?limit=1&breed_ids=${encodeURIComponent(breedId)}&order=RAND`,
  ];

  for (const url of candidates) {
    const images = await fetchJson(url, headers);
    if (Array.isArray(images) && images[0]?.url) {
      return images[0].url;
    }
  }

  return null;
};

const getBreedImageFromReferenceId = async (referenceImageId, headers) => {
  if (!referenceImageId) return null;
  const image = await fetchJson(
    `${CAT_API_BASE_URL}/images/${encodeURIComponent(referenceImageId)}`,
    headers
  );
  return image?.url || null;
};

const main = async () => {
  const headers = getHeaders();
  const breeds = await fetchJson(`${CAT_API_BASE_URL}/breeds`, headers);

  if (!Array.isArray(breeds)) {
    throw new Error('Unexpected /breeds response shape.');
  }

  const overrides = {};
  let fromPayload = 0;
  let fromReferenceId = 0;
  let fromSearch = 0;
  let unresolved = 0;

  console.log(`Total breeds: ${breeds.length}`);
  console.log('Building image overrides for all breeds...');

  for (let i = 0; i < breeds.length; i += 1) {
    const breed = breeds[i];
    try {
      let url = breed?.image?.url || null;
      let source = 'payload';

      if (!url) {
        url = await getBreedImageFromReferenceId(breed?.reference_image_id, headers);
        source = 'reference_image_id';
      }

      if (!url) {
        url = await getBreedImageFromSearch(breed.id, headers);
        source = 'images/search';
      }

      if (url) {
        overrides[breed.id] = url;
        if (source === 'payload') fromPayload += 1;
        if (source === 'reference_image_id') fromReferenceId += 1;
        if (source === 'images/search') fromSearch += 1;
        console.log(`[${i + 1}/${breeds.length}] ${breed.name}: image set (${source})`);
      } else {
        unresolved += 1;
        console.log(`[${i + 1}/${breeds.length}] ${breed.name}: no image found`);
      }
    } catch (error) {
      unresolved += 1;
      console.error(`[${i + 1}/${breeds.length}] ${breed.name}: lookup failed`, error.message);
    }

    await sleep(SLEEP_MS);
  }

  const fileContents = `// Auto-generated with: npm run sync:breed-images\n// Do not edit by hand. Re-run the sync script to update.\nexport const breedImageOverrides: Record<string, string> = ${JSON.stringify(overrides, null, 2)};\n`;

  await writeFile(OUTPUT_FILE, fileContents, 'utf8');

  console.log(`Resolved from /breeds payload: ${fromPayload}`);
  console.log(`Resolved from reference_image_id: ${fromReferenceId}`);
  console.log(`Resolved from /images/search: ${fromSearch}`);
  console.log(`Unresolved breeds: ${unresolved}`);
  console.log(`Wrote ${Object.keys(overrides).length} breed image overrides to ${OUTPUT_FILE}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
