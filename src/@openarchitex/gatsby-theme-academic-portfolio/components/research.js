import React from "react"
import { default as ResearchMDX } from "../sections/research"
import {Box, Grid} from "theme-ui";

const Research = () => (
    <Grid
        pt={50}
        pb={50}
        pl={4}
        pr={4}
    >
        <Box>
            <ResearchMDX />
        </Box>
    </Grid>
)

export default Research;