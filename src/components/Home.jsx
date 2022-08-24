import React from "react";
import s from "./home.module.css"
import { Link } from "react-router-dom";


import { info } from "../info/info"


export default function Home() {
    return (
        <div className={s.container} >
            <div className={s.link}>
                <Link style={{ "text-decoration": "none" }} to={"/form"}><button className={s.button}>Ir al formulario</button></Link>
            </div>
            <div className={s.table}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Carrera</th>
                            <th scope="col">Hobbie</th>
                        </tr>
                    </thead>

                    {info?.map((e) => {
                        return (
                            <tbody key={e.nombre}>
                                <tr>
                                    <td>{e.nombre}</td>
                                    <td>{e.edad}</td>
                                    <td>{e.carrera}</td>
                                    <td>{e.hobbie}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}