import { Box, Typography } from '@mui/material'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
const MyResponsiveScatterPlot = ({ data }) => {
    return (<ResponsiveScatterPlot
        data={data}
        margin={{ top: 60, right: 60, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat=">-.2f"
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat=">-.2f"
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '# Subscribers (`00,000)',
            legendPosition: 'middle',
            legendOffset: 46
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Revenue (USD millions)',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        // legends={[
        //     {
        //         anchor: windowWidth < 1000 ? "top-left" : "top-right",
        //         direction: windowWidth < 0 ? "row" : "column",
        //         justify: false,
        //         translateX: windowWidth < 1000 ? -20 : 130,
        //         translateY: windowWidth < 1000 ? -40 : 0,
        //         itemWidth: 100,
        //         itemHeight: 12,
        //         itemsSpacing: 5,
        //         itemDirection: 'left-to-right',
        //         symbolSize: 12,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        tooltip={node => {
            return (
                <Box textAlign="center">
                    <Typography variant="h5" fontWeight="bold">{node.node.data.title}</Typography>
                    <Typography variant="h6">{node.node.serieId}</Typography>
                </Box>
            )
        }}
        onClick={(node) => {
            window.open(node.data.link, '_blank', 'noreferrer')
        }}
    />
    )
}

export default MyResponsiveScatterPlot