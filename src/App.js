import './App.css';
import {ReminderList} from "./components/ReminderList";
import {GlobalSnackbar} from "./components/GlobalSnackbar";

function App() {
    return (
        <div className="App">
            <ReminderList/>
            <GlobalSnackbar/>
        </div>
    );
}

export default App;
