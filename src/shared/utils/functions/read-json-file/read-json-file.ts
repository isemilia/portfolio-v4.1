import path from 'node:path';
import * as fs from 'node:fs';

const readJsonFile = async (relativePath: string) => {
  const filePath = path.join(process.cwd(), relativePath);

  if (fs.existsSync(filePath)) {
    const file = await fs.promises.readFile(filePath, 'utf-8');

    try {
      return JSON.parse(file);
    } catch (e) {
      console.error(e);
      throw new Error('File contains invalid JSON')
    }

  }

  throw new Error('File could not be read');
};

export default readJsonFile;
