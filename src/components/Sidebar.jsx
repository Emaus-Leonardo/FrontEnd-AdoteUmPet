import React from "react";
import {
  FaHome,
  FaDog,
  FaUserAlt,
  FaHandHoldingHeart,
  FaChartBar,
  FaRegWindowClose,
  FaSignInAlt,
  FaListUl,
  FaBoxOpen,
} from "react-icons/fa";
import "./Sidebar.css";
import { SidebarItem } from "./SidebarItem";
import { Link } from "react-router-dom";

export function Sidebar({ active }) {
  return (
    <div className={`container-sidebar ${active}`}>
      <div className="content-sidebar">
        <Link to="/">
            <SidebarItem Icon={FaHome} Text="Home" />
        </Link>
        <Link to="/login">
            <SidebarItem Icon={FaUserAlt} Text="Login" />
        </Link>
        <Link to="/cadastro">
            <SidebarItem Icon={FaSignInAlt} Text="Usuários" />
        </Link>
        {/* <Link to="/pets">
            <SidebarItem Icon={FaDog} Text="Animais" />
        </Link> */}
        <Link to="/cadastro-animal">
            <SidebarItem Icon={FaDog} Text="Cad. Animais" />
        </Link>
        <Link to="/cadastro-voluntario">
            <SidebarItem Icon={FaHandHoldingHeart} Text="Voluntários" />
        </Link>
        <Link to="/designar-voluntario">
            <SidebarItem Icon={FaListUl} Text="Desig. Ativid." />
        </Link>
        <Link to="/cadastro-produto">
            <SidebarItem Icon={FaChartBar} Text="Produtos" />
        </Link>
        <Link to="/lancar-entrada">
            <SidebarItem Icon={FaBoxOpen} Text="Entradas" />
        </Link>
        <Link to="/cadastro-denuncia">
            <SidebarItem Icon={FaRegWindowClose} Text="Denuncias" />
        </Link>
      </div>
    </div>
  );
}
