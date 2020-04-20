import React from "react";
import NavBar from "./Components/NavBar";


export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <nav className="App">
        <NavBar />
      </nav>
    );
  }
}
