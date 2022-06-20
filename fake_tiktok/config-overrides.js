const { override, useBabelRc } = require("customize-cra");
//Ghi đè cấu hình webpack vô đây :

module.exports = override(useBabelRc());
