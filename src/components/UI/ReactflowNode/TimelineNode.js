import './TimelineNode.css'

export function TimelineNode({ data }) {

  return (
    <div class="blockHead" style={{ width: data.columns * 250 - 50 }}>
        <span class="blocktext">
            {data.title}
        </span>
    </div>
  );
}