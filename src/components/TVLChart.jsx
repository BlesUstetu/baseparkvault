import {LineChart,Line,XAxis,YAxis,Tooltip} from "recharts"

const data=[
{t:1,value:1},
{t:2,value:2},
{t:3,value:3},
{t:4,value:2.8},
{t:5,value:3.5}
]

export default function TVLChart(){

return(

<div className="chartBox">

<LineChart width={400} height={200} data={data}>

<XAxis dataKey="t"/>

<YAxis/>

<Tooltip/>

<Line type="monotone" dataKey="value" stroke="#00ffa3"/>

</LineChart>

</div>

)

}
