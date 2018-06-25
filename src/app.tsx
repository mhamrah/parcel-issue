import * as React from "react";
import withAuthentication from "./hoc/withAuthentication";
import Login from "./components/login";

const app = () => <Login />;

export default withAuthentication(app);
