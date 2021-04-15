import Card from './card/Card'
import React from 'react'
// import { data } from './FakeContent'
import './column.scss'
import Axios from 'axios';
import target from '../../../../helper/target';

function Column(props) {
    const {page, perPage} = props;
    const [data, setData] = React.useState([]);

    const getData = () => {
        Axios.get(`${target}/api/contents`,{
            params: {
                perPage,
                page,
            }
        }).then((res)=>{
            // console.log('making a new request')
            setData(res.data.payload)
        }).catch((err) => {
            console.log(err.response)
        })
    }


    React.useState(()=>{
        // console.log(`colmun ${page}`)
        // console.log(`${perPage} items on page ${page}`)
        
        getData();
    }, [])

    return (
        <div className="content-memes-column">
            {[...data].map((meme) => <Card key={meme._id} data={meme} />)}
        </div>
    )
}

export default Column
