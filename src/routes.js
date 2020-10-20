import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Main from  "./pages/Main";
import Book from "./pages/Book";

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        Book
    })
);

export default Routes;