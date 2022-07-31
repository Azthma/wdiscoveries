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

const delicacyStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/delicacy");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const activityStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/activity");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const mangaStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/manga");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const mangaListStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/manga/list");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const uploadCityFile = multer({ storage: cityStorage, fileFilter: imageFilter });
const uploadDestinationFile = multer({ storage: destinationStorage, fileFilter: imageFilter });
const uploadDelicacyFile = multer({ storage: delicacyStorage, fileFilter: imageFilter });
const uploadActivityFile = multer({ storage: activityStorage, fileFilter: imageFilter });
const uploadMangaFile = multer({ storage: mangaStorage, fileFilter: imageFilter });
const uploadMangaListFile = multer({ storage: mangaListStorage, fileFilter: imageFilter });

module.exports = { uploadCityFile, uploadDestinationFile, uploadDelicacyFile, uploadActivityFile, uploadMangaFile, uploadMangaListFile };
