import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'No message provided' });
    }

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Updated model to gpt-4
        messages: [{ role: 'user', content: message }],
      });

      const reply = completion.choices[0].message?.content?.trim();
      return res.status(200).json({ reply });
    } catch (error) {
      console.error('Error communicating with OpenAI API:', error);
      return res.status(500).json({ error: 'Error communicating with OpenAI API' });
    }
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
