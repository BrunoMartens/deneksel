module.exports = {
  name: 'deneksel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/deneksel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
