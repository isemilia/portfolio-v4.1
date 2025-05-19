import { NextResponse } from 'next/server';
import readJsonFile from '@/shared/utils/functions/read-json-file';

export const GET = async () => {
  try {
    const data = await readJsonFile(
      'src/app/api/work-experience/timeline.json',
    );

    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Internal server error', status: 500 },
      { status: 500 },
    );
  }
};
