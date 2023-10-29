[![Socket Badge](https://socket.dev/api/badge/npm/package/horizon-lucius)](https://socket.dev/npm/package/horizon-lucius)

## Update Account Run Bot - Cập Nhật Tài Khoản Chạy Bot !!!

[ ENG ]: Running Support For Normal and Titik Accounts (tiktik). Thanks You For Reading 🐧!!!

[ VIE ]: Hỗ Trợ Chạy Cho Tài Khoản Bình Thường và Titik (tiktik). Cảm ơn bạn đã đọc 🐧!!!

## Important - Quan Trọng !

[ ENG ]: This package require NodeJS 14.17.0 to work properly.

[ VIE ]: Gói này yêu cầu NodeJS 14.17.0 để hoạt động bình thường.

## Notification - Thông Báo !

[ ENG ]: This is The Defunct Project fca-horizon-remastered and Redeveloped By Kem !

[ VIE ]: Đây Là Dự Án fca-horizon-remastered Đã Bị Khai Tử và Nhà Phát Triển Lại Bởi Kem !

------------------------------------

+ We will have Example Video on Channel "Nguyễn Thái Hảo Official"

Original Project(Deprecated): https://github.com/Schmavery/facebook-chat-api

Chúc các bạn một ngày tốt lành!
Cảm ơn vì đã sài Sản phẩm của HZI, thân ái.

KANZUWAKAZAKI(15/04/2023)
KEM.REALEST(25/08/2023)

## Support For : 

+ Support English, VietNamese !,
+ All bot if using listenMqtt first.

# API Cho ChatBot Messenger

Facebook Đã Có Và Cho Người Dùng Tạo API Cho Chatbots 😪 Tại Đey => [Đây Nè](https://developers.facebook.com/docs/messenger-platform).

### API Này Có Thể Khiến Cho Bạn Payy Acc Như Cách Acc Bạn Chưa Từng Có, Hãy Chú Ý Nhé =))

Lưu Ý ! Nếu Bạn Muốn Sài API Này Hãy Xem Document Tại [Đây Nè](https://github.com/Schmavery/facebook-chat-api).

## Tải Về 

Nếu Bạn Muốn Sử Dụng, Hãy Tải Nó Bằng Cách:
```bash
npm i horizon-lucius
```
or
```bash
npm install horizon-lucius
```

Nó Sẽ Tải Vô node_modules (Lib Của Bạn) - Lưu Ý Replit Sẽ Không Hiện Đâu Mà Tìm 😪
```javascript
//Tuỳ thuộc vào file thì nó sẽ hiện node_module nhé🐧
```

## Tải Về Version Của Package Theo Ý Của Bạn

Nếu Bạn Muốn Sử Dụng, Hãy Tải Nó Bằng Cách:
```bash
npm i horizon-lucius@versions
```
or
```bash
npm install horizon-lucius@versions
```

Nó Sẽ Tải Vô node_modules theo version của bạn tải (Lib Của Bạn) - Lưu Ý Replit Sẽ Không Hiện Đâu Mà Tìm 😪
```javascript
//Tuỳ thuộc vào file thì nó sẽ hiện node_module nhé 🐧
```

### Tải Bản Mới Nhất Hoặc Update

Nếu Bạn Muốn Sử Dụng Phiên Bản Mới Nhất Hay Cập Nhật Thì Hãy Vô Terminal Hoặc Command Promt Nhập :
```bash
npm i horizon-lucius@latest
```
Hoặc
```bash
npm install horizon-lucius@latest
```

## Nếu Bạn Muốn Test API 

Lợi Ích Cho Việc Này Thì Bạn Sẽ Không Tốn Thời Gian Pay Acc Và Có Acc 😪
Hãy Sử Dụng Với Tài Khoản Thử Nghiệm => [Facebook Whitehat Accounts](https://www.facebook.com/whitehat/accounts/).

## Cách Sử Dụng

```javascript
const login = require("horizon-lucius"); // lấy từ lib ra 

// đăng nhập
login({email: "Gmail Account", password: "Mật Khẩu Facebook Của Bạn"}, (err, api) => {

    if(err) return console.error(err); // trường hợp lỗi

    // tạo bot tự động nhái theo bạn:
    api.listenMqtt((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });

});
```

Kết Quả Là Nó Sẽ Nhái Bạn Như Hình Dưới:
<img width="517" alt="screen shot 2016-11-04 at 14 36 00" src="https://cloud.githubusercontent.com/assets/4534692/20023545/f8c24130-a29d-11e6-9ef7-47568bdbc1f2.png">

Nếu Bạn Muốn Sử Dụng Nâng Cao Thì Hãy Sử Dụng Các Loại Bot Được Liệt Kê Ở Trên !

## Danh Sách

Bạn Có Thể Đọc Full API Tại => [Here](DOCS.md).

## Cài Đặt Cho Mirai: 

Bạn Cần Vô File Mirai.js Hoặc Main.js,... Sau Đó Tìm Đến Dòng:
```js
    const | var login = require('tùy bot'); 
    /* Có thể là :
  const | var login = require('@maihuybao/fca-Unofficial');
  const | var login = require('fca-xuyen-get');
  const | var login = require('fca-unofficial-force');
  const | var login = require('fca-disme');
  const | var login = require('...');
    ...   
    */
```

Và Thay Nó Bằng:

```js
    const | var login = require('horizon-lucius')
```

Sau Đó Thì Chạy Bình Thường Thôi  !

## Tự Nghiên Cứu

Nếu Bạn Muốn Tự Nghiên Cứu Hoặc Tạo Bot Cho Riêng Bạn Thì Bạn Hãy Vô Cái Này Đọc Chức Năng Của Nó Và Cách Sử Dụng => [Link](https://github.com/Schmavery/facebook-chat-api#Unofficial%20Facebook%20Chat%20API)

------------------------------------

### Lưu Lại Thông Tin Đăng Nhập.

Để Lưu Lại Thì Bạn Cần 1 AppState Kiểu (Cookie, etc,..) Để Lưu Lại Hoặc Là Sử Dụng Mã Login Như Trên Để Đăng Nhập !

Và Chế Độ Này Đã Có Sẵn Trong 1 Số Bot Việt Nam Nên Bạn Cứ Yên Tâm Nhé !

__Hướng Dẫn Với AppState__

```js
const fs = require("fs");
const login = require("horizon-lucius");

var credentials = {email: "FB_EMAIL", password: "FB_PASSWORD"}; // thông tin tài khoản

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // đăng nhập
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState(), null,'\t')); //tạo appstate
});
```

Hoặc Dễ Dàng Hơn ( Chuyên Nghiệp ) Bạn Có Thể Dùng => [c3c-fbstate](https://github.com/c3cbot/c3c-fbstate) Để Lấy FbState And Rename Lại Thành AppState Cũng Được ! (appstate.json)

------------------------------------

## FAQS

FAQS => [Link](https://github.com/Schmavery/facebook-chat-api#FAQS)