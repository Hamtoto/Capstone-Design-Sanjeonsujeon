import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SidebarItem from '../Component/NavItem';

const DevPageContent = styled.div`
	display: flex;
    flex-direction: column;
`
const Menu = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
`

const DevPage = (props) => {
    const menus = [
        { name: "메인", path: "/" },
        { name: "게시판", path: "/board"},
        { name: "로그인", path: "/login"},
        { name: "회원가입", path: "/sginup"},
        { name: "404 페이지", path: "/*"}
      ];

	return (
		<DevPageContent>
			<h1>Dev</h1>
            <Menu>
            {menus.map((menu, index) => {   
                return (
                    <NavLink
                        exact
                        style={{color: "Black", textDecoration: "none", margin: "10px"}}
                        to={menu.path} 
                        key={index}
                        activeStyle={{color: "black"}}
                    >
                        <SidebarItem menu={menu} />
                    </NavLink>
                );
            })}
            </Menu>
		</DevPageContent>
	);
};

export default DevPage;