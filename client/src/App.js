import React from 'react';
// Components and pages would be in separate files
import Challenge from './components/Challenge';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
      <h1>Gamified Coding Challenges Platform</h1>
      {/* Other components would be included here as well */}
      <Challenge />
      <Leaderboard />
    </div>
  );
}
const PORT = process.env.PORT || 5001; // Choose a port other than 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default App;
