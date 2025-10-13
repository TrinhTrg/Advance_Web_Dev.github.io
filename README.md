Part 1. Cài đặt NPM Package, Tailwind CSS và Vite

NPM viết tắt của "Node Package Manager", là trình quản lý gói cho các ứng dụng JavaScript và Node.js.

 

Các em sẽ được học kỹ về các công cụ này ở phần tiếp theo của khoá học, ở bài này cứ cài đặt và hình dung được cách sử dụng là được.


Đầu tiên tạo file .gitignore (để ý dấu chấm đầu tên, đây gọi là Dot File). Với nội dung như sau 
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?


Mục đích là để tránh commit nhầm những file thư viện sau này khi cài đặt NPM Packages

Tiếp theo, mở Terminal và chạy lệnh sau 
npm init

Lệnh này để khởi tạo file package.json để quản lý các thư viện cần thiết. Khi chạy lệnh, sẽ hỏi nhập thông tin, các bạn nhập tuỳ theo ý mình.



Tiếp theo cài đặt các thư viện cần thiết, chạy lệnh sau vào Terminal
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer vite


Tạo file postcss.config.js với nội dung sau 
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}


Tạo file tailwind.config.js với nội dung sau
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


Tiếp theo, mở file package.json lên. 

Đầu tiên, thay thế propeties scripts bằng đoạn sau 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },


Sau đó thêm dòng sau, dưới propeties name 
"type": "module",

Mục đích là thiết lập các lệnh để chạy trong quá trình phát triển dự án

Tới đây thử chạy lệnh sau: 
npm run dev


Sẽ được kết quả như sau


Lúc này thử mở trình duyệt lên và truy cập vào http://localhost:5174
sẽ thấy được trang của bạn

Tới đây có thể commit code lại, với message là “Setup NPM and Vite”


Part 2. Cấu hình để sử dụng Tailwind CSS

Tạo file src/css/style.css với nội dung sau 
@import "tailwindcss";

html {
    scroll-behavior: smooth;
}

Mục đích là để import các file thư viện của Tailwind CSS

Tạo file src/scripts/application.js với nội dung như sau 
import '../css/style.css'



Mục đích là để load file CSS vào ứng dụng thông qua Javascript
Mở file index.html lên rồi thêm đoạn mã dưới đây vào tận cùng thẻ body ( tức phía trên thẻ đóng của body)
… more code …

   <script type="module" src="/src/scripts/application.js"></script>
</body>
</html>


Tới đây, Kill Process npm run dev trước đây và chạy lại 

Mở File index.html lên, thử chèn đoạn mã sau vào trong thẻ body và lưu lại 
    <div class="flex flex-row justify-center items-center p-12">
      <h1 class="text-5xl text-green-300 animate-bounce">Hello, Tailwind CSS</h1>
    </div>

