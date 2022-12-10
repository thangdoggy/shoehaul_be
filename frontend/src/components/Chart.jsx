import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';
import Option from './Option';

const calculate_year_rev = (data) => {
    data[0].year_rev = 0;
    for(let i=1; i<data.length; i++)
    {
        data[i].year_rev = data[i - 1].year_rev;
        data[i].year_rev += data[i].month_rev;
    }
}
const data = [
    {name: 'Jan', month_rev: 10, year_rev:''},
    {name: 'Feb', month_rev: 20, year_rev:''},
    {name: 'Mar', month_rev: 30, year_rev:''},
    {name: 'Apr', month_rev: 10, year_rev:''},
    {name: 'May', month_rev: 70, year_rev:''},
    {name: 'Jun', month_rev: 11, year_rev:''},
    {name: 'Jul', month_rev: 25, year_rev:''},
    {name: 'Aug', month_rev: 10, year_rev:''},
    {name: 'Sep', month_rev: 30, year_rev:''},
    {name: 'Oct', month_rev: 14, year_rev:''},
    {name: 'Nov', month_rev: 70, year_rev:''},
    {name: 'Dec', month_rev: 60, year_rev:''},
];
calculate_year_rev(data);

function Chart(props) {
    return (
        <div>
            <Option/>
            <ResponsiveContainer width="80%" aspect={2/0.8} className="flex mx-auto">
                <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                >
                <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Area dataKey="year_rev" fill="#FBEAAB" name="Total Revenue in this year"/>
                <Bar dataKey="month_rev" barSize={20} fill="lightgreen" name="Monthly Revenue"/>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;