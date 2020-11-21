import React from "react"
import {Box, Grid} from "theme-ui";
import StatConsultingMDX from "../../sections/stat-consulting";

const StatConsulting = () => (
    <Grid
        pt={50}
        pb={50}
        pl={4}
        pr={4}
        id="stat-consulting"
    >
        <Box>
            <StatConsultingMDX />
        </Box>
    </Grid>
)

export default StatConsulting;