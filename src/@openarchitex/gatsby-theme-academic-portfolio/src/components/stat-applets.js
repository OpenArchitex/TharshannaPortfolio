import React from "react"
import StatAppletsMDX from "../../sections/stat-applets"
import {Box, Grid} from "theme-ui";

const StatApplets = () => (
    <Grid
        pt={50}
        pb={50}
        pl={4}
        pr={4}
        id="stat-applets"
    >
        <Box>
            <StatAppletsMDX />
        </Box>
    </Grid>
)

export default StatApplets;