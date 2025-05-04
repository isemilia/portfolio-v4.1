import path from 'node:path';
import * as fs from 'node:fs';

const readJsonFile = async (relativePath: string) => {
  const filePath = path.join(process.cwd(), relativePath);

  if (fs.existsSync(filePath)) {
    const file = await fs.promises.readFile(filePath, 'utf-8');

    return JSON.parse(file);
  }

  throw new Error('File could not be read.');
};

export default readJsonFile;
