import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import { movies } from './movies.js';

const moviesWithPosters = movies.map(movie => {
  const [id, name, year, rating, genres] = movie;
  return [id, name, rating, genres.split('|')];
}).filter(([ id ]) => {
  const posterPath = `./posters/${id}.jpg`;
  return fs.existsSync(posterPath);
})

fs.writeFileSync('./movies.json', JSON.stringify(moviesWithPosters, null, 2))

const imports = [];
const lookups = [];
moviesWithPosters.forEach(([id, name]) => {
  const slug = _.camelCase(_.deburr(name));
  imports.push(`import ${slug} from './posters/${id}.jpg';`);
  lookups.push(`  ${id}: ${slug},`);
});

fs.writeFileSync('./posters.ts', [
  ...imports,
  '', '',
  'export const posters: {[id: number]: string} = {',
  ...lookups,
  '};',
  '',
].join('\n'));
