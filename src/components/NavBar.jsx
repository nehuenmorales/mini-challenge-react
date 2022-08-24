import React from "react";
import s from "./navBar.module.css"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className={s.nav}>
            <NavLink to={"/"}>
                <p className={s.link} >Inicio</p>
            </NavLink>
            <NavLink to={"/form"}>
                <p className={s.link} >Formulario</p>
            </NavLink>
        </div>
    )
}