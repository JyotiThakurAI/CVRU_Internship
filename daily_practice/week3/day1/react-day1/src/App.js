import Welcome from "./components/Welcome";
import WelcomeClass from "./components/WelcomeClass";
import Greeting from "./components/Greeting";
import StudentList from "./components/StudentList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";

import CounterApp from "./componentD3/CounterApp";
import TextInput from "./componentD3/TextInput";
import Toggle from "./componentD3/Toggle";
import ButtonEvent from "./componentD3/ButtonEvent";
import ConditionalMessage from "./componentD3/ConditionalMessage";
import UserForm from "./componentD3/UserForm";

import BasicEffect from "./componentD4/BasicEffect";
import MountEffect from "./componentD4/MountEffect";
import CountDependencyEffect from "./componentD4/CountDependencyEffect";
import TimerCleanupEffect from "./componentD4/TimerCleanupEffect";
import UserList from "./componentD4/UserList";
import Posts from "./componentD4/Posts";


function App() {
  const name = "Jyoti";
  const topic = "React JSX";

  const profiles = [
    {
      name: "Arjun Kumar",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Verma",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Sharma",
      role: "Data Analyst",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div>
      {/* ==================== WEEK 3 - DAY 2 ==================== */}
      <div>
        <h1>Week 3 - Day 2: JSX & Components</h1>
        <p>JSX, Components, Props, Lists & Import/Export</p>
      </div>

      <hr />

      {/* 1. JSX Syntax & Expressions */}
      <div>
        <h2>1. JSX Syntax & Expressions</h2>

        <h1>Hello, React!</h1>
        <h2>Welcome, {name}!</h2>
        <p>Today we are learning {topic}.</p>
      </div>

      <hr />

      {/* 2. Functional Component */}
      <div>
        <h2>2. Functional Component</h2>
        <Welcome />
      </div>

      <hr />

      {/* 3. Class Component */}
      <div>
        <h2>3. Class Component</h2>
        <WelcomeClass />
      </div>

      <hr />

      {/* 4. Props / Task 2 */}
      <div>
        <h2>4. Props</h2>
        <h3>Task 2 - Pass Data as Props</h3>

        <Greeting
          name="Priya"
          topic="React Components"
        />

        <Greeting
          name="Rohan"
          topic="JSX & Props"
        />
      </div>

      <hr />

      {/* 5. Rendering Lists & Keys */}
      <div>
        <h2>5. Rendering Lists & Keys</h2>
        <StudentList />
      </div>

      <hr />

      {/* 6. Importing & Exporting / Task 1 */}
      <div>
        <h2>6. Importing & Exporting Components</h2>
        <h3>Task 1 - Header & Footer</h3>

        <Header />

        <main>
          <h2>Welcome to My React App!</h2>
          <p>This is my first modular React layout.</p>
        </main>

        <Footer />
      </div>

      <hr />

      {/* Task 3 - Profile Cards */}
      <div>
        <h2>Task 3 - Profile Card Component</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <ProfileCard profiles={[profiles[0]]} />
          <ProfileCard profiles={[profiles[1]]} />
        </div>
      </div>

      <hr />

      {/* Bonus - Profile Cards using map() */}
      <div>
        <h2>Bonus - Rendering Profile Cards using map()</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {profiles.map((profile, index) => (
            <div key={index}>
              <ProfileCard profiles={[profile]} />
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* Bonus - Clickable Profile Card */}
      <div>
        <h2>Bonus - Clickable Profile Card</h2>
        <p>Click the card to see the next profile.</p>

        <ProfileCard profiles={profiles} />
      </div>

<hr />

{/* ==================== WEEK 3 - DAY 3 ==================== */}

<div>
  <h1>Week 3 - Day 3: State and React Hooks</h1>
  <p>useState, Events, Input Handling & Conditional Rendering</p>

  <hr />

  {/* Task 1 - Counter App */}
  <div>
    <h2>Task 1 - Simple Counter App</h2>
    <CounterApp />
  </div>
</div>

<hr />

{/* Example - Handling Input */}
<div>
  <h2>Example - Handling Input</h2>
  <TextInput />
</div>

<hr />

{/* Example - Conditional Rendering */}
<div>
  <h2>Example - Conditional Rendering</h2>
  <Toggle />
</div>

<hr />

{/* Example - Button Click Event */}
<div>
  <h2>Example - Button Click Event</h2>
  <ButtonEvent />
</div>  

<hr/>
    {/* Example - Button Click Event*/}
  <div>
    <h2> Example - Button Click Event </h2>
    <ButtonEvent/>
  </div>

  <hr />

{/* Example - Ternary Conditional Rendering */}
<div>
  <h2>Example - Ternary Conditional Rendering</h2>
  <ConditionalMessage />
</div>

<hr />

{/* Task 2 - Registration Form */}
<div>
  <h2>Task 2 - Registration Form</h2>
  <UserForm />
</div>



<hr />

{/* ==================== WEEK 3 - DAY 4 ==================== */}

<div>
  <h1>Week 3 - Day 4: useEffect Hook & Component Lifecycle</h1>
  <p>Side Effects, Dependency Arrays, Cleanup & API Fetching</p>

  <hr />

  <div>
    <h2>Example 1 - useEffect Without a Dependency Array</h2>
    <BasicEffect />
    <hr />
  </div>

  <div>
    <h2>Example 2 - useEffect With an Empty Dependency Array</h2>
    <MountEffect />
    <hr />
  </div>

  <div>
    <h2>Example 3 - useEffect With a Dependency</h2>
    <CountDependencyEffect />
    <hr />
  </div>

  <div>
    <h2>Example 4 - Cleanup With a Timer</h2>
    <TimerCleanupEffect />
    <hr />
  </div>

  <div>
    <h2>Task 1 - Fetch Users From an API</h2>
    <UserList />
    <hr />
  </div>

  <div>
    <h2>Task 2 - Fetch and Display 10 Posts</h2>
    <Posts />
    <hr />
  </div>
</div>

    </div>
  );
}

export default App;