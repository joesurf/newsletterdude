import './TimelineNode.css'
import { useTheme } from '@mui/material';
import { tokens } from '../../../theme';


export function TimelineNode({ data }) {
  const theme = useTheme();
  // eslint-disable-next-line
  const colors = tokens(theme.palette.mode);

  return (
    <div className="blockHead" style={{ width: data.columns * 250 - 50, backgroundColor: colors.primary[100], color: colors.primary[100] }}>
        <span className="blocktext" style={{ color: colors.primary[900] }}>
            {data.title}
        </span>
    </div>
  );
}