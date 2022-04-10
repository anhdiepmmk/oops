const sizeOf = require("image-size");
const axios = require("axios").default;
const path = require("path");
const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const createReport = require("docx-templates").default;

const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);

const fillData2Template = async (name, data) => {
  const template = await fs.readFile(`./templates/${name}.docx`);

  const buffer = await createReport({
    template,
    data,
    additionalJsContext: {
      createImage: async (url) => {
        const response = await axios.get(url, {
          responseType: "arraybuffer",
        });

        const imageBase64Str = Buffer.from(response.data, "binary").toString(
          "base64"
        );
        const imageBuffer = Buffer.from(imageBase64Str, "base64");

        const dimensions = sizeOf(imageBuffer);

        return {
          width: dimensions.width / 100,
          height: dimensions.height / 100,
          data: imageBase64Str,
          extension: path.extname(url),
        };
      },
    },
  });

  const file = `./renders/${uuidv4()}.docx`;

  await fs.writeFile(file, buffer);

  return file;
};

const convertDoc2Pdf = async (docx) => {
  const pdf = docx.replace(/\.[^.]+$/, ".pdf");

  const docxBuffer = await fs.readFile(docx);
  const pdfBuffer = await libre.convertAsync(docxBuffer, ".pdf", undefined);

  await fs.writeFile(pdf, pdfBuffer);

  return pdf;
};

const main = async () => {
  const docx = await fillData2Template("bob", {
    msg: "hi mom",
    heading: "This is my animals list",
    animals: [
      {
        name: "dog",
        image:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
      {
        name: "cat",
        image:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
      {
        name: "pig",
        image:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
    ],
  });

  const pdf = await convertDoc2Pdf(docx);

  await fs.unlink(docx);

  console.log("alice", pdf);
};

main()
  .then((e) => console.log("ok"))
  .catch((err) => console.log("error", err));
