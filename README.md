# EventManagement

## Setup Instructions

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [MongoDB](https://www.mongodb.com/) 

**Backend Setup**

Clone the repository:
```
git clone https://github.com/Disha-1751999/EventManagement.git
```

Navigate to the backend directory:
```
cd backend
```

Install dependencies:
```
npm install
```

Create a .env file with the following variables:
```
PORT= 5000
DATABASE='mongodb+srv://dishadas4161:dishadas4161@cluster0.hvta8.mongodb.net/events?retryWrites=true&w=majority'
ORIGIN='http://localhost:5173'


```

Start the server:
```
nodemon index.js
```


**Frontend Setup**

Navigate to the frontend directory:
```
cd frontend
```

Install dependencies:
```
npm install
```

Create a .env file with the following variables:
```
VITE_SERVER_URL='http://localhost:5000'

```

Start the server:
```
npm run dev
```

