const ImageKit = require("@imagekit/nodejs");

const imagekitClient = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, filename) {
  const response = await imagekitClient.files.upload({
    file:file.toString("base64"),
    fileName: filename,
    folder:'social-ai-Project'
  });

  return response;
}

module.exports = uploadFile;