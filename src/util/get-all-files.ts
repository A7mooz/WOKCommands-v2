import fs from 'fs';
import p from 'path';

import { FileData } from '../types';

import { pathToFileURL } from 'url';

const getAllFiles = async (path: string, foldersOnly = false) => {
  const files = fs.readdirSync(path, {
    withFileTypes: true,
  });
  let filesFound: FileData[] = [];

  for (const file of files) {
    const filePath = p.join(path, file.name);

    if (file.isDirectory()) {
      if (foldersOnly) {
        filesFound.push({
          filePath,
          fileContents: file,
        });
      } else {
        filesFound = [...filesFound, ...(await getAllFiles(filePath))];
      }
      continue;
    }
    if (!file.name.endsWith('.js') && !file.name.endsWith('.mjs')) continue;

    const fileContents = await import(`${pathToFileURL(filePath)}`);
    filesFound.push({
      filePath,
      fileContents:
        fileContents?.default?.default || fileContents?.default || fileContents,
    });
  }

  return filesFound;
};

export default getAllFiles;
