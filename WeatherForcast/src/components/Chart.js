import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import React from 'react'
import _ from 'lodash'

const average = (data) => {
    return _.round(_.sum(data)/data.length);
};

const Chart = (props) => {
    return(
        <div>
            <Sparklines
                height={120}
                width={180}
                data={props.data}>

                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type={`avg`}/>
                <div>
                    {average(props.data) + ` ` + props.units}
                </div>
            </Sparklines>
        </div>
    )
};


export default Chart