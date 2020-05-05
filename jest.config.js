module.exports = {
    coverageDirectory: 'coverage',
    setupFilesAfterEnv: ['<rootDir>setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'node',
    verbose: true
};
