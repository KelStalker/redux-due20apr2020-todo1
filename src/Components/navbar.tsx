import * as React from "react";
import { Menu, Button, List } from "semantic-ui-react";

export interface INavBarProps {}

export default class extends React.Component<INavBarProps> {
  public render() {
    return (
      <Menu>
        <Menu.Item name="Home"></Menu.Item>
        <Menu.Item name="Page1"></Menu.Item>
        <Menu.Item name="Page2"></Menu.Item>
      </Menu>
    );
  }
}
