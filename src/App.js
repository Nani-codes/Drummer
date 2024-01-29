import logo from "./logo.jpeg";
import "./App.css";
import Card from "./templates/Card";
import Unis from "./data/Universities.json";
// let Unis = require('./data/Universities.json')

function App() {
  return (
    <div className="App">
      {Unis.map((e)=>(
        <Card 
          imageURL = {e.Logo} 
          title = {e.University_Name} 
          degree = {e.Course_Sub_Type}
          subject = {e.Course_Name}
          Course_Link = {e.Course_Link}
          Application_Link = {e.Application_Link}
          City = {e.City}
          State = {e.State}
          Course_Ranking = {e.Course_Ranking}
          Duration = {e.Duration}
          German_Ranking = {e.German_Ranking}
          Teaching_Language = {e.Teaching_Language}
          Tuition_Fee = {e.Tuition_Fee}
          Type_of_University = {e.Type_of_University}
        />
      ))}
    </div>
  );
}

export default App;
