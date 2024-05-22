type UserG = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: Partial<UserG>) {
    // Оновлення користувача
  }
  
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });