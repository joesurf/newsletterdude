import './TimelineNode.css'

export function TimelineNode({ data }) {

  return (
    <div class="blockHead">
        <span class="blocktext">
            {data.title}
        </span>
    </div>
  );
}