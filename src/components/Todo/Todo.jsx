import { Box } from "@material-ui/core";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import useStyles from "./styles";

const Todo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.todoContainer}>
      <Header></Header>
      <Footer></Footer>
    </Box>
  );
};
