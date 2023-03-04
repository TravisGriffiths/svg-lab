import * as d3 from "d3"

import { convertToNumberArray } from "../utils"

interface PieChartProps {
    wedges: string;
}

interface StartStopsDeg {
    start: number;
    stop: number;
}

export const PieChart: React.FC<PieChartProps> = ({ wedges }) => {
    const values = convertToNumberArray(wedges)
    const max = d3.max(values)
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(150).padAngle(0).padRadius(20).cornerRadius(2)
    if (!max) return null
    const range = d3.scaleLinear().domain([0, max]).range([0, 2*Math.PI])
    const center = {x: 300, y: 200}
    const arcsEdges = [0, ...values].map((v) => range(v))
    console.table(arcsEdges)
    const arcVals: StartStopsDeg[] = values.map((v, idx) => ({start: arcsEdges[idx], stop: range(v)}))

    console.table(arcVals)
    const arcs = arcVals.map((v) => arcGenerator({
        innerRadius: 5, 
        outerRadius: 150,
        startAngle: v.start, 
        endAngle: v.stop})).filter(Boolean) as string[]

    return (
        <svg height={400} width={600} >
            <g transform={`translate(${center.x}, ${center.y})`}>
               { arcs.map((arc) => <path stroke="white" strokeWidth={2} fill="blue" d={arc}></path>)
  
               }
            </g>

        </svg>
    )
}