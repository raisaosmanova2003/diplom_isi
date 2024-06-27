// const multer=require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix+".jpeg")
//     }
//   })
  
//   const upload = multer({ storage: storage })
//   module.exports ={upload}
const multer = require('multer');
const path = require('path');

// Define the storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination to the 'uploads' directory within the project root
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + ".jpeg");
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Export the upload instance for use in your routes
module.exports = { upload };
