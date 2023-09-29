import React from "react";
import {FaHome,FaDog,FaChartBar,} from "react-icons/fa";
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
        <Link to="/cadastro-adoção">
            <SidebarItem Icon={FaDog} Text="Cad. Adoção" />
        </Link>
        <Link to="/cadastro-produto">
            <SidebarItem Icon={FaChartBar} Text="Produtos" />
        </Link>

      </div>
    </div>
  );
}
