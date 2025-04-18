import { NextResponse } from 'next/server';
import path from 'node:path';
import * as fs from 'node:fs';

export const GET = async () => {
  const filePath = path.join(
    process.cwd(),
    'src/app/api/projects/projects.json',
  );

  if (fs.existsSync(filePath)) {
    const file = await fs.promises.readFile(filePath, 'utf-8');

    return NextResponse.json({
      data: JSON.parse(file),
    });
  }

  return NextResponse.json(
    { error: 'Internal server error', status: 500 },
    { status: 500 },
  );
};
