# ยินดีต้อนรับสู่ React Router!

เทมเพลตสมัยใหม่พร้อมใช้งานจริงสำหรับสร้างแอป React แบบฟูลสแตกด้วย React Router

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## ฟีเจอร์

- เรนเดอร์ฝั่งเซิร์ฟเวอร์ (SSR)
- Hot Module Replacement (HMR)
- บันเดิลและปรับแต่งประสิทธิภาพของไฟล์
- โหลดและมิวเทชันของข้อมูล
- ใช้ TypeScript โดยค่าเริ่มต้น
- ใช้ TailwindCSS สำหรับสไตล์
- เอกสาร [React Router](https://reactrouter.com/)

## เริ่มต้นใช้งาน

### การติดตั้ง

ติดตั้งแพ็กเกจที่จำเป็น:

```bash
npm install
```

### โหมดพัฒนา

เริ่มเซิร์ฟเวอร์พัฒนา (พร้อม HMR):

```bash
npm run dev
```

แอปจะใช้งานได้ที่ `http://localhost:5173`.

## สร้างสำหรับโปรดักชัน

สร้างบิลด์โปรดักชัน:

```bash
npm run build
```

## การดีพลอย

### ดีพลอยด้วย Docker

สั่ง build และรันผ่าน Docker:

```bash
docker build -t my-app .

# รันคอนเทนเนอร์
docker run -p 3000:3000 my-app
```

คอนเทนเนอร์สามารถดีพลอยบนแพลตฟอร์มที่รองรับ Docker เช่น:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### ดีพลอยเอง (DIY)

ถ้าคุณคุ้นเคยกับการดีพลอยแอป Node เซิร์ฟเวอร์ภายในโปรเจกต์นี้พร้อมใช้งานในโปรดักชัน

อย่าลืมดีพลอยผลลัพธ์จากคำสั่ง `npm run build`

```
├─ package.json
├─ package-lock.json (หรือ pnpm-lock.yaml หรือ bun.lockb)
├─ build/
│  ├─ client/    # ไฟล์สแตติก
│  └─ server/    # โค้ดฝั่งเซิร์ฟเวอร์
```

## สไตลิง

เทมเพลตนี้ตั้งค่า [Tailwind CSS](https://tailwindcss.com/) มาให้แล้ว สามารถเปลี่ยนไปใช้เฟรมเวิร์ก CSS ที่คุณถนัดได้

---

สร้างด้วยความรัก และ React Router
