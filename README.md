# ระบบ Jigsaw CAPTCHA ด้วย Geetest

โปรเจกต์นี้เป็นการใช้งาน **Jigsaw CAPTCHA** ผ่าน **Geetest API**  
ช่วยเพิ่มความปลอดภัยให้กับเว็บไซต์ของคุณโดยป้องกันบอทและพฤติกรรมที่เป็นอันตราย

---

## 🚀 คุณสมบัติเด่น
✅ ระบบ **ลากและปล่อยจิ๊กซอว์ (Jigsaw CAPTCHA)**  
✅ ใช้งานง่ายกับ **HTML, JavaScript, PHP**  
✅ เชื่อมต่อกับ **Geetest API** เพื่อป้องกันบอท  

---

## 📖 วิธีสมัครและขอ API Key จาก Geetest

หากต้องการใช้งาน CAPTCHA จาก Geetest ให้ทำตามขั้นตอนนี้:

### **1. สมัครสมาชิก Geetest**
1. ไปที่เว็บไซต์ **[Geetest](https://www.geetest.com/en)**
2. คลิก **"Sign Up"** เพื่อสมัครบัญชี
3. เข้าสู่ระบบและไปที่ **[Geetest Dashboard](https://account.geetest.com/)**

---

### **2. สร้างแอปพลิเคชันใหม่**
1. คลิก **"Add a New Site"**
2. กรอกข้อมูลดังนี้:
   - **ชื่อเว็บไซต์ (Site Name)**: เช่น `"My Website"`
   - **โดเมน (Domain)**: เช่น `localhost` หรือ `yourwebsite.com`
   - **ประเภท (Type)**: เลือก `Slider CAPTCHA`
   - **Callback URL**: สามารถเว้นว่างได้ (ถ้าไม่ต้องการใช้งาน Callback)
3. กด **"Submit"** เพื่อบันทึก

---

### **3. รับ API Key**
หลังจากสมัครเรียบร้อย คุณจะได้รับค่า:
- **`gt` (Public Key)**
- **`challenge`**
- **Private Key** (ใช้สำหรับตรวจสอบฝั่งเซิร์ฟเวอร์)

---
