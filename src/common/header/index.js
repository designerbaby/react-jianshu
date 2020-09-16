import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoSwitch
} from './style.js'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => {
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
            in={props.focused}
            timeout={200}
            classNames="slide">
            <NavSearch  className={props.focused ? 'focused': ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInpuBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'iconfont focused': 'iconfont'}>&#xe650;</i>
          {getListArea(props.focused)}
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
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