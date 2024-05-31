import React, { Component } from "react";
import { handleErrorsComponent } from "../../config/Logger/handleErrors";
import NotFound from "./NotFound";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    const errorReact = errorInfo;

    handleErrorsComponent(errorReact);

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      if (process.env.NODE_ENV === "production") {
        return <NotFound />;
      } else {
        return null;
      }
      // return <NotFound />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
