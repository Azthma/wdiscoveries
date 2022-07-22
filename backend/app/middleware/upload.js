const multer = require("multer");
const path = require('path');
const __basedir = path.resolve();

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

const cityStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/city");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const destinationStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/destinations");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const uploadCityFile = multer({ storage: cityStorage, fileFilter: imageFilter });
const uploadDestinationFile = multer({ storage: destinationStorage, fileFilter: imageFilter });

module.exports = { uploadCityFile, uploadDestinationFile };
