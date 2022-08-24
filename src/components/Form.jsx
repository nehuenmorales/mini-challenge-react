import React, { useState } from "react";
import s from "./form.module.css"

export default function Form() {
    const [input, setInput] = useState({ nombre: "", edad: "", carrera: "" })
    const [error, setError] = useState("")
    const [people, setPeople] = useState([])

    const handleOnChange = (e) => {
        e.preventDefault();
        validator(e.target.value)
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setPeople([...people, input]);
        setInput({ nombre: "", edad: "", carrera: "" })
    }

    const validator = (e) => {
        if (!e) {
            setError("no debe haber campos vacios")
        } else if (e.lengt < 255) {
            setError("excedio el limite de caracteres")
        } else {
            setError("")
        }
    }



    return (
        <div className={s.container}>
            <form className={s.form}>
                <div className={s.input}>
                    <input style={{ "width": "20em" }} type="text" name="nombre"
                        placeholder="Nombre" value={input.nombre} onChange={(e) => handleOnChange(e)} />
                </div>
                <div className={s.input}>
                    <input style={{ "width": "20em" }} type="text" name="edad"
                        placeholder="Edad" value={input.edad} onChange={(e) => handleOnChange(e)} />
                </div>
                <div className={s.input}>
                    <input style={{ "width": "20em" }} type="text" name="carrera"
                        placeholder="Carrera" value={input.carrera} onChange={(e) => handleOnChange(e)} />
                </div>
                <div className={s.submit}>
                    <button className={s.button} disabled={
                        input.nombre.length < 1 ||
                        input.edad.length < 1 ||
                        input.carrera.length < 1
                    } onClick={handleSubmit}>Añadir</button>
                </div>
                {error ? <span>{error}</span> : null}
            </form>
            <div className={s.results}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Carrera</th>
                        </tr>
                    </thead>
                    {
                        people?.map((e) => {
                            return (
                                <tbody key={e.nombre}>
                                    <tr>
                                        <td>{e.nombre}</td>
                                        <td>{e.edad}</td>
                                        <td>{e.carrera}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>


        </div>
    )
}