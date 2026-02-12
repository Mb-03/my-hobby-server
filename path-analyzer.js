import path from "path";

const uploadedFile = "D:\\WebServer\\..\\uploads\\images\\./profile-pic.png";

console.log(path.normalize(uploadedFile));
const fileName = path.basename(uploadedFile);
const fileExtension = path.extname(uploadedFile);

if (fileExtension === ".png" || fileExtension === ".jpg") {
  console.log("image file detected");
} else {
  console.log("unknown file type");
}

console.log(path.join(`my-hobby-server/static/${fileName}`));
