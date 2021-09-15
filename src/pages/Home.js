import React, { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Chip from "../components/Chip";
import Main from "../components/Main";


function Home() {
    return (
        <>
            <Sidebar>
                <Layout title={"bonjour"}>
                    <Chip title={"ca va ? bien et toi ?"}/>
                    <Chip title={"ca va ? aussi"}/>
                    <Chip title={"ca va ? merci beaucoup a la prochaine"}/>
                </Layout>
                <Layout column>
                    <Chip title={"ca va ?"}/>
                    <Chip title={"ca va ?"}/>
                    <Chip title={"ca va ?"}/>

                </Layout>
            </Sidebar>
            {/*<Main />*/}
        </>
    )
}

export default Home;
