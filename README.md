# Simple Hot Reloader

Sayonara to Switch Tab + Reload, this is the future of web designing.

*This README using Indonesian Language. I'll make the English version as soon as possible. Thank you!*

## Apa ini?

Kalian capek Switch Tab + Reload mulu buat cek desain mu? Ini ada salah satu solusinya bagi kalian para desainer pemalas.

## Struktur Folder

> Tak kenal maka tak sayang, tak sayang maka tak cinta.
Sebelum memulai, alangkah baiknya kita mengenal gimana struktur foldernya
```
simple-hot-reload (root)
| node_modules -> Tempat nyimpen modul dari nodejs
| public       -> Tempat kalian ngedesain
  | dist       -> Tempat output file min.js dan min.css hasil compile dari folder js dan sass
                  Ah iya, kalian bisa naruh file macam Bootstrap/Popper/jQuery/Moment atau yang lainnya
                  buat bantu kalian ngedesain.
  | js         -> Tempat kalian naruh file JS untuk desain web kalian.
  | sass       -> Tempat kalian naruh file SCSS untuk memperindah web kalian.
  | index.html -> Ruang kerja HTML kalian.
| gulpfile.js  -> Automatisasi yang bekerja untuk melayani request kalian
| package.json -> Rincian singkat tentang aplikasi ini, tapi di bagian author, kalian bisa
                  mengubah nama anda di sana.
```

Kalian pasti bertanya-tanya, **kenapa mesti pake SASS dan bukan pake CSS**? Karena kebetulan saya hanya menguasai SASS saja, akan tetapi semisalnya anda tidak mengetahui SASS dan hanya mengetahui CSS biasa, gapapa kok. Terhitung valid itu.

## Cara Pakai

1. Kalian clone dulu repo ini.
2. Jalankan perintah ini:
```
npm install
npm start
```
3. Hot reload telah siap, silahkan fokus ke folder Public dan bersenang-senanglah!

## Give me a coffee, please?
Buat kode ini pastinya bikin lapar bos, kalau baik nih bolehlah [satu gelas kopi lah untuk saya hehehe.](https://www.paypal.me/sirienz)

## License
This project using GNU Affero General Public License v3.0. If a violation is found in it, we'll crack down according to local legal regulations. This project was signed by Ikramullah Latif <45F6D4DF8F571384>.