import { Box, Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [getEmail, setGetEmail] = useState('')
    const [getPassword, setGetPassword] = useState('')
    const [errorMsg,setErrorMsg] = useState(false)
    // const navigate = useNavigate();
    const handleSubmit = () => {

        if (getEmail?.trim().length > 0 && getPassword?.trim().length > 0) {
            localStorage.setItem(
                "userData",
                JSON.stringify({
                    userName: getEmail,
                    password: getPassword
                })
            );
            
            window.location.reload();
        } else {
            setErrorMsg(true);
        }

    }
    const handleChanges = (e) => {
        console.log("******", e.target.value);
        if (e.target.name == 'username') {
            setGetEmail(e.target.value)
        } else {
            setGetPassword(e.target.value)
        }
    }
    return (
        <>

            <Box>

                <Grid container padding={3}>
                    <img
                        src="logo.png"
                    ></img>
                </Grid>
                <Grid
                    container
                    padding={4}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    alignItems={"center"}
                    spacing={1}
                >
                    <Grid item justifyContent={"start"}>
                        <Typography
                            sx={{ fontWeight: "bold", fontSize: "20px" }}
                            color={"#1b77d7"}
                        >
                            Welcome back!{" "}
                        </Typography>
                        {errorMsg && errorMsg ? (
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "15px",
                                    }}
                                    color={"#FF0000"}
                                >
                                    Invalid Credential
                                </Typography>
                            ) : (
                                ""
                            )}
                    </Grid>
                </Grid>
                <Box sx={{ "& .MuiTextField-root": { width: "40ch" } }}>
                    <Grid
                        container
                        display="flex"
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                        spacing={1}
                    >
                        <Grid item>
                            <Grid item>
                                <FormControl
                                    sx={{ m: 1, width: "40ch" }}
                                    variant="standard"
                                >
                                    <InputLabel>Business Email</InputLabel>
                                    <Input
                                        label="username"
                                        id="full-width-text-field"
                                        type={"username"}
                                        name="username"
                                        onChange={handleChanges}
                                    />
                                </FormControl>
                            </Grid>
                            <Typography
                                sx={{
                                    color: "#FF0000",
                                    fontSize: "12px",
                                    pl: 1,
                                }}
                            >

                            </Typography>
                        </Grid>
                        <Grid item>
                            <FormControl
                                sx={{ m: 1, width: "40ch" }}
                                variant="standard"
                            >
                                <InputLabel htmlFor="standard-adornment-password">
                                    Password
                                </InputLabel>
                                <Input
                                    label="password"
                                    id="full-width-text-field"
                                    // type={
                                    //     values.showPassword
                                    //         ? "text"
                                    //         : "password"
                                    // }

                                    name="password"
                                    onChange={handleChanges}
                                />
                            </FormControl>

                        </Grid>

                        <Grid p={2}>
                            <Button
                                type="submit"
                                variant="contained"

                                sx={{
                                    width: "320px",
                                    backgroundColor: "#1b77d7",
                                }}
                                onClick={handleSubmit}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                <Grid
                    container
                    display="flex"
                    flexDirection={"row"}
                    justifyContent={"center"}
                    pr={21}
                >
                    <Typography
                        style={{ cursor: "pointer" }}
                        sx={{ color: "#0000FF", fontWeight: "bold", pr: 4 }}
                    >
                        <Button >
                            Forgot Password?
                        </Button>
                    </Typography>
                </Grid>

                <Grid
                    container
                    display="flex"
                    flexDirection={"row"}
                    justifyContent={"center"}
                    pr={10.5}
                    pt={4}
                >
                    <Grid item>
                        <Typography sx={{ pt: 0.8 }}>
                            Don't have an account?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            style={{ cursor: "pointer" }}

                            sx={{
                                color: "#1b77d7",
                                fontWeight: "bold",
                                pt: 0.8,
                                pl: 0.5,
                            }}
                        >
                            Sign Up
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LoginPage