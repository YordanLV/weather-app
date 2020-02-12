import React from 'react'

type State = {
  hasError: boolean
  error: any
}

class ErrorBoundary extends React.Component<{}, State> {
  readonly state: State = {
    hasError: false,
    error: ''
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(e: any) {
    this.setState({
      error: e
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
