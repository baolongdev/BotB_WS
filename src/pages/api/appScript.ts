// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_BGXrJE6WnHhIcBbbgG-jMjxCvAvMluh8YxFjCZFvvjBL6w8dmJpukJ4XhZdDBd8z/exec';
type ResponseData = {
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Error fetching data from Google Apps Script:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
export default handler;