import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: {} };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error Logging', error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div
          style={{ position: 'relative', textAlign: 'center', color: 'red' }}
        >
          <h2>Что-то пошло не так...</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error.toString()}
            <br />
          </details>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = { children: PropTypes.node.isRequired };

export default ErrorBoundary;
