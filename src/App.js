import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";
import "./App.css";

const PROJECTID = "d7168288-f7bd-4871-9f5e-dd8b0b28e6ad";
export const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={PROJECTID}
      userName="User_1"
      userSecret="123123" // This is the same as the password
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
