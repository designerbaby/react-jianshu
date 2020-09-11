import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper
} from './style.js'
import { CSSTransition } from 'react-transition-group'
import * as actionCreators from './store/actionCreators'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInpuBlur = this.handleInpuBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载app</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavItem className="right">登陆</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide">
              <NavSearch  className={this.props.focused ? 'focused': ''}
                          onFocus={this.props.handleInputFocus}
                          onBlur={this.props.handleInpuBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'iconfont focused': 'iconfont'}>&#xe650;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe601;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  handleInpuBlur() {
    this.setState({
      focused: false
    })
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInpuBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)