import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../repositories/products/models/product.js";
import Comment from "../repositories/comments/models/comment.js";
import Video from "../repositories/videos/models/video.js";

dotenv.config();

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
const db = mongoose.connection;

let videos = [];
let products = [];
let comments = [];

videos[0] = new Video({
  videoID: "1",
  urlThumbnail: "https://i3.ytimg.com/vi/FyYDziEB-u4/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=FyYDziEB-u4",
});
videos[1] = new Video({
  videoID: "2",
  urlThumbnail: "https://i3.ytimg.com/vi/wryyPIXDV4I/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=wryyPIXDV4I",
});
videos[2] = new Video({
  videoID: "3",
  urlThumbnail: "https://i3.ytimg.com/vi/3dtEALr3L_g/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=3dtEALr3L_g",
});
videos[3] = new Video({
  videoID: "4",
  urlThumbnail: "https://i3.ytimg.com/vi/IBvf7KUEZ78/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=IBvf7KUEZ78",
});
videos[4] = new Video({
  videoID: "5",
  urlThumbnail: "https://i3.ytimg.com/vi/0LtswlrzWIw/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=0LtswlrzWIw",
});
videos[5] = new Video({
  videoID: "6",
  urlThumbnail: "https://i3.ytimg.com/vi/QQVa4xCf8JY/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=QQVa4xCf8JY",
});
videos[6] = new Video({
  videoID: "7",
  urlThumbnail: "https://i3.ytimg.com/vi/5bpPtbp13Uc/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=5bpPtbp13Uc",
});
videos[7] = new Video({
  videoID: "8",
  urlThumbnail: "https://i3.ytimg.com/vi/zGY54qKHjuE/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=zGY54qKHjuE",
});
videos[8] = new Video({
  videoID: "9",
  urlThumbnail: "https://i3.ytimg.com/vi/gXYsM_fGDMU/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=gXYsM_fGDMU",
});
videos[9] = new Video({
  videoID: "10",
  urlThumbnail: "https://i3.ytimg.com/vi/aniGXzldSfk/maxresdefault.jpg",
  urlVideo: "https://www.youtube.com/watch?v=aniGXzldSfk",
});

products[0] = new Product({
  productID: "1",
  linkProduct:
    "https://www.tokopedia.com/brotherholicstor/baju-kaos-hitam-lengan-pendek-baju-kaos-ditro-hitam-putih",
  title: "Baju kaos hitam lengan pendek / Baju kaos ditro hitam - Putih",
  price: 20000,
  videoID: "1",
});
products[1] = new Product({
  productID: "2",
  linkProduct:
    "https://www.tokopedia.com/oshifureru/arknights-nian-dragon-bubble-plush-23cm-fp",
  title: "Arknights Nian Dragon Bubble Plush (23cm)",
  price: 524025,
  videoID: "2",
});
products[2] = new Product({
  productID: "3",
  linkProduct:
    "https://www.tokopedia.com/fureru/arknights-dusk-running-dragon-bubble-key-chain-plush-12cm-full-payment",
  title: "Arknights Dusk Running Dragon Bubble Key Chain Plush (12cm)",
  price: 215625,
  videoID: "2",
});
products[3] = new Product({
  productID: "4",
  linkProduct:
    "https://www.tokopedia.com/verry-lie/samsung-led-tv-32-inch-dvb-t2-32t4001-usb-movie-resmi",
  title: "SAMSUNG LED TV 32 INCH DVB-T2 32T4001 [USB MOVIE] - RESMI",
  price: 1583401,
  videoID: "3",
});
products[4] = new Product({
  productID: "5",
  linkProduct:
    "https://www.tokopedia.com/nlkr5/ac-aqua-japan-1-2-pk-pasang-instalasi-kr5-ane-0-5-pk-unit-pasang",
  title:
    "AC AQUA JAPAN 1/2 pk + PASANG INSTALASI Kr5 ane 0.5 pk - UNIT + PASANG",
  price: 2695000,
  videoID: "3",
});
products[5] = new Product({
  productID: "6",
  linkProduct:
    "https://www.tokopedia.com/seisapilamaleraemong/sei-sapi-100gr-slice",
  title: "Sei Sapi 100gr slice",
  price: 45000,
  videoID: "4",
});
products[6] = new Product({
  productID: "7",
  linkProduct:
    "https://www.tokopedia.com/freshpasta/sei-sapi-asap-morteza-khas-ntt-kupang-halal-sambal-ijo",
  title: "sei sapi asap morteza khas ntt kupang halal - sambal ijo",
  price: 69600,
  videoID: "4",
});
products[7] = new Product({
  productID: "8",
  linkProduct:
    "https://www.tokopedia.com/msi-official/msi-gf63-thin-11uc-i7-11800h-rtx3050-15-6-fhd-ips-level-144hz",
  title: `MSI GF63 Thin 11UC i7-11800H RTX3050 15.6" FHD IPS-Level 144Hz`,
  price: 11499000,
  videoID: "5",
});
products[8] = new Product({
  productID: "9",
  linkProduct:
    "https://www.tokopedia.com/thinkpadofficial/lenovo-v14-gen-2-itl-core-i5-1135g7-8gb-512ssd-14-0-hd-free-dos-3aid-8gb-ram-normal-bundling",
  title:
    "Lenovo V14 Gen 2 ITL Core I5-1135G7 8GB 512SSD 14.0 HD Free Dos 3AID - 8GB RAM, Normal Bundling",
  price: 8199000,
  videoID: "5",
});
products[9] = new Product({
  productID: "10",
  linkProduct:
    "https://www.tokopedia.com/nvidiageforcelt/lenovo-legion-pro-5-16-geforce-rtx-4070-i7-13700hx-32gb-1tb-tanpa-antigores-32gb-0436c",
  title:
    "Lenovo Legion Pro 5 16 GeForce RTX™ 4070 - I7 13700HX 32GB 1TB - TANPA ANTIGORES, 32GB",
  price: 31649000,
  videoID: "5",
});

comments[0] = new Comment({
  username: "andersenss",
  comment: "wah mantep bangett!!",
  videoID: "1",
});
comments[1] = new Comment({
  username: "justok",
  comment: "suka banget sih ini",
  videoID: "1",
});
comments[2] = new Comment({
  username: "toktok",
  comment: "apaan tuh",
  videoID: "2",
});
comments[3] = new Comment({
  username: "koko_melon",
  comment: "awokaowkak",
  videoID: "1",
});
comments[4] = new Comment({
  username: "musiklopers",
  comment: "bagus bangettt!",
  videoID: "2",
});
comments[5] = new Comment({
  username: "anjayghale",
  comment: "daging banget",
  videoID: "3",
});
comments[6] = new Comment({
  username: "nggasuka",
  comment: "beneran ngga tuh",
  videoID: "4",
});
comments[7] = new Comment({
  username: "kokokola",
  comment: "gue banget",
  videoID: "6",
});
comments[8] = new Comment({
  username: "akomid",
  comment: "lucu",
  videoID: "9",
});
comments[9] = new Comment({
  username: "saha",
  comment: "lol",
  videoID: "7",
});

function check(i) {
  if (i == 10) {
    process.exit();
  }
}

videos.forEach(async (p, i = 0) => {
  await videos[i].save();
  i++;
});

products.forEach(async (p, i = 0) => {
  await products[i].save();
  i++;
});

comments.forEach(async (p, i = 0) => {
  await comments[i].save();
  i++;
  check(i);
});
