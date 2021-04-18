import React from "react"
import { default as TeachingMDX } from "../sections/teaching"
import {Box, Grid} from "theme-ui";

const Teaching = () => (
    <Grid
        pt={50}
        pb={50}
        pl={4}
        pr={4}
    >
        <Box>
            <TeachingMDX />
        </Box>
    </Grid>
)

export default Teaching;