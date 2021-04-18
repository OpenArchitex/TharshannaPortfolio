import React from "react"
import { default as AboutMDX } from "../sections/about"
import {Box, Grid} from "theme-ui";

const About = () => (
    <Grid
        pt={50}
        pb={50}
        pl={4}
        pr={4}
    >
        <Box>
            <AboutMDX />
        </Box>
    </Grid>
)

export default About;