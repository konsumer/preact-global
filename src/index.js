/** @jsx h */
import { h, Component } from 'preact'

export class GlobalProvider extends Component {
  getChildContext = () => {
    const { children, ...context } = this.props
    context.setGlobal = (k, v) => this.setState({ ...this.state, [k]: v })
    return { ...context, ...this.state }
  }
  render ({ children }) {
    return (children && children[0]) || null
  }
}

export const withGlobal = OrigComponent => {
  OrigComponent.getChildContext = OrigComponent.getChildContext || (() => {})
  class GlobalizedComponent extends Component {
    render () {
      const newProps = {
        ...OrigComponent.getChildContext(),
        ...this.props
      }
      return <OrigComponent {...newProps} />
    }
  }
  return GlobalizedComponent
}
