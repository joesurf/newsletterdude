import { Box } from "@mui/material";
import { useEffect } from "react"

export default function SenjaEmbed(props) {
	let lazy = false;

		// Inject Senja script into the head of the dom
    useEffect(() => {
				// Check if the script is already in the head of the dom
        let script = document.querySelector(
            `script[src="https://static.senja.io/dist/platform.js"]`
        );

        if (script) return;

        script = document.createElement("script")
        script.src = "https://static.senja.io/dist/platform.js";
        script.async = true
        script.type = "text/javascript"
        document.body.append(script);
    }, []);

    return (
        <Box width={props.width}>
            <div className="senja-embed" data-id={props.id} data-lazyload={lazy}></div>
        </Box>
    )
}