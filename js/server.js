const express = require('express');
const multer = require('multer');
const app = express();

// پیکربندی محدوده ذخیره سازی فایل
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads'); // ذخیره فایل‌ها در پوشه اپلود
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); // نام فایل را بدون تغییر ذخیره می‌کند
  }
});

const upload = multer({ storage: storage });

// پیکربندی سرور

app.use(express.static('public')); // فایل‌های استاتیک را از پوشه public ارائه می‌دهد

app.post('/register', upload.single('resume'), (req, res) => {
  // دسترسی به فرم ارسال شده
  const username = req.body.username;
  const password = req.body.password;
  const resume = req.file; // فایل رزومه
  
  // انجام عملیات مورد نیاز
  
  res.send('با موفقیت ثبت نام شدید!');
});

app.post('/login', (req, res) => {
  // دسترسی به فرم ارسال شده
  const username = req.body.username;
  const password = req.body.password;
  
  // انجام عملیات مورد نیاز
  
  res.send('با موفقیت وارد شدید!');
});

app.listen(3000, () => {
  console.log('سرور شروع شد در درگاه 3000');
});