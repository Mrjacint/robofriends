import React, { Component } from 'react'


interface IerrorState {
    hasError: boolean
}

export class ErrorBoundry extends Component<React.ReactNode, IerrorState> {
    constructor(props: React.ReactNode) {
        console.log(props)
        super(props)
        this.state = {
             hasError: false
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ hasError: true })
        console.log(error, errorInfo)
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry
