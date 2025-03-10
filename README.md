# KRIS SOFTWARE CONSULTANCY - Employee Management System

## 🚀 Overview
The **Employee Management System** is a complete solution for managing employees efficiently within **Kris Software Consultancy**. It streamlines the process of **employee hiring, salary management, task assignment, job postings, and much more**. This system provides a robust platform for both **admins and employees** to manage their tasks and track their work seamlessly.

---

## ✨ Features

### 🏢 Admin Features
- ✅ **Employee Hiring**: Admins can add new employees and manage existing ones.
- ✅ **Job Postings**: Post new job openings and manage applications.
- ✅ **Task Assignment**: Assign specific tasks to employees and track progress.
- ✅ **Salary Management**: Process employee salaries and track payments.
- ✅ **User Roles & Permissions**: Secure system with different roles for Admins & Employees.
- ✅ **Employee Profile Management**: View and update employee information.

### 👨‍💼 Employee Features
- ✅ **Dashboard**: View assigned tasks, job postings, and salary details.
- ✅ **Task Status Updates**: Mark tasks as in-progress or completed.
- ✅ **Apply for Jobs**: Employees can apply for internal job postings.
- ✅ **Profile Management**: Update personal details and work information.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/kris-employee-management.git
cd kris-employee-management
```

### 2️⃣ Install Dependencies

#### Frontend Setup
```sh
cd frontend
npm install
```

#### Backend Setup
```sh
cd ../backend
npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file inside the `backend` folder and add the following environment variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_ACCOUNT_NUMBER=your_razorpay_account_number

MAILJET_API_KEY=your_mailjet_api_key
MAILJET_API_SECRET=your_mailjet_api_secret
MAILJET_FROM_EMAIL=your_email@example.com

FRONTEND_URL=http://localhost:5173
```

> **Note:** Do not share your `.env` file publicly. Replace `your_*` with actual credentials before running the project.

### 4️⃣ Start the Project

#### Run Frontend
```sh
npm run dev
```

#### Run Backend
```sh
npm start
```

---

## 📂 Project Structure
```
kris-employee-management/
│── frontend/   # ReactJS Frontend
│── backend/    # NodeJS Express Backend
│── database/   # Database Models & Configuration
│── public/     # Static Assets
│── .env        # Environment Variables
│── README.md   # Project Documentation
```

---

## 🚀 Technologies Used
- **Frontend**: ReactJS, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT & bcrypt.js
- **Styling**: TailwindCSS

---

## 📧 Contact
For any inquiries or support, please reach out to:
- 📩 **rajgandhadinesh@gmail.com**
- 📩 **developersonupr@gmail.com**

---

## 🎉 Contribute
If you’d like to contribute, feel free to fork this repo and submit a pull request! 🚀

