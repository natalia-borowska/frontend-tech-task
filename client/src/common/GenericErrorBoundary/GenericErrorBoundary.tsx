import React, {ReactNode} from 'react';

interface IProps {
  children: ReactNode;
}

interface IState {
  error: boolean;
}

class GenericErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      error: false,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(`Application error: ${errorInfo.componentStack}`)
  }

  getDerivedStateFromError() {
    return {
      error: true,
    }
  }

  render() {
    if (this.state.error) {
      return (
      <div>
        <p>Sorry, something went wrong. Please reload the page</p>
      </div>);
    }

    return this.props.children;
  }
}

export default GenericErrorBoundary;
