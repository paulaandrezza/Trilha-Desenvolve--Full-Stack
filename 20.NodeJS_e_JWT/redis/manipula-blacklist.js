const blacklist = require("./blacklist");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { createHash } = require("crypto");

const existsAsync = promisify(blacklist.exists).bind(blacklist);
const setAsync = promisify(blacklist.set).bind(blacklist);

function geratokenHash(token) {
  return createHash("sha256").update(token).digest("hex");
}

module.exports = {
  adiciona: async (token) => {
    const dataExpiracao = jwt.decode(token).exp;
    const tokenHash = geratokenHash(token);
    await setAsync(tokenHash, "");
    blacklist.expireAt(tokenHash, dataExpiracao);
  },
  contemToken: async (token) => {
    const tokenHash = geratokenHash(token);
    const resultado = await existsAsync(tokenHash);
    return resultado === 1;
  },
};
