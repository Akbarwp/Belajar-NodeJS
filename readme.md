# NPM Konfigurasi

## Install NodeJS
```
> npm init --y
```

## NPM Install
```
> npm install @hapi/hapi
> npm install eslint --save-dev
> npx eslint --init, jawaban:
```
> * How would you like to use ESLint? -> To check, find problems, and enforce code style.
> * What type of modules does your project use? -> CommonJS (require/exports).
> * Which framework did you use? -> None of these.
> * Does your project use TypeScript? -> N.
> * Where does your code run? -> Node (pilih menggunakan spasi).
> * How would you like to define a style for your project? -> Use a popular style guide.
> * Which style guide do you want to follow? -> (Anda bebas memilih, sebagai contoh pilih AirBnB).
> * What format do you want your config file to be in? -> JSON.
```
> npm install nanoid@3.x.x
> npm install newman --g
```

# Testing Web Server API
Gunakan [aplikasi client](http://notesapp-v1.dicodingacademy.com/) untuk dapat testing API web server.

# Testing dengan Newman
Jalankan server NodeJs terlebih dahulu, lalu jalankan perintah berikut:
```
> newman run note-app-nodejs.postman_collection.json --environment note-app-nodejs.postman_environment.json
```