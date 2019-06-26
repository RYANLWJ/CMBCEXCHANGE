import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
export default class Exchange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content:[],
            date:''
        }
    };
    componentDidMount(){
        this.getContent();
        let _this=this
        // const timmer = setInterval(()=>{
        //     _this.getContent()
        // },20000)
    }
    async getContent(){
        const res = await axios.get('/getfxrate')
        this.setState({
            content:res.data.data,
            date:res.data.ctime
        })
        console.log(res)
    }
    render() {
        return (<div>
            <Header/>
            <div className="mobile-body" style={{ minHheight: '434px' }}>
                <h1>外汇实时汇率</h1>
                <div className="ui-list rate-list">
                    <div className="ui-list-bar">
                        <div className="rate-list-time">{this.state.date}</div>
                        <div className="arrow-fresh icon-arrow"></div>
                    </div>
                <hr />
                <div className="list-double-head">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td className="col-4">类别</td>
                                <td className="col-5 text-right">卖出价</td>
                                <td className="col-4 text-right pdl-15">现汇买入价</td>
                                <td className="col-width-30 text-right pdl-10 ">
                                    <div className="adjust-right">现钞买入价</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className="ui-list-body">
                    {
                        this.state.content.map((item,index)=>{
                            return(   <a href="FxRealrateDetail.aspx?name=%u6E2F%u5E01"
                            className="static box-flex free-item free-item-border" key={index}>
                            <div className="col-4">{item.ZCcyNbr}</div>
                            <div className="col-5 text-right">{item.ZRtcOfr}</div>
                            <div className="col-4 text-right">{item.ZRthBid}</div>
                            <div className="col-width-30  text-right">
                                <div className="inline-block">{item.ZRtcBid}</div>
                                <div className="inline-block arrow-right"></div>
                            </div>
                        </a>)
                        })
                    }
                 
                </div>
             </div>
             </div>
             </div>
                )
             }
}