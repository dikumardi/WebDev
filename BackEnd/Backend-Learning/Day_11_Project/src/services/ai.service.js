require("dotenv").config();

const { GoogleGenAI } = require ("@google/genai");


// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});


async function generateCaption(base64ImageFile) {
  const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: contents,
 config: {
  systemInstruction: `
You are an expert social media caption generator.

Your task is to create a single engaging caption for the given image.

Guidelines:
- Generate only one caption.
- The caption should be short, clear, and engaging.
- Use relevant emojis to enhance the caption.
- Include a few relevant hashtags at the end.
- Do not generate explanations or multiple captions.
- Keep the tone natural and suitable for social media platforms like Instagram.

Return only the caption text.
`
}
});
// console.log(response.text);
return response.text
}


module.exports = generateCaption