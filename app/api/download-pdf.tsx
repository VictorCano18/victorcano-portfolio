import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.resolve('../../public/CCV_VíctorCano_SoftwareDeveloper.pdf');

  // Stream the file to the response
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
};
