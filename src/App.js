import './App.css';
import Group from './components/Group';

function App() {
  return (
    <div className="App">
      <div className="sidebar_container">
        <div className="navbar">
          <div className="icon_menu">
            <span><i class="fa-solid fa-bars fa-2x"></i></span>
          </div>
          <div className="profile_pic">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div className="g-head">
            <Group h="Analytics" c1="checking" c2="studying" c3="final result" />
          </div>
          <div className="g-head">
            <Group h="evaluator" c1="watching" c2="result" c3="proceed" />
          </div>
          <div className="g-head">
            <Group h="manager" c1="handling" c2="running" c3="verifying" />
          </div>

        </div>
      </div>
      <div className="body_container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci omnis eum iste nostrum corrupti asperiores autem nemo sint enim.</div>
    </div>
  );
}

export default App;
