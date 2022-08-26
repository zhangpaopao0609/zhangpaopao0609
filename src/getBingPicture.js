const axios = require("axios");

const bingPrefixUrl = "https://www.bing.com";
const whichOne = 3;
const imageInfoUrl = `${bingPrefixUrl}/HPImageArchive.aspx?format=js&idx=0&n=${whichOne}`;

async function getBingPicture() {
  try {
    const {
      data: { images },
    } = await axios.request({ url: imageInfoUrl });

    const imageUrl = `${bingPrefixUrl}${images[whichOne - 1].url}`;
    return imageUrl;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getBingPicture;
