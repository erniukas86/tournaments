/* eslint-disable node/handle-callback-err */
const translationsFolder = './src/lang/translations';
const fs = require('fs');
const { translationKeys } = require('../src/lang/keys');

fs.readdir(translationsFolder, (err, files) => {
  files.forEach(readFile);
});

function readFile (fileName) {
  const filePath = `${translationsFolder}/${fileName}`;
  fs.readFile(filePath, 'utf8', (err, data) => updateTranslations(data, filePath));
}

function updateTranslations (data, filePath) {
  let translations = {};

  if (data) {
    translations = JSON.parse(data);
  }

  const result = {};

  Object.values(translationKeys).forEach(translationKey => {
    result[translationKey] = translations[translationKey] || '';
  });

  fs.writeFile(filePath, JSON.stringify(result, null, 4), 'utf8', () => {});
};
