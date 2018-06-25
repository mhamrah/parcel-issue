import * as React from "react";
import AuthContext from "../AuthContext";

interface State {
  user: any;
}
interface Props {}
const withAuthentication = Component => {
  return class WithAuthentication extends React.Component<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        user: { name: "foo" }
      };
    }

    componentDidMount() {}

    render() {
      const { user } = this.state;

      return (
        <AuthContext.Provider value={user}>
          <Component />
        </AuthContext.Provider>
      );
    }
  };
};

export default withAuthentication;
