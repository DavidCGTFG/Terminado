import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Introduce un email valido")
      .required("El email es requerido"),
    password: yup.string().required("La contraseña es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ marginTop: "5rem" }}>
        <img style={{ paddingLeft: "2.5rem" }} src="/oso_triste.png" alt="" />
        <Box
          sx={{
            marginTop: "-10rem",
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            width: "550px",
            height: "450px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              backgroundColor: "#a90034",
              height: "30%",
            }}
          >
            <img
              style={{
                width: "120px",
                height: "100px",
                borderTopLeftRadius: "10px",
              }}
              src="/logo_monte.png"
            />
            <h1 className="title-login">Iniciar Sesión</h1>
          </div>

          <form
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "70%",
            }}
            onSubmit={formik.handleSubmit}
          >
            <TextField
              style={{ margin: "2rem 0 1rem 0", width: "80%" }}
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              style={{ margin: "1rem 0 1rem 0", width: "80%" }}
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              style={{
                position: "absolute",
                bottom: "3rem",
                backgroundColor: "#a90034",
                color: "white",
                borderColor: "white",
              }}
              type="submit"
              variant="outlined"
            >
              Iniciar sesión
            </Button>
          </form>
        </Box>
      </div>
      <Link className="links" to="/main">
      <button className="mi-btn-start">
            
              Iniciar Juego
            
          </button>
          </Link>
    </div>
    
  );
};

export default LoginPage;

