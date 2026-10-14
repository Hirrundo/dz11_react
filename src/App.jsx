import { useState } from 'react';
import UserStatus from './UserStatus';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Статус пользователя</h1>

      <UserStatus isLoggedIn={isLoggedIn} />

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Выйти' : 'Переключить статус'}
      </button>
    </div>
  );
}

export default App;





