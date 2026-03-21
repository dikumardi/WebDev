// Import the Pinecone library
const { Pinecone } = require('@pinecone-database/pinecone')

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

const chatGptIndex = pc.index({ name: 'chat-gpt' });

async function createMemory({ vectors, metadata, messageId }) {
  if (!Array.isArray(vectors) || vectors.length === 0) {
    console.error("Cannot upsert — no vectors available!");
    return;
  }

  try {
    await chatGptIndex.upsert({
      records: [
        {
          id: messageId,   // must be unique
          values: vectors, // your embedding array
          metadata         // optional metadata
        }
      ]
    });
    console.log("Upsert successful!");
  } catch (err) {
    console.error("Error upserting to Pinecone:", err);
  }
}

async function queryMemory({ queryVector, limit = 5, metadata }) {

    const data = await chatGptIndex.query({
        vector: queryVector,
        topK: limit,
        filter: metadata ?  metadata  : undefined,
        includeMetadata: true
    })

    return data.matches

}

module.exports = { createMemory, queryMemory }